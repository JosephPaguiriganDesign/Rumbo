import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.dirname(fileURLToPath(import.meta.url));
/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: { name: '@storybook/html-vite', options: {} },
  // site photos are read-only inputs: /photos/* -> ../assets/photos/web
  staticDirs: [{ from: path.resolve(root, '../../docs/assets/photos/web'), to: '/photos' }],
  core: { disableTelemetry: true },
};
