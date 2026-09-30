import '@fontsource/atkinson-hyperlegible-next/400.css';
import '@fontsource/atkinson-hyperlegible-next/500.css';
import '@fontsource/atkinson-hyperlegible-next/700.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import '@fontsource/caveat/600.css';
import '@fontsource/caveat/700.css';
import '../src/css/base.css';
import '../src/css/components.css';
import '../src/css/ds.css';
import './docs.css';
import { injectFilters } from '../src/lib/filters.js';
import { initRumbo } from '../src/lib/behaviors.js';

export const globalTypes = {
  theme: { description: 'Colour scheme', defaultValue: 'light', toolbar: { title: 'Theme', icon: 'paintbrush', items: [{ value: 'light', title: 'Light: day dispatch' }, { value: 'dark', title: 'Dark: night train' }], dynamicTitle: true } },
  motion: { description: 'Motion', defaultValue: 'full', toolbar: { title: 'Motion', icon: 'lightning', items: [{ value: 'full', title: 'Motion: full' }, { value: 'reduced', title: 'Motion: reduced' }], dynamicTitle: true } },
};

export const decorators = [
  (story, ctx) => {
    injectFilters(); initRumbo();
    const out = story();
    const wrap = document.createElement('div');
    const dark = ctx.globals.theme === 'dark';
    wrap.className = 'rumbo' + (ctx.globals.motion === 'reduced' ? ' reduce-motion' : '');
    wrap.setAttribute('data-theme', dark ? 'dark' : 'light');
    wrap.style.padding = ctx.parameters.layout === 'fullscreen' ? '0' : '20px';
    if (ctx.viewMode === 'story') wrap.style.minHeight = '100vh';
    if (typeof out === 'string') wrap.innerHTML = out; else if (out instanceof Node) wrap.appendChild(out);
    if (ctx.viewMode === 'story') { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); document.body.style.background = dark ? '#1a1611' : '#f4ecdb'; }
    return wrap;
  },
];

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true, sort: 'requiredFirst' },
  backgrounds: { disable: true },
  options: { storySort: { order: ['Introduction', 'Foundations', ['Color', 'Typography', 'Spacing', 'Shape', 'Elevation', 'Motion'], 'Accessibility', 'Usage guide', 'Components'] } },
  docs: { toc: true },
  a11y: { options: { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] } } },
};

