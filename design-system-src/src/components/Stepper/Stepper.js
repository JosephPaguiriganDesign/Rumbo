import { icons } from '../../lib/icons.js';
export const steps = [
  ['Put your name down', 'Fill in the interest list. It’s not an application and it’s not a commitment.'],
  ['Have a chat', 'A 20-minute video call with a parent and the player. Ask us anything, including the awkward stuff.'],
  ['Lock in a spot', 'A $500 deposit holds a place in one of the two age groups. The balance is due on 1 April 2027.'],
  ['Fly out together', 'Most of the group flies into Lisbon on Sunday 11 July. We’ll help with flight timing so nobody lands alone.'],
];
/** Numbered "play" stepper (ordered list). tone: primary (on cobalt) | paper. current: 1-based index or 0. done: count completed. */
export function stepper({ items = steps, tone = 'primary', current = 0, done = 0 } = {}) {
  return `<ol class="play${tone === 'paper' ? ' play--paper' : ''}">${items.map(([t, p], i) => { const isDone = i < done, isCur = current === i + 1; return `<li class="play__step${isDone ? ' is-done' : ''}"${isCur ? ' aria-current="step"' : ''}><span class="play__n" aria-hidden="true">${isDone ? icons.check(28) : i + 1}</span><div><h3 class="title">${t}${isDone ? '<span class="sr-only"> (done)</span>' : ''}${isCur ? '<span class="sr-only"> (current step)</span>' : ''}</h3><p>${p}</p></div></li>`; }).join('')}</ol>`;
}
