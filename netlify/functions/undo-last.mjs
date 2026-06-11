// "Undo last change" for the /admin editor.
// Reverts the most recent commit made through the editor (message starts with
// "content(admin):") by restoring each file it touched to its pre-commit state.
// Gated by Netlify Identity. Commits the revert to `main` (auto-deploys).

const GITHUB_API = 'https://api.github.com';
const json = (statusCode, obj) => ({ statusCode, headers: { 'content-type': 'application/json' }, body: JSON.stringify(obj) });
const ghPath = (p) => encodeURIComponent(p).replace(/%2F/g, '/');

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });
  const user = context.clientContext && context.clientContext.user;
  if (!user) return json(401, { error: 'You must be logged in.' });

  const { GITHUB_TOKEN, GITHUB_REPO } = process.env;
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!GITHUB_TOKEN || !GITHUB_REPO) return json(500, { error: 'Server not configured.' });

  const gh = (path, init = {}) => fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'urban-college-admin', ...(init.headers || {}) },
  });
  const author = user.email || 'a team member';

  try {
    // Most recent editor commit
    const listRes = await gh(`commits?sha=${encodeURIComponent(branch)}&per_page=40`);
    if (!listRes.ok) return json(502, { error: `Could not load history (${listRes.status}).` });
    const commits = await listRes.json();
    const target = commits.find((c) => ((c.commit && c.commit.message) || '').startsWith('content(admin):'));
    if (!target) return json(404, { error: 'No editor change found to undo.' });

    const summary = target.commit.message.split('\n')[0].replace('content(admin):', '').trim();
    const detail = await gh(`commits/${target.sha}`);
    if (!detail.ok) return json(502, { error: 'Could not load the change to undo.' });
    const c = await detail.json();
    const parent = c.parents && c.parents[0] && c.parents[0].sha;
    if (!parent) return json(422, { error: 'Cannot undo this change (no previous version).' });

    const message = `content(admin): revert "${summary}"\n\nReverted via /admin by ${author}.`;
    const reverted = [];

    for (const f of c.files || []) {
      const path = f.filename;
      if (f.status === 'added') {
        // File was created by the change → delete it
        const cur = await gh(`contents/${ghPath(path)}?ref=${encodeURIComponent(branch)}`);
        if (!cur.ok) continue;
        const cj = await cur.json();
        const del = await gh(`contents/${ghPath(path)}`, { method: 'DELETE', body: JSON.stringify({ message, sha: cj.sha, branch }) });
        if (del.ok) reverted.push(path);
      } else {
        // Modified / renamed / removed → restore the parent (pre-change) content
        const par = await gh(`contents/${ghPath(path)}?ref=${encodeURIComponent(parent)}`);
        if (!par.ok) continue;
        const pj = await par.json();
        let curSha;
        const cur = await gh(`contents/${ghPath(path)}?ref=${encodeURIComponent(branch)}`);
        if (cur.ok) { const cj = await cur.json(); curSha = cj.sha; }
        const put = await gh(`contents/${ghPath(path)}`, {
          method: 'PUT',
          body: JSON.stringify({ message, content: (pj.content || '').replace(/\n/g, ''), branch, ...(curSha ? { sha: curSha } : {}) }),
        });
        if (put.ok) reverted.push(path);
      }
    }

    if (!reverted.length) return json(422, { error: 'Nothing could be reverted.' });
    return json(200, { summary, reverted, message: `Reverted "${summary}". The site will rebuild in ~1–2 minutes.` });
  } catch (err) {
    return json(500, { error: 'Unexpected error.', detail: String((err && err.message) || err).slice(0, 200) });
  }
};
