// Helpers shared by stories.
export const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
export const attr = (o) => Object.entries(o).filter(([, v]) => v !== false && v != null).map(([k, v]) => v === true ? k : `${k}="${String(v).replace(/"/g, '&quot;')}"`).join(' ');
export const row = (items, gap = 16) => `<div class="sb-row" style="display:flex;flex-wrap:wrap;gap:${gap}px 24px;align-items:center">${items.join('')}</div>`;
export const labelled = (label, html) => `<div class="sb-cell" style="display:grid;gap:8px;justify-items:start"><span class="mono" style="color:var(--md-sys-color-on-surface-variant)">${label}</span>${html}</div>`;
export const grid = (cells, min = 260) => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,${min}px),1fr));gap:28px 24px;align-items:start">${cells.join('')}</div>`;
let n = 0; export const uid = (p = 'r') => `${p}-${++n}-${Math.random().toString(36).slice(2, 6)}`;
