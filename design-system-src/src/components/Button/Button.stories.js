import { button } from './Button.js';
import { row, labelled, grid } from '../../lib/story.js';
export default {
  title: 'Components/Button',
  parameters: { docs: { description: { component: 'Cut-corner paper label with an ink offset shadow. Five variants, three sizes, optional trailing arrow, icon-only.' } } },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'inline-radio', options: ['filled', 'tonal', 'outlined', 'accent', 'text'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon: { control: 'boolean' }, iconOnly: { control: 'boolean' }, disabled: { control: 'boolean' }, block: { control: 'boolean' },
    state: { control: 'select', options: ['', 'hover', 'focus', 'pressed'], description: 'Force a state for documentation' },
  },
  args: { label: 'Get on the list', variant: 'filled', size: 'md', icon: false, iconOnly: false, disabled: false, block: false, state: '' },
  render: (a) => button(a),
};
export const Default = {};
export const Variants = { render: () => row(['filled', 'tonal', 'outlined', 'accent', 'text'].map((v) => button({ variant: v, label: v[0].toUpperCase() + v.slice(1) }))) };
export const Sizes = { render: () => row(['sm', 'md', 'lg'].map((s) => button({ size: s, label: `Size ${s}` }))) };
export const WithIcon = { render: () => row([button({ icon: true, size: 'lg' }), button({ variant: 'tonal', icon: true, label: 'Follow the route' }), button({ variant: 'outlined', iconOnly: true, ariaLabel: 'Next leg' }), button({ variant: 'filled', iconOnly: true, ariaLabel: 'Next leg', size: 'lg' })]) };
export const States = {
  render: () => grid(['filled', 'tonal', 'outlined', 'accent', 'text'].map((v) => labelled(v, `<div style="display:grid;gap:14px;justify-items:start">${['', 'hover', 'focus', 'pressed'].map((s) => button({ variant: v, state: s, label: s || 'Default' })).join('')}${button({ variant: v, disabled: true, label: 'Disabled' })}</div>`)), 170),
  parameters: { docs: { description: { story: 'Hover, focus and pressed are forced with .is-hover / .is-focus / .is-pressed so they can be shown statically. Real states use :hover, :focus-visible, :active.' } } },
};
export const Block = { render: () => `<div style="max-width:360px">${button({ block: true, size: 'lg', label: 'Put us on the list' })}</div>` };
export const OnColour = { render: () => `<div style="display:grid;gap:16px">
  <div class="sb-panel sb-panel--primary on-primary-panel">${row([button({ variant: 'tonal', label: 'Tonal on cobalt' })])}</div>
  <div class="sb-panel sb-panel--sun">${row([button({ label: 'Filled on sun' }), button({ variant: 'outlined', label: 'Outlined on sun' })])}</div></div>`,
  parameters: { docs: { description: { story: 'Text button on a cobalt panel inherits ink colour and fails contrast; use tonal or a light --btn-fg there. This story shows the safe combos plus one to avoid is omitted.' } } } };
