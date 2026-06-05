// Opens the Element451 chat/agents widget that is installed site-wide via the
// shell451 loader in index.html (<script ... src="https://urbancollege.shell.451.io/" data-shell451>).
//
// The shell renders its own floating launcher once it finishes loading; this
// helper lets our own UI (the nav chat icon, CTA "Start Chat" buttons, etc.)
// trigger that same widget. It tries the known programmatic APIs first, then
// falls back to clicking the rendered launcher button.
export function openChat(): void {
  const w = window as any;

  // 1) Programmatic APIs exposed by Element451 builds
  try {
    if (w.Element451?.Messenger?.open) { w.Element451.Messenger.open(); return; }
    if (w.shell451?.open) { w.shell451.open(); return; }
    if (typeof w.shell451 === 'function') { w.shell451('open'); return; }
  } catch {
    /* fall through to the DOM fallback below */
  }

  // 2) Fallback: click the widget's rendered launcher button
  const launcher = document.querySelector(
    '[class*="shell451"] button, [class*="messenger"] button, [class*="launcher"] button, .el451-messenger-launcher, #el451-messenger-launcher'
  ) as HTMLElement | null;
  if (launcher) { launcher.click(); return; }

  // 3) Widget not ready yet — surface a hint for debugging
  console.warn('[chat] Element451 chat widget is not ready yet.');
}
