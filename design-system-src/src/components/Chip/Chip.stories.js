import { punch, choiceGroup } from './Chip.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Chip (ticket punch)',
  parameters: { layout: 'padded' },
  argTypes: { title: { control: 'text' }, sub: { control: 'text' }, type: { control: 'inline-radio', options: ['radio', 'checkbox'] }, checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { title: 'Ages 12–14', sub: 'Younger group', type: 'radio', checked: false, disabled: false },
  render: (a) => `<div style="max-width:300px;padding:12px">${punch(a)}</div>`,
};
export const Default = {};
export const Group = { render: () => `<div style="max-width:720px;padding:12px">${choiceGroup({ checked: 1 })}</div>` };
export const States = { render: () => grid([labelled('default', punch({ name: 's1' })), labelled('hover', punch({ name: 's2', state: 'hover' })), labelled('focus-visible', punch({ name: 's3', state: 'focus' })), labelled('selected', punch({ name: 's4', checked: true })), labelled('disabled', punch({ name: 's5', disabled: true })), labelled('disabled + selected', punch({ name: 's6', disabled: true, checked: true }))], 260) };
export const Checkbox = { render: () => `<div style="max-width:720px;padding:12px">${choiceGroup({ legend: 'Anything we should know?', type: 'checkbox', name: 'know', options: [['Vegetarian', 'Meals'], ['Allergies', 'We will call'], ['Travelling alone', 'Ask us']], checked: 0 })}</div>` };
export const GroupError = { render: () => `<div style="max-width:720px;padding:12px">${choiceGroup({ error: 'Pick an age group, or choose “Not sure yet”.' })}</div>` };
