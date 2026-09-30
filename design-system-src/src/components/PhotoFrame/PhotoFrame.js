import { photos } from '../../lib/photos.js';
/** Tape strip. kind: yellow | clay ; position a | b | corner. Decorative (aria-hidden). */
export const tape = ({ kind = 'yellow', pos = 'a' } = {}) => `<span class="tape tape--${pos}${kind === 'clay' ? ' tape--clay' : ''}" aria-hidden="true"></span>`;
/** Photo frame: paper print + tape + duotone/halftone. duo: cobalt|clay|ink|sun|plain. shape: tall|wide|square. */
export function photoFrame({ photo = 'bridge', duo = 'cobalt', shape = 'wide', caption, credit = false, tapeKind = 'yellow', tapePos = 'a', tilt = true, halftone = true, alt, showTape = true, width } = {}) {
  const p = photos[photo];
  return `<figure class="pic pic--${shape}${tilt ? '' : ' no-tilt'}" style="${width ? `width:${width}px;` : ''}margin-top:${shape === 'wide' && tilt ? 12 : 0}px"><div class="duo duo--${duo}${halftone ? '' : ' duo--nohalftone'}"><img src="${p.src}" width="${p.w}" height="${p.h}" alt="${alt ?? p.alt}" loading="lazy" decoding="async"></div>${showTape ? tape({ kind: tapeKind, pos: tapePos }) : ''}<figcaption class="mono">${caption ?? p.cap}</figcaption>${credit ? `<span class="pic__credit">${p.credit.split(',')[0]}</span>` : ''}</figure>`;
}
