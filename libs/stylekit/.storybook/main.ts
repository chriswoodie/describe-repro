import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/preset-scss',
    // 'storybook-addon-angular-router'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },

  // NOTE: This is a workaround for https://github.com/storybookjs/storybook/issues/23883.
  // TODO: Remove when the issue is fixed
  previewHead: (head) => `
    ${head}
    ${`
      <script>
        window.beforeEach = window.beforeEach || (() => {});
        window.afterEach = window.afterEach || (() => {});
      </script>
    `}
  `
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
