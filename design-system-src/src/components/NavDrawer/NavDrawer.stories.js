import { navDrawer, drawerTrigger } from './NavDrawer.js';
import { uid } from '../../lib/story.js';
export default {
  title: 'Components/Nav drawer',
  parameters: { layout: 'padded' },
  argTypes: { open: { control: 'boolean' }, current: { control: { type: 'number', min: -1, max: 5 } }, tag: { control: 'text' }, cta: { control: 'text' } },
  args: { open: true, current: -1, tag: 'Summer 2027 · Iberia', cta: 'Get on the list' },
  render: (a) => `<div class="sb-frame" style="height:620px;max-width:420px">${navDrawer(a)}</div>`,
};
export const Default = {};
export const Open = {};
export const CurrentItem = { args: { current: 2 } };
export const Interactive = {
  args: { open: false },
  render: (a) => { const id = uid('drawer'); return `<div class="sb-frame" style="height:620px;max-width:420px"><div style="padding:16px;display:flex;justify-content:flex-end">${drawerTrigger(id)}</div><p class="sb-panel" style="padding-top:8px">Press Menu. Focus moves into the drawer and stays there (Tab wraps), Escape or the scrim closes it, and focus goes back to Menu.</p>${navDrawer({ ...a, id })}</div>`; },
};
