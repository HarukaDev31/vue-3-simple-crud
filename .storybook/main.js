/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}

export default config
