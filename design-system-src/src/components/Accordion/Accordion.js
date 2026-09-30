import { icons } from '../../lib/icons.js';
import { uid } from '../../lib/story.js';
export const faqs = [
  ['Is a place at a professional club guaranteed?', '<strong>No.</strong> Rumbo is a training and playing trip. We can promise good coaching, real matches and honest feedback. We can’t promise a trial, a placement or a contract, and nobody honest can.'],
  ['Who are the friendlies against?', 'Local youth clubs and academies in the Lisbon and Málaga areas. None are confirmed yet, so we won’t name anyone. Once a match is agreed in writing, we’ll tell families who, where and when.'],
  ['What should my child pack?', 'Two pairs of boots (grass and turf), shin guards, three training kits, a swimsuit, a hat, a refillable water bottle, sunscreen, any medication, and a passport in a carry-on.'],
];
/** Accordion with hand-drawn plus icons. open: array of open indexes. single: only one open at a time. */
export function accordion({ items = faqs, open = [0], single = false, variant = 'rule', disabledIdx = -1, state = '', headingLevel = 3 } = {}) {
  const k = uid('acc');
  return `<div class="accordion${variant === 'card' ? ' accordion--card' : ''}" ${single ? 'data-single' : ''}>${items.map(([q, a], i) => `<div class="acc"><h${headingLevel} class="acc__h"><button class="acc__btn state${state && i === 0 ? ' is-' + state : ''}" type="button" id="${k}-b${i}" aria-expanded="${open.includes(i)}" aria-controls="${k}-p${i}" ${i === disabledIdx ? 'disabled' : ''}><span>${q}</span>${icons.plus(24)}</button></h${headingLevel}><div class="acc__panel" id="${k}-p${i}" role="region" aria-labelledby="${k}-b${i}"><div><p>${a}</p></div></div></div>`).join('')}</div>`;
}
