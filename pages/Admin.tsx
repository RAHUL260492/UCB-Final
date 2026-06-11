import React, { useEffect, useRef, useState } from 'react';
import { Lock, Send, LogOut, ExternalLink, Loader2, Paperclip, X, History, FileText, Image as ImageIcon, RefreshCw, Undo2, Sparkles } from 'lucide-react';

// Hyberx Editor — invite-only AI content editor (created by Hyberx).
//   Left  — chat: describe a change (and optionally attach images / PDF / DOCX);
//           /.netlify/functions/edit-site asks Claude for the edit and commits it.
//   Right — change log: who changed what and when (from the repo commit history).
// Auto-logout after 1 hour of inactivity. Setup: see ADMIN-SETUP.md.

const SUGGESTED_FILES = [
  'pages/Home.tsx', 'pages/About.tsx', 'pages/Mission.tsx', 'pages/President.tsx',
  'pages/Trustees.tsx', 'pages/Foundation.tsx', 'pages/Donate.tsx', 'pages/AdmissionsOverview.tsx',
  'pages/FinancialServices.tsx', 'pages/TuitionPaymentOptions.tsx', 'pages/StudentServices.tsx',
  'pages/Team.tsx', 'pages/Accreditation.tsx', 'pages/Workforce.tsx', 'pages/Employment.tsx',
  'components/Navigation.tsx', 'components/Footer.tsx', 'src/data/blogs.json',
];
const CHAT_KEY = 'hyberx-editor-chat';
const MAX_BYTES = 4 * 1024 * 1024;
const IDLE_MS = 60 * 60 * 1000; // 1 hour

type Msg = { role: 'user' | 'assistant'; text: string; file?: string; files?: string[]; commitUrl?: string; error?: boolean };

const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const r = new FileReader();
  r.onload = () => resolve(String(r.result).split(',')[1] || '');
  r.onerror = reject;
  r.readAsDataURL(file);
});

const loadMammoth = () => new Promise<void>((resolve, reject) => {
  if ((window as any).mammoth) return resolve();
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/mammoth/mammoth.browser.min.js';
  s.onload = () => resolve();
  s.onerror = () => reject(new Error('Could not load the DOCX reader.'));
  document.body.appendChild(s);
});

