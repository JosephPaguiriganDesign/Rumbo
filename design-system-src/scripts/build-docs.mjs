// Generates docs (markdown copies in docs/ + Storybook MDX pages in src/docs and src/components/*/) from
// tokens/tokens.json, docs/_contrast.json and scripts/component-docs.mjs. Hand-written prose lives in scripts/docs-prose.mjs.
import fs from 'node:fs'; import path from 'node:path';
import { components } from './component-docs.mjs';
import { prose } from './docs-prose.mjs';
const tokens = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));
const contrast = JSON.parse(fs.readFileSync('docs/_contrast.json', 'utf8'));
const w = (f, s) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };
const esc = (s) => String(s).replace(/\|/g, '\\|');
const table = (head, rows) => `| ${head.join(' | ')} |\n| ${head.map(() => '---').join(' | ')} |\n${rows.map((r) => '| ' + r.map(esc).join(' | ') + ' |').join('\n')}\n`;
const flat = {}; (function walk(n, p) { for (const [k, v] of Object.entries(n)) { if (k[0] === '$') continue; if (v && typeof v === 'object' && '$value' in v) flat[[...p, k].join('.')] = v; else if (v && typeof v === 'object') walk(v, [...p, k]); } })(tokens, []);
const val = (p) => { let v = flat[p].$value; const m = typeof v === 'string' && v.match(/^\{(.+)\}$/); return m ? val(m[1]) : v; };
const group = (prefix) => Object.keys(flat).filter((k) => k.startsWith(prefix)).map((k) => [k.slice(prefix.length), k]);
const cr = (mode) => table(['Pair (fg / bg)', 'Ratio', 'Needs', 'Result', 'Where it is used'], contrast[mode].map((x) => [`\`${x.fg}\` on \`${x.bg}\` · ${x.label}`, x.ratio.toFixed(2) + ':1', x.need ? x.need + ':1 (' + (x.kind === 'text' ? 'text' : x.kind === 'large' ? 'large text' : 'UI') + ')' : 'exempt', x.pass === null ? 'n/a' : x.pass ? (x.aaa ? 'AAA' : 'AA') : 'FAIL', x.usage]));
const fmtShadow = (s) => `${s.offsetX} ${s.offsetY} ${s.blur} ${s.color}`;

