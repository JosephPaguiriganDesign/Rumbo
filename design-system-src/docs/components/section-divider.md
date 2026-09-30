# Section divider (torn edge)

A hand-torn paper edge painted in the colour of the section below, overlapping the section above by 29px. Six paths from the site (`torn1…5`, `wave1`).

**Extracted from the site:** `.tear` + `edges.json`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| edge | torn1…torn5 \| wave1 | torn1 | Path from _src/edges.json. |
| from / to | colour role | paper → lowest | Preview colours only. |


**Variants and states shown:** all six edges · paper→lowest · lowest→cobalt · clay→ink.

## Usage

### Do

- Set `--sec` on the section to the colour you want the tear painted in (`fill: var(--sec)`).
- Vary the edge between neighbours so it never looks stamped.
- Put the tear as the first child of the section.

### Don't

- Do not leave a gap: the section above needs no bottom padding hack, the tear overlaps by −29px.
- Do not put text in the tear.
- Do not use it more than once per screen.

## Accessibility

- SVG is `aria-hidden` and `pointer-events:none`: purely decorative.
- Because the tear paints over 29px of the previous section, keep padding-bottom on that section ≥ 40px so no text is covered.
- Check that both sides meet contrast on their own colours.

## Storybook

Run `npm run storybook` and open **Components / Section divider (torn edge)**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
