# Timeline (itinerary day)

One card per day: big Fraunces day number, mono date, title, one-line note. Yellow with an ink border for match days; a clay left edge for travel days.

**Extracted from the site:** `.days`, `.day`, `.day--wk`, `.day--match`, `.tag`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | {n,d,t,p,kind}[] | 4 days | kind: (none) \| wk \| match \| fly. |
| label | string | Sample day-by-day plan | `aria-label` of the list. |
| current | number | -1 | Highlights “today” with a ring and `aria-current="date"`. |


**Variants and states shown:** normal · travel (wk) · match day · fly · current · two columns.

## Usage

### Do

- Put the date in mono, the action in Fraunces.
- Say “hoped for” until a fixture is confirmed.
- Tag match days with the words “match day”, not only the colour.

### Don't

- Do not rotate more than ±0.35°: legibility comes first.
- Do not use the day number as the only label (it is `aria-hidden`; the date is real text).
- Do not put more than one sentence in the note.

## Accessibility

- `<ol>` with heading per day. The decorative number is `aria-hidden`; the mono date is real text.
- Match day = yellow fill + ink border + text tag (not colour alone).
- Contrast on-sun-container/sun-container 11.0:1; tertiary date on surface-container-lowest 5.9:1.
- Tilt is decoration; 0.3° never clips text.

## Storybook

Run `npm run storybook` and open **Components / Timeline (itinerary day)**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
