# Typography

Four faces, four jobs.

| Face | Token | Job | Never |
| --- | --- | --- | --- |
| Fraunces (variable: opsz, wght, SOFT, WONK) | `--font-display` | Headlines, numerals, drawer links, prices, person names | Long paragraphs |
| Atkinson Hyperlegible Next | `--font-body` | Body, buttons, form text, nav | — |
| DM Mono | `--font-label` | Kickers, dates, captions, field labels, stamps (uppercase, tracked) | Sentences longer than a line |
| Caveat | `--font-hand` | Margin notes: asides that are safe to skip | Anything essential (it is aria-hidden on the site) |


## Scale (M3 roles mapped to our faces)

| Token | CSS var | Value | Face |
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
| hand | --md-sys-typescale-hand | 1.5rem | hand |


Fluid sizes are `clamp()` values; in Figma use the max value on the 1280 frame and the min on the 390 frame.

## Weights, line-heights, tracking

| Token | Value |
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
| tracking/stamp | 0.14em |


## Fraunces axes

`font-variation-settings` presets: **display** `"SOFT" 40, "WONK" 1`, **headline** `"SOFT" 30, "WONK" 1`, **title** `"SOFT" 50, "WONK" 1`, **round** `"SOFT" 100, "WONK" 1`. SOFT rounds the terminals (100 on numerals and the wordmark), WONK swaps in the leaning h, n, m. Always set `font-optical-sizing:auto`.

## Rules

- Body copy is 17px (1.0625rem) at 1.6. Do not go below 15px for reading text; mono captions have an 11px floor.
- Mono is uppercase with 0.02–0.14em tracking. Do not set mono in sentence case except captions marked `text-transform:none`.
- One italic accent per headline: `<em>` in Fraunces italic, clay, `white-space:nowrap`.
- `text-wrap:balance` on display and headline.
- Highlighter underline: `.hl` (sun gradient at 58–92% of line height). Text inside stays ink.
