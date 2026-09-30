import { button } from '../Button/Button.js';
import { uid } from '../../lib/story.js';
const items = [['#route', 'The route'], ['#how', 'How it works'], ['#week', 'Sample fortnight'], ['#people', "Who's coming"], ['#cost', 'Cost'], ['#faq', 'FAQ']];
/** Nav drawer, a ticket stub sliding from the right. Returns scrim + aside. Toggle by [data-drawer-open=id]. */
export function navDrawer({ id = uid('drawer'), open = false, current = -1, tag = 'Summer 2027 · Iberia', cta = 'Get on the list' } = {}) {
  return `<div class="scrim${open ? ' is-open' : ''}" ${open ? '' : 'hidden'}></div>
<div class="drawer${open ? ' is-open' : ''}" id="${id}" role="dialog" aria-modal="true" aria-label="Site navigation" ${open ? '' : 'inert'}>
  <div class="drawer__head"><p class="drawer__tag mono">${tag}</p><button class="menu-btn menu-btn--close state" type="button" aria-label="Close menu" data-drawer-close><span class="menu-btn__txt">Close</span></button></div>
  <nav aria-label="Mobile">${items.map(([h, t], i) => `<a class="drawer__item state" href="${h}"${i === current ? ' aria-current="page"' : ''}><span class="drawer__n mono">0${i + 1}</span>${t}</a>`).join('')}
  ${button({ label: cta, block: true, href: '#interest' })}</nav>
</div>`;
}
export const drawerTrigger = (id) => `<button class="menu-btn state" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="${id}" data-drawer-open="${id}"><span class="menu-btn__lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="menu-btn__txt">Menu</span></button>`;
