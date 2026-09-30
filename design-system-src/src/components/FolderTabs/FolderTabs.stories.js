import { folderTabs } from './FolderTabs.js';
export default {
  title: 'Components/Folder tabs',
  parameters: { layout: 'padded' },
  argTypes: { selected: { control: { type: 'number', min: 0, max: 1 } }, label: { control: 'text' } },
  args: { selected: 0, label: 'Choose a leg of the trip' },
  render: (a) => `<div class="sb-panel sb-panel--low" style="max-width:760px;padding-top:36px">${folderTabs(a)}</div>`,
};
export const Default = {};
export const SecondSelected = { args: { selected: 1 } };
export const ThreeTabs = { render: () => `<div class="sb-panel sb-panel--low" style="max-width:860px">${folderTabs({ selected: 1, tabs: [{ n: 'Days 1–5', t: 'Lisbon', h: 'Lisbon', p: 'Landing, pastéis, first session.' }, { n: 'Days 6–10', t: 'Estoril', h: 'Estoril', p: 'Sea, sessions, friendlies.' }, { n: 'Days 11–14', t: 'Málaga', h: 'Málaga', p: 'Match week.' }] })}</div>` };