/* ---------- foundation pages ---------- */
const F = {};
F.color = {
  title: 'Foundations/Color',
  md: `# Color

Rumbo colour is **paper, ink, and three pens**: cobalt (azulejo tile), clay (roof tile), and one grass-line yellow used like a highlighter. Underneath sits a full Material Design 3 role set, so anything built for M3 maps cleanly.

- Tokens: \`color.palette.*\` (primitives), \`color.light.*\`, \`color.dark.*\` (M3 roles + custom roles), \`color.fixed.*\` (printed objects that do not change with theme).
- CSS: \`--md-sys-color-<role>\` (same names as the site), \`--rumbo-palette-*\`, \`--rumbo-<fixed>\`.
- Dark theme is **night train**: \`#1a1611\` ink ground, cream text, the same clay and cobalt lifted to their M3 “dark” tones. Set \`data-theme="dark"\` (or follow the OS).

## Palette

${table(['Name', 'Hex', 'Role'], group('color.palette.').map(([n, k]) => [n, val(k), flat[k].$description || '']))}

## Roles: how they are used

- **primary** (cobalt) — links, filled button, selected chip, section “how it works”.
- **tertiary** (clay) — kickers, current-page underline, accent button, stamps, torn-edge on the people band.
- **sun** (custom) — tonal button, FAB, selected tab, match day, focus ring in dark. Never as text on paper.
- **secondary** (warm grey-brown) — day numerals, success banner.
- **surface-container-*** — five paper tones; \`lowest\` (#fbf6ea) is the “card” paper.
- **inverse-surface** — the cost band (ink in light).
- **Custom roles added by the DS:** \`highlight-on-primary\`, \`on-primary-muted\`, \`sun-outline\` (see Accessibility for why).

## Measured contrast: light

${cr('light')}

## Measured contrast: dark (night train)

${cr('dark')}

Ratios are WCAG 2.x relative-luminance contrast computed by \`npm run contrast\` from the token values. Targets: 4.5:1 body text, 3:1 large text (≥24px or ≥18.66px bold) and UI/graphics. \`outline-variant\` is decorative (dashed rules) and is never the only cue for a control.

## Things the DS changed versus the site

${prose.colorChanges}
`,
  jsx: `
export const roles = Object.keys(colorLight);

<div className="rumbo" data-theme="light" style={{padding:20,marginTop:16}}>
  <div className="sb-label">Light: day dispatch</div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10,marginTop:10}}>
    {roles.filter(r=>!r.startsWith('on-') && !r.includes('-on-')).map(r => <div key={r} style={{border:'1.5px solid #221d18',background:colorLight[r],color:colorLight['on-'+r]||'#221d18',padding:'10px 10px 26px',fontFamily:'var(--font-label)',fontSize:11,minHeight:78}}><b>{r}</b><br/>{colorLight[r]}</div>)}
  </div>
</div>
<div className="rumbo" data-theme="dark" style={{padding:20,marginTop:16}}>
  <div className="sb-label">Dark: night train</div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10,marginTop:10}}>
    {roles.filter(r=>!r.startsWith('on-') && !r.includes('-on-')).map(r => <div key={r} style={{border:'1.5px solid #eee3cc',background:colorDark[r],color:colorDark['on-'+r]||'#eee3cc',padding:'10px 10px 26px',fontFamily:'var(--font-label)',fontSize:11,minHeight:78}}><b>{r}</b><br/>{colorDark[r]}</div>)}
  </div>
</div>`,
  imports: `import { colorLight, colorDark } from '../../dist/tokens.js';`,
};
F.typography = {
  title: 'Foundations/Typography',
  md: `# Typography

Four faces, four jobs.

${table(['Face', 'Token', 'Job', 'Never'], [['Fraunces (variable: opsz, wght, SOFT, WONK)', '`--font-display`', 'Headlines, numerals, drawer links, prices, person names', 'Long paragraphs'], ['Atkinson Hyperlegible Next', '`--font-body`', 'Body, buttons, form text, nav', '—'], ['DM Mono', '`--font-label`', 'Kickers, dates, captions, field labels, stamps (uppercase, tracked)', 'Sentences longer than a line'], ['Caveat', '`--font-hand`', 'Margin notes: asides that are safe to skip', 'Anything essential (it is aria-hidden on the site)']])}

## Scale (M3 roles mapped to our faces)

${table(['Token', 'CSS var', 'Value', 'Face'], group('type.scale.').map(([n, k]) => [n, `--md-sys-typescale-${n}`, val(k), flat[k].$extensions?.rumbo?.family || '']))}

Fluid sizes are \`clamp()\` values; in Figma use the max value on the 1280 frame and the min on the 390 frame.

## Weights, line-heights, tracking

${table(['Token', 'Value'], [...group('type.weight.').map(([n, k]) => ['weight/' + n, val(k)]), ...group('type.leading.').map(([n, k]) => ['leading/' + n, val(k)]), ...group('type.tracking.').map(([n, k]) => ['tracking/' + n, val(k)])])}

## Fraunces axes

\`font-variation-settings\` presets: ${group('type.axes.').map(([n, k]) => `**${n}** \`${val(k)}\``).join(', ')}. SOFT rounds the terminals (100 on numerals and the wordmark), WONK swaps in the leaning h, n, m. Always set \`font-optical-sizing:auto\`.

## Rules

- Body copy is 17px (1.0625rem) at 1.6. Do not go below 15px for reading text; mono captions have an 11px floor.
- Mono is uppercase with 0.02–0.14em tracking. Do not set mono in sentence case except captions marked \`text-transform:none\`.
- One italic accent per headline: \`<em>\` in Fraunces italic, clay, \`white-space:nowrap\`.
- \`text-wrap:balance\` on display and headline.
- Highlighter underline: \`.hl\` (sun gradient at 58–92% of line height). Text inside stays ink.
`,
  jsx: `
<div className="rumbo" style={{padding:'28px 24px',marginTop:16}}>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)'}}>display-large · Fraunces 700</p>
  <p className="display">Lisbon to Málaga, <em>one ball.</em></p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>headline-large</p>
  <p className="headline">Two coasts, <span className="hl">seven days each</span></p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>headline-medium / title-xl</p>
  <p className="title-xl">Week one: the Lisbon coast</p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>title-large</p>
  <p className="title">Put your name down</p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>lead / body-large (Atkinson)</p>
  <p className="lead">Rumbo is a small summer trip for players aged 12 to 17. We train twice a day and eat an unreasonable number of pastéis de nata.</p>
  <p style={{marginTop:12}}>Body large, 17px / 1.6. Hyperlegible letterforms keep 1 / l / I and 0 / O apart.</p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>label · DM Mono uppercase</p>
  <p className="mono">Sun 11 Jul – Sat 24 Jul 2027 · LIS → AGP</p>
  <p className="mono" style={{color:'var(--md-sys-color-tertiary)',marginTop:24}}>margin note · Caveat 700</p>
  <p className="margin-note">rumbo (n.): a heading. what you point the boat at.</p>
</div>`,
};
F.spacing = {
  title: 'Foundations/Spacing',
  md: `# Spacing

A 4dp base with an 8dp rhythm on the even steps. Layout numbers are the site's, unchanged.

${table(['Token', 'CSS var', 'Value'], group('space.').map(([n, k]) => [n, `--rumbo-space-${n}`, val(k)]))}

## Layout

${table(['Token', 'CSS var', 'Value', 'Note'], [['bar-h', '`--bar-h`', '64px (72px ≥ 900px)', 'App bar'], ['gutter', '`--gutter`', 'clamp(18px, 5vw, 48px)', 'Page side padding'], ['max', '`--max`', '1180px', 'Content width'], ['touch-target', '`--rumbo-touch-target`', '48px', 'Every interactive element'], ['section padding', '—', 'clamp(72px, 11vw, 132px)', 'Vertical, per section']])}

## Breakpoints

${table(['Token', 'Value', 'What changes'], [['sm', '640px', 'Choice chips go to 3 columns, receipt 2 columns'], ['md', '900px', 'Top nav replaces Menu; bar is 72dp; hero and route go two-column'], ['lg', '1100px', 'FAQ two-column; stepper indents'], ['frame-mobile', '390px', 'Figma / screenshot frame'], ['frame-desktop', '1280px', 'Figma / screenshot frame']])}

CSS media queries cannot read custom properties, so breakpoints exist in tokens for JS, Figma and docs; keep the literals in CSS.
`,
  jsx: `
<div className="rumbo" style={{padding:24,marginTop:16}}>
  {Object.entries(tokens.space).map(([k,v]) => <div key={k} style={{display:'flex',alignItems:'center',gap:12,marginBottom:6}}><span className="mono" style={{width:70}}>space/{k}</span><span style={{display:'block',height:16,width:v,background:'var(--md-sys-color-primary)'}}></span><span className="mono">{v}</span></div>)}
</div>`,
  imports: `import { tokens } from '../../dist/tokens.js';`,
};
F.shape = {
  title: 'Foundations/Shape',
  md: `# Shape

Stock M3 shape is round and symmetrical. Rumbo is **cut like paper**: opposite corners are large and small, so surfaces look guillotined by hand.

${table(['Token', 'CSS var', 'Value', 'Used by'], [...group('shape.corner.').map(([n, k]) => ['corner/' + n, `--md-sys-shape-corner-${n}`, val(k), '']), ...group('shape.cut.').map(([n, k]) => ['cut/' + n, n === 'primary' ? '--shape-cut' : n === 'alt' ? '--shape-cut-alt' : `--rumbo-shape-${n}`, val(k), flat[k].$description || '']), ...group('shape.border.').map(([n, k]) => ['border/' + n, `--rumbo-border-${n}`, val(k), '']),])}

## Cut-corner rule

\`border-radius: TL TR BR BL\`. Big corners on one diagonal, small on the other. Alternate the diagonal between neighbours: filled button \`22 5 22 5\`, tonal button \`5 20 5 20\`. Never round all four corners the same.

## Borders

Ink borders are 2px (cards, buttons, tabs), 1.5px for quiet rules (dashed lines, day cards), 2.5px for field underlines, 3px for focus.

## Tilt

Objects pinned to the board rotate: hero pieces ±2–5°, cards ±0.35–1.4°. Never rotate text blocks over 1.5° or anything with form controls (the form card is +0.5° at most).
`,
  jsx: `
<div className="rumbo" style={{padding:24,marginTop:16,display:'flex',flexWrap:'wrap',gap:24}}>
  {[['cut/primary','var(--shape-cut)'],['cut/alt','var(--shape-cut-alt)'],['cut/ticket','var(--rumbo-shape-ticket)'],['cut/banner','var(--rumbo-shape-banner)'],['cut/day','var(--rumbo-shape-day)'],['cut/tab','var(--rumbo-shape-tab)'],['cut/scribble','var(--rumbo-shape-scribble)']].map(([n,r]) => <div key={n} style={{width:130,height:80,border:'2px solid var(--md-sys-color-on-surface)',borderRadius:r,background:'var(--md-sys-color-sun-container)',display:'grid',placeItems:'center'}} className="mono">{n}</div>)}
</div>`,
};
F.elevation = {
  title: 'Foundations/Elevation',
  md: `# Elevation

M3 uses tonal surface + soft shadow. Rumbo uses a **hard offset ink shadow**: no blur, same angle (down-right), three heights. Things that are physically pinned (photos, passes) use one soft print shadow.

${table(['Token', 'CSS var', 'Light', 'Dark', 'Used by'], [['elevation/1', '`--md-sys-elevation-1`', fmtShadow(val('elevation.light.1')), fmtShadow(val('elevation.dark.1')), 'Tonal button, match day, person card'], ['elevation/2', '`--md-sys-elevation-2`', fmtShadow(val('elevation.light.2')), fmtShadow(val('elevation.dark.2')), 'Filled button, FAB, card'], ['elevation/3', '`--md-sys-elevation-3`', fmtShadow(val('elevation.light.3')), fmtShadow(val('elevation.dark.3')), 'Hover, form card, leg panel, map'], ['soft', '`--soft-shadow`', '0 1px 1px .18 · 0 10px 20px −8px .35', 'same', 'Photos, boarding pass, tactics board'], ['receipt', '`--rumbo-shadow-receipt`', '0 18px 30px −12px rgb(0 0 0 / .6)', 'same', 'Receipt on ink band']])}

## Behaviour

- **Hover** raises a level and moves the element −1/−1 (shadow grows to the right, it looks lifted).
- **Pressed** moves +2/+2 and drops the shadow to 0 (it looks pushed into the page).
- Offset shadows never blur, so they survive forced-colors and print.
- Hierarchy is also carried by *border weight* (2px ink), not by shadow alone.
`,
  jsx: `
<div className="rumbo" style={{padding:32,marginTop:16,display:'flex',flexWrap:'wrap',gap:36}}>
  {[['elevation-1','var(--md-sys-elevation-1)'],['elevation-2','var(--md-sys-elevation-2)'],['elevation-3','var(--md-sys-elevation-3)'],['soft','var(--soft-shadow)']].map(([n,s]) => <div key={n} style={{width:140,height:90,background:'var(--md-sys-color-surface-container-lowest)',border:'2px solid var(--md-sys-color-on-surface)',boxShadow:s,display:'grid',placeItems:'center'}} className="mono">{n}</div>)}
</div>`,
};
F.motion = {
  title: 'Foundations/Motion',
  md: `# Motion

M3 easing and duration tokens, used sparingly. The rule: **motion shows cause and effect** (a tab lifts, a drawer slides, a route draws) and never decorates on its own.

## Easing

${table(['Token', 'CSS var', 'Curve', 'Use'], group('motion.easing.').map(([n, k]) => [n, `--md-sys-motion-easing-${n}`, `cubic-bezier(${val(k).join(', ')})`, { standard: 'Hover fades, state layers', emphasized: 'Drawer, tabs, accordion, route', 'emphasized-decelerate': 'Things entering: panels, reveals, button lift', 'emphasized-accelerate': 'Things leaving', 'standard-decelerate': 'DS addition', 'standard-accelerate': 'DS addition', linear: 'Colour fades only', thump: 'Overshoot: stamps, pins, section numbers, tab pop, FAB, accordion icon', wipe: 'Torn-paper wipe between legs' }[n] || '']))}

## Duration

${table(['Token', 'CSS var', 'Value', 'Used by'], group('motion.duration.').map(([n, k]) => [n, `--md-sys-motion-duration-${n}`, val(k), { short2: 'Icon/colour', short4: 'Hover, state layer, field colour', medium2: 'Scrim, tab lift, accordion icon, app bar', medium4: 'Drawer, accordion height, panel enter', long2: 'Scroll reveal', 'extra-long1': 'Reserved', draw: 'Tactics arrows', stagger: 'Sibling delay in staggered entrances', count: 'Number count-up' }[n] || '']))}

## Reduced motion

\`@media (prefers-reduced-motion: reduce)\` sets every transition and animation to 0.01ms, shows all reveals, draws the tactics board and route immediately, and stops smooth scroll. The Storybook toolbar has a **Motion: reduced** switch that applies the same rule to a story.

## Patterns

- **Reveal**: one system, varied by \`data-rv\`. Default is fade + 24px rise (\`long2\`, decelerate). \`card\` lands with a small tilt, \`thump\` (section numbers, DRAFT stamp) scales down from 2.2x with the overshoot easing, \`words\` (headlines) rises word by word then sweeps the highlighter on, \`tear\` opens the torn edge upward, \`print\` (receipt) prints out in 22 chunky steps, \`stagger\` delays each child by the stagger token (max 9).
- **Hero entrance**: plays once on load, after fonts are ready. Words rise, board and photo drop in with overshoot, ticket slides in and its stub tugs, tape peels, SALIDA stamp thumps at 1.5s.
- **Parallax**: hero layers (sun glow, doodles, board-back, board, print, tape, ticket, note) get a scroll offset of 2 to 30% of scroll distance; photo frames move the image inside its frame by up to 7.5% of the frame height (the image sits in a 118%-tall layer, so the frame never shows a gap). Written by JS with requestAnimationFrame into the individual \`translate\` property, so it composes with each element's resting rotation. Never applied to elements with \`mix-blend-mode\` (the SALIDA stamp is only animated on entrance).
- **Route**: dotted line and head follow scroll; pins pop (\`thump\`) when the line reaches them; a ripple pulses from the head while the route is moving. The app-bar progress line has a ball that rolls along it.
- **Tab / leg switch**: View Transitions API where available (old leg slides back, new leg is wiped in with a torn edge); otherwise the same wipe as a CSS clip-path animation. Then photos drop in and "develop" (scale-down fade), text rises in sequence. Direction follows tab order.
- **Drawer**: ticket perforation grows down the stub, header and links slide in one after another.
- **Accordion**: \`grid-template-rows 0fr → 1fr\`; the answer fades and settles in after the height opens; the plus turns 135° with overshoot.
- **Form**: fields underline with a wipe-in bar on focus, invalid fields shake once, chosen options punch.
- **Reduced motion**: no parallax, no travel/tilt/scale, no wipes, no count-up, no ball. Reveals keep a 300ms opacity fade. Everything is visible with JS off or if app.js fails (the motion start-states hang off \`html.mo\`, which is removed after 3.5s if app.js never finishes).
- **Budget**: transform / opacity / individual transform properties only, plus SVG stroke-dashoffset and one background-size underline on inputs. \`will-change\` only on hero parallax layers and the app-bar ball.
`,
  jsx: `
<div className="rumbo" style={{padding:24,marginTop:16}}>
  <p className="sb-label">Hover the bars to see each easing on the longest duration (400ms)</p>
  {Object.entries(tokens.motion.easing).map(([k,v]) => <div key={k} style={{display:'flex',alignItems:'center',gap:12,margin:'8px 0'}}><span className="mono" style={{width:220}}>{k}</span><div style={{flex:1,height:14,background:'var(--md-sys-color-surface-container-high)',position:'relative'}} className="motion-track"><span style={{position:'absolute',left:0,top:0,width:14,height:14,background:'var(--md-sys-color-tertiary)',transition:'left 400ms '+v}} className="motion-dot"></span></div></div>)}
  <style>{'.motion-track:hover .motion-dot{left:calc(100% - 14px)!important}'}</style>
</div>`,
  imports: `import { tokens } from '../../dist/tokens.js';`,
};

