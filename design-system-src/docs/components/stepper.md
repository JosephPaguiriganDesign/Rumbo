# Stepper

The “how you get on the plane” play: numbered wobbly rings in a dashed ledger, on cobalt or on paper.

**Extracted from the site:** `.play`, `.play__step`, `.play__n`, `.play__arrow`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | [title, text][] | 4 steps |  |
| tone | primary \| paper | primary | primary = on a cobalt panel; paper = on paper. |
| current | number | 0 | 1-based `aria-current="step"`. |
| done | number | 0 | Steps completed (tick, dashed ring, “(done)” for AT). |


**Variants and states shown:** on cobalt · on paper · progress (2 done, step 3 current).

## Usage

### Do

- Use an ordered list: order matters.
- Start each title with a verb.
- Keep to 3–6 steps.

### Don't

- Do not use for tabs or navigation.
- Do not skip numbers.
- Do not use yellow numerals on paper (1.4:1): use clay.

## Accessibility

- `<ol>` gives the count and position for free; the ring is `aria-hidden` (so the number is not read twice).
- `aria-current="step"` plus sr-only “(current step)”.
- Step number on cobalt: highlight-on-primary/primary 6.0:1 light / 8.9:1 dark (large text). Body: on-primary-muted 7.4:1 light / 6.5:1 dark (DS token; the site reuses primary-container, 7.4:1 light / 4.9:1 dark).

## Storybook

Run `npm run storybook` and open **Components / Stepper**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
