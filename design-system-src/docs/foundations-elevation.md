# Elevation

M3 uses tonal surface + soft shadow. Rumbo uses a **hard offset ink shadow**: no blur, same angle (down-right), three heights. Things that are physically pinned (photos, passes) use one soft print shadow.

| Token | CSS var | Light | Dark | Used by |
| --- | --- | --- | --- | --- |
| elevation/1 | `--md-sys-elevation-1` | 2px 2px 0 rgb(34 29 24 / .9) | 2px 2px 0 rgb(0 0 0 / .8) | Tonal button, match day, person card |
| elevation/2 | `--md-sys-elevation-2` | 3px 3px 0 rgb(34 29 24 / .9) | 3px 3px 0 rgb(0 0 0 / .8) | Filled button, FAB, card |
| elevation/3 | `--md-sys-elevation-3` | 5px 5px 0 rgb(34 29 24 / .9) | 5px 5px 0 rgb(0 0 0 / .8) | Hover, form card, leg panel, map |
| soft | `--soft-shadow` | 0 1px 1px .18 · 0 10px 20px −8px .35 | same | Photos, boarding pass, tactics board |
| receipt | `--rumbo-shadow-receipt` | 0 18px 30px −12px rgb(0 0 0 / .6) | same | Receipt on ink band |


## Behaviour

- **Hover** raises a level and moves the element −1/−1 (shadow grows to the right, it looks lifted).
- **Pressed** moves +2/+2 and drops the shadow to 0 (it looks pushed into the page).
- Offset shadows never blur, so they survive forced-colors and print.
- Hierarchy is also carried by *border weight* (2px ink), not by shadow alone.
