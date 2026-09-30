// Measures WCAG 2.x contrast for the token pairs the components actually use. Writes docs/_contrast.json (consumed by docs generator).
import fs from 'node:fs';
const t = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));
const flat = {}; (function w(n, p) { for (const [k, v] of Object.entries(n)) { if (k[0] === '$') continue; if (v && typeof v === 'object' && '$value' in v) flat[[...p, k].join('.')] = v.$value; else if (v && typeof v === 'object') w(v, [...p, k]); } })(t, []);
const res = (v) => { const m = typeof v === 'string' && v.match(/^\{(.+)\}$/); return m ? res(flat[m[1]]) : v; };
const role = (mode, k) => res(mode === 'dark' && flat['color.dark.' + k] ? flat['color.dark.' + k] : flat['color.light.' + k]);
const fixed = (k) => res(flat['color.fixed.' + k]);
const lum = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }).reduce((a, c, i) => a + c * [0.2126, 0.7152, 0.0722][i], 0); };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const mix = (a, b, p) => { const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16); const ch = (s) => Math.round(((A >> s) & 255) * p + ((B >> s) & 255) * (1 - p)); return '#' + [16, 8, 0].map((s) => ch(s).toString(16).padStart(2, '0')).join(''); };
// [label, fg, bg, kind: text|large|ui, usage]
const pairs = (mode) => {
  const r = (k) => role(mode, k);
  const list = [
    ['on-surface / surface', r('on-surface'), r('surface'), 'text', 'Body text on page'],
    ['on-surface-variant / surface', r('on-surface-variant'), r('surface'), 'text', 'Lead paragraphs, hints, labels'],
    ['on-surface-variant / surface-container-lowest', r('on-surface-variant'), r('surface-container-lowest'), 'text', 'Captions on cards, sheet footer'],
    ['on-surface-variant / surface-container-low', r('on-surface-variant'), r('surface-container-low'), 'text', 'Text on Sample fortnight band'],
    ['on-surface / surface-container-lowest', r('on-surface'), r('surface-container-lowest'), 'text', 'Text on cards, form'],
    ['primary / surface', r('primary'), r('surface'), 'text', 'Links'],
    ['on-primary / primary', r('on-primary'), r('primary'), 'text', 'Filled button, chosen chip'],
    ['on-primary-muted / primary', r('on-primary-muted'), r('primary'), 'text', 'Stepper body on cobalt'],
    ['highlight-on-primary / primary', r('highlight-on-primary'), r('primary'), 'large', 'Step numerals on cobalt'],
    ['on-primary-container / primary-container', r('on-primary-container'), r('primary-container'), 'text', 'Info banner'],
    ['on-secondary-container / secondary-container', r('on-secondary-container'), r('secondary-container'), 'text', 'Success banner'],
    ['tertiary / surface', r('tertiary'), r('surface'), 'text', 'Mono kickers, margin notes, drawer numbers'],
    ['tertiary / surface-container-lowest', r('tertiary'), r('surface-container-lowest'), 'text', 'Sheet kicker, day date'],
    ['on-tertiary / tertiary', r('on-tertiary'), r('tertiary'), 'text', 'Accent button'],
    ['on-tertiary-container / tertiary-container', r('on-tertiary-container'), r('tertiary-container'), 'text', 'Banner, care list, people band'],
    ['tertiary / tertiary-container', r('tertiary'), r('tertiary-container'), 'ui', 'Banner icon, dashed border'],
    ['on-sun / sun', r('on-sun'), r('sun'), 'text', 'Tonal button, FAB'],
    ['on-sun-container / sun-container', r('on-sun-container'), r('sun-container'), 'text', 'Selected tab, match day, leg panel'],
    ['tertiary / sun-container', r('tertiary'), r('sun-container'), 'text', 'Boarding-pass kicker'],
    ['on-surface / sun-container', r('on-surface'), r('sun-container'), 'text', 'Headline on form band'],
    ['error / surface', r('error'), r('surface'), 'text', 'Field error text'],
    ['error / surface-container-lowest', r('error'), r('surface-container-lowest'), 'text', 'Field error text inside form card'],
    ['on-error / error', r('on-error'), r('error'), 'text', '"!" badge'],
    ['on-error-container / error-container', r('on-error-container'), r('error-container'), 'text', 'Error banner'],
    ['outline / surface', r('outline'), r('surface'), 'ui', 'Card outline, input borders (3:1 needed)'],
    ['white (#fff) / inverse-surface (SITE: .section--cost .headline)', '#ffffff', r('inverse-surface'), 'large', 'Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream'],
    ['on-surface / surface (border)', r('on-surface'), r('surface'), 'ui', 'Field underline, button border'],
    ['outline-variant / surface', r('outline-variant'), r('surface'), 'ui', 'DECORATIVE ONLY: dashed dividers, map dots'],
    ['inverse-on-surface / inverse-surface', r('inverse-on-surface'), r('inverse-surface'), 'text', 'Cost band'],
    ...(mode === 'light' ? [['sun / inverse-surface', r('sun'), r('inverse-surface'), 'large', 'Section numeral on ink']] : [['sun / inverse-surface (SITE BUG in dark)', r('sun'), r('inverse-surface'), 'large', 'Site keeps a sun numeral + #fff headline on the Cost band; in dark the band turns cream (inverse-surface), so both fail. DS receipt/inverse panels use fixed ink instead.']]),
    mode === 'dark' ? ['sun / surface (focus ring)', r('sun'), r('surface'), 'ui', 'Focus ring, dark theme'] : ['primary / surface (focus ring)', r('primary'), r('surface'), 'ui', 'Focus ring, light theme'],
    ['sun / primary (focus ring on cobalt panel)', r('sun'), mode === 'dark' ? r('primary-container') : r('primary'), 'ui', 'Focus ring on cobalt sections (light) / primary-container (dark)'],
    ['on-surface (disabled 38%) / surface', mix(r('on-surface'), r('surface'), 0.38), r('surface'), 'exempt', 'Disabled controls are exempt from 1.4.3'],
  ];
  if (mode === 'light') list.push(
    ['receipt-ink / receipt-paper', fixed('receipt-ink'), fixed('receipt-paper'), 'text', 'Receipt body'],
    ['receipt-muted / receipt-paper', fixed('receipt-muted'), fixed('receipt-paper'), 'text', 'Receipt kicker/foot'],
    ['receipt-accent / receipt-paper', fixed('receipt-accent'), fixed('receipt-paper'), 'text', 'Receipt sub line'],
    ['footer-on / footer-bg', fixed('footer-on'), fixed('footer-bg'), 'text', 'Footer body'],
    ['footer-body / footer-bg', fixed('footer-body'), fixed('footer-bg'), 'text', 'Disclaimer, credits'],
    ['footer-muted / footer-bg', fixed('footer-muted'), fixed('footer-bg'), 'text', 'Credits note'],
    ['footer-fine / footer-bg', fixed('footer-fine'), fixed('footer-bg'), 'text', 'Fine print'],
    ['footer-accent / footer-bg', fixed('footer-accent'), fixed('footer-bg'), 'text', 'Footer tag'],
    ['footer-link / footer-bg', fixed('footer-link'), fixed('footer-bg'), 'text', 'Footer links'],
    ['paper / cobalt (site: primary-container on primary)', r('primary-container'), r('primary'), 'text', 'Site stepper body colour (for reference)'],
  );
  if (mode === 'dark') list.push(['site: primary-container on primary (dark, for reference)', r('primary-container'), r('primary'), 'text', 'What the site does in dark for stepper body: fails, DS uses on-primary-muted']);
  return list;
};
const out = {};
for (const mode of ['light', 'dark']) {
  out[mode] = pairs(mode).map(([label, fg, bg, kind, usage]) => { const cr = ratio(fg, bg); const need = kind === 'text' ? 4.5 : 3; return { label, fg, bg, kind, usage, ratio: +cr.toFixed(2), need: kind === 'exempt' ? null : need, pass: kind === 'exempt' ? null : cr >= need, aaa: kind === 'text' ? cr >= 7 : null }; });
}
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/_contrast.json', JSON.stringify(out, null, 2));
for (const m of ['light', 'dark']) { const f = out[m].filter((x) => x.pass === false); console.log(m, out[m].length, 'pairs;', f.length, 'below target'); f.forEach((x) => console.log('  FAIL', x.label, x.ratio, 'need', x.need, '-', x.usage)); }
