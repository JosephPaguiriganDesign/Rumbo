import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-B22--VfG.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Usage guide`}),`
`,(0,c.jsx)(t.h1,{id:`usage-guide`,children:`Usage guide`}),`
`,(0,c.jsx)(t.h2,{id:`install-and-consume-tokens`,children:`Install and consume tokens`}),`
`,(0,c.jsxs)(t.p,{children:[`The DS is a folder next to the site (`,(0,c.jsx)(t.code,{children:`design-system/`}),`). Nothing is published. The site is not modified by it.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`cd design-system
npm install
npm run tokens          # tokens/tokens.json  →  dist/tokens.css, dist/tokens.js, dist/tokens.d.ts,
                        #                        tokens/tokens-studio.json, tokens/figma-variables.json
npm run verify:tokens   # compares dist/tokens.css with ../styles.css
npm run storybook       # dev server on :6006
npm run build-storybook # static build in storybook-static/
npm run test:stories    # loads every story (light+dark) in Chrome, runs axe, takes screenshots
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`CSS:`}),` `,(0,c.jsx)(t.code,{children:`<link rel="stylesheet" href="design-system/dist/tokens.css">`}),`, then use `,(0,c.jsx)(t.code,{children:`var(--md-sys-color-primary)`}),`, `,(0,c.jsx)(t.code,{children:`var(--md-sys-shape-corner-medium)`}),`, `,(0,c.jsx)(t.code,{children:`var(--rumbo-space-4)`}),` etc. Set `,(0,c.jsx)(t.code,{children:`data-theme="dark"`}),` on `,(0,c.jsx)(t.code,{children:`<html>`}),` (or any element) to force night train; without it the OS preference is used.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`JS/TS:`}),` `,(0,c.jsx)(t.code,{children:`import { tokens, colorLight, colorDark, cssVars } from './design-system/dist/tokens.js'`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Components:`}),` copy the CSS from `,(0,c.jsx)(t.code,{children:`src/css/components.css`}),` + `,(0,c.jsx)(t.code,{children:`src/css/ds.css`}),` (or import them) and the markup from the component's `,(0,c.jsx)(t.code,{children:`.js`}),` file. Behaviour lives in `,(0,c.jsx)(t.code,{children:`src/lib/behaviors.js`}),` (one delegated listener set for tabs, accordion, drawer, form errors). Shared SVG filters (`,(0,c.jsx)(t.code,{children:`#wobble`}),`, `,(0,c.jsx)(t.code,{children:`#wear`}),`, `,(0,c.jsx)(t.code,{children:`#azul`}),`) come from `,(0,c.jsx)(t.code,{children:`src/lib/filters.js`}),` and must be in the document once.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tokens are the single source of truth.`}),` Edit `,(0,c.jsx)(t.code,{children:`tokens/tokens.json`}),`, run `,(0,c.jsx)(t.code,{children:`npm run tokens`}),`, never edit `,(0,c.jsx)(t.code,{children:`dist/*`}),` or `,(0,c.jsx)(t.code,{children:`tokens/tokens-studio.json`}),` / `,(0,c.jsx)(t.code,{children:`figma-variables.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`naming`,children:`Naming`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`M3 roles keep M3 names: `,(0,c.jsx)(t.code,{children:`--md-sys-color-*`}),`, `,(0,c.jsx)(t.code,{children:`--md-sys-typescale-*`}),`, `,(0,c.jsx)(t.code,{children:`--md-sys-shape-corner-*`}),`, `,(0,c.jsx)(t.code,{children:`--md-sys-elevation-*`}),`, `,(0,c.jsx)(t.code,{children:`--md-sys-motion-*`}),`, `,(0,c.jsx)(t.code,{children:`--md-sys-state-*`}),`. These match the site exactly.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Anything Rumbo-specific is `,(0,c.jsx)(t.code,{children:`--rumbo-*`}),` (space, weights, tracking, fixed print colours, z-index, breakpoints), or one of the site's historical short names: `,(0,c.jsx)(t.code,{children:`--font-display|body|label|hand`}),`, `,(0,c.jsx)(t.code,{children:`--shape-cut`}),`, `,(0,c.jsx)(t.code,{children:`--shape-cut-alt`}),`, `,(0,c.jsx)(t.code,{children:`--soft-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--bar-h`}),`, `,(0,c.jsx)(t.code,{children:`--gutter`}),`, `,(0,c.jsx)(t.code,{children:`--max`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Component classes are BEM: `,(0,c.jsx)(t.code,{children:`.block`}),`, `,(0,c.jsx)(t.code,{children:`.block__element`}),`, `,(0,c.jsx)(t.code,{children:`.block--modifier`}),`; state uses `,(0,c.jsx)(t.code,{children:`.is-*`}),` (`,(0,c.jsx)(t.code,{children:`is-invalid`}),`, `,(0,c.jsx)(t.code,{children:`is-open`}),`) or ARIA attributes (`,(0,c.jsx)(t.code,{children:`[aria-expanded="true"]`}),`, `,(0,c.jsx)(t.code,{children:`[aria-current]`}),`). Prefer ARIA attributes for state that assistive tech needs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`.state`}),` adds the M3 state layer to any interactive thing. `,(0,c.jsx)(t.code,{children:`.mono`}),` is the label voice.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`add-a-component`,children:`Add a component`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Look at what the site does. Find the pattern in `,(0,c.jsx)(t.code,{children:`styles.css`}),` / `,(0,c.jsx)(t.code,{children:`index.html`}),`. If it does not exist, ask whether it should.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Make `,(0,c.jsx)(t.code,{children:`src/components/<Name>/<Name>.js`}),` exporting a function that returns a string of HTML (props in, markup out, correct roles).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Put CSS in `,(0,c.jsx)(t.code,{children:`src/css/ds.css`}),` (or `,(0,c.jsx)(t.code,{children:`components.css`}),` if it is verbatim from the site). Use only tokens; no new hex values. If you need one, add it to `,(0,c.jsx)(t.code,{children:`tokens.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Write `,(0,c.jsx)(t.code,{children:`<Name>.stories.js`}),`: `,(0,c.jsx)(t.code,{children:`Default`}),`, a `,(0,c.jsx)(t.code,{children:`Variants`}),` story, a `,(0,c.jsx)(t.code,{children:`States`}),` story (use `,(0,c.jsx)(t.code,{children:`.is-hover`}),`, `,(0,c.jsx)(t.code,{children:`.is-focus`}),`, `,(0,c.jsx)(t.code,{children:`.is-pressed`}),`, disabled, error), controls for each prop.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Add the docs entry to `,(0,c.jsx)(t.code,{children:`scripts/component-docs.mjs`}),` (props, do/don't, a11y, measured contrast). `,(0,c.jsx)(t.code,{children:`npm run docs`}),` writes the MDX page and the markdown copy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`npm run build-storybook && npm run test:stories`}),`. Fix axe. Look at the screenshot in both themes.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Add the component to `,(0,c.jsx)(t.code,{children:`docs/figma-build-plan.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`do-and-dont`,children:`Do and don't`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Do`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Cut corners on the diagonal, ink borders, hard shadows, dashed dividers.`}),`
`,(0,c.jsx)(t.li,{children:`One filled button, one yellow highlight, one stamp per view.`}),`
`,(0,c.jsx)(t.li,{children:`Use sun as a fill or highlighter only.`}),`
`,(0,c.jsx)(t.li,{children:`Keep tilt ≤ 5° on decoration and ≤ 1.4° on cards; never tilt form controls.`}),`
`,(0,c.jsxs)(t.li,{children:[`Use real text for every fact; keep decoration `,(0,c.jsx)(t.code,{children:`aria-hidden`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Say when something is sample or unconfirmed.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Don't`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Round all four corners, use blurred material shadows, or gradients as fills.`}),`
`,(0,c.jsx)(t.li,{children:`Put sun-yellow text on paper.`}),`
`,(0,c.jsx)(t.li,{children:`Use the hand font for anything a person must read to finish a task.`}),`
`,(0,c.jsx)(t.li,{children:`Use more than two tilted things in a row.`}),`
`,(0,c.jsx)(t.li,{children:`Hide licence credits.`}),`
`,(0,c.jsx)(t.li,{children:`Promise trials, placements, contracts, or results.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`content-voice-specific-warm-wry`,children:`Content voice: specific, warm, wry`}),`
`,(0,c.jsx)(t.p,{children:`Sound like a coach who also does the logistics: plain, exact, a little dry, never selling.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specific.`}),` “A $500 deposit holds a place. The balance is due 1 April 2027.” beats “Secure your spot today.”`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Warm.`}),` Speak to the parent and the player as adults: “You can ask us anything, including the awkward stuff.”`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Wry.`}),` One dry aside per section, no more: “Tram rides are optional; ice cream is not.” Wry never punches at the reader, the kid, or a club.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Honest.`}),` Say what is not confirmed. “Being arranged. Nothing is confirmed yet.”`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Short.`}),` One idea a sentence. Verbs first on buttons. No exclamation marks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Numbers.`}),` Digits, units and dates in full: “Sun 11 Jul – Sat 24 Jul 2027”, “1:6”, “$4,850”.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Errors.`}),` Say what to do next: “Please enter an age between 12 and 17.”`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Accents.`}),` Málaga, Belém, pastéis de nata. Spell places properly.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`banned-words-and-phrases`,children:`Banned words and phrases`}),`
`,(0,c.jsxs)(t.p,{children:[`Never on a Rumbo surface: `,(0,c.jsx)(t.em,{children:`world-class`}),`, `,(0,c.jsx)(t.em,{children:`elite`}),`, `,(0,c.jsx)(t.em,{children:`pro pathway`}),`, `,(0,c.jsx)(t.em,{children:`academy-grade`}),`, `,(0,c.jsx)(t.em,{children:`guaranteed`}),` (anything), `,(0,c.jsx)(t.em,{children:`trial`}),`, `,(0,c.jsx)(t.em,{children:`scouted`}),`, `,(0,c.jsx)(t.em,{children:`placement`}),` (as a promise), `,(0,c.jsx)(t.em,{children:`unlock`}),`, `,(0,c.jsx)(t.em,{children:`elevate`}),`, `,(0,c.jsx)(t.em,{children:`level up`}),`, `,(0,c.jsx)(t.em,{children:`next level`}),`, `,(0,c.jsx)(t.em,{children:`transformative`}),`, `,(0,c.jsx)(t.em,{children:`journey`}),`, `,(0,c.jsx)(t.em,{children:`dream`}),`, `,(0,c.jsx)(t.em,{children:`passionate`}),`, `,(0,c.jsx)(t.em,{children:`seamless`}),`, `,(0,c.jsx)(t.em,{children:`cutting-edge`}),`, `,(0,c.jsx)(t.em,{children:`game-changer`}),`, `,(0,c.jsx)(t.em,{children:`state-of-the-art`}),`, `,(0,c.jsx)(t.em,{children:`best-in-class`}),`, `,(0,c.jsx)(t.em,{children:`limited spots`}),`, `,(0,c.jsx)(t.em,{children:`don't miss out`}),`, `,(0,c.jsx)(t.em,{children:`act now`}),`, `,(0,c.jsx)(t.em,{children:`sign up today`}),`, `,(0,c.jsx)(t.em,{children:`click here`}),`, `,(0,c.jsx)(t.em,{children:`submit`}),`, `,(0,c.jsx)(t.em,{children:`learn more`}),`, `,(0,c.jsx)(t.em,{children:`unforgettable`}),`, `,(0,c.jsx)(t.em,{children:`life-changing`}),`, `,(0,c.jsx)(t.em,{children:`once in a lifetime`}),`, `,(0,c.jsx)(t.em,{children:`the best of the best`}),`, `,(0,c.jsx)(t.em,{children:`hurry`}),`, `,(0,c.jsx)(t.em,{children:`exclusive`}),`, `,(0,c.jsx)(t.em,{children:`premier`}),`, `,(0,c.jsx)(t.em,{children:`partner club`}),`/`,(0,c.jsx)(t.em,{children:`official partner`}),` (unless true and written), any club or academy name implying affiliation.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Allowed instead: `,(0,c.jsx)(t.em,{children:`small`}),`, `,(0,c.jsx)(t.em,{children:`coach-led`}),`, `,(0,c.jsx)(t.em,{children:`two weeks`}),`, `,(0,c.jsx)(t.em,{children:`friendlies`}),`, `,(0,c.jsx)(t.em,{children:`sample`}),`, `,(0,c.jsx)(t.em,{children:`draft`}),`, `,(0,c.jsx)(t.em,{children:`hoped for`}),`, `,(0,c.jsx)(t.em,{children:`confirmed`}),`, `,(0,c.jsx)(t.em,{children:`we'll write when`}),`, `,(0,c.jsx)(t.em,{children:`nothing to pay to sign up`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`folder-map`,children:`Folder map`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`design-system/
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};