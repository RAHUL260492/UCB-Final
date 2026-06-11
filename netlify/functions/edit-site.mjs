// AI chat editor backend.
//
// An invited team member logs in at /admin (Netlify Identity), picks a file,
// types a plain-English change, and optionally attaches images / a PDF / a DOCX.
// This function verifies the login, optionally commits uploaded images into the
// repo, asks Claude for the edit (with the attachments as context), applies the
// edit, and commits to `main` — Netlify then auto-deploys.
//
// Required Netlify env vars (Site configuration → Environment):
//   ANTHROPIC_API_KEY  — Claude API key (billed per edit)
//   GITHUB_TOKEN       — fine-grained PAT, "Contents: Read and write" on the repo
//   GITHUB_REPO        — "owner/name", e.g. "RAHUL260492/UCB-Final"
//   GITHUB_BRANCH      — optional, defaults to "main"
//   ANTHROPIC_MODEL    — optional, defaults to claude-opus-4-8
//
// Raw fetch (not @anthropic-ai/sdk) is intentional: adding an unpinned dep to
// the site's package.json could break the production build, and a Netlify
// Function is a standalone Node runtime.

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const GITHUB_API = 'https://api.github.com';
const IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

const json = (statusCode, obj) => ({ statusCode, headers: { 'content-type': 'application/json' }, body: JSON.stringify(obj) });
const ghPath = (p) => encodeURIComponent(p).replace(/%2F/g, '/');

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const user = context.clientContext && context.clientContext.user;
  if (!user) return json(401, { error: 'You must be logged in to edit the site.' });

  const { ANTHROPIC_API_KEY, GITHUB_TOKEN, GITHUB_REPO } = process.env;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const model = process.env.ANTHROPIC_MODEL || 'claude-opus-4-8';
  if (!ANTHROPIC_API_KEY || !GITHUB_TOKEN || !GITHUB_REPO) {
    return json(500, { error: 'Server not configured (ANTHROPIC_API_KEY / GITHUB_TOKEN / GITHUB_REPO).' });
  }

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return json(400, { error: 'Invalid request body.' }); }
  const file = (body.file || '').trim().replace(/^\/+/, '');
  const instruction = (body.instruction || '').trim();
  const context_text = (body.context || '').trim(); // extracted DOCX text from the client
  const attachments = Array.isArray(body.attachments) ? body.attachments.slice(0, 6) : [];
  if (file.includes('..')) return json(400, { error: 'Invalid file path.' });
  if (!instruction && attachments.length === 0) return json(400, { error: 'Describe a change or attach a file.' });

  const gh = (path, init = {}) => fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'urban-college-admin', ...(init.headers || {}) },
  });
  const author = user.email || 'a team member';

  try {
    // 1) Commit any uploaded images into the repo so they can be referenced.
    const uploaded = [];
    for (const a of attachments) {
      if (!a || !a.dataBase64 || !IMAGE_TYPES.includes(a.mediaType)) continue;
      const safe = (a.name || 'image').replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-').toLowerCase();
      const repoPath = `public/assets/images/uploads/${safe}`;
      const publicPath = `/assets/images/uploads/${safe}`;
      let sha;
      const head = await gh(`contents/${ghPath(repoPath)}?ref=${encodeURIComponent(branch)}`);
      if (head.ok) { const j = await head.json(); sha = j.sha; }
      const put = await gh(`contents/${ghPath(repoPath)}`, {
        method: 'PUT',
        body: JSON.stringify({ message: `content(admin): upload image ${safe}\n\nUploaded via /admin by ${author}.`, content: a.dataBase64, branch, ...(sha ? { sha } : {}) }),
      });
      if (put.ok) uploaded.push({ name: safe, publicPath });
    }

    // If there's no edit instruction, we're done after uploading.
    if (!instruction) {
      return json(200, {
        summary: `Uploaded ${uploaded.length} image(s).`,
        uploaded,
        message: uploaded.length ? `Uploaded: ${uploaded.map((u) => u.publicPath).join(', ')}. The site will rebuild shortly.` : 'Nothing to upload.',
      });
    }
    if (!file) return json(400, { error: 'Choose a file to edit.' });

    // 2) Read the target file.
    const getRes = await gh(`contents/${ghPath(file)}?ref=${encodeURIComponent(branch)}`);
    if (getRes.status === 404) return json(404, { error: `File not found: ${file}` });
    if (!getRes.ok) return json(502, { error: `Could not read ${file} (${getRes.status}).` });
    const fileData = await getRes.json();
    const original = Buffer.from(fileData.content || '', 'base64').toString('utf8');

    // 3) Build the Claude request (text + image/pdf blocks as context).
    let promptText = `FILE: ${file}\n\n<file>\n${original}\n</file>\n\nCHANGE REQUEST:\n${instruction}`;
    if (context_text) promptText += `\n\nREFERENCE DOCUMENT (extracted text):\n${context_text.slice(0, 40000)}`;
    if (uploaded.length) promptText += `\n\nUPLOADED IMAGES (already committed; reference by these public paths when relevant):\n${uploaded.map((u) => u.publicPath).join('\n')}`;

    const content = [{ type: 'text', text: promptText }];
    for (const a of attachments) {
      if (!a || !a.dataBase64) continue;
      if (IMAGE_TYPES.includes(a.mediaType)) content.push({ type: 'image', source: { type: 'base64', media_type: a.mediaType, data: a.dataBase64 } });
      else if (a.mediaType === 'application/pdf') content.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: a.dataBase64 } });
    }

    const system = [
      "You are a careful website code editor for Urban College of Boston's React + Vite (TypeScript) site.",
      'You are given the FULL current contents of ONE file and a plain-English change request, sometimes with reference images, a PDF, or document text.',
      'Return ONLY a JSON object (no prose, no markdown fences):',
      '{"summary": "<one sentence>", "edits": [{"find": "<exact substring from the file>", "replace": "<replacement>"}]}',
      'Rules:',
      '- "find" MUST be an exact, verbatim substring of the file, long enough to be unique.',
      '- Make the smallest change that satisfies the request; never reformat or touch unrelated code.',
      '- To use an uploaded image, set the relevant src/href to its public path.',
      '- If the change cannot be done safely in this file, return an empty edits array with the reason in summary.',
    ].join('\n');

    const aiRes = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: { 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model, max_tokens: 8000, thinking: { type: 'adaptive' }, output_config: { effort: 'medium' }, system, messages: [{ role: 'user', content }] }),
    });
    if (!aiRes.ok) { const d = await aiRes.text().catch(() => ''); return json(502, { error: `Claude API error (${aiRes.status}).`, detail: d.slice(0, 400), uploaded }); }
    const ai = await aiRes.json();
    if (ai.stop_reason === 'refusal') return json(422, { error: 'The model declined this request. Try rephrasing.', uploaded });

    const text = (ai.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
    let plan;
    try { plan = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1)); } catch { return json(502, { error: 'Could not parse the edit. Try again or rephrase.', uploaded }); }
    const edits = Array.isArray(plan.edits) ? plan.edits : [];
    const summary = plan.summary || 'Site edit';
    if (!edits.length) return json(422, { error: summary, noChange: true, uploaded });

    // 4) Apply edits.
    let updated = original;
    for (const e of edits) {
      if (typeof e.find !== 'string' || typeof e.replace !== 'string') return json(422, { error: 'Malformed edit from the model. Rephrase.', uploaded });
      if (!updated.includes(e.find)) return json(422, { error: 'The proposed change no longer matches the file. Be more specific or try again.', uploaded });
      updated = updated.replace(e.find, e.replace);
    }
    if (updated === original) return json(422, { error: 'That produced no change.', noChange: true, uploaded });

    // 5) Commit.
    const putRes = await gh(`contents/${ghPath(file)}`, {
      method: 'PUT',
      body: JSON.stringify({ message: `content(admin): ${summary}\n\nEdited via /admin by ${author}.`, content: Buffer.from(updated, 'utf8').toString('base64'), sha: fileData.sha, branch }),
    });
    if (!putRes.ok) { const d = await putRes.text().catch(() => ''); return json(502, { error: `Could not commit (${putRes.status}).`, detail: d.slice(0, 400), uploaded }); }
    const commit = await putRes.json();

    return json(200, { summary, file, uploaded, commitUrl: commit.commit && commit.commit.html_url, message: `Saved. "${summary}" — live in ~1–2 minutes.` });
  } catch (err) {
    return json(500, { error: 'Unexpected error.', detail: String((err && err.message) || err).slice(0, 300) });
  }
};
