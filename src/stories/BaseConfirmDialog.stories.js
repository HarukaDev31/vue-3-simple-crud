import { ref } from 'vue'
import { BaseConfirmDialog } from '@/components/base'

export default {
  title: 'Base/BaseConfirmDialog',
  component: BaseConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    confirmColor: {
      control: 'select',
      options: ['primary', 'error', 'warning', 'success', 'info']
    },
    iconColor: {
      control: 'select',
      options: ['primary', 'error', 'warning', 'success', 'info']
    }
  }
}

export const Default = {
  render: () => ({
    components: { BaseConfirmDialog },
    setup() {
      const isOpen = ref(false)
      const handleConfirm = () => {
        console.log('Confirmed!')
        isOpen.value = false
      }
      return { isOpen, handleConfirm }
    },
    template: `
      <div>
        <v-btn color="error" @click="isOpen = true">Delete Item</v-btn>
        <BaseConfirmDialog
          v-model="isOpen"
          title="Delete Item"
          message="Are you sure you want to delete this item? This action cannot be undone."
          @confirm="handleConfirm"
        />
      </div>
    `
  })
}

export const WarningConfirm = {
  render: () => ({
    components: { BaseConfirmDialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn color="warning" @click="isOpen = true">Reset Data</v-btn>
        <BaseConfirmDialog
          v-model="isOpen"
          title="Reset Data"
          message="This will reset all data to default values. Are you sure?"
          confirm-text="Reset"
          confirm-color="warning"
          icon="mdi-refresh"
          icon-color="warning"
          @confirm="isOpen = false"
        />
      </div>
    `
  })
}

export const SuccessConfirm = {
  render: () => ({
    components: { BaseConfirmDialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn color="success" @click="isOpen = true">Publish</v-btn>
        <BaseConfirmDialog
          v-model="isOpen"
          title="Publish Content"
          message="This will make your content visible to everyone. Continue?"
          confirm-text="Publish"
          confirm-color="success"
          icon="mdi-check-circle-outline"
          icon-color="success"
          @confirm="isOpen = false"
        />
      </div>
    `
  })
}

export const CustomButtons = {
  render: () => ({
    components: { BaseConfirmDialog },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn @click="isOpen = true">Custom Dialog</v-btn>
        <BaseConfirmDialog
          v-model="isOpen"
          title="Custom Confirm"
          message="This dialog has custom button texts."
          confirm-text="Yes, proceed"
          cancel-text="No, go back"
          confirm-color="primary"
          icon="mdi-help-circle-outline"
          icon-color="primary"
          @confirm="isOpen = false"
        />
      </div>
    `
  })
}
