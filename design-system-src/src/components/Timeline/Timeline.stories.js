import { timeline, day, days } from './Timeline.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Timeline (itinerary day)',
  parameters: { layout: 'padded' },
  argTypes: { current: { control: { type: 'number', min: -1, max: 3 } }, label: { control: 'text' } },
  args: { current: -1, label: 'Sample day-by-day plan' },
  render: (a) => `<div style="max-width:520px;padding:12px">${timeline(a)}</div>`,
};
export const Default = {};
export const Kinds = { render: () => grid([labelled('normal', `<ol class="days">${day(days[1])}</ol>`), labelled('travel / boundary (wk)', `<ol class="days">${day(days[0])}</ol>`), labelled('match day', `<ol class="days">${day(days[3])}</ol>`), labelled('fly', `<ol class="days">${day({ n: '08', d: 'Sun 18 Jul', t: 'Fly Lisbon to Málaga', p: 'A short flight, then check in and a walk along the port.', kind: 'wk day--fly' })}</ol>`), labelled('current (today)', `<ol class="days">${day({ ...days[2], current: true })}</ol>`)], 300) };
export const TwoColumns = { parameters: { layout: 'fullscreen' }, render: () => `<div style="padding:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px 32px">${days.map((x) => `<ol class="days">${day(x)}</ol>`).join('')}</div>` };
