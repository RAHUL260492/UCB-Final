// Build-time full-text search index.
// Extracts visible prose from every routed page (.tsx) plus full blog/news text,
// and writes public/search-index.json consumed by pages/Search.tsx.
//
// Run automatically before `vite build` (see package.json), or manually:
//   node scripts/build-search-index.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_DIR = path.join(ROOT, 'pages');
const APP_TSX = path.join(ROOT, 'App.tsx');
const BLOGS_JSON = path.join(ROOT, 'src/data/blogs.json');
const OUT = path.join(ROOT, 'public/search-index.json');

// ---- 1. Map page component -> route path from App.tsx ----------------------
const appSrc = fs.readFileSync(APP_TSX, 'utf8');
const componentToPath = {};
// <Route path="/x" element={<Component />} />  (skip <Navigate .../> redirects)
const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}/g;
let m;
while ((m = routeRe.exec(appSrc))) {
  const [, routePath, component] = m;
  if (routePath.includes(':') || routePath === '*') continue; // skip params/catch-all
  // keep the first (canonical) route for each component
  if (!componentToPath[component]) componentToPath[component] = routePath;
}

// ---- 2. Text extraction helpers --------------------------------------------
const TEXT_KEYS = '(?:title|subtitle|description|desc|bio|quote|tagline|label|name|role|heading|intro|outcomesIntro|pathwayDescription|achievementNote|achievementsIntro|q|a)';
const isProse = (s) => {
  const t = s.trim();
  if (t.length < 3) return false;
  if (!/[A-Za-z]/.test(t)) return false;
  if (/^https?:\/\//.test(t) || t.startsWith('/') || t.startsWith('#') || t.startsWith('mailto:') || t.startsWith('tel:')) return false;
  // tailwind / class-ish strings
  if (/(^|\s)(text-|bg-|border-|flex|grid|px-|py-|pt-|pb-|mt-|mb-|mx-|my-|gap-|rounded|font-|w-|h-|min-|max-|hover:|md:|lg:|xl:|sm:|2xl:|absolute|relative|inline-|justify-|items-|space-|shadow|opacity-|z-|leading-|tracking-|overflow-|transition|translate|scale-|from-|to-|via-)/.test(t) && !/[.!?,]/.test(t)) return false;
  if (/^#[0-9a-fA-F]{3,8}$/.test(t)) return false;
  return true;
};

function extractText(src) {
  // strip imports
  src = src.replace(/^\s*import[^\n]*\n/gm, '');
  // strip className / style attributes (the main source of class noise)
  src = src.replace(/className=("[^"]*"|\{`[^`]*`\}|\{[^}]*\})/g, ' ');
  src = src.replace(/style=\{\{[^}]*\}\}/g, ' ');
  // strip url/asset-ish attribute values
  src = src.replace(/\b(?:href|src|to|path|url|link|image|imageSrc|headerImageSrc|secondaryImageSrc|icon|variant|delay|canonicalPath)=("[^"]*"|\{[^}]*\})/g, ' ');

  const found = new Set();

  // (a) JSX static text nodes:  >  some text  <
  for (const mm of src.matchAll(/>\s*([^<>{}]+?)\s*</g)) {
    const t = mm[1].replace(/\s+/g, ' ').trim();
    if (isProse(t)) found.add(t);
  }
  // (b) text-bearing prop / object values:  key="..."  key: "..."  (+ ' and ` quotes)
  const keyVal = new RegExp(`${TEXT_KEYS}\\s*[:=]\\s*("([^"]+)"|'([^']+)'|\`([^\`]+)\`)`, 'g');
  for (const mm of src.matchAll(keyVal)) {
    const t = (mm[2] || mm[3] || mm[4] || '').replace(/\s+/g, ' ').trim();
    if (isProse(t)) found.add(t);
  }
  // (c) plain array-of-strings entries (e.g. items: ["...","..."]) — quoted strings on their own
  for (const mm of src.matchAll(/(?:^|[,\[]\s*)"([^"]{12,})"/gm)) {
    const t = mm[1].replace(/\s+/g, ' ').trim();
    if (isProse(t)) found.add(t);
  }
  return Array.from(found).join(' ');
}

function deriveTitle(src, routePath) {
  const m1 = src.match(/title="([^"]+)"/);
  if (m1 && !m1[1].includes('|')) return m1[1];
  const seg = routePath.split('/').filter(Boolean).pop() || 'Home';
  return seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---- 3. Build page entries --------------------------------------------------
const entries = [];
for (const file of fs.readdirSync(PAGES_DIR)) {
  if (!file.endsWith('.tsx')) continue;
  const component = file.replace(/\.tsx$/, '');
  const routePath = componentToPath[component];
  if (!routePath) continue; // not routed (or only via redirect)
  if (routePath === '/admin') continue; // internal editor — keep out of public search
  const src = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
  const text = extractText(src);
  if (!text) continue;
  entries.push({ type: 'page', title: deriveTitle(src, routePath), path: routePath, text });
}

// ---- 4. Build blog/news entries (full text from JSON) ----------------------
const stripHtml = (html) => (html || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
try {
  const blogs = JSON.parse(fs.readFileSync(BLOGS_JSON, 'utf8'));
  for (const b of blogs) {
    if (!b.slug) continue;
    const text = [stripHtml(b.description), stripHtml(b.content)].filter(Boolean).join(' ');
    entries.push({ type: 'post', title: b.title || b.slug, path: `/blog/${b.slug}`, text });
  }
} catch (e) {
  console.warn('search-index: could not read blogs.json:', e.message);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(entries));
const kb = (fs.statSync(OUT).size / 1024).toFixed(1);
console.log(`search-index: wrote ${entries.length} entries (${kb} KB) -> public/search-index.json`);