const Admin: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [notice, setNotice] = useState('');
  const [file, setFile] = useState('pages/About.tsx');
  const [instruction, setInstruction] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [log, setLog] = useState<any[]>([]);
  const [logLoading, setLogLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Hyberx Editor';
    try { const saved = localStorage.getItem(CHAT_KEY); if (saved) setMessages(JSON.parse(saved)); } catch { /* ignore */ }
    const w = window as any;
    const init = () => {
      const id = w.netlifyIdentity; if (!id) return;
      id.on('init', (u: any) => { setUser(u); setReady(true); if (u) loadLog(); });
      id.on('login', (u: any) => { setUser(u); setNotice(''); id.close(); loadLog(); });
      id.on('logout', () => setUser(null));
      id.init();
    };
    if (w.netlifyIdentity) { init(); return; }
    const s = document.createElement('script');
    s.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
    s.async = true; s.onload = init; document.body.appendChild(s);
  }, []);

  // Auto-logout after 1 hour of inactivity
  useEffect(() => {
    if (!user) return;
    let timer: any;
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setNotice('You were signed out after 1 hour of inactivity.');
        (window as any).netlifyIdentity?.logout();
      }, IDLE_MS);
    };
    const evts = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    evts.forEach((e) => window.addEventListener(e, reset, { passive: true } as any));
    reset();
    return () => { clearTimeout(timer); evts.forEach((e) => window.removeEventListener(e, reset)); };
  }, [user]);

  useEffect(() => { try { localStorage.setItem(CHAT_KEY, JSON.stringify(messages.slice(-50))); } catch { /* ignore */ } }, [messages]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, busy]);

  const login = () => (window as any).netlifyIdentity?.open('login');
  const logout = () => (window as any).netlifyIdentity?.logout();
  const token = async () => (window as any).netlifyIdentity.currentUser().jwt();

  const loadLog = async () => {
    setLogLoading(true);
    try {
      const res = await fetch('/.netlify/functions/edit-log', { headers: { Authorization: `Bearer ${await token()}` } });
      const data = await res.json();
      if (res.ok) setLog(data.entries || []);
    } catch { /* ignore */ } finally { setLogLoading(false); }
  };

  const undoLast = async () => {
    if (!window.confirm('Undo the most recent change made through this editor?')) return;
    setBusy(true);
    try {
      const res = await fetch('/.netlify/functions/undo-last', { method: 'POST', headers: { Authorization: `Bearer ${await token()}` } });
      const data = await res.json();
      if (!res.ok) setMessages((m) => [...m, { role: 'assistant', text: data.error || 'Could not undo.', error: true }]);
      else { setMessages((m) => [...m, { role: 'assistant', text: data.message || 'Reverted.' }]); loadLog(); }
    } catch (err: any) {
      setMessages((m) => [...m, { role: 'assistant', text: err?.message || 'Undo failed.', error: true }]);
    } finally { setBusy(false); }
  };

  const onPickFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || []);
    const ok = picked.filter((f) => f.size <= MAX_BYTES);
    if (ok.length < picked.length) alert('Some files were skipped (max 4MB each).');
    setAttachments((prev) => [...prev, ...ok].slice(0, 6));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instruction.trim() && attachments.length === 0) return;
    setBusy(true);
    setMessages((m) => [...m, { role: 'user', text: instruction.trim(), file, files: attachments.map((f) => f.name) }]);
    try {
      const apiAttachments: any[] = [];
      let context = '';
      for (const f of attachments) {
        if (f.type.startsWith('image/') || f.type === 'application/pdf') {
          apiAttachments.push({ name: f.name, mediaType: f.type, dataBase64: await toBase64(f) });
        } else if (f.name.toLowerCase().endsWith('.docx') || f.type.includes('wordprocessingml')) {
          try { await loadMammoth(); const ab = await f.arrayBuffer(); const r = await (window as any).mammoth.extractRawText({ arrayBuffer: ab }); context += `\n[${f.name}]\n${r.value}\n`; }
          catch { context += `\n[${f.name}: could not read]\n`; }
        }
      }
      const res = await fetch('/.netlify/functions/edit-site', {
        method: 'POST',
        headers: { 'content-type': 'application/json', Authorization: `Bearer ${await token()}` },
        body: JSON.stringify({ file: file.trim(), instruction: instruction.trim(), context, attachments: apiAttachments }),
      });
      const data = await res.json();
      if (!res.ok) setMessages((m) => [...m, { role: 'assistant', text: data.error || 'Something went wrong.', error: true }]);
      else { setMessages((m) => [...m, { role: 'assistant', text: data.message || data.summary || 'Done.', commitUrl: data.commitUrl }]); setInstruction(''); setAttachments([]); loadLog(); }
    } catch (err: any) {
      setMessages((m) => [...m, { role: 'assistant', text: err?.message || 'Request failed.', error: true }]);
    } finally { setBusy(false); }
  };

  const Brand = (
    <div className="flex items-center gap-2.5">
      <div className="p-2 bg-ucb-blue text-white rounded-xl shadow-sm"><Sparkles className="w-4 h-4" /></div>
      <div>
        <h1 className="text-lg font-display font-black text-gray-900 leading-none tracking-tight">Hyberx Editor</h1>
        <p className="text-[11px] text-gray-400 mt-1">Invite-only · changes go live in ~1–2 min</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 lg:pt-32 pb-10 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          {Brand}
          {user && (
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="hidden sm:inline">{user.email}</span>
              <button onClick={logout} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-ucb-orange hover:text-ucb-orange transition-colors"><LogOut className="w-3.5 h-3.5" /> Sign out</button>
            </div>
          )}
        </div>

        {!ready && <div className="text-center text-gray-400 text-sm flex items-center justify-center gap-2 py-24"><Loader2 className="w-4 h-4 animate-spin" /> Loading…</div>}

        {ready && !user && (
          <div className="max-w-sm mx-auto mt-10 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] p-10 text-center space-y-5">
            <div className="inline-flex p-3 bg-ucb-blue/10 text-ucb-blue rounded-2xl"><Lock className="w-6 h-6" /></div>
            <p className="text-gray-600 text-sm leading-relaxed">Sign in with your invited Urban College account to edit the site.</p>
            {notice && <p className="text-amber-600 text-xs bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">{notice}</p>}
            <button onClick={login} className="w-full bg-ucb-blue hover:bg-ucb-blue-glow text-white font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2"><Lock className="w-4 h-4" /> Sign In</button>
          </div>
        )}

        {ready && user && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Chat */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] flex flex-col h-[68vh] overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 px-6">
                    <div className="p-3 bg-gray-50 rounded-2xl mb-3"><Sparkles className="w-5 h-5 text-ucb-blue/50" /></div>
                    <p className="text-sm text-gray-500 font-medium">Describe a change to any page.</p>
                    <p className="text-xs mt-1.5 max-w-xs">e.g. "On pages/About.tsx, change the Our Vision paragraph to…" — attach an image, PDF, or DOCX for reference.</p>
                  </div>
                )}
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-ucb-blue text-white' : m.error ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-emerald-50 text-emerald-800 border border-emerald-100'}`}>
                      {m.role === 'user' && m.file && <div className="text-[10px] uppercase tracking-wider opacity-70 mb-0.5">{m.file}</div>}
                      <div className="whitespace-pre-wrap">{m.text || (m.files && m.files.length ? '(attachment only)' : '')}</div>
                      {m.files && m.files.length > 0 && <div className="text-[10px] opacity-70 mt-1">📎 {m.files.join(', ')}</div>}
                      {m.commitUrl && <a href={m.commitUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold mt-1 hover:underline">View change <ExternalLink className="w-3 h-3" /></a>}
                    </div>
                  </div>
                ))}
                {busy && <div className="flex justify-start"><div className="bg-gray-50 text-gray-500 rounded-2xl px-4 py-2.5 text-sm inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Working…</div></div>}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={submit} className="border-t border-gray-100 bg-gray-50/50 p-3 space-y-2">
                <input list="admin-files" value={file} onChange={(e) => setFile(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-ucb-blue/30" placeholder="pages/About.tsx" />
                <datalist id="admin-files">{SUGGESTED_FILES.map((f) => <option key={f} value={f} />)}</datalist>
                {attachments.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {attachments.map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-600 text-[11px] rounded-full pl-2 pr-1 py-0.5">
                        {f.type.startsWith('image/') ? <ImageIcon className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                        {f.name}
                        <button type="button" onClick={() => setAttachments((a) => a.filter((_, j) => j !== i))} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-end gap-2 bg-white border border-gray-200 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-ucb-blue/30">
                  <button type="button" onClick={() => fileInputRef.current?.click()} title="Attach image, PDF, or DOCX" className="p-2 text-gray-400 hover:text-ucb-blue transition-colors shrink-0"><Paperclip className="w-5 h-5" /></button>
                  <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={onPickFiles} className="hidden" />
                  <textarea value={instruction} onChange={(e) => setInstruction(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submit(e as any); }} rows={2} className="flex-1 bg-transparent px-1 py-1.5 text-sm resize-none focus:outline-none" placeholder="Describe the change…  (⌘/Ctrl+Enter to send)" />
                  <button type="submit" disabled={busy} className="bg-ucb-orange hover:bg-ucb-orange-glow disabled:opacity-50 text-white font-bold p-2.5 rounded-xl transition-colors shrink-0"><Send className="w-5 h-5" /></button>
                </div>
              </form>
            </div>

            {/* Change log */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)] flex flex-col h-[68vh] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <h2 className="font-display font-bold text-gray-900 text-sm inline-flex items-center gap-2"><History className="w-4 h-4 text-ucb-blue" /> Change Log</h2>
                <div className="flex items-center gap-3">
                  <button onClick={undoLast} disabled={busy} title="Undo the most recent editor change" className="text-[11px] font-semibold text-gray-500 hover:text-ucb-orange disabled:opacity-50 transition-colors inline-flex items-center gap-1"><Undo2 className="w-3.5 h-3.5" /> Undo last</button>
                  <button onClick={loadLog} title="Refresh" className="text-gray-400 hover:text-ucb-blue transition-colors"><RefreshCw className={`w-4 h-4 ${logLoading ? 'animate-spin' : ''}`} /></button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {log.length === 0 && !logLoading && <p className="text-gray-400 text-xs text-center py-12">No edits yet.</p>}
                {log.map((e, i) => (
                  <div key={i} className="border border-gray-100 hover:border-gray-200 rounded-xl p-3 text-xs transition-colors">
                    <p className="text-gray-800 leading-snug">{e.summary}</p>
                    <div className="flex items-center justify-between mt-1.5 text-[10px] text-gray-400">
                      <span className="truncate pr-2">{e.who}{e.date ? ` · ${new Date(e.date).toLocaleString()}` : ''}</span>
                      {e.url && <a href={e.url} target="_blank" rel="noopener noreferrer" className="text-ucb-orange hover:underline inline-flex items-center gap-0.5 shrink-0">view <ExternalLink className="w-2.5 h-2.5" /></a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-[11px] text-gray-400 mt-8">Created by <span className="font-semibold text-gray-500">Hyberx</span></p>
      </div>
    </div>
  );
};

export default Admin;
