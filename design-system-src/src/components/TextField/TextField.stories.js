import { textField } from './TextField.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Text field',
  parameters: { layout: 'padded' },
  argTypes: { label: { control: 'text' }, type: { control: 'select', options: ['text', 'email', 'number', 'tel'] }, value: { control: 'text' }, hint: { control: 'text' }, error: { control: 'text' }, required: { control: 'boolean' }, disabled: { control: 'boolean' }, floating: { control: 'boolean' }, short: { control: 'boolean' } },
  args: { label: 'Parent or guardian name', type: 'text', value: '', hint: '', error: '', required: true, disabled: false, floating: false, short: false },
  render: (a) => `<div style="max-width:420px;padding:12px">${textField(a)}</div>`,
};
export const Default = {};
export const Variants = { render: () => grid([labelled('label above (site default)', textField({ label: 'Email', type: 'email', name: 'e1', hint: 'We reply from a real inbox.' })), labelled('floating label', textField({ label: 'Email', type: 'email', name: 'e2', floating: true })), labelled('floating, filled', textField({ label: 'Email', type: 'email', name: 'e3', floating: true, value: 'ana@example.com' })), labelled('short', textField({ label: 'Player’s age', type: 'number', name: 'age', short: true, hint: 'Ages 12 to 17 on 11 July 2027.' }))], 300) };
export const States = { render: () => grid([labelled('default', textField({ name: 's1', label: 'Name' })), labelled('hover', textField({ name: 's2', label: 'Name', state: 'hover' })), labelled('focus', textField({ name: 's3', label: 'Name', state: 'focus' })), labelled('filled', textField({ name: 's4', label: 'Name', value: 'Joseph' })), labelled('error', textField({ name: 's5', label: 'Email', type: 'email', value: 'joseph@', error: 'Please enter a valid email address.' })), labelled('disabled', textField({ name: 's6', label: 'Name', value: 'Locked after registration', disabled: true }))], 300) };
export const Error = { args: { label: 'Email', type: 'email', value: 'joseph@', error: 'Please enter a valid email address.' } };
export const FloatingError = { args: { label: 'Email', type: 'email', floating: true, value: 'joseph@', error: 'Please enter a valid email address.' } };
export const Disabled = { args: { disabled: true, value: 'Locked' } };
