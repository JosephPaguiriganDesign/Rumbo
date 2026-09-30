import { icons } from '../../lib/icons.js';
/** Banner / notice. tone: note (site default, clay dashed) | info | warn | error | success. role: note | status | alert. */
export function banner({ tone = 'note', title = '', text = 'Preview only: this form doesn’t send anything yet.', role, dismissible = false, link = '' } = {}) {
  const r = role || (tone === 'error' ? 'alert' : tone === 'note' ? 'note' : 'status');
  const ico = tone === 'error' || tone === 'warn' ? icons.alert(24) : tone === 'success' ? icons.check(24) : icons.info(24);
  return `<div class="banner${tone !== 'note' ? ' banner--' + tone : ''}" role="${r}">${ico}<p>${title ? `<span class="banner__title">${title}</span>` : ''}${text}${link ? ` <a href="#">${link}</a>` : ''}</p>${dismissible ? `<button class="banner__close state" type="button" aria-label="Dismiss notice"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>` : ''}</div>`;
}
