import { footer } from './FooterCredits.js';
export default {
  title: 'Components/Footer & credits',
  parameters: { layout: 'fullscreen' },
  argTypes: { open: { control: 'boolean' }, sample: { control: 'boolean' }, tear: { control: 'boolean' }, contact: { control: 'text' } },
  args: { open: false, sample: true, tear: true, contact: 'hello@rumbo.example' },
  render: (a) => `<div style="padding-top:40px;background:var(--md-sys-color-surface)">${footer(a)}</div>`,
};
export const Default = {};
export const CreditsOpen = { args: { open: true } };
export const NoTear = { args: { tear: false } };
