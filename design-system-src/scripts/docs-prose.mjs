import fs from 'node:fs';
const report = fs.existsSync('screenshots/_report.json') ? JSON.parse(fs.readFileSync('screenshots/_report.json', 'utf8')) : null;
const axeSummary = () => {
  if (!report) return '_Run `npm run test:stories` to generate the axe summary._';
  const v = Object.entries(report.violations);
  return `Last run: **${report.stories} stories × light and dark** loaded in headless Chrome with axe-core (tags wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice; the \`region\` rule is off because stories are fragments). **Stories with violations: ${v.length}.** Load errors: ${report.errors.length}.` + (v.length ? '\n\n' + v.map(([k, arr]) => `- ${k}: ${arr.map((x) => `${x.id} (${x.impact}, ${x.n})`).join(', ')}`).join('\n') : '');
};

export const prose = {
colorChanges: `The DS extracts what the site does, then fixes places where the site's dark theme or hard-coded colours break contrast. Each change is a named token so it can be reversed.

| Where | Site does | DS does | Why |
| --- | --- | --- | --- |
| Dark error | keeps \`#ba1a1a\` on \`#1a1611\` (~2.9:1) | M3 dark error \`#ffb4ab\` (+ on-, container roles) | 1.4.3 |
| Receipt | \`background: surface-container-lowest; color:#221d18\`: in dark the paper turns near-black under ink text | \`--rumbo-receipt-*\` fixed paper/ink | It is a printed object. |
| Stepper / cobalt panel | title \`#fff\`, body \`primary-container\`, numerals \`sun\` | \`on-primary\`, \`on-primary-muted\`, \`highlight-on-primary\` | In dark the panel becomes \`#a9bbff\`; white and sun fail on it. |
| Cost band headline | \`#fff\` + sun numeral on \`inverse-surface\` | \`inverse-on-surface\` / fixed ink | In dark \`inverse-surface\` is cream. |
| Mono captions | 9.6–10.6px | 11px floor | Legibility for 12–17 year olds reading on phones. |
| Focus ring in dark | sun on all surfaces | same, plus sun on cobalt/ink panels in light | 3:1 vs the surface it sits on. |

Everything else (all 77 light roles and 34 dark overrides) is byte-identical to \`styles.css\`; \`npm run verify:tokens\` checks it.`,

accessibility: (contrast, cr) => `# Accessibility

**Target: WCAG 2.2 Level AA**, plus the bits of AAA that are cheap (7:1 body text, 48dp targets, no motion-only meaning). Everything here was measured from the token values or tested in the built Storybook.

## 1. Contrast (measured)

Computed by \`npm run contrast\` (WCAG relative luminance, no rounding up). Text needs 4.5:1, large text (≥24px, or ≥18.66px bold) and UI components/graphics need 3:1.

### Light: day dispatch

${cr('light')}

### Dark: night train

${cr('dark')}

Reading the tables:
- **AAA** = ≥7:1 for text. **AA** = passes its target. **FAIL** rows are either decorative (\`outline-variant\`) or documented site issues the DS replaces (see Foundations / Color).
- Disabled controls are exempt from 1.4.3 but stay legible (38% ink label).
- Never put **sun** text on paper (1.4:1). Sun is a fill, a highlighter, or a focus ring on dark or cobalt.
- **Clay on paper** is 5.4:1: fine for text, but mono at 11px in clay is only for kickers of 3+ words, never for the only copy of a fact.

## 2. Focus

- \`:focus-visible\` = **3px solid ring, 3px offset**, colour \`primary\` (cobalt, 8.2:1 on paper), switching to **sun** on dark surfaces and on cobalt/ink panels. Ring contrast is measured above (≥5.6:1 everywhere).
- Fields do not use the ring: focus paints a 3px cobalt underline, a yellow wash and a shadow line (cobalt 8.2:1 vs paper).
- Tabs and accordion headers use an **inset** ring (−3px) so it is not clipped by overflow.
- The state layer (currentColor at 12%) is additive. Focus never relies on it alone.
- Sticky app bar + drawer: \`scroll-padding-top: bar-h + 16px\` keeps focused elements from hiding under the bar (2.4.11 Focus Not Obscured).
- Never \`outline:none\` without a replacement.

## 3. Target size (2.5.8)

WCAG 2.2 AA asks for 24×24 CSS px. Rumbo holds **48dp**: buttons 48/56, small button 40 + 4px hit-area extension, menu button 48, chips 56, accordion header 64, drawer links 56, tabs 56, close buttons 48×48, credits summary 48. Inline text links inside sentences are exempt but underlined and thick on hover.

## 4. Keyboard patterns

| Component | Keys |
| --- | --- |
| Button / link | Enter (link, button), Space (button) |
| Folder tabs | ← → ↑ ↓ move + select, Home / End; only the selected tab is in the tab order; Tab moves into the panel |
| Accordion | Enter / Space toggle; ↑ ↓ Home End between headers |
| Drawer | Opens from Menu; focus goes to Close; Tab and Shift+Tab loop; Escape closes; focus returns to Menu; also closes if the viewport passes 900px |
| Choice chips | Native radio: arrows move within group, Space selects; checkbox: Space |
| Text fields | Native. Enter submits the form; invalid submit moves focus to the first invalid field |
| Credits | \`<summary>\`: Enter / Space |
| Skip link | First Tab on every page → “Skip to content” |

## 5. Reduced motion (2.3.3, 2.2.2)

- \`prefers-reduced-motion: reduce\`: transitions/animations set to 0.01ms, smooth scroll off, reveals shown immediately, tactics board arrows and map route drawn in one step, FAB does not slide.
- Nothing flashes. Nothing auto-plays. The only continuous motion is scroll-linked (route line) and it is fully replaced by the final state.
- Storybook: toolbar **Motion: reduced** applies the rule to any story.

## 6. Images, alt text and photo credit rules

1. Every \`<img>\` has an \`alt\` that says what is in the frame: “Tamariz beach and pier on the Estoril coast”. No “photo of”, no keyword stuffing, no place-name-only alts.
2. The visible caption (“Tamariz beach, Estoril coast”) is **not** the alt: it may repeat the place, never the whole description.
3. Decorative pieces (tape, halftone, torn edges, dotted route, stamps' texture) are CSS or \`aria-hidden\` SVG.
4. SVG illustrations that carry meaning (tactics board, map, stamps) use \`role="img"\` with a sentence label.
5. Text is never baked into a photo.
6. **Credit every photo** in the footer credits list: author, licence link, source link. CC BY-SA requires attribution; CC0 does not but we credit anyway. \`assets/photos/CREDITS.md\` is the source of truth.
7. Duotone/halftone is applied in CSS on top of the untouched file, and the credits note says photos are shown in a two-colour treatment.
8. No identifiable minors without written consent. No club logos or stadium shots that imply a partnership.

## 6b. Text alternatives for the effects

Mix-blend and filter effects have no accessible name; the underlying content does. If \`mix-blend-mode\` is unsupported the \`<img>\` still shows with its border and caption.

## 7. Forms and errors

Pattern (matches \`setInvalid()\` in app.js):

1. Every field has a visible \`<label for>\`. Placeholder is never the label.
2. Required fields are announced (“(required)” in \`sr-only\`), and \`required\` is set; \`novalidate\` on the form so we control the message.
3. Hints are linked by \`aria-describedby\`.
4. On submit, each invalid field gets: \`aria-invalid="true"\`, a visible message (“Please enter a valid email address.”) with a “!” badge, a 3px error underline. Colour is never the only signal.
5. Focus moves to the **first** invalid field. A \`role="status"\` line summarises (“Something needs another look”).
6. Errors clear as soon as the field becomes valid, not on every keystroke before.
7. Message copy: say what to do, not what the user did wrong. “Please enter an age between 12 and 17.”
8. Groups (chips): error is linked to the \`<fieldset>\` via \`aria-describedby\`.
9. Success/neutral notes use \`role="status"\`; only genuine errors use \`role="alert"\`.
10. Inputs use correct \`type\` and \`autocomplete\` (2.1 / 1.3.5).

## 8. Screen reader notes

- Landmarks: skip link, \`header\`, \`nav\` (Primary), \`main\`, \`nav\` (Mobile, inside the drawer), \`footer\`. Two navs are distinguished by label.
- Heading order: one h1 (display), h2 per section, h3 for cards/steps/days. Components take a \`headingLevel\` where needed.
- Big decorative numerals (\`01\`, step rings, day numbers) are \`aria-hidden\`: the order is carried by \`<ol>\`.
- Wobbly SVG filters and worn ink are visual only.
- Stamp, map, tactics board: \`role="img"\` with a full-sentence label; inner text is not read.
- The hero boarding pass is a labelled \`role="group"\` so its parts read as one thing.
- Tabs and accordion follow the WAI-ARIA Authoring Practices exactly, so VoiceOver/NVDA/JAWS announce “tab 1 of 2” and “expanded / collapsed”.
- Drawer: \`role="dialog" aria-modal="true"\` on a \`div\` (axe rejects it on \`aside\`); background is not inert in the site; recommended to add \`inert\` to \`main\` while open.

## 9. Other rules

- Language: \`<html lang="en">\`; wrap Spanish/Portuguese phrases of more than a word in \`lang="es"\` / \`"pt"\`.
- Zoom: layouts reflow at 320px width and 400% zoom without horizontal scroll (1.4.10). Line length capped at 34–46em.
- Text spacing (1.4.12): no fixed-height text containers.
- Forced colors: focus ring becomes \`Highlight\`; buttons keep \`ButtonText\` border; shadows are decoration.
- Print: fixed bar, FAB and drawer are hidden.

## 10. Automated results

${axeSummary()}

Automated tools find roughly a third of issues. **Not covered by tooling:** real screen-reader passes, voice control, 400% zoom, forced-colors mode and real touch devices. Do those before publishing.

Run it yourself: in Storybook open any story and use the **Accessibility** panel, or \`npm run build-storybook && npm run test:stories\`.
`,

usage: `# Usage guide

## Install and consume tokens

The DS is a folder next to the site (\`design-system/\`). Nothing is published. The site is not modified by it.

\`\`\`bash
cd design-system
npm install
npm run tokens          # tokens/tokens.json  →  dist/tokens.css, dist/tokens.js, dist/tokens.d.ts,
                        #                        tokens/tokens-studio.json, tokens/figma-variables.json
npm run verify:tokens   # compares dist/tokens.css with ../styles.css
npm run storybook       # dev server on :6006
npm run build-storybook # static build in storybook-static/
npm run test:stories    # loads every story (light+dark) in Chrome, runs axe, takes screenshots
\`\`\`

**CSS:** \`<link rel="stylesheet" href="design-system/dist/tokens.css">\`, then use \`var(--md-sys-color-primary)\`, \`var(--md-sys-shape-corner-medium)\`, \`var(--rumbo-space-4)\` etc. Set \`data-theme="dark"\` on \`<html>\` (or any element) to force night train; without it the OS preference is used.

**JS/TS:** \`import { tokens, colorLight, colorDark, cssVars } from './design-system/dist/tokens.js'\`.

**Components:** copy the CSS from \`src/css/components.css\` + \`src/css/ds.css\` (or import them) and the markup from the component's \`.js\` file. Behaviour lives in \`src/lib/behaviors.js\` (one delegated listener set for tabs, accordion, drawer, form errors). Shared SVG filters (\`#wobble\`, \`#wear\`, \`#azul\`) come from \`src/lib/filters.js\` and must be in the document once.

**Tokens are the single source of truth.** Edit \`tokens/tokens.json\`, run \`npm run tokens\`, never edit \`dist/*\` or \`tokens/tokens-studio.json\` / \`figma-variables.json\`.

## Naming

- M3 roles keep M3 names: \`--md-sys-color-*\`, \`--md-sys-typescale-*\`, \`--md-sys-shape-corner-*\`, \`--md-sys-elevation-*\`, \`--md-sys-motion-*\`, \`--md-sys-state-*\`. These match the site exactly.
- Anything Rumbo-specific is \`--rumbo-*\` (space, weights, tracking, fixed print colours, z-index, breakpoints), or one of the site's historical short names: \`--font-display|body|label|hand\`, \`--shape-cut\`, \`--shape-cut-alt\`, \`--soft-shadow\`, \`--bar-h\`, \`--gutter\`, \`--max\`.
- Component classes are BEM: \`.block\`, \`.block__element\`, \`.block--modifier\`; state uses \`.is-*\` (\`is-invalid\`, \`is-open\`) or ARIA attributes (\`[aria-expanded="true"]\`, \`[aria-current]\`). Prefer ARIA attributes for state that assistive tech needs.
- \`.state\` adds the M3 state layer to any interactive thing. \`.mono\` is the label voice.

## Add a component

1. Look at what the site does. Find the pattern in \`styles.css\` / \`index.html\`. If it does not exist, ask whether it should.
2. Make \`src/components/<Name>/<Name>.js\` exporting a function that returns a string of HTML (props in, markup out, correct roles).
3. Put CSS in \`src/css/ds.css\` (or \`components.css\` if it is verbatim from the site). Use only tokens; no new hex values. If you need one, add it to \`tokens.json\`.
4. Write \`<Name>.stories.js\`: \`Default\`, a \`Variants\` story, a \`States\` story (use \`.is-hover\`, \`.is-focus\`, \`.is-pressed\`, disabled, error), controls for each prop.
5. Add the docs entry to \`scripts/component-docs.mjs\` (props, do/don't, a11y, measured contrast). \`npm run docs\` writes the MDX page and the markdown copy.
6. \`npm run build-storybook && npm run test:stories\`. Fix axe. Look at the screenshot in both themes.
7. Add the component to \`docs/figma-build-plan.md\`.

## Do and don't

**Do**
- Cut corners on the diagonal, ink borders, hard shadows, dashed dividers.
- One filled button, one yellow highlight, one stamp per view.
- Use sun as a fill or highlighter only.
- Keep tilt ≤ 5° on decoration and ≤ 1.4° on cards; never tilt form controls.
- Use real text for every fact; keep decoration \`aria-hidden\`.
- Say when something is sample or unconfirmed.

**Don't**
- Round all four corners, use blurred material shadows, or gradients as fills.
- Put sun-yellow text on paper.
- Use the hand font for anything a person must read to finish a task.
- Use more than two tilted things in a row.
- Hide licence credits.
- Promise trials, placements, contracts, or results.

## Content voice: specific, warm, wry

Sound like a coach who also does the logistics: plain, exact, a little dry, never selling.

- **Specific.** “A $500 deposit holds a place. The balance is due 1 April 2027.” beats “Secure your spot today.”
- **Warm.** Speak to the parent and the player as adults: “You can ask us anything, including the awkward stuff.”
- **Wry.** One dry aside per section, no more: “Tram rides are optional; ice cream is not.” Wry never punches at the reader, the kid, or a club.
- **Honest.** Say what is not confirmed. “Being arranged. Nothing is confirmed yet.”
- **Short.** One idea a sentence. Verbs first on buttons. No exclamation marks.
- **Numbers.** Digits, units and dates in full: “Sun 11 Jul – Sat 24 Jul 2027”, “1:6”, “$4,850”.
- **Errors.** Say what to do next: “Please enter an age between 12 and 17.”
- **Accents.** Málaga, Belém, pastéis de nata. Spell places properly.

### Banned words and phrases

Never on a Rumbo surface: *world-class*, *elite*, *pro pathway*, *academy-grade*, *guaranteed* (anything), *trial*, *scouted*, *placement* (as a promise), *unlock*, *elevate*, *level up*, *next level*, *transformative*, *journey*, *dream*, *passionate*, *seamless*, *cutting-edge*, *game-changer*, *state-of-the-art*, *best-in-class*, *limited spots*, *don't miss out*, *act now*, *sign up today*, *click here*, *submit*, *learn more*, *unforgettable*, *life-changing*, *once in a lifetime*, *the best of the best*, *hurry*, *exclusive*, *premier*, *partner club*/*official partner* (unless true and written), any club or academy name implying affiliation.

Allowed instead: *small*, *coach-led*, *two weeks*, *friendlies*, *sample*, *draft*, *hoped for*, *confirmed*, *we'll write when*, *nothing to pay to sign up*.

## Folder map

\`\`\`
design-system/
  tokens/tokens.json               source of truth (W3C DTCG-style)
  tokens/tokens-studio.json        generated, Tokens Studio import
  tokens/figma-variables.json      generated, Figma Variables payload
  dist/tokens.css|js|d.ts          generated
  scripts/                         build-tokens, verify-tokens, contrast, build-docs, verify-stories, figma-assets
  src/css/                         base, components (from site), ds (additions), fonts
  src/lib/                         behaviors, icons, filters, photos, edges, story helpers
  src/components/<Name>/           .js markup, .stories.js, .mdx
  src/docs/                        Foundations, Accessibility, Usage guide MDX
  docs/                            markdown copies + figma-build-plan.md
  figma-assets/                    SVG exports + page reference PNGs
  screenshots/                     Storybook screenshots + report
  .storybook/                      config
\`\`\`
`,

intro: `# Rumbo Design System Starter

*A travel dispatch pinned to a tactics board.*

Warm paper, ink, azulejo cobalt, Iberian clay, one grass-line yellow. Cut-corner buttons with hard ink shadows, folder tabs, hand-drawn accordion icons, underlined fields, ticket-punch chips, torn edges, boarding passes, receipts, team sheets, stamps and tape, on top of a full Material Design 3 role set.

This is extracted from the real site (\`/soccer-site\`), not invented next to it. Where the site's dark theme or hard-coded colours miss WCAG AA, the DS fixes it and says so.

- **Foundations**: colour (with measured contrast), type, spacing, shape, elevation, motion
- **Accessibility**: WCAG 2.2 AA notes and measurements
- **Usage guide**: install, naming, do/don't, voice
- **Components**: 20, each with variants, states, controls, an Accessibility panel, and a docs page

Use the toolbar to flip **Light / Dark (night train)** and **Motion: reduced**.
`,

docsIndex: `# Docs

Markdown copies of the Storybook pages (the MDX in \`src/\` is the same content).

- [Foundations](foundations.md): [color](foundations-color.md), [typography](foundations-typography.md), [spacing](foundations-spacing.md), [shape](foundations-shape.md), [elevation](foundations-elevation.md), [motion](foundations-motion.md)
- [Accessibility](accessibility.md)
- [Usage guide](usage-guide.md)
- Components: see \`components/\`
- [Figma build plan](figma-build-plan.md)
`,

readme: `# Rumbo Design System Starter

*Travel dispatch pinned to a tactics board.* Tokens, 20 components, docs and Figma-ready assets for the Rumbo Summer 2027 youth soccer travel site. Extracted from \`../index.html\`, \`../styles.css\` and \`../app.js\` (read-only).

## Quick start

\`\`\`bash
npm install
npm run storybook          # http://localhost:6006
npm run build-storybook    # → storybook-static/
npm run serve              # serve the static build on :6007
npm run test:stories       # every story, light + dark, axe + screenshots → screenshots/
npm run tokens             # rebuild dist/ and Figma exports from tokens/tokens.json
npm run verify:tokens      # dist/tokens.css vs ../styles.css
npm run contrast           # measured WCAG contrast for token pairs
npm run docs               # regenerate docs/ and MDX pages
npm run figma-assets       # SVG exports + page reference PNGs → figma-assets/
\`\`\`

## What is here

| Path | What |
| --- | --- |
| \`tokens/tokens.json\` | Single source of truth (W3C DTCG style): colour light/dark, type, space, shape, elevation, motion, z-index, breakpoints |
| \`dist/tokens.css\`, \`tokens.js\`, \`tokens.d.ts\` | Generated CSS custom properties and JS/TS module |
| \`tokens/tokens-studio.json\`, \`tokens/figma-variables.json\` | Generated Figma imports |
| \`src/components/*\` | 20 components: markup function, stories, MDX |
| \`src/docs/*.mdx\`, \`docs/*.md\` | Foundations, Accessibility, Usage guide (both formats) |
| \`docs/figma-build-plan.md\` | What to build in Figma: variables, components, page designs |
| \`figma-assets/\` | SVG icons/stamps/graphics and page-level reference PNGs |
| \`screenshots/\` | Storybook screenshots and the verification report |

## Components

Button · FAB / extended · Top app bar · Nav drawer (ticket stub) · Folder tabs · Card (paper + receipt) · Chip (ticket punch) · Text field · Textarea & select · Accordion · Stepper · Timeline (itinerary day) · Banner · Stamp · Tape & photo frame · Boarding pass · Team sheet & person card · Section divider (torn edge) · Route line · Footer & credits

## Not done / not verified

See "Report" in the final hand-off: no live Figma import was performed, real screen-reader and forced-colors passes are outstanding, and nothing is published.

Fonts: Fraunces, Atkinson Hyperlegible Next, DM Mono and Caveat are bundled from Fontsource (open-licensed). Photos are read from \`../assets/photos/web\` (credits in the footer component and \`assets/photos/CREDITS.md\`).
`
};
