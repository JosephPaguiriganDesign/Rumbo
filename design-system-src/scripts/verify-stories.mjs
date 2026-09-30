// Loads every story from the static Storybook in headless Chrome, checks for errors, runs axe-core (light + dark),
// and screenshots a subset. Usage: node scripts/verify-stories.mjs [--shots-only] [--theme=light|dark]
import { chromium } from 'playwright-core';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const root = path.resolve('storybook-static'), shots = path.resolve('screenshots');
fs.mkdirSync(shots, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.map': 'application/json' };
const server = http.createServer((q, s) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html'; const f = path.join(root, p); if (!f.startsWith(root) || !fs.existsSync(f)) { s.writeHead(404); return s.end(); } s.writeHead(200, { 'content-type': mime[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(s); }).listen(6099);
const base = 'http://localhost:6099';
const index = JSON.parse(fs.readFileSync(path.join(root, 'index.json'), 'utf8'));
const stories = Object.values(index.entries).filter((e) => e.type === 'story');
const SHOTS = new Set(['components-button--variants', 'components-button--states', 'components-top-app-bar--wide', 'components-top-app-bar--compact', 'components-nav-drawer--open', 'components-folder-tabs--default', 'components-card--variants', 'components-card--receipt', 'components-chip-ticket-punch--states', 'components-text-field--states', 'components-textarea-select--select-states', 'components-accordion--default', 'components-stepper--default', 'components-timeline-itinerary-day--kinds', 'components-banner--tones', 'components-stamp--kinds', 'components-tape-photo-frame--duotones', 'components-boarding-pass--legs', 'components-team-sheet-person-card--default', 'components-section-divider-torn-edge--all-edges', 'components-route-line--steps', 'components-footer-credits--credits-open', 'components-fab--kinds', 'foundations-color--docs', 'foundations-typography--docs', 'accessibility--docs']);
const themes = process.argv.find((a) => a.startsWith('--theme=')) ? [process.argv.find((a) => a.startsWith('--theme=')).slice(8)] : ['light', 'dark'];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const report = { stories: stories.length, errors: [], violations: {}, shots: [] };
for (const theme of themes) {
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 1, colorScheme: theme });
  const page = await ctx.newPage();
  let errs = [];
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource.*(404)/.test(m.text())) errs.push('console: ' + m.text().slice(0, 200)); });
  for (const st of stories) {
    errs = [];
    await page.goto(`${base}/iframe.html?id=${st.id}&viewMode=story&globals=theme:${theme}`, { waitUntil: 'load' });
    await page.waitForSelector('.rumbo', { timeout: 15000 }).catch(() => errs.push('no .rumbo root rendered'));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(120);
    if (errs.length) report.errors.push({ id: st.id, theme, errs: [...errs] });
    if (!process.argv.includes('--shots-only')) {
      await page.addScriptTag({ content: axeSrc }).catch(() => {});
      const res = await page.evaluate(async () => { try { return await axe.run(document.querySelector('.rumbo'), { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] }, rules: { region: { enabled: false } } }); } catch (e) { return { error: String(e), violations: [] }; } });
      if (res.violations.length) report.violations[`${st.id} [${theme}]`] = res.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, sample: v.nodes.slice(0, 2).map((n) => n.target.join(' ') + ' :: ' + (n.any[0]?.message || n.all[0]?.message || n.none[0]?.message || '').slice(0, 140)) }));
    }
    if (SHOTS.has(st.id) || (st.name === 'Default' && !process.argv.includes('--no-default-shots') && false)) {
      const f = path.join(shots, `${st.id}.${theme}.png`); await page.screenshot({ path: f, fullPage: true }); report.shots.push(f);
    }
  }
  // docs pages: load, ensure no errors
  const docs = Object.values(index.entries).filter((e) => e.type === 'docs');
  for (const d of docs) {
    errs = [];
    await page.goto(`${base}/iframe.html?id=${d.id}&viewMode=docs&globals=theme:${theme}`, { waitUntil: 'load' });
    await page.waitForTimeout(600);
    if (errs.length) report.errors.push({ id: d.id, theme, errs: [...errs] });
    if (SHOTS.has(d.id) || SHOTS.has(d.id.replace(/--docs$/, '') + '--docs')) { const f = path.join(shots, `${d.id}.${theme}.png`); await page.screenshot({ path: f, fullPage: true }); report.shots.push(f); }
  }
  await ctx.close();
}
await browser.close(); server.close();
fs.writeFileSync('screenshots/_report.json', JSON.stringify(report, null, 2));
const nv = Object.keys(report.violations).length;
console.log(`stories: ${report.stories}, load errors: ${report.errors.length}, stories with axe violations: ${nv}, screenshots: ${report.shots.length}`);
report.errors.slice(0, 20).forEach((e) => console.log('ERR', e.id, e.theme, e.errs.join(' | ')));
Object.entries(report.violations).slice(0, 40).forEach(([k, v]) => v.forEach((x) => console.log('AXE', k, x.id, x.impact, x.n, x.sample[0])));
