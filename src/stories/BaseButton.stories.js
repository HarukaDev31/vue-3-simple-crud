import { BaseButton } from '@/components/base'

export default {
  title: 'Base/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['flat', 'elevated', 'tonal', 'outlined', 'text', 'plain']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info']
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large']
    }
  }
}

export const Primary = {
  args: {
    color: 'primary',
    default: 'Primary Button'
  },
  render: (args) => ({
    components: { BaseButton },
    setup() { return { args } },
    template: '<BaseButton v-bind="args">Primary Button</BaseButton>'
  })
}

export const Secondary = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton color="secondary">Secondary Button</BaseButton>'
  })
}

export const Variants = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="d-flex ga-4 flex-wrap">
        <BaseButton variant="flat" color="primary">Flat</BaseButton>
        <BaseButton variant="elevated" color="primary">Elevated</BaseButton>
        <BaseButton variant="tonal" color="primary">Tonal</BaseButton>
        <BaseButton variant="outlined" color="primary">Outlined</BaseButton>
        <BaseButton variant="text" color="primary">Text</BaseButton>
        <BaseButton variant="plain" color="primary">Plain</BaseButton>
      </div>
    `
  })
}

export const Sizes = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="d-flex ga-4 align-center">
        <BaseButton size="x-small">X-Small</BaseButton>
        <BaseButton size="small">Small</BaseButton>
        <BaseButton size="default">Default</BaseButton>
        <BaseButton size="large">Large</BaseButton>
        <BaseButton size="x-large">X-Large</BaseButton>
      </div>
    `
  })
}

export const WithIcons = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div class="d-flex ga-4">
        <BaseButton prepend-icon="mdi-plus">Add Item</BaseButton>
        <BaseButton append-icon="mdi-arrow-right">Continue</BaseButton>
        <BaseButton icon="mdi-pencil" />
      </div>
    `
  })
}

export const Loading = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton :loading="true">Loading...</BaseButton>'
  })
}

export const Disabled = {
  render: () => ({
    components: { BaseButton },
    template: '<BaseButton :disabled="true">Disabled</BaseButton>'
  })
}
