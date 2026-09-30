import { routeLine } from './RouteLine.js';
import { topAppBar } from '../TopAppBar/TopAppBar.js';
import { labelled, grid } from '../../lib/story.js';
export default {
  title: 'Components/Route line',
  parameters: { layout: 'padded' },
  argTypes: { progress: { control: { type: 'range', min: 0, max: 1, step: 0.05 } }, label: { control: 'text' }, now: { control: 'text' } },
  args: { progress: 0.4, label: 'Trip progress', now: 'Day 6 of 14: Lisbon on foot' },
  render: (a) => `<div style="max-width:640px;padding:24px 20px">${routeLine(a)}</div>`,
};
export const Default = {};
export const Steps = { render: () => `<div style="max-width:640px;padding:24px 20px;display:grid;gap:36px">${[0, 0.25, 0.5, 0.75, 1].map((p) => labelled(`${p * 100}%`, routeLine({ progress: p }).replace('role="progressbar"', 'role="progressbar"'))).join('')}</div>`, parameters: { a11y: { test: 'todo' } } };
export const InAppBar = { render: () => `<div class="sb-frame" style="height:110px">${topAppBar({ progress: 0.6 })}</div>`, parameters: { docs: { description: { story: 'Same dotted line runs along the bottom edge of the top app bar, driven by --progress (scroll position). That instance is aria-hidden: it is decoration, not a control.' } } } };
