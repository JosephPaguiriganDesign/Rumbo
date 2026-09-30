import { photoFrame, tape } from './PhotoFrame.js';
import { grid, labelled, row } from '../../lib/story.js';
export default {
  title: 'Components/Tape & photo frame',
  parameters: { layout: 'padded' },
  argTypes: { photo: { control: 'select', options: ['bridge', 'belem', 'estoril', 'alcazaba', 'muelle'] }, duo: { control: 'select', options: ['cobalt', 'clay', 'ink', 'sun', 'plain'] }, shape: { control: 'inline-radio', options: ['tall', 'wide', 'square'] }, caption: { control: 'text' }, alt: { control: 'text' }, credit: { control: 'boolean' }, tilt: { control: 'boolean' }, halftone: { control: 'boolean' }, showTape: { control: 'boolean' }, tapeKind: { control: 'inline-radio', options: ['yellow', 'clay'] }, tapePos: { control: 'inline-radio', options: ['a', 'b', 'corner'] } },
  args: { photo: 'bridge', duo: 'cobalt', shape: 'wide', credit: false, tilt: true, halftone: true, showTape: true, tapeKind: 'yellow', tapePos: 'a' },
  render: (a) => `<div style="width:min(100%,420px);padding:28px 20px">${photoFrame(a)}</div>`,
};
export const Default = {};
export const Duotones = { render: () => `<div style="padding:28px 12px">${grid([['cobalt', 'belem'], ['clay', 'estoril'], ['ink', 'alcazaba'], ['sun', 'muelle'], ['plain', 'bridge']].map(([d, p]) => labelled(d, photoFrame({ duo: d, photo: p, shape: 'wide', tilt: false }))), 240)}</div>` };
export const Shapes = { render: () => `<div style="padding:28px 12px">${row([photoFrame({ shape: 'tall', photo: 'belem', width: 220 }), photoFrame({ shape: 'wide', photo: 'estoril', duo: 'clay', width: 300, tapePos: 'b' }), photoFrame({ shape: 'square', photo: 'alcazaba', width: 220, tapeKind: 'clay', tapePos: 'corner' })], 32)}</div>` };
export const TapeOnly = { render: () => `<div style="padding:40px;display:flex;gap:60px;position:relative">${['a', 'b', 'corner'].map((p) => `<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">${tape({ pos: p })}</div>`).join('')}${`<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">${tape({ kind: 'clay' })}</div>`}</div>` };
export const WithCredit = { args: { credit: true, shape: 'wide', tilt: false } };
