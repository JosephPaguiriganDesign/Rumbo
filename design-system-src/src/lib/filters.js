// Shared SVG filter + pattern defs (wobble = hand-drawn line, wear = worn ink, azul = tile pattern).
// Injected once per document so any component can reference url(#wobble) / url(#wear) / url(#azul).
export const filterDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false" data-rumbo-filters><defs>
<filter id="wobble" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="wear" x="-4%" y="-4%" width="108%" height="108%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="8" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3 0 0 0 -0.82" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in" result="e"/><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="2" result="t"/><feDisplacementMap in="e" in2="t" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter>
<pattern id="azul" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 2 38 20 20 38 2 20Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 11 29 20 20 29 11 20Z" fill="currentColor" opacity=".55"/><circle cx="20" cy="20" r="2.2" fill="#f4ecdb"/><path d="M0 0 6 0 0 6ZM40 0 34 0 40 6ZM0 40 6 40 0 34ZM40 40 34 40 40 34Z" fill="currentColor"/></pattern>
</defs></svg>`;
export function injectFilters(doc = document) {
  if (doc.querySelector('[data-rumbo-filters]')) return;
  const t = doc.createElement('template'); t.innerHTML = filterDefs; doc.body.prepend(t.content);
}
