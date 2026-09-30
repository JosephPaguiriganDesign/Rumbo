import { fab, floatingFab } from './Fab.js';
import { row, labelled } from '../../lib/story.js';
export default {
  title: 'Components/FAB',
  argTypes: { label: { control: 'text' }, kind: { control: 'inline-radio', options: ['extended', 'icon', 'small'] }, state: { control: 'select', options: ['', 'hover', 'focus', 'pressed'] } },
  args: { label: 'Get on the list', kind: 'extended', state: '' },
  render: (a) => fab(a),
};
export const Default = {};
export const Kinds = { render: () => row([labelled('extended', fab({})), labelled('icon (56)', fab({ kind: 'icon', label: 'Get on the list' })), labelled('small (48)', fab({ kind: 'small', label: 'Get on the list' }))]) };
export const States = { render: () => row(['', 'hover', 'focus', 'pressed'].map((s) => labelled(s || 'default', fab({ state: s })))) };
export const FloatingInFrame = {
  render: () => `<div class="sb-frame" style="height:260px"><p class="sb-panel">The FAB pins bottom-right, slightly tilted, and only shows once the hero has scrolled away and the form is not yet in view (see docs).</p>${floatingFab()}</div>`,
};
