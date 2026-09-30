import { icons, barcode } from '../../lib/icons.js';
/** Boarding-pass style trip summary. */
export function boardingPass({ kicker = 'Rumbo · Summer 2027', from = 'LIS', to = 'AGP', dates = 'Sun 11 Jul – Sat 24 Jul 2027', stub = '14 days', tilt = true, big = false, ariaLabel = 'Boarding pass style summary of the trip' } = {}) {
  return `<div class="pass pass--static${tilt ? '' : ' pass--flat'}${big ? ' pass--big' : ''}" role="group" aria-label="${ariaLabel}"><div class="pass__main"><p class="pass__k mono">${kicker}</p><div class="pass__route"><span class="pass__code">${from}</span>${icons.plane()}<span class="pass__code">${to}</span></div><p class="pass__d mono">${dates}</p></div><div class="pass__stub" aria-hidden="true"><svg viewBox="0 0 130 40" width="100%" height="34" preserveAspectRatio="none" fill="currentColor">${barcode}</svg><p class="mono">${stub}</p></div></div>`;
}
