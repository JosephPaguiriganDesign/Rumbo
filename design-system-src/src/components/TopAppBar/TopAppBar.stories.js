import { topAppBar } from './TopAppBar.js';
import { filterDefs } from '../../lib/filters.js';
const frame = (html, h = 140, w = '100%') => `<div class="sb-frame" style="height:${h}px;width:${w};max-width:100%">${html}</div>`;
export default {
  title: 'Components/Top app bar',
  parameters: { layout: 'padded' },
  argTypes: { layout: { control: 'inline-radio', options: ['wide', 'compact'] }, current: { control: { type: 'number', min: -1, max: 5 } }, progress: { control: { type: 'range', min: 0, max: 1, step: 0.05 } }, scrolled: { control: 'boolean' }, cta: { control: 'text' } },
  args: { layout: 'wide', current: 1, progress: 0.35, scrolled: false, cta: 'Get on the list' },
  render: (a) => frame(topAppBar(a), 110, a.layout === 'compact' ? '390px' : '100%'),
};
export const Default = {};
export const Wide = { args: { layout: 'wide' } };
export const Compact = { args: { layout: 'compact' } };
export const Scrolled = { args: { scrolled: true, progress: 0.7 }, parameters: { docs: { description: { story: 'Once the page scrolls past 24px the bar gains an ink offset shadow and the dotted route line fills to the scroll progress.' } } } };
export const NoCurrentLink = { args: { current: -1, progress: 0 } };
