import { icons } from '../../lib/icons.js';
import { attr } from '../../lib/story.js';
/** Button. variant: filled | tonal | outlined | accent | text. size: sm | md | lg. */
export function button({ label = 'Get on the list', variant = 'filled', size = 'md', icon = false, iconOnly = false, ariaLabel, disabled = false, href, block = false, state = '', type = 'button', extra = '' } = {}) {
  const cls = ['btn', `btn--${variant}`, size !== 'md' && `btn--${size}`, iconOnly && 'btn--icon', block && 'btn--block', variant !== 'text' || true ? 'state' : '', state && `is-${state}`, extra].filter(Boolean).join(' ');
  const inner = iconOnly ? icons.arrow(24) : `${label}${icon ? icons.arrow(20) : ''}`;
  const a11y = iconOnly ? { 'aria-label': ariaLabel || label } : {};
  if (href && !disabled) return `<a ${attr({ class: cls, href, ...a11y })}>${inner}</a>`;
  return `<button ${attr({ class: cls, type, disabled, ...a11y })}>${inner}</button>`;
}
