import { banner } from './Banner.js';
export default {
  title: 'Components/Banner',
  parameters: { layout: 'padded' },
  argTypes: { tone: { control: 'inline-radio', options: ['note', 'info', 'warn', 'error', 'success'] }, title: { control: 'text' }, text: { control: 'text' }, dismissible: { control: 'boolean' }, role: { control: 'inline-radio', options: [undefined, 'note', 'status', 'alert'] } },
  args: { tone: 'note', title: '', text: 'Preview only: this form doesn’t send anything yet.', dismissible: false },
  render: (a) => `<div style="max-width:560px;padding:12px">${banner(a)}</div>`,
};
export const Default = {};
export const Tones = { render: () => `<div style="max-width:560px;padding:12px;display:grid;gap:14px">${[
  banner({ tone: 'note', title: 'Draft', text: 'Details are placeholders until families hear from us.' }),
  banner({ tone: 'info', title: 'Good to know', text: 'The 20-minute call is with a parent and the player.' }),
  banner({ tone: 'warn', title: 'Match days are “hoped for”', text: 'Fixtures depend on other people’s calendars.' }),
  banner({ tone: 'error', title: 'Two things need another look', text: 'Email and age are highlighted below.' }),
  banner({ tone: 'success', title: 'Thanks', text: 'You’re on the list. We’ll write when there’s something real to say.' })].join('')}</div>` };
export const Dismissible = { args: { dismissible: true, tone: 'info', title: 'Heads up', text: 'This one can be dismissed. Focus returns to the page.' } };
