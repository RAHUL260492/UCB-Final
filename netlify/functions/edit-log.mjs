// Change log for the /admin editor.
// Returns recent edits made through the editor (commits tagged "content(admin):"),
// so the admin UI can show who changed what and when. Gated by Netlify Identity.

const GITHUB_API = 'https://api.github.com';
const json = (statusCode, obj) => ({ statusCode, headers: { 'content-type': 'application/json' }, body: JSON.stringify(obj) });

export const handler = async (event, context) => {
  const user = context.clientContext && context.clientContext.user;
  if (!user) return json(401, { error: 'Not authorized.' });

  const { GITHUB_TOKEN, GITHUB_REPO } = process.env;
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!GITHUB_TOKEN || !GITHUB_REPO) return json(500, { error: 'Server not configured.' });

  try {
    const res = await fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/commits?sha=${encodeURIComponent(branch)}&per_page=40`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'urban-college-admin' },
    });
    if (!res.ok) return json(502, { error: `Could not load history (${res.status}).` });
    const commits = await res.json();

    const entries = [];
    for (const c of commits) {
      const msg = (c.commit && c.commit.message) || '';
      if (!msg.startsWith('content(admin):')) continue;
      const summary = msg.split('\n')[0].replace('content(admin):', '').trim();
      const who = (msg.match(/via \/admin by (.+?)\.?$/m) || [])[1] || (c.commit && c.commit.author && c.commit.author.name) || 'unknown';
      entries.push({
        summary,
        who,
        date: c.commit && c.commit.author && c.commit.author.date,
        url: c.html_url,
      });
    }
    return json(200, { entries });
  } catch (err) {
    return json(500, { error: 'Unexpected error.', detail: String((err && err.message) || err).slice(0, 200) });
  }
};
