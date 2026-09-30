import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-B22--VfG.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Accessibility`}),`
`,(0,c.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Target: WCAG 2.2 Level AA`}),`, plus the bits of AAA that are cheap (7:1 body text, 48dp targets, no motion-only meaning). Everything here was measured from the token values or tested in the built Storybook.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-contrast-measured`,children:`1. Contrast (measured)`}),`
`,(0,c.jsxs)(t.p,{children:[`Computed by `,(0,c.jsx)(t.code,{children:`npm run contrast`}),` (WCAG relative luminance, no rounding up). Text needs 4.5:1, large text (≥24px, or ≥18.66px bold) and UI components/graphics need 3:1.`]}),`
`,(0,c.jsx)(t.h3,{id:`light-day-dispatch`,children:`Light: day dispatch`}),`
`,(0,c.jsxs)(t.p,{children:[`| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface / surface | 14.22:1 | 4.5:1 (text) | AAA | Body text on page |
| `,(0,c.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface-variant / surface | 6.79:1 | 4.5:1 (text) | AA | Lead paragraphs, hints, labels |
| `,(0,c.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · on-surface-variant / surface-container-lowest | 7.40:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `,(0,c.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,c.jsx)(t.code,{children:`#efe6d2`}),` · on-surface-variant / surface-container-low | 6.43:1 | 4.5:1 (text) | AA | Text on Sample fortnight band |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · on-surface / surface-container-lowest | 15.49:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · primary / surface | 8.23:1 | 4.5:1 (text) | AAA | Links |
| `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` on `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` · on-primary / primary | 8.97:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `,(0,c.jsx)(t.code,{children:`#d9e0f8`}),` on `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` · on-primary-muted / primary | 7.35:1 | 4.5:1 (text) | AAA | Stepper body on cobalt |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` · highlight-on-primary / primary | 5.97:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `,(0,c.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,c.jsx)(t.code,{children:`#d9e0f8`}),` · on-primary-container / primary-container | 12.57:1 | 4.5:1 (text) | AAA | Info banner |
| `,(0,c.jsx)(t.code,{children:`#2b241b`}),` on `,(0,c.jsx)(t.code,{children:`#e8dcc3`}),` · on-secondary-container / secondary-container | 11.27:1 | 4.5:1 (text) | AAA | Success banner |
| `,(0,c.jsx)(t.code,{children:`#a33f18`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · tertiary / surface | 5.44:1 | 4.5:1 (text) | AA | Mono kickers, margin notes, drawer numbers |
| `,(0,c.jsx)(t.code,{children:`#a33f18`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · tertiary / surface-container-lowest | 5.93:1 | 4.5:1 (text) | AA | Sheet kicker, day date |
| `,(0,c.jsx)(t.code,{children:`#fffaf2`}),` on `,(0,c.jsx)(t.code,{children:`#a33f18`}),` · on-tertiary / tertiary | 6.16:1 | 4.5:1 (text) | AA | Accent button |
| `,(0,c.jsx)(t.code,{children:`#3a1204`}),` on `,(0,c.jsx)(t.code,{children:`#f6d5c4`}),` · on-tertiary-container / tertiary-container | 12.01:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `,(0,c.jsx)(t.code,{children:`#a33f18`}),` on `,(0,c.jsx)(t.code,{children:`#f6d5c4`}),` · tertiary / tertiary-container | 4.64:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `,(0,c.jsx)(t.code,{children:`#3a2c00`}),` on `,(0,c.jsx)(t.code,{children:`#f8e7ab`}),` · on-sun-container / sun-container | 11.04:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `,(0,c.jsx)(t.code,{children:`#a33f18`}),` on `,(0,c.jsx)(t.code,{children:`#f8e7ab`}),` · tertiary / sun-container | 5.18:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#f8e7ab`}),` · on-surface / sun-container | 13.53:1 | 4.5:1 (text) | AAA | Headline on form band |
| `,(0,c.jsx)(t.code,{children:`#ba1a1a`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · error / surface | 5.50:1 | 4.5:1 (text) | AA | Field error text |
| `,(0,c.jsx)(t.code,{children:`#ba1a1a`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · error / surface-container-lowest | 5.99:1 | 4.5:1 (text) | AA | Field error text inside form card |
| `,(0,c.jsx)(t.code,{children:`#ffffff`}),` on `,(0,c.jsx)(t.code,{children:`#ba1a1a`}),` · on-error / error | 6.46:1 | 4.5:1 (text) | AA | "!" badge |
| `,(0,c.jsx)(t.code,{children:`#410002`}),` on `,(0,c.jsx)(t.code,{children:`#ffdad6`}),` · on-error-container / error-container | 13.26:1 | 4.5:1 (text) | AAA | Error banner |
| `,(0,c.jsx)(t.code,{children:`#7d6f5b`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · outline / surface | 4.16:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `,(0,c.jsx)(t.code,{children:`#ffffff`}),` on `,(0,c.jsx)(t.code,{children:`#2a241d`}),` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 15.34:1 | 3:1 (large text) | AA | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface / surface (border) | 14.22:1 | 3:1 (UI) | AA | Field underline, button border |
| `,(0,c.jsx)(t.code,{children:`#d3c7ae`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · outline-variant / surface | 1.42:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` on `,(0,c.jsx)(t.code,{children:`#2a241d`}),` · inverse-on-surface / inverse-surface | 13.06:1 | 4.5:1 (text) | AAA | Cost band |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#2a241d`}),` · sun / inverse-surface | 9.47:1 | 3:1 (large text) | AA | Section numeral on ink |
| `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · primary / surface (focus ring) | 8.23:1 | 3:1 (UI) | AA | Focus ring, light theme |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` · sun / primary (focus ring on cobalt panel) | 5.97:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `,(0,c.jsx)(t.code,{children:`#a49d91`}),` on `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` · on-surface (disabled 38%) / surface | 2.29:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-ink / receipt-paper | 15.49:1 | 4.5:1 (text) | AAA | Receipt body |
| `,(0,c.jsx)(t.code,{children:`#5a4f42`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-muted / receipt-paper | 7.40:1 | 4.5:1 (text) | AAA | Receipt kicker/foot |
| `,(0,c.jsx)(t.code,{children:`#a33f18`}),` on `,(0,c.jsx)(t.code,{children:`#fbf6ea`}),` · receipt-accent / receipt-paper | 5.93:1 | 4.5:1 (text) | AA | Receipt sub line |
| `,(0,c.jsx)(t.code,{children:`#f4ecdb`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-on / footer-bg | 14.22:1 | 4.5:1 (text) | AAA | Footer body |
| `,(0,c.jsx)(t.code,{children:`#d8ccb4`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-body / footer-bg | 10.51:1 | 4.5:1 (text) | AAA | Disclaimer, credits |
| `,(0,c.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-muted / footer-bg | 9.50:1 | 4.5:1 (text) | AAA | Credits note |
| `,(0,c.jsx)(t.code,{children:`#b9ab91`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-fine / footer-bg | 7.40:1 | 4.5:1 (text) | AAA | Fine print |
| `,(0,c.jsx)(t.code,{children:`#e9865c`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-accent / footer-bg | 6.39:1 | 4.5:1 (text) | AA | Footer tag |
| `,(0,c.jsx)(t.code,{children:`#f8e7ab`}),` on `,(0,c.jsx)(t.code,{children:`#221d18`}),` · footer-link / footer-bg | 13.53:1 | 4.5:1 (text) | AAA | Footer links |
| `,(0,c.jsx)(t.code,{children:`#d9e0f8`}),` on `,(0,c.jsx)(t.code,{children:`#1d3b9e`}),` · paper / cobalt (site: primary-container on primary) | 7.35:1 | 4.5:1 (text) | AAA | Site stepper body colour (for reference) |`]}),`
`,(0,c.jsx)(t.h3,{id:`dark-night-train`,children:`Dark: night train`}),`
`,(0,c.jsxs)(t.p,{children:[`| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · on-surface / surface | 14.14:1 | 4.5:1 (text) | AAA | Body text on page |
| `,(0,c.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · on-surface-variant / surface | 10.24:1 | 4.5:1 (text) | AAA | Lead paragraphs, hints, labels |
| `,(0,c.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,c.jsx)(t.code,{children:`#14110d`}),` · on-surface-variant / surface-container-lowest | 10.70:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `,(0,c.jsx)(t.code,{children:`#cfc2a9`}),` on `,(0,c.jsx)(t.code,{children:`#211c16`}),` · on-surface-variant / surface-container-low | 9.61:1 | 4.5:1 (text) | AAA | Text on Sample fortnight band |
| `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,c.jsx)(t.code,{children:`#14110d`}),` · on-surface / surface-container-lowest | 14.78:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `,(0,c.jsx)(t.code,{children:`#a9bbff`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · primary / surface | 9.63:1 | 4.5:1 (text) | AAA | Links |
| `,(0,c.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,c.jsx)(t.code,{children:`#a9bbff`}),` · on-primary / primary | 8.85:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `,(0,c.jsx)(t.code,{children:`#1b2f7a`}),` on `,(0,c.jsx)(t.code,{children:`#a9bbff`}),` · on-primary-muted / primary | 6.48:1 | 4.5:1 (text) | AA | Stepper body on cobalt |
| `,(0,c.jsx)(t.code,{children:`#0c1a4d`}),` on `,(0,c.jsx)(t.code,{children:`#a9bbff`}),` · highlight-on-primary / primary | 8.85:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `,(0,c.jsx)(t.code,{children:`#dbe2ff`}),` on `,(0,c.jsx)(t.code,{children:`#25409f`}),` · on-primary-container / primary-container | 7.06:1 | 4.5:1 (text) | AAA | Info banner |
| `,(0,c.jsx)(t.code,{children:`#f0e4cb`}),` on `,(0,c.jsx)(t.code,{children:`#4a4034`}),` · on-secondary-container / secondary-container | 8.03:1 | 4.5:1 (text) | AAA | Success banner |
| `,(0,c.jsx)(t.code,{children:`#ffb595`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · tertiary / surface | 10.54:1 | 4.5:1 (text) | AAA | Mono kickers, margin notes, drawer numbers |
| `,(0,c.jsx)(t.code,{children:`#ffb595`}),` on `,(0,c.jsx)(t.code,{children:`#14110d`}),` · tertiary / surface-container-lowest | 11.02:1 | 4.5:1 (text) | AAA | Sheet kicker, day date |
| `,(0,c.jsx)(t.code,{children:`#4a1600`}),` on `,(0,c.jsx)(t.code,{children:`#ffb595`}),` · on-tertiary / tertiary | 8.75:1 | 4.5:1 (text) | AAA | Accent button |
| `,(0,c.jsx)(t.code,{children:`#ffdbcd`}),` on `,(0,c.jsx)(t.code,{children:`#7a2c0c`}),` · on-tertiary-container / tertiary-container | 7.42:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `,(0,c.jsx)(t.code,{children:`#ffb595`}),` on `,(0,c.jsx)(t.code,{children:`#7a2c0c`}),` · tertiary / tertiary-container | 5.61:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `,(0,c.jsx)(t.code,{children:`#221d18`}),` on `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `,(0,c.jsx)(t.code,{children:`#fbe9a8`}),` on `,(0,c.jsx)(t.code,{children:`#5b4a10`}),` · on-sun-container / sun-container | 7.12:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `,(0,c.jsx)(t.code,{children:`#ffb595`}),` on `,(0,c.jsx)(t.code,{children:`#5b4a10`}),` · tertiary / sun-container | 5.06:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,c.jsx)(t.code,{children:`#5b4a10`}),` · on-surface / sun-container | 6.78:1 | 4.5:1 (text) | AA | Headline on form band |
| `,(0,c.jsx)(t.code,{children:`#ffb4ab`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · error / surface | 10.60:1 | 4.5:1 (text) | AAA | Field error text |
| `,(0,c.jsx)(t.code,{children:`#ffb4ab`}),` on `,(0,c.jsx)(t.code,{children:`#14110d`}),` · error / surface-container-lowest | 11.09:1 | 4.5:1 (text) | AAA | Field error text inside form card |
| `,(0,c.jsx)(t.code,{children:`#690005`}),` on `,(0,c.jsx)(t.code,{children:`#ffb4ab`}),` · on-error / error | 7.72:1 | 4.5:1 (text) | AAA | "!" badge |
| `,(0,c.jsx)(t.code,{children:`#ffdad6`}),` on `,(0,c.jsx)(t.code,{children:`#93000a`}),` · on-error-container / error-container | 7.24:1 | 4.5:1 (text) | AAA | Error banner |
| `,(0,c.jsx)(t.code,{children:`#9a8c76`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · outline / surface | 5.47:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `,(0,c.jsx)(t.code,{children:`#ffffff`}),` on `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 1.27:1 | 3:1 (large text) | FAIL | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · on-surface / surface (border) | 14.14:1 | 3:1 (UI) | AA | Field underline, button border |
| `,(0,c.jsx)(t.code,{children:`#4a4034`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · outline-variant / surface | 1.78:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `,(0,c.jsx)(t.code,{children:`#2a241d`}),` on `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` · inverse-on-surface / inverse-surface | 12.05:1 | 4.5:1 (text) | AAA | Cost band |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#eee3cc`}),` · sun / inverse-surface (SITE BUG in dark) | 1.27:1 | 3:1 (large text) | FAIL | Site keeps a sun numeral + #fff headline on the Cost band; in dark the band turns cream (inverse-surface), so both fail. DS receipt/inverse panels use fixed ink instead. |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · sun / surface (focus ring) | 11.10:1 | 3:1 (UI) | AA | Focus ring, dark theme |
| `,(0,c.jsx)(t.code,{children:`#f3c63d`}),` on `,(0,c.jsx)(t.code,{children:`#25409f`}),` · sun / primary (focus ring on cobalt panel) | 5.60:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `,(0,c.jsx)(t.code,{children:`#6b6458`}),` on `,(0,c.jsx)(t.code,{children:`#1a1611`}),` · on-surface (disabled 38%) / surface | 3.08:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `,(0,c.jsx)(t.code,{children:`#25409f`}),` on `,(0,c.jsx)(t.code,{children:`#a9bbff`}),` · site: primary-container on primary (dark, for reference) | 4.86:1 | 4.5:1 (text) | AA | What the site does in dark for stepper body: fails, DS uses on-primary-muted |`]}),`
`,(0,c.jsx)(t.p,{children:`Reading the tables:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AAA`}),` = ≥7:1 for text. `,(0,c.jsx)(t.strong,{children:`AA`}),` = passes its target. `,(0,c.jsx)(t.strong,{children:`FAIL`}),` rows are either decorative (`,(0,c.jsx)(t.code,{children:`outline-variant`}),`) or documented site issues the DS replaces (see Foundations / Color).`]}),`
`,(0,c.jsx)(t.li,{children:`Disabled controls are exempt from 1.4.3 but stay legible (38% ink label).`}),`
`,(0,c.jsxs)(t.li,{children:[`Never put `,(0,c.jsx)(t.strong,{children:`sun`}),` text on paper (1.4:1). Sun is a fill, a highlighter, or a focus ring on dark or cobalt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Clay on paper`}),` is 5.4:1: fine for text, but mono at 11px in clay is only for kickers of 3+ words, never for the only copy of a fact.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`2-focus`,children:`2. Focus`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`:focus-visible`}),` = `,(0,c.jsx)(t.strong,{children:`3px solid ring, 3px offset`}),`, colour `,(0,c.jsx)(t.code,{children:`primary`}),` (cobalt, 8.2:1 on paper), switching to `,(0,c.jsx)(t.strong,{children:`sun`}),` on dark surfaces and on cobalt/ink panels. Ring contrast is measured above (≥5.6:1 everywhere).`]}),`
`,(0,c.jsx)(t.li,{children:`Fields do not use the ring: focus paints a 3px cobalt underline, a yellow wash and a shadow line (cobalt 8.2:1 vs paper).`}),`
`,(0,c.jsxs)(t.li,{children:[`Tabs and accordion headers use an `,(0,c.jsx)(t.strong,{children:`inset`}),` ring (−3px) so it is not clipped by overflow.`]}),`
`,(0,c.jsx)(t.li,{children:`The state layer (currentColor at 12%) is additive. Focus never relies on it alone.`}),`
`,(0,c.jsxs)(t.li,{children:[`Sticky app bar + drawer: `,(0,c.jsx)(t.code,{children:`scroll-padding-top: bar-h + 16px`}),` keeps focused elements from hiding under the bar (2.4.11 Focus Not Obscured).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Never `,(0,c.jsx)(t.code,{children:`outline:none`}),` without a replacement.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`3-target-size-258`,children:`3. Target size (2.5.8)`}),`
`,(0,c.jsxs)(t.p,{children:[`WCAG 2.2 AA asks for 24×24 CSS px. Rumbo holds `,(0,c.jsx)(t.strong,{children:`48dp`}),`: buttons 48/56, small button 40 + 4px hit-area extension, menu button 48, chips 56, accordion header 64, drawer links 56, tabs 56, close buttons 48×48, credits summary 48. Inline text links inside sentences are exempt but underlined and thick on hover.`]}),`
`,(0,c.jsx)(t.h2,{id:`4-keyboard-patterns`,children:`4. Keyboard patterns`}),`
`,(0,c.jsxs)(t.p,{children:[`| Component | Keys |
| --- | --- |
| Button / link | Enter (link, button), Space (button) |
| Folder tabs | ← → ↑ ↓ move + select, Home / End; only the selected tab is in the tab order; Tab moves into the panel |
| Accordion | Enter / Space toggle; ↑ ↓ Home End between headers |
| Drawer | Opens from Menu; focus goes to Close; Tab and Shift+Tab loop; Escape closes; focus returns to Menu; also closes if the viewport passes 900px |
| Choice chips | Native radio: arrows move within group, Space selects; checkbox: Space |
| Text fields | Native. Enter submits the form; invalid submit moves focus to the first invalid field |
| Credits | `,(0,c.jsx)(t.code,{children:`<summary>`}),`: Enter / Space |
| Skip link | First Tab on every page → “Skip to content” |`]}),`
`,(0,c.jsx)(t.h2,{id:`5-reduced-motion-233-222`,children:`5. Reduced motion (2.3.3, 2.2.2)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefers-reduced-motion: reduce`}),`: transitions/animations set to 0.01ms, smooth scroll off, reveals shown immediately, tactics board arrows and map route drawn in one step, FAB does not slide.`]}),`
`,(0,c.jsx)(t.li,{children:`Nothing flashes. Nothing auto-plays. The only continuous motion is scroll-linked (route line) and it is fully replaced by the final state.`}),`
`,(0,c.jsxs)(t.li,{children:[`Storybook: toolbar `,(0,c.jsx)(t.strong,{children:`Motion: reduced`}),` applies the rule to any story.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`6-images-alt-text-and-photo-credit-rules`,children:`6. Images, alt text and photo credit rules`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Every `,(0,c.jsx)(t.code,{children:`<img>`}),` has an `,(0,c.jsx)(t.code,{children:`alt`}),` that says what is in the frame: “Tamariz beach and pier on the Estoril coast”. No “photo of”, no keyword stuffing, no place-name-only alts.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The visible caption (“Tamariz beach, Estoril coast”) is `,(0,c.jsx)(t.strong,{children:`not`}),` the alt: it may repeat the place, never the whole description.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Decorative pieces (tape, halftone, torn edges, dotted route, stamps' texture) are CSS or `,(0,c.jsx)(t.code,{children:`aria-hidden`}),` SVG.`]}),`
`,(0,c.jsxs)(t.li,{children:[`SVG illustrations that carry meaning (tactics board, map, stamps) use `,(0,c.jsx)(t.code,{children:`role="img"`}),` with a sentence label.`]}),`
`,(0,c.jsx)(t.li,{children:`Text is never baked into a photo.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Credit every photo`}),` in the footer credits list: author, licence link, source link. CC BY-SA requires attribution; CC0 does not but we credit anyway. `,(0,c.jsx)(t.code,{children:`assets/photos/CREDITS.md`}),` is the source of truth.`]}),`
`,(0,c.jsx)(t.li,{children:`Duotone/halftone is applied in CSS on top of the untouched file, and the credits note says photos are shown in a two-colour treatment.`}),`
`,(0,c.jsx)(t.li,{children:`No identifiable minors without written consent. No club logos or stadium shots that imply a partnership.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`6b-text-alternatives-for-the-effects`,children:`6b. Text alternatives for the effects`}),`
`,(0,c.jsxs)(t.p,{children:[`Mix-blend and filter effects have no accessible name; the underlying content does. If `,(0,c.jsx)(t.code,{children:`mix-blend-mode`}),` is unsupported the `,(0,c.jsx)(t.code,{children:`<img>`}),` still shows with its border and caption.`]}),`
`,(0,c.jsx)(t.h2,{id:`7-forms-and-errors`,children:`7. Forms and errors`}),`
`,(0,c.jsxs)(t.p,{children:[`Pattern (matches `,(0,c.jsx)(t.code,{children:`setInvalid()`}),` in app.js):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Every field has a visible `,(0,c.jsx)(t.code,{children:`<label for>`}),`. Placeholder is never the label.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Required fields are announced (“(required)” in `,(0,c.jsx)(t.code,{children:`sr-only`}),`), and `,(0,c.jsx)(t.code,{children:`required`}),` is set; `,(0,c.jsx)(t.code,{children:`novalidate`}),` on the form so we control the message.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Hints are linked by `,(0,c.jsx)(t.code,{children:`aria-describedby`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`On submit, each invalid field gets: `,(0,c.jsx)(t.code,{children:`aria-invalid="true"`}),`, a visible message (“Please enter a valid email address.”) with a “!” badge, a 3px error underline. Colour is never the only signal.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Focus moves to the `,(0,c.jsx)(t.strong,{children:`first`}),` invalid field. A `,(0,c.jsx)(t.code,{children:`role="status"`}),` line summarises (“Something needs another look”).`]}),`
`,(0,c.jsx)(t.li,{children:`Errors clear as soon as the field becomes valid, not on every keystroke before.`}),`
`,(0,c.jsx)(t.li,{children:`Message copy: say what to do, not what the user did wrong. “Please enter an age between 12 and 17.”`}),`
`,(0,c.jsxs)(t.li,{children:[`Groups (chips): error is linked to the `,(0,c.jsx)(t.code,{children:`<fieldset>`}),` via `,(0,c.jsx)(t.code,{children:`aria-describedby`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Success/neutral notes use `,(0,c.jsx)(t.code,{children:`role="status"`}),`; only genuine errors use `,(0,c.jsx)(t.code,{children:`role="alert"`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Inputs use correct `,(0,c.jsx)(t.code,{children:`type`}),` and `,(0,c.jsx)(t.code,{children:`autocomplete`}),` (2.1 / 1.3.5).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`8-screen-reader-notes`,children:`8. Screen reader notes`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Landmarks: skip link, `,(0,c.jsx)(t.code,{children:`header`}),`, `,(0,c.jsx)(t.code,{children:`nav`}),` (Primary), `,(0,c.jsx)(t.code,{children:`main`}),`, `,(0,c.jsx)(t.code,{children:`nav`}),` (Mobile, inside the drawer), `,(0,c.jsx)(t.code,{children:`footer`}),`. Two navs are distinguished by label.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Heading order: one h1 (display), h2 per section, h3 for cards/steps/days. Components take a `,(0,c.jsx)(t.code,{children:`headingLevel`}),` where needed.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Big decorative numerals (`,(0,c.jsx)(t.code,{children:`01`}),`, step rings, day numbers) are `,(0,c.jsx)(t.code,{children:`aria-hidden`}),`: the order is carried by `,(0,c.jsx)(t.code,{children:`<ol>`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Wobbly SVG filters and worn ink are visual only.`}),`
`,(0,c.jsxs)(t.li,{children:[`Stamp, map, tactics board: `,(0,c.jsx)(t.code,{children:`role="img"`}),` with a full-sentence label; inner text is not read.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The hero boarding pass is a labelled `,(0,c.jsx)(t.code,{children:`role="group"`}),` so its parts read as one thing.`]}),`
`,(0,c.jsx)(t.li,{children:`Tabs and accordion follow the WAI-ARIA Authoring Practices exactly, so VoiceOver/NVDA/JAWS announce “tab 1 of 2” and “expanded / collapsed”.`}),`
`,(0,c.jsxs)(t.li,{children:[`Drawer: `,(0,c.jsx)(t.code,{children:`role="dialog" aria-modal="true"`}),` on a `,(0,c.jsx)(t.code,{children:`div`}),` (axe rejects it on `,(0,c.jsx)(t.code,{children:`aside`}),`); background is not inert in the site; recommended to add `,(0,c.jsx)(t.code,{children:`inert`}),` to `,(0,c.jsx)(t.code,{children:`main`}),` while open.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`9-other-rules`,children:`9. Other rules`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Language: `,(0,c.jsx)(t.code,{children:`<html lang="en">`}),`; wrap Spanish/Portuguese phrases of more than a word in `,(0,c.jsx)(t.code,{children:`lang="es"`}),` / `,(0,c.jsx)(t.code,{children:`"pt"`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Zoom: layouts reflow at 320px width and 400% zoom without horizontal scroll (1.4.10). Line length capped at 34–46em.`}),`
`,(0,c.jsx)(t.li,{children:`Text spacing (1.4.12): no fixed-height text containers.`}),`
`,(0,c.jsxs)(t.li,{children:[`Forced colors: focus ring becomes `,(0,c.jsx)(t.code,{children:`Highlight`}),`; buttons keep `,(0,c.jsx)(t.code,{children:`ButtonText`}),` border; shadows are decoration.`]}),`
`,(0,c.jsx)(t.li,{children:`Print: fixed bar, FAB and drawer are hidden.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`10-automated-results`,children:`10. Automated results`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`Run `,(0,c.jsx)(t.code,{children:`npm run test:stories`}),` to generate the axe summary.`]})}),`
`,(0,c.jsxs)(t.p,{children:[`Automated tools find roughly a third of issues. `,(0,c.jsx)(t.strong,{children:`Not covered by tooling:`}),` real screen-reader passes, voice control, 400% zoom, forced-colors mode and real touch devices. Do those before publishing.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run it yourself: in Storybook open any story and use the `,(0,c.jsx)(t.strong,{children:`Accessibility`}),` panel, or `,(0,c.jsx)(t.code,{children:`npm run build-storybook && npm run test:stories`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};