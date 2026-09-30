import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-C4z-K45U.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Foundations/Typography`}),`
`,(0,c.jsx)(t.h1,{id:`typography`,children:`Typography`}),`
`,(0,c.jsx)(t.p,{children:`Four faces, four jobs.`}),`
`,(0,c.jsxs)(t.p,{children:[`| Face | Token | Job | Never |
| --- | --- | --- | --- |
| Fraunces (variable: opsz, wght, SOFT, WONK) | `,(0,c.jsx)(t.code,{children:`--font-display`}),` | Headlines, numerals, drawer links, prices, person names | Long paragraphs |
| Atkinson Hyperlegible Next | `,(0,c.jsx)(t.code,{children:`--font-body`}),` | Body, buttons, form text, nav | — |
| DM Mono | `,(0,c.jsx)(t.code,{children:`--font-label`}),` | Kickers, dates, captions, field labels, stamps (uppercase, tracked) | Sentences longer than a line |
| Caveat | `,(0,c.jsx)(t.code,{children:`--font-hand`}),` | Margin notes: asides that are safe to skip | Anything essential (it is aria-hidden on the site) |`]}),`
`,(0,c.jsx)(t.h2,{id:`scale-m3-roles-mapped-to-our-faces`,children:`Scale (M3 roles mapped to our faces)`}),`
`,(0,c.jsx)(t.p,{children:`| Token | CSS var | Value | Face |
| --- | --- | --- | --- |
| display-large | --md-sys-typescale-display-large | clamp(2.75rem,9.2vw,5.6rem) | display |
| headline-large | --md-sys-typescale-headline-large | clamp(2.1rem,6.2vw,3.5rem) | display |
| headline-medium | --md-sys-typescale-headline-medium | clamp(1.6rem,4.6vw,2.25rem) | display |
| title-large | --md-sys-typescale-title-large | 1.375rem | display |
| title-medium | --md-sys-typescale-title-medium | 1.0625rem | display |
| body-large | --md-sys-typescale-body-large | 1.0625rem | body |
| body-medium | --md-sys-typescale-body-medium | 0.9375rem | body |
| label-large | --md-sys-typescale-label-large | 0.875rem | body |
| label-medium | --md-sys-typescale-label-medium | 0.75rem | label |
| lead | --md-sys-typescale-lead | clamp(1.0625rem,2.6vw,1.25rem) | body |
| caption | --md-sys-typescale-caption | 0.6875rem | label |
| hand | --md-sys-typescale-hand | 1.5rem | hand |`}),`
`,(0,c.jsxs)(t.p,{children:[`Fluid sizes are `,(0,c.jsx)(t.code,{children:`clamp()`}),` values; in Figma use the max value on the 1280 frame and the min on the 390 frame.`]}),`
`,(0,c.jsx)(t.h2,{id:`weights-line-heights-tracking`,children:`Weights, line-heights, tracking`}),`
`,(0,c.jsx)(t.p,{children:`| Token | Value |
| --- | --- |
| weight/regular | 400 |
| weight/medium | 500 |
| weight/semibold | 650 |
| weight/bold | 700 |
| weight/extrabold | 800 |
| leading/display | 0.98 |
| leading/headline | 1.04 |
| leading/title-xl | 1.1 |
| leading/title | 1.2 |
| leading/lead | 1.55 |
| leading/body | 1.6 |
| leading/label | 1 |
| leading/mono | 1.5 |
| tracking/display | -0.025em |
| tracking/headline | -0.02em |
| tracking/title-xl | -0.015em |
| tracking/body | 0 |
| tracking/button | 0.02em |
| tracking/mono | 0.02em |
| tracking/mono-wide | 0.08em |
| tracking/stamp | 0.14em |`}),`
`,(0,c.jsx)(t.h2,{id:`fraunces-axes`,children:`Fraunces axes`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`font-variation-settings`}),` presets: `,(0,c.jsx)(t.strong,{children:`display`}),` `,(0,c.jsx)(t.code,{children:`"SOFT" 40, "WONK" 1`}),`, `,(0,c.jsx)(t.strong,{children:`headline`}),` `,(0,c.jsx)(t.code,{children:`"SOFT" 30, "WONK" 1`}),`, `,(0,c.jsx)(t.strong,{children:`title`}),` `,(0,c.jsx)(t.code,{children:`"SOFT" 50, "WONK" 1`}),`, `,(0,c.jsx)(t.strong,{children:`round`}),` `,(0,c.jsx)(t.code,{children:`"SOFT" 100, "WONK" 1`}),`. SOFT rounds the terminals (100 on numerals and the wordmark), WONK swaps in the leaning h, n, m. Always set `,(0,c.jsx)(t.code,{children:`font-optical-sizing:auto`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`rules`,children:`Rules`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Body copy is 17px (1.0625rem) at 1.6. Do not go below 15px for reading text; mono captions have an 11px floor.`}),`
`,(0,c.jsxs)(t.li,{children:[`Mono is uppercase with 0.02–0.14em tracking. Do not set mono in sentence case except captions marked `,(0,c.jsx)(t.code,{children:`text-transform:none`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`One italic accent per headline: `,(0,c.jsx)(t.code,{children:`<em>`}),` in Fraunces italic, clay, `,(0,c.jsx)(t.code,{children:`white-space:nowrap`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text-wrap:balance`}),` on display and headline.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Highlighter underline: `,(0,c.jsx)(t.code,{children:`.hl`}),` (sun gradient at 58–92% of line height). Text inside stays ink.`]}),`
`]}),`
`,(0,c.jsxs)(`div`,{className:`rumbo`,style:{padding:`28px 24px`,marginTop:16},children:[(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`},children:`display-large · Fraunces 700`}),(0,c.jsxs)(`p`,{className:`display`,children:[`Lisbon to Málaga, `,(0,c.jsx)(`em`,{children:`one ball.`})]}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`headline-large`}),(0,c.jsxs)(`p`,{className:`headline`,children:[`Two coasts, `,(0,c.jsx)(`span`,{className:`hl`,children:`seven days each`})]}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`headline-medium / title-xl`}),(0,c.jsx)(`p`,{className:`title-xl`,children:`Week one: the Lisbon coast`}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`title-large`}),(0,c.jsx)(`p`,{className:`title`,children:`Put your name down`}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`lead / body-large (Atkinson)`}),(0,c.jsx)(`p`,{className:`lead`,children:`Rumbo is a small summer trip for players aged 12 to 17. We train twice a day and eat an unreasonable number of pastéis de nata.`}),(0,c.jsx)(`p`,{style:{marginTop:12},children:`Body large, 17px / 1.6. Hyperlegible letterforms keep 1 / l / I and 0 / O apart.`}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`label · DM Mono uppercase`}),(0,c.jsx)(`p`,{className:`mono`,children:`Sun 11 Jul – Sat 24 Jul 2027 · LIS → AGP`}),(0,c.jsx)(`p`,{className:`mono`,style:{color:`var(--md-sys-color-tertiary)`,marginTop:24},children:`margin note · Caveat 700`}),(0,c.jsx)(`p`,{className:`margin-note`,children:`rumbo (n.): a heading. what you point the boat at.`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};