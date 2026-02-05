import { ref } from 'vue'
import { BaseModal } from '@/components/base'

export default {
  title: 'Base/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: { type: 'range', min: 300, max: 900, step: 50 }
    }
  }
}

export const Default = {
  render: () => ({
    components: { BaseModal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn @click="isOpen = true">Open Modal</v-btn>
        <BaseModal v-model="isOpen" title="Modal Title">
          <p>This is the modal content. You can put any content here.</p>
        </BaseModal>
      </div>
    `
  })
}

export const WithActions = {
  render: () => ({
    components: { BaseModal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn @click="isOpen = true">Open Modal with Actions</v-btn>
        <BaseModal v-model="isOpen" title="Confirm Action">
          <p>Are you sure you want to proceed with this action?</p>
          <template #actions>
            <v-spacer />
            <v-btn variant="text" @click="isOpen = false">Cancel</v-btn>
            <v-btn color="primary" @click="isOpen = false">Confirm</v-btn>
          </template>
        </BaseModal>
      </div>
    `
  })
}

export const CustomWidth = {
  render: () => ({
    components: { BaseModal },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <v-btn @click="isOpen = true">Open Wide Modal</v-btn>
        <BaseModal v-model="isOpen" title="Wide Modal" :max-width="800">
          <p>This modal has a custom width of 800px.</p>
        </BaseModal>
      </div>
    `
  })
}

export const WithForm = {
  render: () => ({
    components: { BaseModal },
    setup() {
      const isOpen = ref(false)
      const name = ref('')
      const email = ref('')
      return { isOpen, name, email }
    },
    template: `
      <div>
        <v-btn @click="isOpen = true">Open Form Modal</v-btn>
        <BaseModal v-model="isOpen" title="User Form">
          <v-form>
            <v-text-field v-model="name" label="Name" variant="outlined" class="mb-4" />
            <v-text-field v-model="email" label="Email" type="email" variant="outlined" />
          </v-form>
          <template #actions>
            <v-spacer />
            <v-btn variant="text" @click="isOpen = false">Cancel</v-btn>
            <v-btn color="primary" @click="isOpen = false">Save</v-btn>
          </template>
        </BaseModal>
      </div>
    `
  })
}
