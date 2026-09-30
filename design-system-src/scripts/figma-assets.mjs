// Exports Figma-ready assets into figma-assets/:
//   svg/icons, svg/stamps, svg/graphics, svg/edges  (static hex colours, light theme, no CSS vars, no SVG filters: Figma ignores feTurbulence)
//   pages/site-*.png  page-level reference screenshots of the live site sections (1280 + 390)
import fs from 'node:fs'; import path from 'node:path';
import { chromium } from 'playwright-core';
import { edges } from '../src/lib/edges.js';
import { barcode } from '../src/lib/icons.js';
const out = path.resolve('figma-assets'); const mk = (d) => fs.mkdirSync(path.join(out, d), { recursive: true });
['svg/icons', 'svg/stamps', 'svg/graphics', 'svg/edges', 'pages'].forEach(mk);
const C = { ink: '#221d18', cobalt: '#1d3b9e', clay: '#a33f18', sun: '#f3c63d', paper: '#f4ecdb', paperLight: '#fbf6ea' };
const svg = (f, body) => fs.writeFileSync(path.join(out, f), body.trim() + '\n');
const X = 'xmlns="http://www.w3.org/2000/svg"';
/* icons: 24px grid, currentColor -> ink so Figma can recolour via fill/stroke variables */
const icons = {
  'arrow-forward': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path fill="${C.ink}" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
  'plus-scribble': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path d="M5 12h14M12 5v14" fill="none" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  'chevron-down': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path d="M6 9l6 6 6-6" fill="none" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'info': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path fill="${C.clay}" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
  'alert': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path fill="#ba1a1a" d="M12 2 1 21h22L12 2Zm0 4.2L19.5 19h-15L12 6.2ZM11 10h2v5h-2zm0 6h2v2h-2z"/></svg>`,
  'check': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="${C.cobalt}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'close': `<svg ${X} viewBox="0 0 24 24" width="24" height="24"><path d="M5 5l14 14M19 5L5 19" fill="none" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  'ledger-tick': `<svg ${X} viewBox="0 0 20 20" width="20" height="20"><path d="M3 11l4.5 4.5L17 5" fill="none" stroke="${C.cobalt}" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'ledger-cross': `<svg ${X} viewBox="0 0 20 20" width="20" height="20"><path d="M4 4l12 12M16 4L4 16" fill="none" stroke="${C.clay}" stroke-width="2.8" stroke-linecap="round"/></svg>`,
  'route-arrow': `<svg ${X} viewBox="0 0 60 16" width="60" height="16"><path d="M2 8h48M44 2l8 6-8 6" fill="none" stroke="${C.ink}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  'menu-lines': `<svg ${X} viewBox="0 0 20 14" width="20" height="14"><g fill="${C.ink}"><rect y="0" width="20" height="2.5" rx="1.25"/><rect x="6" y="5.75" width="14" height="2.5" rx="1.25"/><rect y="11.5" width="20" height="2.5" rx="1.25"/></g></svg>`,
  'brand-mark': `<svg ${X} viewBox="0 0 40 40" width="40" height="40"><g fill="none" stroke="${C.cobalt}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4.5c8.6-.3 15.4 6 15.6 14.8.2 8.6-6.4 15.6-15 15.9-8.9.3-16.1-6-16.2-14.7C4.3 11.7 10.9 4.8 20 4.5Z"/><path d="M11 29 28 12M17 11.5h11.5V23"/></g><circle cx="11" cy="29" r="2.6" fill="${C.clay}"/></svg>`,
};
for (const [n, b] of Object.entries(icons)) svg(`svg/icons/${n}.svg`, b);
/* stamps: text kept as <text> (install Fraunces + DM Mono in Figma) */
const stampRound = (c) => `<svg ${X} viewBox="0 0 140 140" width="140" height="140"><g fill="none" stroke="${c}" color="${c}"><circle cx="70" cy="70" r="65" stroke-width="3.5"/><circle cx="70" cy="70" r="51" stroke-width="1.6"/><path id="stampcircle" d="M70 70m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" stroke="none"/><text font-family="DM Mono, monospace" font-size="11.5" font-weight="500" letter-spacing="2.4" fill="${c}" stroke="none"><textPath href="#stampcircle">RUMBO · SUMMER 2027 · IBERIA · </textPath></text><text x="70" y="66" text-anchor="middle" font-family="Fraunces, serif" font-weight="800" font-size="27" fill="${c}" stroke="none">SALIDA</text><text x="70" y="87" text-anchor="middle" font-family="DM Mono, monospace" font-size="11" letter-spacing="2" fill="${c}" stroke="none">11 · VII · 27</text></g></svg>`;
svg('svg/stamps/stamp-salida-clay.svg', stampRound(C.clay));
svg('svg/stamps/stamp-salida-cobalt.svg', stampRound(C.cobalt));
svg('svg/stamps/stamp-draft-clay.svg', `<svg ${X} viewBox="0 0 200 64" width="200" height="64"><g fill="none" stroke="${C.clay}"><rect x="4" y="4" width="192" height="56" rx="6" stroke-width="3.5"/><text x="100" y="31" text-anchor="middle" font-family="Fraunces, serif" font-weight="800" font-size="24" letter-spacing="3" fill="${C.clay}" stroke="none">DRAFT</text><text x="100" y="50" text-anchor="middle" font-family="DM Mono, monospace" font-size="10.5" letter-spacing="1.6" fill="${C.clay}" stroke="none">SUBJECT TO CHANGE</text></g></svg>`);
/* graphics */
svg('svg/graphics/barcode-stub.svg', `<svg ${X} viewBox="0 0 130 40" width="130" height="40" fill="${C.ink}">${barcode}</svg>`);
svg('svg/graphics/azulejo-tile.svg', `<svg ${X} viewBox="0 0 40 40" width="40" height="40" color="${C.cobalt}"><path d="M20 2 38 20 20 38 2 20Z" fill="none" stroke="${C.cobalt}" stroke-width="1.6"/><path d="M20 11 29 20 20 29 11 20Z" fill="${C.cobalt}" opacity=".55"/><circle cx="20" cy="20" r="2.2" fill="${C.paper}"/><path d="M0 0 6 0 0 6ZM40 0 34 0 40 6ZM0 40 6 40 0 34ZM40 40 34 40 40 34Z" fill="${C.cobalt}"/></svg>`);
svg('svg/graphics/tape-yellow.svg', `<svg ${X} viewBox="0 0 72 22" width="72" height="22"><path d="M0 1.8 2.9 0 5.8 2.2 8.6 0H63.4L66.2 2.2 69.1 0 72 1.8V20.2L69.1 22 66.2 19.8 63.4 22H8.6L5.8 19.8 2.9 22 0 20.2Z" fill="${C.sun}" fill-opacity=".82" stroke="${C.ink}" stroke-opacity=".12"/></svg>`);
svg('svg/graphics/tape-clay.svg', `<svg ${X} viewBox="0 0 84 24" width="84" height="24"><rect width="84" height="24" fill="${C.clay}" fill-opacity=".55" stroke="${C.ink}" stroke-opacity=".15"/></svg>`);
svg('svg/graphics/halftone-5px.svg', `<svg ${X} viewBox="0 0 5 5" width="5" height="5"><circle cx="2.5" cy="2.5" r=".9" fill="${C.ink}" fill-opacity=".28"/></svg>`);
svg('svg/graphics/paper-noise-tile.svg', `<svg ${X} width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 .35 0 0 0 0 .27 0 0 0 0 .15 0 0 0 .09 0"/></filter><rect width="160" height="160" filter="url(#n)"/></svg>`);
svg('svg/graphics/ticket-punch-notch.svg', `<svg ${X} viewBox="0 0 14 14" width="14" height="14"><path d="M7 1a6 6 0 0 1 0 12" fill="${C.sun}" stroke="${C.ink}" stroke-width="2"/></svg>`);
svg('svg/graphics/route-dots.svg', `<svg ${X} viewBox="0 0 10 6" width="10" height="6"><circle cx="5" cy="3" r="1.6" fill="${C.clay}"/></svg>`);
Object.entries(edges).forEach(([k, d]) => svg(`svg/edges/${k}.svg`, `<svg ${X} viewBox="0 0 1200 30" width="1200" height="30" preserveAspectRatio="none"><path d="${d}" fill="${C.paperLight}"/></svg>`));
// extract hand-drawn art directly from the site markup (read-only)
const html = fs.readFileSync('../index.html', 'utf8');
const grab = (re) => { const m = html.match(re); return m && m[0]; };
const clean = (s) => s.replace(/filter="url\(#wobble\)"/g, '').replace(/var\(--md-sys-color-on-surface-variant\)/g, '#5a4f42').replace(/var\(--md-sys-color-on-surface\)/g, C.ink).replace(/var\(--md-sys-color-tertiary\)/g, C.clay).replace(/var\(--md-sys-color-primary\)/g, C.cobalt).replace(/var\(--md-sys-color-surface-container-lowest\)/g, C.paperLight).replace(/var\(--md-sys-color-surface-container-high\)/g, '#e4d6bb').replace(/var\(--md-sys-color-tertiary-container\)/g, '#f6d5c4').replace(/var\(--md-sys-color-surface\)/g, C.paper).replace(/var\(--md-sys-color-outline-variant\)/g, '#d3c7ae').replace(/ class="[^"]*"/g, '').replace(/<svg /, `<svg ${X} `).replace(/ role="img"| aria-label="[^"]*"/g, '');
const board = grab(/<svg viewBox="0 0 300 460"[\s\S]*?<\/svg>/); if (board) svg('svg/graphics/tactics-board.svg', clean(board).replace(/<text /g, '<text font-family="DM Mono, monospace" font-weight="700" font-size="15" fill="' + C.cobalt + '" '));
const map = grab(/<svg viewBox="30 205 480 300"[\s\S]*?<\/svg>/); if (map) svg('svg/graphics/route-map.svg', clean(map).replace(/<mask[\s\S]*?<\/mask>/, '').replace(/ mask="url\(#routemask\)"/, ''));
const arrow = grab(/<svg class="play__arrow"[\s\S]*?<\/svg>/); if (arrow) svg('svg/graphics/play-arrow.svg', clean(arrow).replace(/stroke="currentColor"/g, `stroke="${C.sun}"`).replace(/ stroke-dasharray="1"| pathLength="1"/g, ''));
const slot = grab(/<svg viewBox="0 0 320 200"[\s\S]*?<\/svg>/); if (slot) svg('svg/graphics/image-slot-illustration.svg', clean(slot).replace(/fill="url\(#azul\)"[^>]*/, `fill="none"`));
console.log('svg files:', fs.readdirSync(path.join(out, 'svg'), { recursive: true }).filter((f) => f.endsWith('.svg')).length);

