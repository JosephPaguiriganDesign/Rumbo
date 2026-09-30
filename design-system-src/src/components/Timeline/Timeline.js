export const days = [
  { n: '01', d: 'Sun 11 Jul', t: 'Land in Lisbon', p: 'Airport pickup, check in, a slow walk to the water. Early night.', kind: 'wk' },
  { n: '02', d: 'Mon 12 Jul', t: 'First session', p: 'Team meeting after breakfast, then a light session so the coaches can see who’s who.' },
  { n: '03', d: 'Tue 13 Jul', t: 'Two-a-day', p: 'Morning technical work, evening small-sided games. Video review over dinner.' },
  { n: '04', d: 'Wed 14 Jul', t: 'Friendly No. 1', p: 'Against a local club, if the calendar cooperates. Everyone plays.', kind: 'match' },
];
export function day({ n, d, t, p, kind = '', current = false }) {
  return `<li class="day${kind ? ' day--' + kind : ''}${current ? ' is-current' : ''}"${current ? ' aria-current="date"' : ''}><span class="day__n" aria-hidden="true">${n}</span><div><h3 class="day__t"><span class="mono day__d">${d}</span> ${t}${kind === 'match' ? ' <span class="tag">match day</span>' : ''}</h3><p>${p}</p></div></li>`;
}
/** Itinerary timeline. kinds: (none) normal | wk = travel/week-boundary | match | fly. */
export function timeline({ items = days, label = 'Sample day-by-day plan', current = -1 } = {}) {
  return `<ol class="days" aria-label="${label}">${items.map((x, i) => day({ ...x, current: i === current })).join('')}</ol>`;
}
