import { icons } from '../../lib/icons.js';
import { tornEdge } from '../SectionDivider/SectionDivider.js';
export const credits = [
  ['Vasco da Gama Bridge at sunrise: André B. Matos', 'https://creativecommons.org/licenses/by-sa/4.0', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Ponte_Vasco_da_Gama_at_Sunrise.jpg'],
  ['Torre de Belém, Lisbon: Rodrigo.Argenton', 'https://creativecommons.org/licenses/by-sa/4.0', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m_por_Rodrigo_Tetsuo_Argenton_(2).jpg'],
  ['Muelle Uno, Málaga port: Zarateman', 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', 'CC0', 'https://commons.wikimedia.org/wiki/File:M%C3%A1laga_-_Paseo_del_Muelle_Uno_1.jpg'],
];
export function footer({ open = false, contact = 'hello@rumbo.example', sample = true, tear = true } = {}) {
  return `<footer class="site-footer">${tear ? tornEdge({ edge: 'torn3' }) : ''}<div class="wrap foot"><div class="foot__top"><p class="foot__brand">${icons.brandMark(40, 'var(--rumbo-footer-accent)')}Rumbo</p><p class="foot__tag mono">Summer 2027 · Iberia</p></div>
<p class="foot__contact">Say hello: <a href="mailto:${contact}">${contact}</a>${sample ? ' <span class="mono foot__sample">(sample address)</span>' : ''}</p>
<p class="disclaimer">Rumbo is an independent program and is not affiliated with, endorsed by, or partnered with any professional club or academy unless explicitly stated. Taking part does not guarantee selection, placement, a trial, or a contract.</p>
<details class="credits" ${open ? 'open' : ''}><summary class="state">Photo credits</summary><ul class="credits__list">${credits.map(([t, l, ln, src]) => `<li>${t}, <a href="${l}">${ln}</a>, <a href="${src}">Wikimedia Commons</a></li>`).join('')}</ul><p class="credits__note">Photos are shown in a two-colour treatment and resized. Original files are at the Commons links.</p></details>
<p class="fine-foot mono">© 2027 Rumbo · Draft site · Sample details are placeholders</p></div></footer>`;
}
