# Color

Rumbo colour is **paper, ink, and three pens**: cobalt (azulejo tile), clay (roof tile), and one grass-line yellow used like a highlighter. Underneath sits a full Material Design 3 role set, so anything built for M3 maps cleanly.

- Tokens: `color.palette.*` (primitives), `color.light.*`, `color.dark.*` (M3 roles + custom roles), `color.fixed.*` (printed objects that do not change with theme).
- CSS: `--md-sys-color-<role>` (same names as the site), `--rumbo-palette-*`, `--rumbo-<fixed>`.
- Dark theme is **night train**: `#1a1611` ink ground, cream text, the same clay and cobalt lifted to their M3 “dark” tones. Set `data-theme="dark"` (or follow the OS).

## Palette

| Name | Hex | Role |
| --- | --- | --- |
| paper | #f4ecdb | Warm paper. Page background. |
| ink | #221d18 | Ink. Text, borders, hard shadows. |
| cobalt | #1d3b9e | Azulejo cobalt. Primary. |
| clay | #a33f18 | Iberian roof-tile clay. Tertiary / accent. |
| sun | #f3c63d | Grass-line yellow. Used like a highlighter. |
| paper-light | #fbf6ea | Lightest paper (card face, on-primary). |
| night | #1a1611 | Night-train ink. Dark background. |
| night-text | #eee3cc | Dark-mode text on night. |


## Roles: how they are used

