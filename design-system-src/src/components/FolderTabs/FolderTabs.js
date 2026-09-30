import { uid } from '../../lib/story.js';
import { button } from '../Button/Button.js';
const dflt = [
  { n: 'Days 1–7', t: 'Lisbon coast', h: 'Week one: the Lisbon coast', p: 'We base ourselves on the coast west of Lisbon, close enough to the city for a day out and close enough to the sea that nobody can claim they didn’t get a swim.' },
  { n: 'Days 8–14', t: 'Málaga coast', h: 'Week two: the Málaga coast', p: 'A short flight south and the light changes. Week two is match week: fewer drills, more games.' },
];
/** Segmented folder tabs + panel. Roving tabindex, arrows/Home/End (see behaviors.js). */
export function folderTabs({ tabs = dflt, selected = 0, label = 'Choose a leg of the trip' } = {}) {
  const k = uid('ft');
  return `<div class="legs"><div class="folder-tabs" role="tablist" aria-label="${label}">
${tabs.map((t, i) => `<button class="ftab state" role="tab" id="${k}-t${i}" aria-selected="${i === selected}" aria-controls="${k}-p${i}" ${i === selected ? '' : 'tabindex="-1"'} type="button"><span class="ftab__n mono">${t.n}</span><span class="ftab__t">${t.t}</span></button>`).join('')}
</div>
${tabs.map((t, i) => `<div class="leg" role="tabpanel" id="${k}-p${i}" aria-labelledby="${k}-t${i}" tabindex="0" ${i === selected ? '' : 'hidden'}><div class="leg__body"><h3 class="title-xl">${t.h}</h3><p>${t.p}</p>${button({ label: 'Ask about the whole trip', href: '#interest' })}</div></div>`).join('')}</div>`;
}
