import { button } from '../Button/Button.js';
import { photoFrame } from '../PhotoFrame/PhotoFrame.js';
import { photos } from '../../lib/photos.js';
/** Card. variant: paper | sun | tonal | flat. tape, tilt, interactive (whole card is one link). */
export function card({ kicker = 'Week one', title = 'The Lisbon coast', body = 'Sessions on rented grass and 3G pitches, two a day, with our own coaches.', variant = 'paper', tape = false, tilt = false, interactive = false, media = false, action = 'Ask about the trip', state = '' } = {}) {
  const cls = ['card', variant !== 'paper' && `card--${variant}`, tape && 'card--tape', tilt && 'card--tilt', interactive && 'card--interactive', state && `is-${state}`].filter(Boolean).join(' ');
  const m = media ? `<div class="card__media"><div class="duo duo--cobalt" style="aspect-ratio:16/9"><img src="${photos.estoril.src}" width="900" height="506" alt="${photos.estoril.alt}" loading="lazy"></div></div>` : '';
  return `<article class="${cls}">${m}<p class="card__k">${kicker}</p><h3 class="card__title">${interactive ? `<a class="card__link" href="#interest">${title}</a>` : title}</h3><p class="card__body">${body}</p>${!interactive && action ? `<div class="card__actions">${button({ label: action, variant: 'tonal', size: 'sm', href: '#interest' })}</div>` : ''}</article>`;
}
/** Receipt: price + ledger. Pinned to paper colours in both themes (it is a printed object). */
export function receipt({ k = 'Rumbo · Summer 2027 · per player · USD', price = '4,850', sub = 'Draft price. Confirmed before registration opens.', included = ['13 nights in shared rooms (3–4 players)', 'Breakfast and dinner daily, plus lunch on match days', 'Coaching, pitch hire, and match arrangements', 'Group travel medical insurance'], excluded = ['Flights to Lisbon and home from Málaga', 'Lunch on non-match days', 'Spending money and souvenirs'], foot = '$500 deposit · balance due 1 Apr 2027 · payment details sent after your chat with us' } = {}) {
  return `<article class="receipt" aria-label="Cost receipt"><p class="receipt__k mono">${k}</p><p class="receipt__price"><span class="receipt__cur">$</span>${price}</p><p class="receipt__sub mono">${sub}</p>
<div class="receipt__cols"><div><h3 class="receipt__h">Included</h3><ul class="ledger ledger--in">${included.map((i) => `<li>${i}</li>`).join('')}</ul></div><div><h3 class="receipt__h">Not included</h3><ul class="ledger ledger--out">${excluded.map((i) => `<li>${i}</li>`).join('')}</ul></div></div>
<p class="receipt__foot mono">${foot}</p></article>`;
}
