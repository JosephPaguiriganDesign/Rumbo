import { uid } from '../../lib/story.js';
import { icons } from '../../lib/icons.js';
export function textarea({ label = 'Anything else we should know?', name = 'notes', value = '', hint = 'Allergies, nerves, a favourite formation. All fine.', error = '', required = false, disabled = false, floating = false, rows = 4, state = '' } = {}) {
  const id = uid('ta'), desc = [hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ');
  const t = `<textarea class="tf__input${state ? ' is-' + state : ''}" id="${id}" name="${name}" rows="${rows}" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''} placeholder="${floating ? ' ' : ''}" ${error ? 'aria-invalid="true"' : ''} ${desc ? `aria-describedby="${desc}"` : ''}>${value}</textarea>`;
  const l = `<label class="tf__label${floating ? '' : ' mono'}" for="${id}">${label}${required ? '<span class="sr-only"> (required)</span>' : ''}</label>`;
  return `<div class="tf${floating ? ' tf--float' : ''}${error ? ' is-invalid' : ''}">${floating ? t + l : l + t}${hint ? `<p class="tf__hint" id="${id}-hint">${hint}</p>` : ''}<p class="tf__err" id="${id}-err" ${error ? '' : 'hidden'}><span>${error}</span></p></div>`;
}
export function select({ label = 'Position', name = 'position', options = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Not sure'], placeholder = 'Pick one (or don’t)', value = '', error = '', required = false, disabled = false, floating = false, state = '' } = {}) {
  const id = uid('sel'), desc = error ? `${id}-err` : '';
  const s = `<select class="tf__input${state ? ' is-' + state : ''}" id="${id}" name="${name}" ${required ? 'required' : ''} ${disabled ? 'disabled' : ''} ${error ? 'aria-invalid="true"' : ''} ${desc ? `aria-describedby="${desc}"` : ''}><option value="">${placeholder}</option>${options.map((o) => `<option${o === value ? ' selected' : ''}>${o}</option>`).join('')}</select>`;
  const l = `<label class="tf__label${floating ? '' : ' mono'}" for="${id}">${label}${required ? '<span class="sr-only"> (required)</span>' : ''}</label>`;
  return `<div class="tf tf--select${floating ? ' tf--float' : ''}${error ? ' is-invalid' : ''}">${floating ? s + l : l + s}${icons.chevron(24)}<p class="tf__err" id="${id}-err" ${error ? '' : 'hidden'}><span>${error}</span></p></div>`;
}
