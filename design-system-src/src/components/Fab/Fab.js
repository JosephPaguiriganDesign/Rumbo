import { icons } from '../../lib/icons.js';
import { attr } from '../../lib/story.js';
/** FAB / extended button ("sticker"). kind: extended | icon | small. */
export function fab({ label = 'Get on the list', kind = 'extended', href = '#interest', visible = true, floating = false, state = '' } = {}) {
  const cls = ['fab', 'state', kind === 'icon' && 'fab--icon', kind === 'small' && 'fab--small', kind === 'extended' && 'fab--extended', !floating && 'fab--static', floating && visible && 'is-visible', state && `is-${state}`].filter(Boolean).join(' ');
  const inner = kind === 'extended' ? `${label}${icons.arrow(18)}` : icons.arrow(24);
  return `<a ${attr({ class: cls, href, ...(kind !== 'extended' ? { 'aria-label': label } : {}) })}>${inner}</a>`;
}
export const floatingFab = (o = {}) => `<nav aria-label="Quick link">${fab({ ...o, floating: true })}</nav>`;
