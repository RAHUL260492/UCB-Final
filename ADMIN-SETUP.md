# `/admin` — AI Content Editor (setup & handoff)

Invited team members log in at **`/admin`**, describe a change in plain English
(optionally attaching an image, PDF, or DOCX), and the change is committed to the
live site automatically. The right‑hand panel shows a log of who changed what.

## How it works

```
/admin (React page, Netlify Identity login)
        │  user types a change + optional attachments
        ▼
/.netlify/functions/edit-site   ← verifies the login, calls Claude, commits to GitHub
        │                          (images are committed to public/assets/images/uploads/)
        ▼
GitHub commit on `main`  →  Netlify auto-deploys  →  change is live (~1–2 min)

/.netlify/functions/edit-log    ← reads recent "content(admin):" commits for the Change Log panel
```

- **Edits commit straight to `main` and go live** — there is no review step. A bad
  instruction can publish a mistake; revert via the commit link in the log or with git.
- Attachments: **images** are committed and can be referenced by the AI; **PDFs** are
  read natively by the AI; **DOCX** text is extracted in the browser and used as context.
- Backend uses raw `fetch` to the Claude Messages API (no SDK dependency, so it can't
  break the site build).

## One-time setup (Netlify dashboard)

1. **Enable Identity** (you already have it on): *Site configuration → Identity →
   Enable*. Set **Registration = Invite only**, then **Invite users** (their email).
2. **Environment variables** (*Site configuration → Environment variables*):
   | Key | Value |
   |---|---|
   | `ANTHROPIC_API_KEY` | Claude API key (billed per edit) |
   | `GITHUB_TOKEN` | Fine‑grained GitHub PAT with **Contents: Read and write** on the repo |
   | `GITHUB_REPO` | `owner/name` (e.g. `RAHUL260492/UCB-Final`) |
   | `GITHUB_BRANCH` | `main` (optional) |
   | `ANTHROPIC_MODEL` | optional override (defaults to `claude-opus-4-8`) |
3. **Deploy.** `netlify.toml` already points functions at `netlify/functions`, so
   `edit-site` and `edit-log` deploy automatically.

## GitHub token

Create at GitHub → *Settings → Developer settings → Fine‑grained tokens*:
- **Repository access:** only this repo.
- **Permissions:** *Contents → Read and write* (this is what lets the editor commit).
- Paste the token into the `GITHUB_TOKEN` env var above. Rotate it if it ever leaks.

## Notes / limits

- Function timeout: Netlify's free tier caps sync functions at 10s, Pro at 26s.
  An Opus edit can be slow; if you see timeouts, upgrade the plan, set
  `ANTHROPIC_MODEL=claude-sonnet-4-6` (faster), or lower the effort in
  `edit-site.mjs` (`output_config.effort`).
- Attachment cap: ~4 MB per file (Netlify sync‑function payload limit).
- Landing‑page text edits work because the AI edits the actual page files; very
  large structural changes are still best done by a developer.
