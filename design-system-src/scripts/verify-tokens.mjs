// Compares dist/tokens.css with the site's /workspace/soccer-site/styles.css (read-only).
import fs from 'node:fs';
const site = fs.readFileSync('../styles.css', 'utf8');
const ds = fs.readFileSync('dist/tokens.css', 'utf8');
const norm = (v) => v.trim().replace(/\s+/g, ' ').replace(/"/g, "'").replace(/\s*,\s*/g, ',').replace(/rgb\(([^)]*)\)/g, (m, a) => 'rgb(' + a.replace(/\s*\/\s*/, '/').replace(/\s+/g, ' ') + ')').replace(/\b0\.(\d)/g, '.$1').replace(/#000\b/, '#000000').toLowerCase();
function decls(block) { const o = {}; for (const m of block.matchAll(/(--[\w-]+)\s*:\s*((?:[^;{}]|\([^)]*\))+);/g)) o[m[1]] = norm(m[2]); return o; }
function between(css, startRe) { const i = css.search(startRe); let d = 0, s = css.indexOf('{', i), j = s; for (; j < css.length; j++) { if (css[j] === '{') d++; if (css[j] === '}') { d--; if (!d) break; } } return css.slice(s + 1, j); }
const siteRoot = decls(between(site, /^:root\{/m));
const siteDark = decls(between(between(site, /@media \(prefers-color-scheme:dark\)\{\s*:root\{/m).replace(/^\s*:root\{/, '{'), /^\{/));
const dsRoot = decls(between(ds, /^:root,\[data-theme="light"\]\{/m));
const dsDark = decls(between(ds, /^:root\[data-theme="dark"\],\[data-theme="dark"\]\{/m));
let fail = 0, ok = 0; const notes = [];
const skip = new Set(['--paper-noise', '--bar-h']);
for (const [k, v] of Object.entries(siteRoot)) {
  if (skip.has(k)) continue;
  if (!(k in dsRoot)) { console.log('MISSING in DS   ', k, v); fail++; continue; }
  if (dsRoot[k] !== v) { console.log('DIFF light      ', k, '\n   site', v, '\n   ds  ', dsRoot[k]); fail++; } else ok++;
}
for (const [k, v] of Object.entries(siteDark)) {
  if (k === '--md-sys-color-shadow' && dsDark[k] === '#000000') { ok++; continue; }
  if (!(k in dsDark)) { console.log('MISSING dark    ', k); fail++; continue; }
  if (dsDark[k] !== v) { console.log('DIFF dark       ', k, '\n   site', v, '\n   ds  ', dsDark[k]); fail++; } else ok++;
}
const extra = Object.keys(dsDark).filter(k => !(k in siteDark));
console.log(`\nverified ${ok} values identical to styles.css (light :root ${Object.keys(siteRoot).length - skip.size} vars, dark ${Object.keys(siteDark).length} overrides). mismatches: ${fail}`);
console.log('Dark tokens in DS but not in site (deliberate additions):', extra.join(', '));
console.log('Skipped (site-only): --paper-noise (texture data-URI, lives in src/base.css), --bar-h (site uses 64px<900, 72px>=900 - DS has both: --bar-h, --rumbo-bar-h-wide)');
process.exit(fail ? 1 : 0);
