import { stepper } from './Stepper.js';
export default {
  title: 'Components/Stepper',
  parameters: { layout: 'fullscreen' },
  argTypes: { tone: { control: 'inline-radio', options: ['primary', 'paper'] }, current: { control: { type: 'number', min: 0, max: 4 } }, done: { control: { type: 'number', min: 0, max: 4 } } },
  args: { tone: 'primary', current: 0, done: 0 },
  render: (a) => `<div class="sb-panel ${a.tone === 'primary' ? 'sb-panel--primary on-primary-panel' : ''}">${stepper(a)}</div>`,
};
export const Default = {};
export const OnPaper = { args: { tone: 'paper' } };
export const Progress = { args: { tone: 'paper', done: 2, current: 3 }, parameters: { docs: { description: { story: 'aria-current="step" marks the active step; completed steps swap the number for a tick and add “(done)” for screen readers.' } } } };
