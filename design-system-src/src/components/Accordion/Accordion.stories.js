import { accordion } from './Accordion.js';
import { grid, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Accordion',
  parameters: { layout: 'padded' },
  argTypes: { variant: { control: 'inline-radio', options: ['rule', 'card'] }, single: { control: 'boolean' }, open: { control: 'object' }, headingLevel: { control: 'inline-radio', options: [2, 3, 4] }, state: { control: 'select', options: ['', 'hover', 'focus'] }, disabledIdx: { control: { type: 'number', min: -1, max: 2 } } },
  args: { variant: 'rule', single: false, open: [0], headingLevel: 3, state: '', disabledIdx: -1 },
  render: (a) => `<div style="max-width:720px;padding:12px">${accordion(a)}</div>`,
};
export const Default = {};
export const AllClosed = { args: { open: [] } };
export const AllOpen = { args: { open: [0, 1, 2] } };
export const SingleOpen = { args: { single: true } };
export const CardVariant = { args: { variant: 'card' } };
export const States = { render: () => grid([labelled('hover (first row)', accordion({ open: [], state: 'hover' })), labelled('focus (first row)', accordion({ open: [], state: 'focus' })), labelled('disabled (2nd row)', accordion({ open: [], disabledIdx: 1 }))], 340) };
