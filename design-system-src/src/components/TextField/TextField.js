import { uid } from '../../lib/story.js';
import { icons } from '../../lib/icons.js';
/** Underlined text field. floating: label rises on focus/value. error: message string. */
export function textField({ label = 'Parent or guardian name', type = 'text', name = 'parent', value = '', hint = '', error = '', required = true, disabled = false, floating = false, short = false, placeholder = '', state = '', autocomplete = '', describeExtra = '' } = {}) {
  const id = uid('tf'), desc = [hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ');
  const input = `<input class="tf__input${state ? ' is-' + state : ''}" id="${id}" name="${name}" type="${type}" ${value ? `value="${value}"` : ''} ${required ? 'required' : ''} ${disabled ? 'disabled' : ''} ${autocomplete ? `autocomplete="${autocomplete}"` : ''} placeholder="${floating ? ' ' : placeholder}" ${error ? 'aria-invalid="true"' : ''} ${desc ? `aria-describedby="${desc}"` : ''}>`;
  const lab = `<label class="tf__label${floating ? '' : ' mono'}" for="${id}">${label}${required ? '<span class="sr-only"> (required)</span>' : ''}</label>`;
  return `<div class="tf${short ? ' tf--short' : ''}${floating ? ' tf--float' : ''}${error ? ' is-invalid' : ''}">${floating ? input + lab : lab + input}${hint ? `<p class="tf__hint" id="${id}-hint">${hint}</p>` : ''}<p class="tf__err" id="${id}-err" ${error ? '' : 'hidden'}><span>${error}</span></p></div>`;
}