const mdxSafe = (md) => md.split(/(```[\s\S]*?```|`[^`\n]*`)/g).map((seg, i) => i % 2 ? seg : seg.replace(/\{/g, '\\{').replace(/</g, '&lt;')).join('');
const mdxHead = (title, imports = '') => `import { Meta } from '@storybook/addon-docs/blocks';\n${imports}\n\n<Meta title="${title}" />\n\n`;
for (const [k, f] of Object.entries(F)) {
  w(`docs/foundations-${k}.md`, f.md);
  w(`src/docs/foundations-${k}.mdx`, mdxHead(f.title, f.imports || '') + mdxSafe(f.md) + '\n' + f.jsx + '\n');
}
w('docs/foundations.md', `# Foundations\n\n- [Color](foundations-color.md)\n- [Typography](foundations-typography.md)\n- [Spacing](foundations-spacing.md)\n- [Shape](foundations-shape.md)\n- [Elevation](foundations-elevation.md)\n- [Motion](foundations-motion.md)\n`);

/* ---------- prose pages ---------- */
w('docs/accessibility.md', prose.accessibility(contrast, cr));
w('src/docs/accessibility.mdx', mdxHead('Accessibility') + mdxSafe(prose.accessibility(contrast, cr)));
w('docs/usage-guide.md', prose.usage);
w('src/docs/usage-guide.mdx', mdxHead('Usage guide') + mdxSafe(prose.usage));
w('docs/README.md', prose.docsIndex);
w('src/docs/introduction.mdx', mdxHead('Introduction') + mdxSafe(prose.intro));
w('README.md', prose.readme);

/* ---------- component pages ---------- */
const stories = {}; // read export names from story files to embed canvases
for (const c of components) {
  const src = fs.readFileSync(`src/components/${c.id}/${c.file}.stories.js`, 'utf8');
  stories[c.id] = [...src.matchAll(/^export const (\w+)/gm)].map((m) => m[1]);
}
const nice = (s) => s.replace(/([A-Z])/g, ' $1').replace(/^ /, '').replace(/^./, (x) => x.toUpperCase());
for (const c of components) {
  const list = (a) => a.map((x) => `- ${x}`).join('\n');
  const body = `# ${c.title}\n\n${c.summary}\n\n**Extracted from the site:** ${c.from}\n\n## Props / variants\n\n${table(['Prop', 'Type', 'Default', 'Notes'], c.props)}\n\n**Variants and states shown:** ${c.variants.join(' · ')}.\n\n## Usage\n\n### Do\n\n${list(c.dos)}\n\n### Don't\n\n${list(c.donts)}\n\n## Accessibility\n\n${list(c.a11y)}\n\n## Storybook\n\nRun \`npm run storybook\` and open **Components / ${c.title}**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.\n`;
  w(`docs/components/${c.id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}.md`, body);
  const ex = stories[c.id];
  const importName = `${c.id}Stories`;
  const canvases = ex.filter((n) => n !== 'Default').map((n) => `### ${nice(n)}\n\n<Canvas of={${importName}.${n}} />\n`).join('\n');
  const mdx = `import { Meta, Canvas, Controls } from '@storybook/addon-docs/blocks';\nimport * as ${importName} from './${c.file}.stories';\n\n<Meta of={${importName}} />\n\n# ${c.title}\n\n${mdxSafe(c.summary)}\n\n**Extracted from the site:** ${mdxSafe(c.from)}\n\n<Canvas of={${importName}.Default} />\n\n<Controls of={${importName}.Default} />\n\n## Variants and states\n\n${canvases}\n${mdxSafe('## Props / variants\n\n' + table(['Prop', 'Type', 'Default', 'Notes'], c.props) + '\n## Usage\n\n### Do\n\n' + list(c.dos) + "\n\n### Don't\n\n" + list(c.donts) + '\n\n## Accessibility\n\n' + list(c.a11y) + '\n')}`;
  w(`src/components/${c.id}/${c.id}.mdx`, mdx);
}
console.log('docs built:', fs.readdirSync('docs').length, 'files in docs/,', components.length, 'component pages');
