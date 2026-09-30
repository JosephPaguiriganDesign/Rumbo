# Footer & credits

Ink footer with wordmark, contact, an honest disclaimer, a disclosure of photo credits, and mono fine print.

**Extracted from the site:** `.site-footer`, `.foot__*`, `.disclaimer`, `.credits` (details/summary).

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| open | boolean | false | Credits expanded. |
| sample | boolean | true | Shows “(sample address)”. |
| tear | boolean | true | Torn top edge. |
| contact | string | hello@rumbo.example |  |


**Variants and states shown:** default · credits open · no tear.

## Usage

### Do

- Credit every photo with author, licence and source.
- State non-affiliation plainly.
- Mark sample addresses as sample until they are real.

### Don't

- Do not hide credits: the licence requires attribution to be reasonably visible.
- Do not use a live-looking address you do not own.
- Do not shrink fine print below 11px.

## Accessibility

- `<footer>` landmark (contentinfo) at page level.
- Credits use native `<details>/<summary>`: keyboard and screen-reader support built in; summary has a 48dp target and a sun focus ring.
- Fixed footer colours: body 10.5:1, link 13.5:1, muted 9.5:1, fine print 7.4:1, accent 6.4:1.
- Links are underlined and the visited state is not colour-only.

## Storybook

Run `npm run storybook` and open **Components / Footer & credits**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
