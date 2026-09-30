# Route line / progress

A dotted route that fills with progress and carries a head pin. On the app bar it tracks scroll; stand-alone it can show trip or form progress.

**Extracted from the site:** `.app-bar__route` (`--progress`), the SVG route mask in #route.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| progress | 0–1 | 0.4 | Fill. |
| stops | string[] | Land · Lisbon coast · Málaga coast | Labels under the line. |
| label / now | string | Trip progress | `aria-label` and a visible “now” sentence. |


**Variants and states shown:** 0 / 25 / 50 / 75 / 100% · in the top app bar.

## Usage

### Do

- Show a text equivalent of the value (“Day 6 of 14”).
- Use it for a journey, not for a loading spinner.
- Keep pin colours: clay stops, ink head.

### Don't

- Do not use it as the only progress indication.
- Do not animate under reduced motion (the site jumps straight to 100%).
- Do not put more than 4 stops.

## Accessibility

- Stand-alone: `role="progressbar"` with `aria-valuenow` and `aria-valuetext` (“Day 6 of 14”).
- In the app bar it is `aria-hidden` (scroll position is already exposed by the browser).
- Reduced motion: `transition:none`; the site draws the map route fully at once.
- Dotted track is decoration; clay on paper 5.4:1 for the dots.

## Storybook

Run `npm run storybook` and open **Components / Route line / progress**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
