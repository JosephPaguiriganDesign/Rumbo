# Top app bar

A strip of paper with the wordmark, six anchor links, one CTA and a dotted route line along the bottom that fills as you read.

**Extracted from the site:** `.app-bar`, `.app-bar__inner`, `.app-bar__route` (`--progress`), `.brand`, `.top-nav__link[aria-current]`, `.menu-btn`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| layout | wide \| compact | wide | Wide shows links (site: ≥900px). Compact shows the Menu button; in real pages this is automatic by media query. |
| current | number | 1 | Index of the link that gets `aria-current="true"` and the wavy clay underline. −1 = none. |
| progress | 0–1 | 0.35 | Route line fill. On the site: scrollY / (document height − viewport). |
| scrolled | boolean | false | Adds the offset shadow (site toggles `.is-scrolled` after 24px). |
| cta | string | Get on the list |  |


**Variants and states shown:** wide 72dp · compact 64dp · scrolled · no current link.

## Usage

### Do

- Keep to ≤6 links; add sections to the drawer, not to the bar.
- Use scroll-spy for `aria-current`.
- Keep the route line decorative (`aria-hidden`).

### Don't

- Do not put the CTA in the nav list: it is a separate button.
- Do not use the wavy underline for anything except the current page.
- Do not make the bar taller than 72dp.

## Accessibility

- `<header>` with a `nav` labelled “Primary”; the drawer nav is labelled “Mobile” so the two are distinguishable.
- `aria-current="true"` for scroll-spy sections, `"page"` for real page links.
- Menu button: `aria-expanded`, `aria-controls`, visible “Menu” text plus icon (the site also sets `aria-label="Open menu"`; the visible word is in the label so voice-control users can say “Menu”). 
- Add a “Skip to content” link as the first focusable element (`.skip`).
- Sticky bar: set `scroll-padding-top` (bar height + 16px) so anchors and focus are never hidden under it (WCAG 2.2 focus-not-obscured, 2.4.11).
- Target size 48dp for every link.

## Storybook

Run `npm run storybook` and open **Components / Top app bar**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
