import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  title: 'Features/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info']
    }
  }
}

export const Default = {
  args: {
    size: 'md',
    color: 'primary'
  }
}

export const Sizes = {
  render: () => ({
    components: { LoadingSpinner },
    template: `
      <div class="d-flex ga-8 align-center">
        <div class="text-center">
          <LoadingSpinner size="sm" />
          <p class="text-caption mt-2">Small</p>
        </div>
        <div class="text-center">
          <LoadingSpinner size="md" />
          <p class="text-caption mt-2">Medium</p>
        </div>
        <div class="text-center">
          <LoadingSpinner size="lg" />
          <p class="text-caption mt-2">Large</p>
        </div>
        <div class="text-center">
          <LoadingSpinner size="xl" />
          <p class="text-caption mt-2">X-Large</p>
        </div>
      </div>
    `
  })
}

export const Colors = {
  render: () => ({
    components: { LoadingSpinner },
    template: `
      <div class="d-flex ga-8 align-center">
        <LoadingSpinner color="primary" />
        <LoadingSpinner color="secondary" />
        <LoadingSpinner color="success" />
        <LoadingSpinner color="error" />
        <LoadingSpinner color="warning" />
        <LoadingSpinner color="info" />
      </div>
    `
  })
}
