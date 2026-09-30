# Team sheet & person card

A staff list as a match team sheet (numbered rows under a clay-striped header), and a single person card for profiles.

**Extracted from the site:** `.sheet`, `.sheet__list`, `.sheet__name`; `.person` is a DS addition.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| rows | [no, name, role][] | 5 staff |  |
| kicker / title / foot | string | – |  |
| tilt | boolean | true | −1.4° |
| (person) no / name / role / tags / tone | string | – | tone: sun. |


**Variants and states shown:** tilted sheet · flat sheet · person cards (default, with tag, sun).

## Usage

### Do

- Use first names on drafts; full names once confirmed.
- Say what each adult does.
- Show the safeguarding facts next to the sheet.

### Don't

- Do not invent staff: mark sample names as sample.
- Do not photograph minors for the sheet.
- Do not rely on the number for meaning: it is decoration.

## Accessibility

- Sheet is a `<ul>` in a `role="group"` with a heading label; the shirt number is a mono `span` (readable).
- Person card is an `<article>` with `h3`; the ring number is `aria-hidden`.
- Contrast: on-surface / lowest 15.5:1; role text on-surface-variant 7.4:1.

## Storybook

Run `npm run storybook` and open **Components / Team sheet & person card**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