- **primary** (cobalt) — links, filled button, selected chip, section “how it works”.
- **tertiary** (clay) — kickers, current-page underline, accent button, stamps, torn-edge on the people band.
- **sun** (custom) — tonal button, FAB, selected tab, match day, focus ring in dark. Never as text on paper.
- **secondary** (warm grey-brown) — day numerals, success banner.
- **surface-container-*** — five paper tones; `lowest` (#fbf6ea) is the “card” paper.
- **inverse-surface** — the cost band (ink in light).
- **Custom roles added by the DS:** `highlight-on-primary`, `on-primary-muted`, `sun-outline` (see Accessibility for why).

## Measured contrast: light

| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `#221d18` on `#f4ecdb` · on-surface / surface | 14.22:1 | 4.5:1 (text) | AAA | Body text on page |
| `#5a4f42` on `#f4ecdb` · on-surface-variant / surface | 6.79:1 | 4.5:1 (text) | AA | Lead paragraphs, hints, labels |
| `#5a4f42` on `#fbf6ea` · on-surface-variant / surface-container-lowest | 7.40:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `#5a4f42` on `#efe6d2` · on-surface-variant / surface-container-low | 6.43:1 | 4.5:1 (text) | AA | Text on Sample fortnight band |
| `#221d18` on `#fbf6ea` · on-surface / surface-container-lowest | 15.49:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `#1d3b9e` on `#f4ecdb` · primary / surface | 8.23:1 | 4.5:1 (text) | AAA | Links |
| `#fbf6ea` on `#1d3b9e` · on-primary / primary | 8.97:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `#d9e0f8` on `#1d3b9e` · on-primary-muted / primary | 7.35:1 | 4.5:1 (text) | AAA | Stepper body on cobalt |
| `#f3c63d` on `#1d3b9e` · highlight-on-primary / primary | 5.97:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `#0c1a4d` on `#d9e0f8` · on-primary-container / primary-container | 12.57:1 | 4.5:1 (text) | AAA | Info banner |
| `#2b241b` on `#e8dcc3` · on-secondary-container / secondary-container | 11.27:1 | 4.5:1 (text) | AAA | Success banner |
| `#a33f18` on `#f4ecdb` · tertiary / surface | 5.44:1 | 4.5:1 (text) | AA | Mono kickers, margin notes, drawer numbers |
| `#a33f18` on `#fbf6ea` · tertiary / surface-container-lowest | 5.93:1 | 4.5:1 (text) | AA | Sheet kicker, day date |
| `#fffaf2` on `#a33f18` · on-tertiary / tertiary | 6.16:1 | 4.5:1 (text) | AA | Accent button |
| `#3a1204` on `#f6d5c4` · on-tertiary-container / tertiary-container | 12.01:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `#a33f18` on `#f6d5c4` · tertiary / tertiary-container | 4.64:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `#221d18` on `#f3c63d` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `#3a2c00` on `#f8e7ab` · on-sun-container / sun-container | 11.04:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `#a33f18` on `#f8e7ab` · tertiary / sun-container | 5.18:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `#221d18` on `#f8e7ab` · on-surface / sun-container | 13.53:1 | 4.5:1 (text) | AAA | Headline on form band |
| `#ba1a1a` on `#f4ecdb` · error / surface | 5.50:1 | 4.5:1 (text) | AA | Field error text |
| `#ba1a1a` on `#fbf6ea` · error / surface-container-lowest | 5.99:1 | 4.5:1 (text) | AA | Field error text inside form card |
| `#ffffff` on `#ba1a1a` · on-error / error | 6.46:1 | 4.5:1 (text) | AA | "!" badge |
| `#410002` on `#ffdad6` · on-error-container / error-container | 13.26:1 | 4.5:1 (text) | AAA | Error banner |
| `#7d6f5b` on `#f4ecdb` · outline / surface | 4.16:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `#ffffff` on `#2a241d` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 15.34:1 | 3:1 (large text) | AA | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `#221d18` on `#f4ecdb` · on-surface / surface (border) | 14.22:1 | 3:1 (UI) | AA | Field underline, button border |
| `#d3c7ae` on `#f4ecdb` · outline-variant / surface | 1.42:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `#f4ecdb` on `#2a241d` · inverse-on-surface / inverse-surface | 13.06:1 | 4.5:1 (text) | AAA | Cost band |
| `#f3c63d` on `#2a241d` · sun / inverse-surface | 9.47:1 | 3:1 (large text) | AA | Section numeral on ink |
| `#1d3b9e` on `#f4ecdb` · primary / surface (focus ring) | 8.23:1 | 3:1 (UI) | AA | Focus ring, light theme |
| `#f3c63d` on `#1d3b9e` · sun / primary (focus ring on cobalt panel) | 5.97:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `#a49d91` on `#f4ecdb` · on-surface (disabled 38%) / surface | 2.29:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `#221d18` on `#fbf6ea` · receipt-ink / receipt-paper | 15.49:1 | 4.5:1 (text) | AAA | Receipt body |
| `#5a4f42` on `#fbf6ea` · receipt-muted / receipt-paper | 7.40:1 | 4.5:1 (text) | AAA | Receipt kicker/foot |
| `#a33f18` on `#fbf6ea` · receipt-accent / receipt-paper | 5.93:1 | 4.5:1 (text) | AA | Receipt sub line |
| `#f4ecdb` on `#221d18` · footer-on / footer-bg | 14.22:1 | 4.5:1 (text) | AAA | Footer body |
| `#d8ccb4` on `#221d18` · footer-body / footer-bg | 10.51:1 | 4.5:1 (text) | AAA | Disclaimer, credits |
| `#cfc2a9` on `#221d18` · footer-muted / footer-bg | 9.50:1 | 4.5:1 (text) | AAA | Credits note |
| `#b9ab91` on `#221d18` · footer-fine / footer-bg | 7.40:1 | 4.5:1 (text) | AAA | Fine print |
| `#e9865c` on `#221d18` · footer-accent / footer-bg | 6.39:1 | 4.5:1 (text) | AA | Footer tag |
| `#f8e7ab` on `#221d18` · footer-link / footer-bg | 13.53:1 | 4.5:1 (text) | AAA | Footer links |
| `#d9e0f8` on `#1d3b9e` · paper / cobalt (site: primary-container on primary) | 7.35:1 | 4.5:1 (text) | AAA | Site stepper body colour (for reference) |


## Measured contrast: dark (night train)

| Pair (fg / bg) | Ratio | Needs | Result | Where it is used |
| --- | --- | --- | --- | --- |
| `#eee3cc` on `#1a1611` · on-surface / surface | 14.14:1 | 4.5:1 (text) | AAA | Body text on page |
| `#cfc2a9` on `#1a1611` · on-surface-variant / surface | 10.24:1 | 4.5:1 (text) | AAA | Lead paragraphs, hints, labels |
| `#cfc2a9` on `#14110d` · on-surface-variant / surface-container-lowest | 10.70:1 | 4.5:1 (text) | AAA | Captions on cards, sheet footer |
| `#cfc2a9` on `#211c16` · on-surface-variant / surface-container-low | 9.61:1 | 4.5:1 (text) | AAA | Text on Sample fortnight band |
| `#eee3cc` on `#14110d` · on-surface / surface-container-lowest | 14.78:1 | 4.5:1 (text) | AAA | Text on cards, form |
| `#a9bbff` on `#1a1611` · primary / surface | 9.63:1 | 4.5:1 (text) | AAA | Links |
| `#0c1a4d` on `#a9bbff` · on-primary / primary | 8.85:1 | 4.5:1 (text) | AAA | Filled button, chosen chip |
| `#1b2f7a` on `#a9bbff` · on-primary-muted / primary | 6.48:1 | 4.5:1 (text) | AA | Stepper body on cobalt |
| `#0c1a4d` on `#a9bbff` · highlight-on-primary / primary | 8.85:1 | 3:1 (large text) | AA | Step numerals on cobalt |
| `#dbe2ff` on `#25409f` · on-primary-container / primary-container | 7.06:1 | 4.5:1 (text) | AAA | Info banner |
| `#f0e4cb` on `#4a4034` · on-secondary-container / secondary-container | 8.03:1 | 4.5:1 (text) | AAA | Success banner |
| `#ffb595` on `#1a1611` · tertiary / surface | 10.54:1 | 4.5:1 (text) | AAA | Mono kickers, margin notes, drawer numbers |
| `#ffb595` on `#14110d` · tertiary / surface-container-lowest | 11.02:1 | 4.5:1 (text) | AAA | Sheet kicker, day date |
| `#4a1600` on `#ffb595` · on-tertiary / tertiary | 8.75:1 | 4.5:1 (text) | AAA | Accent button |
| `#ffdbcd` on `#7a2c0c` · on-tertiary-container / tertiary-container | 7.42:1 | 4.5:1 (text) | AAA | Banner, care list, people band |
| `#ffb595` on `#7a2c0c` · tertiary / tertiary-container | 5.61:1 | 3:1 (UI) | AA | Banner icon, dashed border |
| `#221d18` on `#f3c63d` · on-sun / sun | 10.31:1 | 4.5:1 (text) | AAA | Tonal button, FAB |
| `#fbe9a8` on `#5b4a10` · on-sun-container / sun-container | 7.12:1 | 4.5:1 (text) | AAA | Selected tab, match day, leg panel |
| `#ffb595` on `#5b4a10` · tertiary / sun-container | 5.06:1 | 4.5:1 (text) | AA | Boarding-pass kicker |
| `#eee3cc` on `#5b4a10` · on-surface / sun-container | 6.78:1 | 4.5:1 (text) | AA | Headline on form band |
| `#ffb4ab` on `#1a1611` · error / surface | 10.60:1 | 4.5:1 (text) | AAA | Field error text |
| `#ffb4ab` on `#14110d` · error / surface-container-lowest | 11.09:1 | 4.5:1 (text) | AAA | Field error text inside form card |
| `#690005` on `#ffb4ab` · on-error / error | 7.72:1 | 4.5:1 (text) | AAA | "!" badge |
| `#ffdad6` on `#93000a` · on-error-container / error-container | 7.24:1 | 4.5:1 (text) | AAA | Error banner |
| `#9a8c76` on `#1a1611` · outline / surface | 5.47:1 | 3:1 (UI) | AA | Card outline, input borders (3:1 needed) |
| `#ffffff` on `#eee3cc` · white (#fff) / inverse-surface (SITE: .section--cost .headline) | 1.27:1 | 3:1 (large text) | FAIL | Cost headline hard-codes #fff; fine on light ink band, fails when dark theme turns the band cream |
| `#eee3cc` on `#1a1611` · on-surface / surface (border) | 14.14:1 | 3:1 (UI) | AA | Field underline, button border |
| `#4a4034` on `#1a1611` · outline-variant / surface | 1.78:1 | 3:1 (UI) | FAIL | DECORATIVE ONLY: dashed dividers, map dots |
| `#2a241d` on `#eee3cc` · inverse-on-surface / inverse-surface | 12.05:1 | 4.5:1 (text) | AAA | Cost band |
| `#f3c63d` on `#eee3cc` · sun / inverse-surface (SITE BUG in dark) | 1.27:1 | 3:1 (large text) | FAIL | Site keeps a sun numeral + #fff headline on the Cost band; in dark the band turns cream (inverse-surface), so both fail. DS receipt/inverse panels use fixed ink instead. |
| `#f3c63d` on `#1a1611` · sun / surface (focus ring) | 11.10:1 | 3:1 (UI) | AA | Focus ring, dark theme |
| `#f3c63d` on `#25409f` · sun / primary (focus ring on cobalt panel) | 5.60:1 | 3:1 (UI) | AA | Focus ring on cobalt sections (light) / primary-container (dark) |
| `#6b6458` on `#1a1611` · on-surface (disabled 38%) / surface | 3.08:1 | exempt | n/a | Disabled controls are exempt from 1.4.3 |
| `#25409f` on `#a9bbff` · site: primary-container on primary (dark, for reference) | 4.86:1 | 4.5:1 (text) | AA | What the site does in dark for stepper body: fails, DS uses on-primary-muted |


Ratios are WCAG 2.x relative-luminance contrast computed by `npm run contrast` from the token values. Targets: 4.5:1 body text, 3:1 large text (≥24px or ≥18.66px bold) and UI/graphics. `outline-variant` is decorative (dashed rules) and is never the only cue for a control.

## Things the DS changed versus the site

The DS extracts what the site does, then fixes places where the site's dark theme or hard-coded colours break contrast. Each change is a named token so it can be reversed.

| Where | Site does | DS does | Why |
| --- | --- | --- | --- |
| Dark error | keeps `#ba1a1a` on `#1a1611` (~2.9:1) | M3 dark error `#ffb4ab` (+ on-, container roles) | 1.4.3 |
| Receipt | `background: surface-container-lowest; color:#221d18`: in dark the paper turns near-black under ink text | `--rumbo-receipt-*` fixed paper/ink | It is a printed object. |
| Stepper / cobalt panel | title `#fff`, body `primary-container`, numerals `sun` | `on-primary`, `on-primary-muted`, `highlight-on-primary` | In dark the panel becomes `#a9bbff`; white and sun fail on it. |
| Cost band headline | `#fff` + sun numeral on `inverse-surface` | `inverse-on-surface` / fixed ink | In dark `inverse-surface` is cream. |
| Mono captions | 9.6–10.6px | 11px floor | Legibility for 12–17 year olds reading on phones. |
| Focus ring in dark | sun on all surfaces | same, plus sun on cobalt/ink panels in light | 3:1 vs the surface it sits on. |

Everything else (all 77 light roles and 34 dark overrides) is byte-identical to `styles.css`; `npm run verify:tokens` checks it.
