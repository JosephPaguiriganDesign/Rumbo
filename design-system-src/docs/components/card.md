# Card (paper / receipt)

Two card families: the paper card (ink border, offset shadow, optional tape and tilt) and the receipt, a printed object that always stays paper-coloured.

**Extracted from the site:** `.receipt`, `.ledger`, `.leg`, `.form` in styles.css; `.card` variants are DS additions.

## Props / variants

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| variant | paper \| sun \| tonal \| flat | paper | Surface treatment. |
| kicker / title / body | string | – | Mono kicker, Fraunces title, body. |
| tape | boolean | false | Clay tape strip on top-left. |
| tilt | boolean | false | −0.7° rotate. Max one tilted card per row. |
| interactive | boolean | false | Whole card is one link (stretched `::after`). |
| media | boolean | false | Duotone photo across the top. |


**Variants and states shown:** paper · sun · tonal · flat · with photo + tape + tilt · interactive (hover/focus) · receipt on ink · receipt on paper.

## Usage

### Do

- Use the receipt for anything with a price or a ledger.
- Keep receipt colours pinned to paper/ink (`--rumbo-receipt-*`): it is paper in both themes.
- One primary action per card.

### Don't

- Do not nest cards.
- Do not tilt more than one card in a row.
- Do not put a button inside an interactive card: it is already a link.

## Accessibility

- Cards are `<article>` with a heading (h3 by default; match your outline).
- Interactive card: the heading contains a real `<a>`; its `::after` stretches the hit area; `:focus-within` draws the ring around the card.
- Receipt has an `aria-label`; price is real text (not an image).
- Ledger tick/cross icons are CSS backgrounds, so the meaning comes from the “Included / Not included” headings.
- Contrast: receipt-ink on receipt-paper 15.5:1, receipt-muted 7.4:1, accent 5.9:1.

## Storybook

Run `npm run storybook` and open **Components / Card (paper / receipt)**. Every story has light/dark and reduced-motion toolbar switches and an Accessibility panel.
