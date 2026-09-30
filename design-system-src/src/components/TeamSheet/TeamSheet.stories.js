import { teamSheet, personCard } from './TeamSheet.js';
import { grid } from '../../lib/story.js';
export default {
  title: 'Components/Team sheet & person card',
  parameters: { layout: 'padded' },
  argTypes: { kicker: { control: 'text' }, title: { control: 'text' }, foot: { control: 'text' }, tilt: { control: 'boolean' } },
  args: { kicker: 'Team sheet · sample staff', title: 'The adults on the trip', tilt: true },
  render: (a) => `<div style="max-width:520px;padding:28px 20px">${teamSheet(a)}</div>`,
};
export const Default = {};
export const Flat = { args: { tilt: false } };
export const PersonCards = { render: () => `<div style="padding:24px">${grid([personCard({}), personCard({ no: '1', name: 'Marco', role: 'Head coach', tags: ['UEFA B'] }), personCard({ no: '5', name: 'Joseph', role: 'Runs Rumbo. Logistics, parents, and bags.', tags: [], tone: 'sun' })], 300)}</div>` };
