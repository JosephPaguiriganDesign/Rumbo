# Accordion

FAQ rows separated by heavy ink rules. The plus icon is a hand-drawn wobbly circle that turns into an × and fills yellow when open.

**Extracted from the site:** `.accordion`, `.acc`, `.acc__btn`, `.acc__icon`, `.acc__panel` (grid-rows 0fr→1fr).

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | [question, answer][] | 3 FAQs | Answer may contain `<strong>`. |
| open | number[] | [0] | Initially open rows. |
| single | boolean | false | Only one open at a time (`data-single`). |
| variant | rule \| card | rule |  |
| headingLevel | 2 \| 3 \| 4 | 3 | Match the page outline. |
| disabledIdx | number | -1 | Disabled row. |


**Variants and states shown:** default · all closed · all open · single open · card · hover / focus / disabled.

## Usage

### Do

- Write the question as the reader would say it.
- Open the most important answer by default.
- Answer first, then explain: “No. Rumbo is a training and playing trip…”

### Don't

- Do not hide the only copy of legal or safety information in an accordion.
- Do not put interactive controls in the header button.
- Do not nest accordions.

## Accessibility

- Pattern: WAI-ARIA Accordion. Heading > button with `aria-expanded` and `aria-controls`; panel `role="region"` with `aria-labelledby`.
- Keys: Enter/Space toggle; ↑ ↓ Home End move focus between headers.
- Closed panels use `visibility:hidden` after the collapse transition, so their contents are not tabbable.
- Icon turns 135° and gains fill, not colour alone.
- Row height ≥64dp. Question 1.125–1.4rem Fraunces 650.
- Reduced motion: no height animation.

## Storybook

Run `npm run storybook` and open **Components / Accordion**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