/* page-level reference PNGs from the live site (read-only) */
if (!process.argv.includes('--svg-only')) {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const sections = [['header', '#app-bar'], ['hero', '#top'], ['route', '#route'], ['how', '#how'], ['week', '#week'], ['people', '#people'], ['cost', '#cost'], ['faq', '#faq'], ['interest-form', '#interest'], ['footer', '.site-footer']];
  for (const [w, h] of [[1280, 800], [390, 844]]) {
    for (const scheme of ['light', 'dark']) {
      if (scheme === 'dark' && w === 390) continue;
      const ctx = await b.newContext({ viewport: { width: w, height: h }, colorScheme: scheme, deviceScaleFactor: 1 });
      const p = await ctx.newPage();
      await p.goto('file:///workspace/soccer-site/index.html', { waitUntil: 'networkidle' });
      await p.evaluate(async () => { await document.fonts.ready; for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); } document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); document.querySelector('.board')?.classList.add('is-drawn'); document.querySelector('#fab')?.classList.remove('is-visible'); window.scrollTo(0, 0); });
      await p.addStyleTag({ content: '.app-bar{position:absolute!important}.fab{display:none!important}' });
      await p.waitForTimeout(1500);
      const tag = `${w}${scheme === 'dark' ? '-dark' : ''}`;
      await p.screenshot({ path: path.join(out, 'pages', `site-full-${tag}.png`), fullPage: true });
      for (const [name, sel] of sections) {
        const el = await p.$(sel); if (!el) continue;
        await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(150);
        await el.screenshot({ path: path.join(out, 'pages', `site-${name}-${tag}.png`) });
      }
      await ctx.close();
    }
  }
  await b.close();
  console.log('page PNGs:', fs.readdirSync(path.join(out, 'pages')).length);
}
