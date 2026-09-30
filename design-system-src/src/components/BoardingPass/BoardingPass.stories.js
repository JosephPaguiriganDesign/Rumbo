import { boardingPass } from './BoardingPass.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Boarding pass',
  parameters: { layout: 'padded' },
  argTypes: { kicker: { control: 'text' }, from: { control: 'text' }, to: { control: 'text' }, dates: { control: 'text' }, stub: { control: 'text' }, tilt: { control: 'boolean' }, big: { control: 'boolean' } },
  args: { kicker: 'Rumbo · Summer 2027', from: 'LIS', to: 'AGP', dates: 'Sun 11 Jul – Sat 24 Jul 2027', stub: '14 days', tilt: true, big: false },
  render: (a) => `<div style="padding:28px 20px;max-width:460px">${boardingPass(a)}</div>`,
};
export const Default = {};
export const Flat = { args: { tilt: false } };
export const Large = { args: { big: true, tilt: false } };
export const Legs = { render: () => `<div style="padding:28px 20px">${grid([labelled('leg 1', boardingPass({ from: 'LIS', to: 'AGP', stub: 'Days 1–7', tilt: false })), labelled('leg 2', boardingPass({ from: 'LIS', to: 'AGP', dates: 'Sun 18 Jul 2027', kicker: 'Rumbo · Flight to Málaga', stub: 'Days 8–14', tilt: false }))], 340)}</div>` };
