import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-C4z-K45U.js";import{n as o,r as s,t as c}from"./tokens-D0IX_VUT.js";function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Foundations/Color`}),`
`,(0,d.jsx)(t.h1,{id:`color`,children:`Color`}),`
`,(0,d.jsxs)(t.p,{children:[`Rumbo colour is `,(0,d.jsx)(t.strong,{children:`paper, ink, and three pens`}),`: cobalt (azulejo tile), clay (roof tile), and one grass-line yellow used like a highlighter. Underneath sits a full Material Design 3 role set, so anything built for M3 maps cleanly.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Tokens: `,(0,d.jsx)(t.code,{children:`color.palette.*`}),` (primitives), `,(0,d.jsx)(t.code,{children:`color.light.*`}),`, `,(0,d.jsx)(t.code,{children:`color.dark.*`}),` (M3 roles + custom roles), `,(0,d.jsx)(t.code,{children:`color.fixed.*`}),` (printed objects that do not change with theme).`]}),`
`,(0,d.jsxs)(t.li,{children:[`CSS: `,(0,d.jsx)(t.code,{children:`--md-sys-color-<role>`}),` (same names as the site), `,(0,d.jsx)(t.code,{children:`--rumbo-palette-*`}),`, `,(0,d.jsx)(t.code,{children:`--rumbo-<fixed>`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Dark theme is `,(0,d.jsx)(t.strong,{children:`night train`}),`: `,(0,d.jsx)(t.code,{children:`#1a1611`}),` ink ground, cream text, the same clay and cobalt lifted to their M3 “dark” tones. Set `,(0,d.jsx)(t.code,{children:`data-theme="dark"`}),` (or follow the OS).`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`palette`,children:`Palette`}),`
`,(0,d.jsx)(t.p,{children:`| Name | Hex | Role |
| --- | --- | --- |
| paper | #f4ecdb | Warm paper. Page background. |
| ink | #221d18 | Ink. Text, borders, hard shadows. |
| cobalt | #1d3b9e | Azulejo cobalt. Primary. |
| clay | #a33f18 | Iberian roof-tile clay. Tertiary / accent. |
| sun | #f3c63d | Grass-line yellow. Used like a highlighter. |
| paper-light | #fbf6ea | Lightest paper (card face, on-primary). |
| night | #1a1611 | Night-train ink. Dark background. |
| night-text | #eee3cc | Dark-mode text on night. |`}),`
`,(0,d.jsx)(t.h2,{id:`roles-how-they-are-used`,children:`Roles: how they are used`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`primary`}),` (cobalt) — links, filled button, selected chip, section “how it works”.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`tertiary`}),` (clay) — kickers, current-page underline, accent button, stamps, torn-edge on the people band.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`sun`}),` (custom) — tonal button, FAB, selected tab, match day, focus ring in dark. Never as text on paper.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`secondary`}),` (warm grey-brown) — day numerals, success banner.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`surface-container-`}),`* — five paper tones; `,(0,d.jsx)(t.code,{children:`lowest`}),` (#fbf6ea) is the “card” paper.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`inverse-surface`}),` — the cost band (ink in light).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Custom roles added by the DS:`}),` `,(0,d.jsx)(t.code,{children:`highlight-on-primary`}),`, `,(0,d.jsx)(t.code,{children:`on-primary-muted`}),`, `,(0,d.jsx)(t.code,{children:`sun-outline`}),` (see Accessibility for why).`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`measured-contrast-light`,children:`Measured contrast: light`}),`
`,(0,d.jsxs)(t.p,{children:[`| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface / surface | 14.22:1 | 4.5:1 (text) | AAA | Body text on page |
| `,(0,d.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface-variant / surface | 6.79:1 | 4.5:1 (text) | AA | Lead paragraphs, hints, labels |
| `,(0,d.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · on-surface-variant / surface-container-lowest | 7.40:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `,(0,d.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,d.jsx)(t.code,{children:`#efe6d2`}),` · on-surface-variant / surface-container-low | 6.43:1 | 4.5:1 (text) | AA | Text on Sample fortnight band |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · on-surface / surface-container-lowest | 15.49:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · primary / surface | 8.23:1 | 4.5:1 (text) | AAA | Links |
| `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` on `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` · on-primary / primary | 8.97:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `,(0,d.jsx)(t.code,{children:`#d9e0f8`}),` on `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` · on-primary-muted / primary | 7.35:1 | 4.5:1 (text) | AAA | Stepper body on cobalt |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` · highlight-on-primary / primary | 5.97:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `,(0,d.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,d.jsx)(t.code,{children:`#d9e0f8`}),` · on-primary-container / primary-container | 12.57:1 | 4.5:1 (text) | AAA | Info banner |
| `,(0,d.jsx)(t.code,{children:`#2b241b`}),` on `,(0,d.jsx)(t.code,{children:`#e8dcc3`}),` · on-secondary-container / secondary-container | 11.27:1 | 4.5:1 (text) | AAA | Success banner |
| `,(0,d.jsx)(t.code,{children:`#a33f18`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · tertiary / surface | 5.44:1 | 4.5:1 (text) | AA | Mono kickers, margin notes, drawer numbers |
| `,(0,d.jsx)(t.code,{children:`#a33f18`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · tertiary / surface-container-lowest | 5.93:1 | 4.5:1 (text) | AA | Sheet kicker, day date |
| `,(0,d.jsx)(t.code,{children:`#fffaf2`}),` on `,(0,d.jsx)(t.code,{children:`#a33f18`}),` · on-tertiary / tertiary | 6.16:1 | 4.5:1 (text) | AA | Accent button |
| `,(0,d.jsx)(t.code,{children:`#3a1204`}),` on `,(0,d.jsx)(t.code,{children:`#f6d5c4`}),` · on-tertiary-container / tertiary-container | 12.01:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `,(0,d.jsx)(t.code,{children:`#a33f18`}),` on `,(0,d.jsx)(t.code,{children:`#f6d5c4`}),` · tertiary / tertiary-container | 4.64:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `,(0,d.jsx)(t.code,{children:`#3a2c00`}),` on `,(0,d.jsx)(t.code,{children:`#f8e7ab`}),` · on-sun-container / sun-container | 11.04:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `,(0,d.jsx)(t.code,{children:`#a33f18`}),` on `,(0,d.jsx)(t.code,{children:`#f8e7ab`}),` · tertiary / sun-container | 5.18:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#f8e7ab`}),` · on-surface / sun-container | 13.53:1 | 4.5:1 (text) | AAA | Headline on form band |
| `,(0,d.jsx)(t.code,{children:`#ba1a1a`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · error / surface | 5.50:1 | 4.5:1 (text) | AA | Field error text |
| `,(0,d.jsx)(t.code,{children:`#ba1a1a`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · error / surface-container-lowest | 5.99:1 | 4.5:1 (text) | AA | Field error text inside form card |
| `,(0,d.jsx)(t.code,{children:`#ffffff`}),` on `,(0,d.jsx)(t.code,{children:`#ba1a1a`}),` · on-error / error | 6.46:1 | 4.5:1 (text) | AA | "!" badge |
| `,(0,d.jsx)(t.code,{children:`#410002`}),` on `,(0,d.jsx)(t.code,{children:`#ffdad6`}),` · on-error-container / error-container | 13.26:1 | 4.5:1 (text) | AAA | Error banner |
| `,(0,d.jsx)(t.code,{children:`#7d6f5b`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · outline / surface | 4.16:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `,(0,d.jsx)(t.code,{children:`#ffffff`}),` on `,(0,d.jsx)(t.code,{children:`#2a241d`}),` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 15.34:1 | 3:1 (large text) | AA | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface / surface (border) | 14.22:1 | 3:1 (UI) | AA | Field underline, button border |
| `,(0,d.jsx)(t.code,{children:`#d3c7ae`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · outline-variant / surface | 1.42:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` on `,(0,d.jsx)(t.code,{children:`#2a241d`}),` · inverse-on-surface / inverse-surface | 13.06:1 | 4.5:1 (text) | AAA | Cost band |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#2a241d`}),` · sun / inverse-surface | 9.47:1 | 3:1 (large text) | AA | Section numeral on ink |
| `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · primary / surface (focus ring) | 8.23:1 | 3:1 (UI) | AA | Focus ring, light theme |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` · sun / primary (focus ring on cobalt panel) | 5.97:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `,(0,d.jsx)(t.code,{children:`#a49d91`}),` on `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface (disabled 38%) / surface | 2.29:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-ink / receipt-paper | 15.49:1 | 4.5:1 (text) | AAA | Receipt body |
| `,(0,d.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-muted / receipt-paper | 7.40:1 | 4.5:1 (text) | AAA | Receipt kicker/foot |
| `,(0,d.jsx)(t.code,{children:`#a33f18`}),` on `,(0,d.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-accent / receipt-paper | 5.93:1 | 4.5:1 (text) | AA | Receipt sub line |
| `,(0,d.jsx)(t.code,{children:`#f4ecdb`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-on / footer-bg | 14.22:1 | 4.5:1 (text) | AAA | Footer body |
| `,(0,d.jsx)(t.code,{children:`#d8ccb4`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-body / footer-bg | 10.51:1 | 4.5:1 (text) | AAA | Disclaimer, credits |
| `,(0,d.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-muted / footer-bg | 9.50:1 | 4.5:1 (text) | AAA | Credits note |
| `,(0,d.jsx)(t.code,{children:`#b9ab91`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-fine / footer-bg | 7.40:1 | 4.5:1 (text) | AAA | Fine print |
| `,(0,d.jsx)(t.code,{children:`#e9865c`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-accent / footer-bg | 6.39:1 | 4.5:1 (text) | AA | Footer tag |
| `,(0,d.jsx)(t.code,{children:`#f8e7ab`}),` on `,(0,d.jsx)(t.code,{children:`#221d18`}),` · footer-link / footer-bg | 13.53:1 | 4.5:1 (text) | AAA | Footer links |
| `,(0,d.jsx)(t.code,{children:`#d9e0f8`}),` on `,(0,d.jsx)(t.code,{children:`#1d3b9e`}),` · paper / cobalt (site: primary-container on primary) | 7.35:1 | 4.5:1 (text) | AAA | Site stepper body colour (for reference) |`]}),`
`,(0,d.jsx)(t.h2,{id:`measured-contrast-dark-night-train`,children:`Measured contrast: dark (night train)`}),`
`,(0,d.jsxs)(t.p,{children:[`| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · on-surface / surface | 14.14:1 | 4.5:1 (text) | AAA | Body text on page |
| `,(0,d.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · on-surface-variant / surface | 10.24:1 | 4.5:1 (text) | AAA | Lead paragraphs, hints, labels |
| `,(0,d.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,d.jsx)(t.code,{children:`#14110d`}),` · on-surface-variant / surface-container-lowest | 10.70:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `,(0,d.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,d.jsx)(t.code,{children:`#211c16`}),` · on-surface-variant / surface-container-low | 9.61:1 | 4.5:1 (text) | AAA | Text on Sample fortnight band |
| `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,d.jsx)(t.code,{children:`#14110d`}),` · on-surface / surface-container-lowest | 14.78:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `,(0,d.jsx)(t.code,{children:`#a9bbff`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · primary / surface | 9.63:1 | 4.5:1 (text) | AAA | Links |
| `,(0,d.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,d.jsx)(t.code,{children:`#a9bbff`}),` · on-primary / primary | 8.85:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `,(0,d.jsx)(t.code,{children:`#1b2f7a`}),` on `,(0,d.jsx)(t.code,{children:`#a9bbff`}),` · on-primary-muted / primary | 6.48:1 | 4.5:1 (text) | AA | Stepper body on cobalt |
| `,(0,d.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,d.jsx)(t.code,{children:`#a9bbff`}),` · highlight-on-primary / primary | 8.85:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `,(0,d.jsx)(t.code,{children:`#dbe2ff`}),` on `,(0,d.jsx)(t.code,{children:`#25409f`}),` · on-primary-container / primary-container | 7.06:1 | 4.5:1 (text) | AAA | Info banner |
| `,(0,d.jsx)(t.code,{children:`#f0e4cb`}),` on `,(0,d.jsx)(t.code,{children:`#4a4034`}),` · on-secondary-container / secondary-container | 8.03:1 | 4.5:1 (text) | AAA | Success banner |
| `,(0,d.jsx)(t.code,{children:`#ffb595`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · tertiary / surface | 10.54:1 | 4.5:1 (text) | AAA | Mono kickers, margin notes, drawer numbers |
| `,(0,d.jsx)(t.code,{children:`#ffb595`}),` on `,(0,d.jsx)(t.code,{children:`#14110d`}),` · tertiary / surface-container-lowest | 11.02:1 | 4.5:1 (text) | AAA | Sheet kicker, day date |
| `,(0,d.jsx)(t.code,{children:`#4a1600`}),` on `,(0,d.jsx)(t.code,{children:`#ffb595`}),` · on-tertiary / tertiary | 8.75:1 | 4.5:1 (text) | AAA | Accent button |
| `,(0,d.jsx)(t.code,{children:`#ffdbcd`}),` on `,(0,d.jsx)(t.code,{children:`#7a2c0c`}),` · on-tertiary-container / tertiary-container | 7.42:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `,(0,d.jsx)(t.code,{children:`#ffb595`}),` on `,(0,d.jsx)(t.code,{children:`#7a2c0c`}),` · tertiary / tertiary-container | 5.61:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `,(0,d.jsx)(t.code,{children:`#221d18`}),` on `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `,(0,d.jsx)(t.code,{children:`#fbe9a8`}),` on `,(0,d.jsx)(t.code,{children:`#5b4a10`}),` · on-sun-container / sun-container | 7.12:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `,(0,d.jsx)(t.code,{children:`#ffb595`}),` on `,(0,d.jsx)(t.code,{children:`#5b4a10`}),` · tertiary / sun-container | 5.06:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,d.jsx)(t.code,{children:`#5b4a10`}),` · on-surface / sun-container | 6.78:1 | 4.5:1 (text) | AA | Headline on form band |
| `,(0,d.jsx)(t.code,{children:`#ffb4ab`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · error / surface | 10.60:1 | 4.5:1 (text) | AAA | Field error text |
| `,(0,d.jsx)(t.code,{children:`#ffb4ab`}),` on `,(0,d.jsx)(t.code,{children:`#14110d`}),` · error / surface-container-lowest | 11.09:1 | 4.5:1 (text) | AAA | Field error text inside form card |
| `,(0,d.jsx)(t.code,{children:`#690005`}),` on `,(0,d.jsx)(t.code,{children:`#ffb4ab`}),` · on-error / error | 7.72:1 | 4.5:1 (text) | AAA | "!" badge |
| `,(0,d.jsx)(t.code,{children:`#ffdad6`}),` on `,(0,d.jsx)(t.code,{children:`#93000a`}),` · on-error-container / error-container | 7.24:1 | 4.5:1 (text) | AAA | Error banner |
| `,(0,d.jsx)(t.code,{children:`#9a8c76`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · outline / surface | 5.47:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `,(0,d.jsx)(t.code,{children:`#ffffff`}),` on `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 1.27:1 | 3:1 (large text) | FAIL | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · on-surface / surface (border) | 14.14:1 | 3:1 (UI) | AA | Field underline, button border |
| `,(0,d.jsx)(t.code,{children:`#4a4034`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · outline-variant / surface | 1.78:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `,(0,d.jsx)(t.code,{children:`#2a241d`}),` on `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` · inverse-on-surface / inverse-surface | 12.05:1 | 4.5:1 (text) | AAA | Cost band |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#eee3cc`}),` · sun / inverse-surface (SITE BUG in dark) | 1.27:1 | 3:1 (large text) | FAIL | Site keeps a sun numeral + #fff headline on the Cost band; in dark the band turns cream (inverse-surface), so both fail. DS receipt/inverse panels use fixed ink instead. |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · sun / surface (focus ring) | 11.10:1 | 3:1 (UI) | AA | Focus ring, dark theme |
| `,(0,d.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,d.jsx)(t.code,{children:`#25409f`}),` · sun / primary (focus ring on cobalt panel) | 5.60:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `,(0,d.jsx)(t.code,{children:`#6b6458`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` · on-surface (disabled 38%) / surface | 3.08:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `,(0,d.jsx)(t.code,{children:`#25409f`}),` on `,(0,d.jsx)(t.code,{children:`#a9bbff`}),` · site: primary-container on primary (dark, for reference) | 4.86:1 | 4.5:1 (text) | AA | What the site does in dark for stepper body: fails, DS uses on-primary-muted |`]}),`
`,(0,d.jsxs)(t.p,{children:[`Ratios are WCAG 2.x relative-luminance contrast computed by `,(0,d.jsx)(t.code,{children:`npm run contrast`}),` from the token values. Targets: 4.5:1 body text, 3:1 large text (≥24px or ≥18.66px bold) and UI/graphics. `,(0,d.jsx)(t.code,{children:`outline-variant`}),` is decorative (dashed rules) and is never the only cue for a control.`]}),`
`,(0,d.jsx)(t.h2,{id:`things-the-ds-changed-versus-the-site`,children:`Things the DS changed versus the site`}),`
`,(0,d.jsx)(t.p,{children:`The DS extracts what the site does, then fixes places where the site's dark theme or hard-coded colours break contrast. Each change is a named token so it can be reversed.`}),`
`,(0,d.jsxs)(t.p,{children:[`| Where | Site does | DS does | Why |
| --- | --- | --- | --- |
| Dark error | keeps `,(0,d.jsx)(t.code,{children:`#ba1a1a`}),` on `,(0,d.jsx)(t.code,{children:`#1a1611`}),` (~2.9:1) | M3 dark error `,(0,d.jsx)(t.code,{children:`#ffb4ab`}),` (+ on-, container roles) | 1.4.3 |
| Receipt | `,(0,d.jsx)(t.code,{children:`background: surface-container-lowest; color:#221d18`}),`: in dark the paper turns near-black under ink text | `,(0,d.jsx)(t.code,{children:`--rumbo-receipt-*`}),` fixed paper/ink | It is a printed object. |
| Stepper / cobalt panel | title `,(0,d.jsx)(t.code,{children:`#fff`}),`, body `,(0,d.jsx)(t.code,{children:`primary-container`}),`, numerals `,(0,d.jsx)(t.code,{children:`sun`}),` | `,(0,d.jsx)(t.code,{children:`on-primary`}),`, `,(0,d.jsx)(t.code,{children:`on-primary-muted`}),`, `,(0,d.jsx)(t.code,{children:`highlight-on-primary`}),` | In dark the panel becomes `,(0,d.jsx)(t.code,{children:`#a9bbff`}),`; white and sun fail on it. |
| Cost band headline | `,(0,d.jsx)(t.code,{children:`#fff`}),` + sun numeral on `,(0,d.jsx)(t.code,{children:`inverse-surface`}),` | `,(0,d.jsx)(t.code,{children:`inverse-on-surface`}),` / fixed ink | In dark `,(0,d.jsx)(t.code,{children:`inverse-surface`}),` is cream. |
| Mono captions | 9.6–10.6px | 11px floor | Legibility for 12–17 year olds reading on phones. |
| Focus ring in dark | sun on all surfaces | same, plus sun on cobalt/ink panels in light | 3:1 vs the surface it sits on. |`]}),`
`,(0,d.jsxs)(t.p,{children:[`Everything else (all 77 light roles and 34 dark overrides) is byte-identical to `,(0,d.jsx)(t.code,{children:`styles.css`}),`; `,(0,d.jsx)(t.code,{children:`npm run verify:tokens`}),` checks it.`]}),`
`,`
`,(0,d.jsxs)(`div`,{className:`rumbo`,"data-theme":`light`,style:{padding:20,marginTop:16},children:[(0,d.jsx)(`div`,{className:`sb-label`,children:`Light: day dispatch`}),(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill,minmax(150px,1fr))`,gap:10,marginTop:10},children:f.filter(e=>!e.startsWith(`on-`)&&!e.includes(`-on-`)).map(e=>(0,d.jsxs)(`div`,{style:{border:`1.5px solid #221d18`,background:o[e],color:o[`on-`+e]||`#221d18`,padding:`10px 10px 26px`,fontFamily:`var(--font-label)`,fontSize:11,minHeight:78},children:[(0,d.jsx)(`b`,{children:e}),(0,d.jsx)(`br`,{}),o[e]]},e))})]}),`
`,(0,d.jsxs)(`div`,{className:`rumbo`,"data-theme":`dark`,style:{padding:20,marginTop:16},children:[(0,d.jsx)(`div`,{className:`sb-label`,children:`Dark: night train`}),(0,d.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill,minmax(150px,1fr))`,gap:10,marginTop:10},children:f.filter(e=>!e.startsWith(`on-`)&&!e.includes(`-on-`)).map(e=>(0,d.jsxs)(`div`,{style:{border:`1.5px solid #eee3cc`,background:c[e],color:c[`on-`+e]||`#eee3cc`,padding:`10px 10px 26px`,fontFamily:`var(--font-label)`,fontSize:11,minHeight:78},children:[(0,d.jsx)(`b`,{children:e}),(0,d.jsx)(`br`,{}),c[e]]},e))})]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d,f;function p(){return(p=e((()=>{d=t(),r(),i(),s(),f=Object.keys(o)})))()}p();export{u as default,f as roles};