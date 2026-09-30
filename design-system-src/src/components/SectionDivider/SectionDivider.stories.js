import { sectionDivider } from './SectionDivider.js';
const FG = { paper: 'var(--md-sys-color-on-surface)', lowest: 'var(--md-sys-color-on-surface)', cobalt: 'var(--md-sys-color-on-primary)', clay: 'var(--md-sys-color-on-tertiary-container)', ink: 'var(--md-sys-color-inverse-on-surface)', sun: 'var(--md-sys-color-on-sun-container)' };
const C = { paper: 'var(--md-sys-color-surface)', lowest: 'var(--md-sys-color-surface-container-lowest)', cobalt: 'var(--md-sys-color-primary)', clay: 'var(--md-sys-color-tertiary-container)', ink: 'var(--md-sys-color-inverse-surface)', sun: 'var(--md-sys-color-sun-container)' };
export default {
  title: 'Components/Section divider (torn edge)',
  parameters: { layout: 'fullscreen' },
  argTypes: { edge: { control: 'select', options: ['torn1', 'torn2', 'torn3', 'torn4', 'torn5', 'wave1'] }, from: { control: 'select', options: Object.keys(C) }, to: { control: 'select', options: Object.keys(C) } },
  args: { edge: 'torn1', from: 'paper', to: 'lowest' },
  render: (a) => sectionDivider({ ...a, from: C[a.from], to: C[a.to], fgA: FG[a.from], fgB: FG[a.to] }),
};
export const Default = {};
export const AllEdges = { render: () => { const A = ['paper', 'lowest', 'cobalt', 'paper', 'clay', 'paper'], B = ['lowest', 'cobalt', 'paper', 'clay', 'ink', 'sun']; return ['torn1', 'torn2', 'torn3', 'torn4', 'torn5', 'wave1'].map((e, i) => sectionDivider({ edge: e, from: C[A[i]], to: C[B[i]], fgA: FG[A[i]], fgB: FG[B[i]], textA: '', textB: e })).join(''); } };
export const OnCobalt = { args: { from: 'lowest', to: 'cobalt', edge: 'torn2' } };
export const OnInk = { args: { from: 'clay', to: 'ink', edge: 'torn5' } };
