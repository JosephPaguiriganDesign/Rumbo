# Shape

Stock M3 shape is round and symmetrical. Rumbo is **cut like paper**: opposite corners are large and small, so surfaces look guillotined by hand.

| Token | CSS var | Value | Used by |
| --- | --- | --- | --- |
| corner/extra-small | --md-sys-shape-corner-extra-small | 3px |  |
| corner/small | --md-sys-shape-corner-small | 6px |  |
| corner/medium | --md-sys-shape-corner-medium | 10px |  |
| corner/large | --md-sys-shape-corner-large | 18px |  |
| corner/full | --md-sys-shape-corner-full | 9999px |  |
| cut/primary | --shape-cut | 22px 5px 22px 5px | Filled button, FAB. |
| cut/alt | --shape-cut-alt | 5px 20px 5px 20px | Tonal button, menu button. |
| cut/ticket | --rumbo-shape-ticket | 3px 16px 3px 16px | Ticket-punch chip. |
| cut/banner | --rumbo-shape-banner | 3px 12px 3px 12px | Notice banner. |
| cut/day | --rumbo-shape-day | 2px 14px 2px 14px | Timeline day card. |
| cut/tab | --rumbo-shape-tab | 16px 16px 0 0 | Folder tab. |
| cut/scribble | --rumbo-shape-scribble | 50% 44% 52% 48% | Hand-drawn round icon holder. |
| border/hairline | --rumbo-border-hairline | 1px |  |
| border/thin | --rumbo-border-thin | 1.5px |  |
| border/regular | --rumbo-border-regular | 2px |  |
| border/thick | --rumbo-border-thick | 2.5px |  |
| border/focus | --rumbo-border-focus | 3px |  |


## Cut-corner rule

`border-radius: TL TR BR BL`. Big corners on one diagonal, small on the other. Alternate the diagonal between neighbours: filled button `22 5 22 5`, tonal button `5 20 5 20`. Never round all four corners the same.

## Borders

Ink borders are 2px (cards, buttons, tabs), 1.5px for quiet rules (dashed lines, day cards), 2.5px for field underlines, 3px for focus.

## Tilt

Objects pinned to the board rotate: hero pieces ±2–5°, cards ±0.35–1.4°. Never rotate text blocks over 1.5° or anything with form controls (the form card is +0.5° at most).
