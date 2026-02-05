<script setup>
import { ref, onMounted } from 'vue'
import { useUsers } from '@/composables/useUsers'
import UserTable from '@/components/UserTable.vue'
import UserModal from '@/components/UserModal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const { users, loading, error, loadUsers, addUser, updateUser, deleteUser, resetToApi } = useUsers()

const isModalOpen = ref(false)
const isConfirmOpen = ref(false)
const isResetConfirmOpen = ref(false)
const selectedUser = ref(null)
const userToDelete = ref(null)

onMounted(() => {
  loadUsers()
})

function openAddModal() {
  selectedUser.value = null
  isModalOpen.value = true
}

function openEditModal(user) {
  selectedUser.value = user
  isModalOpen.value = true
}

function handleSave(userData) {
  if (selectedUser.value) {
    updateUser(selectedUser.value.id, userData)
  } else {
    addUser(userData)
  }
  isModalOpen.value = false
  selectedUser.value = null
}

function openConfirmDelete(user) {
  userToDelete.value = user
  isConfirmOpen.value = true
}

function confirmDelete() {
  if (userToDelete.value) {
    deleteUser(userToDelete.value.id)
  }
  isConfirmOpen.value = false
  userToDelete.value = null
}

function cancelDelete() {
  isConfirmOpen.value = false
  userToDelete.value = null
}

function openResetConfirm() {
  isResetConfirmOpen.value = true
}

function confirmReset() {
  resetToApi()
  isResetConfirmOpen.value = false
}

function cancelReset() {
  isResetConfirmOpen.value = false
}
</script>

<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container class="py-8">
        <div class="d-flex justify-space-between align-center mb-8">
          <div>
            <h1 class="text-h4 font-weight-bold">User Management</h1>
            <p class="text-body-2 text-medium-emphasis mt-1">
              Manage your users with this simple CRUD interface
            </p>
          </div>
          <div class="d-flex ga-3">
            <v-btn
              color="grey-darken-1"
              prepend-icon="mdi-refresh"
              @click="openResetConfirm"
            >
              Reset Data
            </v-btn>
            <v-btn
              color="primary"
              prepend-icon="mdi-plus"
              @click="openAddModal"
            >
              Add User
            </v-btn>
          </div>
        </div>

        <v-alert
          v-if="error"
          type="error"
          variant="tonal"
          class="mb-4"
        >
          {{ error }}
        </v-alert>

        <div v-if="loading" class="d-flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>

        <UserTable
          v-else
          :users="users"
          :loading="loading"
          @edit="openEditModal"
          @delete="openConfirmDelete"
        />

        <UserModal
          v-model="isModalOpen"
          :user="selectedUser"
          @save="handleSave"
        />

        <ConfirmDialog
          v-model="isConfirmOpen"
          title="Delete User"
          :message="`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`"
          @confirm="confirmDelete"
          @cancel="cancelDelete"
        />

        <ConfirmDialog
          v-model="isResetConfirmOpen"
          title="Reset Data"
          message="Are you sure you want to reset all data? This will reload the original users from the API and discard all local changes."
          confirm-text="Reset"
          confirm-color="warning"
          @confirm="confirmReset"
          @cancel="cancelReset"
        />
      </v-container>
    </v-main>
  </v-app>
</template>
