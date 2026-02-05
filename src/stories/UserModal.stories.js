import { ref } from 'vue'
import UserModal from '@/components/UserModal.vue'

export default {
  title: 'Features/UserModal',
  component: UserModal,
  tags: ['autodocs']
}

export const CreateMode = {
  render: () => ({
    components: { UserModal },
    setup() {
      const isOpen = ref(false)
      const handleSave = (data) => {
        console.log('New user:', data)
        alert(`Created user: ${data.name}`)
      }
      return { isOpen, handleSave }
    },
    template: `
      <div>
        <v-btn color="primary" prepend-icon="mdi-plus" @click="isOpen = true">
          Add User
        </v-btn>
        <UserModal
          v-model="isOpen"
          @save="handleSave"
        />
      </div>
    `
  })
}

export const EditMode = {
  render: () => ({
    components: { UserModal },
    setup() {
      const isOpen = ref(false)
      const user = {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        phone: '123-456-7890'
      }
      const handleSave = (data) => {
        console.log('Updated user:', data)
        alert(`Updated user: ${data.name}`)
      }
      return { isOpen, user, handleSave }
    },
    template: `
      <div>
        <v-btn color="primary" prepend-icon="mdi-pencil" @click="isOpen = true">
          Edit User
        </v-btn>
        <UserModal
          v-model="isOpen"
          :user="user"
          @save="handleSave"
        />
      </div>
    `
  })
}

export const OpenByDefault = {
  render: () => ({
    components: { UserModal },
    setup() {
      const isOpen = ref(true)
      const handleSave = (data) => {
        console.log('Saved:', data)
      }
      return { isOpen, handleSave }
    },
    template: `
      <UserModal
        v-model="isOpen"
        @save="handleSave"
      />
    `
  })
}
