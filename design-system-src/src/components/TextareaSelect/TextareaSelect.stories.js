import { textarea, select } from './TextareaSelect.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Textarea & select',
  parameters: { layout: 'padded' },
  argTypes: { label: { control: 'text' }, hint: { control: 'text' }, error: { control: 'text' }, required: { control: 'boolean' }, disabled: { control: 'boolean' }, floating: { control: 'boolean' }, rows: { control: { type: 'number', min: 2, max: 10 } } },
  args: { label: 'Anything else we should know?', hint: 'Allergies, nerves, a favourite formation. All fine.', error: '', required: false, disabled: false, floating: false, rows: 4 },
  render: (a) => `<div style="max-width:460px;padding:12px">${textarea(a)}</div>`,
};
export const Default = {};
export const TextareaStates = { render: () => grid([labelled('default', textarea({})), labelled('floating', textarea({ floating: true, label: 'Notes' })), labelled('error', textarea({ required: true, error: 'Tell us a little, even “nothing” is fine.' })), labelled('disabled', textarea({ disabled: true, value: 'Closed after registration.' }))], 300) };
export const Select = { render: () => `<div style="max-width:360px;padding:12px">${select({})}</div>` };
export const SelectStates = { render: () => grid([labelled('default', select({})), labelled('selected', select({ value: 'Goalkeeper' })), labelled('floating', select({ floating: true, value: 'Forward' })), labelled('error', select({ required: true, error: 'Pick a position, or “Not sure”.' })), labelled('disabled', select({ disabled: true }))], 280) };
