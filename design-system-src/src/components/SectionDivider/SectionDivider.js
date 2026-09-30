import { edges } from '../../lib/edges.js';
/** Torn-edge divider. Sits at the TOP of a section, painted in that section's colour, overlapping the section above.
 *  edge: torn1..torn5 | wave1. */
export function tornEdge({ edge = 'torn1' } = {}) { return `<svg class="tear" viewBox="0 0 1200 30" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="${edges[edge]}"/></svg>`; }
export function sectionDivider({ edge = 'torn1', from = 'var(--md-sys-color-surface)', to = 'var(--md-sys-color-surface-container-lowest)', textA = 'Above the tear', textB = 'Below the tear', fgA = 'var(--md-sys-color-on-surface)', fgB = 'var(--md-sys-color-on-surface)' } = {}) {
  return `<div class="divider-demo" style="--divider-from:${from};--divider-fill:${to}"><div class="divider-demo__a" style="color:${fgA}"><p class="mono">${textA}</p></div><div class="divider-demo__b" style="color:${fgB}">${tornEdge({ edge })}<p class="mono">${textB}</p></div></div>`;
}
