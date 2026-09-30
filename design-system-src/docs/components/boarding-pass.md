# Boarding-pass ticket

Trip summary as a boarding pass: route codes in Fraunces, dates in mono, a barcode stub, and punched semicircles top and bottom.

**Extracted from the site:** `.pass`, `.pass__main`, `.pass__stub`, `.pass__code`.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| kicker / from / to / dates / stub | string | LIS → AGP | Content. |
| tilt | boolean | true | −2.5° like the site. |
| big | boolean | false | Larger type, for stand-alone use. |


**Variants and states shown:** tilted · flat · large · two legs.

## Usage

### Do

- Keep to one route and one date range.
- Use real airport codes only when the flight is real: mark samples.
- Use the stub for one short fact (“14 days”).

### Don't

- Do not make the barcode scannable or imply a real ticket.
- Do not put a button in it.
- Do not use it for more than one trip per row.

## Accessibility

- `role="group"` with `aria-label`; text is real text so it is read in order: kicker, LIS, AGP, dates.
- Barcode stub is `aria-hidden` and repeated as text (“14 days”) only if it matters (site marks it decorative).
- Mask notches are decorative, and the outline uses a 2px ink border.
- Contrast: on-sun-container/sun-container 11.0:1; tertiary kicker on sun-container measured on the Accessibility page (mono 11px text: keep ≥4.5:1).

## Storybook

Run `npm run storybook` and open **Components / Boarding-pass ticket**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
