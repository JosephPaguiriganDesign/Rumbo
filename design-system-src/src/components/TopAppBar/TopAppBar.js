import { icons } from '../../lib/icons.js';
import { button } from '../Button/Button.js';
import { uid } from '../../lib/story.js';
export const navLinks = [['#route', 'The route'], ['#how', 'How it works'], ['#week', 'Sample fortnight'], ['#people', "Who's coming"], ['#cost', 'Cost'], ['#faq', 'FAQ']];
/** Top app bar. layout: wide (>=900) | compact (menu button). current: index of aria-current link. progress 0..1 fills the dotted route line. */
export function topAppBar({ layout = 'wide', current = 1, progress = 0.35, scrolled = false, cta = 'Get on the list', drawerId = '' } = {}) {
  const id = uid('bar');
  return `<header class="app-bar app-bar--${layout}${scrolled ? ' is-scrolled' : ''}" style="--progress:${progress}">
  <div class="app-bar__inner">
    <a class="brand" href="#top" aria-label="Rumbo, back to top">${icons.brandMark(36)}<span class="brand__word">Rumbo</span></a>
    <nav aria-label="Primary" class="top-nav" id="${id}">${navLinks.map(([h, t], i) => `<a class="top-nav__link state" href="${h}"${i === current ? ' aria-current="true"' : ''}>${t}</a>`).join('')}</nav>
    ${button({ variant: 'tonal', label: cta, extra: 'btn--bar', href: '#interest' })}
    <button class="menu-btn state" type="button" aria-label="Open menu" aria-expanded="false" ${drawerId ? `aria-controls="${drawerId}" data-drawer-open="${drawerId}"` : ''}><span class="menu-btn__lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="menu-btn__txt">Menu</span></button>
  </div>
  <div class="app-bar__route" aria-hidden="true"></div>
</header>`;
}
