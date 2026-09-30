import { card, receipt } from './Card.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Card',
  parameters: { layout: 'padded' },
  argTypes: { variant: { control: 'inline-radio', options: ['paper', 'sun', 'tonal', 'flat'] }, tape: { control: 'boolean' }, tilt: { control: 'boolean' }, interactive: { control: 'boolean' }, media: { control: 'boolean' }, kicker: { control: 'text' }, title: { control: 'text' }, body: { control: 'text' }, state: { control: 'select', options: ['', 'hover'] } },
  args: { kicker: 'Week one', title: 'The Lisbon coast', body: 'Sessions on rented grass and 3G pitches, two a day, with our own coaches.', variant: 'paper', tape: false, tilt: false, interactive: false, media: false, state: '' },
  render: (a) => `<div style="max-width:380px;padding:16px">${card(a)}</div>`,
};
export const Default = {};
export const Variants = { render: () => grid(['paper', 'sun', 'tonal', 'flat'].map((v) => labelled(v, card({ variant: v, title: `${v[0].toUpperCase()}${v.slice(1)} card` }))), 260) };
export const WithPhotoAndTape = { args: { media: true, tape: true, tilt: true, variant: 'paper' } };
export const Interactive = { args: { interactive: true }, parameters: { docs: { description: { story: 'Whole card is one link (stretched ::after). Only one focus stop per card; do not nest buttons inside.' } } } };
export const InteractiveStates = { render: () => grid([labelled('default', card({ interactive: true })), labelled('hover', card({ interactive: true, state: 'hover' }))], 260) };
export const Receipt = { parameters: { backgrounds: { disable: true } }, render: () => `<div class="sb-panel sb-panel--inverse" style="padding-bottom:64px">${receipt()}</div>`, name: 'Receipt (on dark ground)' };
export const ReceiptOnPaper = { render: () => `<div style="max-width:640px;padding:24px">${receipt()}</div>` };
