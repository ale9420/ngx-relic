import type { StorybookConfig } from '@storybook/angular';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: { autodocs: false },
};
export default config;
