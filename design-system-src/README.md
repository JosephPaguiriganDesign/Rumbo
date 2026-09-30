# Rumbo Design System Starter

*Travel dispatch pinned to a tactics board.* Tokens, 20 components, docs and Figma-ready assets for the Rumbo Summer 2027 youth soccer travel site. Extracted from `../index.html`, `../styles.css` and `../app.js` (read-only).

## Quick start

```bash
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
```

## What is here

| Path | What |
| --- | --- |
| `tokens/tokens.json` | Single source of truth (W3C DTCG style): colour light/dark, type, space, shape, elevation, motion, z-index, breakpoints |
| `dist/tokens.css`, `tokens.js`, `tokens.d.ts` | Generated CSS custom properties and JS/TS module |
| `tokens/tokens-studio.json`, `tokens/figma-variables.json` | Generated Figma imports |
| `src/components/*` | 20 components: markup function, stories, MDX |
| `src/docs/*.mdx`, `docs/*.md` | Foundations, Accessibility, Usage guide (both formats) |
| `docs/figma-build-plan.md` | What to build in Figma: variables, components, page designs |
| `figma-assets/` | SVG icons/stamps/graphics and page-level reference PNGs |
| `screenshots/` | Storybook screenshots and the verification report |

## Components

Button · FAB / extended · Top app bar · Nav drawer (ticket stub) · Folder tabs · Card (paper + receipt) · Chip (ticket punch) · Text field · Textarea & select · Accordion · Stepper · Timeline (itinerary day) · Banner · Stamp · Tape & photo frame · Boarding pass · Team sheet & person card · Section divider (torn edge) · Route line · Footer & credits

## Not done / not verified

See "Report" in the final hand-off: no live Figma import was performed, real screen-reader and forced-colors passes are outstanding, and nothing is published.

Fonts: Fraunces, Atkinson Hyperlegible Next, DM Mono and Caveat are bundled from Fontsource (open-licensed). Photos are read from `../assets/photos/web` (credits in the footer component and `assets/photos/CREDITS.md`).
