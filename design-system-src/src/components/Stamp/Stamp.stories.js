import { stamp } from './Stamp.js';
import { row, labelled } from '../../lib/story.js';
export default {
  title: 'Components/Stamp',
  parameters: { layout: 'padded' },
  argTypes: { kind: { control: 'inline-radio', options: ['round', 'draft', 'box'] }, word: { control: 'text' }, date: { control: 'text' }, sub: { control: 'text' }, color: { control: 'inline-radio', options: ['tertiary', 'primary', 'error'] }, still: { control: 'boolean' } },
  args: { kind: 'round', word: 'SALIDA', date: '11 · VII · 27', sub: 'SUBJECT TO CHANGE', color: 'tertiary', still: true },
  render: (a) => `<div style="padding:24px">${stamp(a.kind === 'draft' && a.word === 'SALIDA' ? { ...a, word: 'DRAFT' } : a)}</div>`,
};
export const Default = {};
export const Kinds = { render: () => `<div style="padding:24px">${row([labelled('round', stamp({})), labelled('draft', stamp({ kind: 'draft', word: 'DRAFT' })), labelled('box (hero stampline)', stamp({ kind: 'box', word: 'Summer 2027 · Iberia' }))], 40)}</div>` };
export const Colours = { render: () => `<div style="padding:24px">${row([labelled('clay (default)', stamp({})), labelled('cobalt', stamp({ color: 'primary' })), labelled('error', stamp({ kind: 'draft', word: 'VOID', sub: 'NOT VALID', color: 'error' }))], 40)}</div>` };
export const Tilted = { args: { still: false }, parameters: { docs: { description: { story: 'The site rotates stamps (-14° / 6°) and multiplies them onto paper. Use tilt for decoration only; the aria-label carries the message.' } } } };
