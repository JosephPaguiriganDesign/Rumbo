// Delegated behaviours: one set of document-level listeners drives every Rumbo widget on the page,
// so stories (and any server-rendered page) can re-render markup without re-binding.
// Logic mirrors /workspace/soccer-site/app.js (tabs, accordion, drawer, form errors).
let installed = false;
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

export function setInvalid(input, bad, message) {
  const wrap = input.closest('.tf'), err = wrap && wrap.querySelector('.tf__err');
  if (!wrap) return;
  wrap.classList.toggle('is-invalid', bad);
  input.setAttribute('aria-invalid', bad ? 'true' : 'false');
  if (err) { if (message) err.lastChild.textContent = message; err.hidden = !bad; }
}

function selectTab(tab, focus) {
  const list = tab.closest('[role="tablist"]'); if (!list) return;
  const root = list.parentElement, tabs = $$('[role="tab"]', list);
  tabs.forEach((b) => {
    const on = b === tab, p = root.querySelector('#' + CSS.escape(b.getAttribute('aria-controls')));
    b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
    if (!p) return;
    if (on) { p.hidden = false; p.classList.remove('is-entering'); void p.offsetWidth; p.classList.add('is-entering'); } else p.hidden = true;
  });
  if (focus) tab.focus();
}

function setDrawer(drawer, open) {
  const scrim = drawer.parentElement.querySelector('.scrim'), contained = drawer.closest('.sb-frame');
  drawer.classList.toggle('is-open', open);
  if (!contained) document.body.classList.toggle('drawer-open', open);
  document.querySelectorAll(`[aria-controls="${drawer.id}"]`).forEach((b) => b.hasAttribute('aria-expanded') && b.setAttribute('aria-expanded', open));
  if (open) { if (scrim) { scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add('is-open')); } drawer.removeAttribute('inert'); (drawer.querySelector('[data-drawer-close]') || drawer).focus(); drawer._opener = document.activeElement && null; }
  else { if (scrim) { scrim.classList.remove('is-open'); setTimeout(() => { if (!drawer.classList.contains('is-open')) scrim.hidden = true; }, 300); } drawer.setAttribute('inert', ''); const back = drawer._opener || document.querySelector(`[data-drawer-open="${drawer.id}"]`); if (back && drawer.contains(document.activeElement)) back.focus(); }
}

export function initRumbo(doc = document) {
  if (installed) return; installed = true;
  doc.documentElement.classList.add('js');
  doc.addEventListener('click', (e) => {
    const t = e.target;
    const tab = t.closest('[role="tab"]'); if (tab && tab.closest('.folder-tabs')) { selectTab(tab); return; }
    const acc = t.closest('.acc__btn');
    if (acc && !acc.disabled) {
      const open = acc.getAttribute('aria-expanded') === 'true', root = acc.closest('.accordion');
      if (root && root.dataset.single !== undefined && !open) $$('.acc__btn', root).forEach((b) => b.setAttribute('aria-expanded', 'false'));
      acc.setAttribute('aria-expanded', open ? 'false' : 'true'); return;
    }
    const opener = t.closest('[data-drawer-open]');
    if (opener) { const d = doc.getElementById(opener.dataset.drawerOpen); if (d) { d._opener = opener; setDrawer(d, true); } return; }
    if (t.closest('[data-drawer-close]') || t.classList.contains('scrim')) { const d = (t.closest('.drawer') || t.parentElement.querySelector('.drawer')); if (d) setDrawer(d, false); return; }
    if (t.closest('.drawer a') && !t.closest('[data-keep-open]')) { const d = t.closest('.drawer'); setDrawer(d, false); return; }
    const x = t.closest('.banner__close'); if (x) { x.closest('.banner').hidden = true; return; }
  });
  doc.addEventListener('keydown', (e) => {
    const tab = e.target.closest && e.target.closest('[role="tab"]');
    if (tab && tab.closest('.folder-tabs')) {
      const tabs = $$('[role="tab"]', tab.closest('[role="tablist"]')), i = tabs.indexOf(tab); let n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') n = tabs[0]; else if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); selectTab(n, true); }
      return;
    }
    const acc = e.target.closest && e.target.closest('.acc__btn');
    if (acc) {
      const all = $$('.acc__btn:not(:disabled)', acc.closest('.accordion')), i = all.indexOf(acc); let n = null;
      if (e.key === 'ArrowDown') n = all[(i + 1) % all.length]; else if (e.key === 'ArrowUp') n = all[(i - 1 + all.length) % all.length];
      else if (e.key === 'Home') n = all[0]; else if (e.key === 'End') n = all[all.length - 1];
      if (n) { e.preventDefault(); n.focus(); }
      return;
    }
    const d = $$('.drawer.is-open')[0];
    if (d) {
      if (e.key === 'Escape') { setDrawer(d, false); return; }
      if (e.key === 'Tab') { const f = $$('a,button', d), first = f[0], last = f[f.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
    }
  });
  // forms: clear error as soon as the value becomes valid; validate on submit; focus first bad field
  doc.addEventListener('input', (e) => { const i = e.target; if (i.matches && i.matches('.tf__input[required]') && i.validity.valid) setInvalid(i, false); });
  doc.addEventListener('submit', (e) => {
    const f = e.target; if (!f.matches('[data-rumbo-form]')) return;
    e.preventDefault(); let first = null;
    $$('.tf__input[required]', f).forEach((i) => { const bad = !i.validity.valid; setInvalid(i, bad); if (bad && !first) first = i; });
    const status = f.querySelector('[role="status"][data-form-status]');
    if (first) { first.focus(); if (status) status.textContent = 'Something needs another look. The first field is highlighted.'; return; }
    if (status) status.textContent = 'Thanks. Nothing was sent, because this is a demo form.';
  });
}
