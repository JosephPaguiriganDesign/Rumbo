import { uid } from '../../lib/story.js';
/** Ticket-punch choice chip. type radio | checkbox. Native input stays in the DOM (visually hidden, full-size hit area). */
export function punch({ title = 'Ages 12–14', sub = 'Younger group', name = 'group', type = 'radio', checked = false, disabled = false, state = '', value } = {}) {
  const id = uid('p');
  return `<label class="punch${type === 'checkbox' ? ' punch--check' : ''}${state === 'hover' ? ' is-hover' : ''}" for="${id}"><input id="${id}" type="${type}" name="${name}" value="${value || title}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}><span class="punch__body state${state === 'focus' ? ' is-focus' : ''}"><span class="punch__t">${title}</span><span class="punch__s mono">${sub}</span></span></label>`;
}
export function choiceGroup({ legend = 'Age group', name = 'group', type = 'radio', options = [['Ages 12–14', 'Younger group'], ['Ages 15–17', 'Older group'], ['Not sure yet', 'Ask us']], checked = -1, disabledIdx = -1, error = '' } = {}) {
  const id = uid('cg');
  return `<fieldset class="choice" ${error ? `aria-describedby="${id}-err"` : ''}><legend class="tf__label mono">${legend}</legend><div class="choice__row">${options.map(([t, s], i) => punch({ title: t, sub: s, name, type, checked: i === checked, disabled: i === disabledIdx })).join('')}</div>${error ? `<p class="tf__err" id="${id}-err" style="margin-top:8px">${error}</p>` : ''}</fieldset>`;
}
