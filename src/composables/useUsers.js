import { ref, computed, watch } from 'vue'
import { userService } from '@/services/userService'

const STORAGE_KEY = 'vue-crud-users'

const users = ref([])
const loading = ref(false)
const error = ref(null)

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users.value))
}

function loadFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
  return null
}

export function useUsers() {
  const nextId = computed(() => {
    if (users.value.length === 0) return 1
    return Math.max(...users.value.map(u => u.id)) + 1
  })

  async function loadUsers() {
    loading.value = true
    error.value = null

    const storedUsers = loadFromStorage()
    if (storedUsers && storedUsers.length > 0) {
      users.value = storedUsers
      loading.value = false
      return
    }

    try {
      users.value = await userService.fetchUsers()
      saveToStorage()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  function addUser(userData) {
    const newUser = {
      id: nextId.value,
      ...userData,
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' }
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      },
      website: ''
    }
    users.value.push(newUser)
    saveToStorage()
    return newUser
  }

  function updateUser(id, userData) {
    const index = users.value.findIndex(u => u.id === id)
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...userData }
      saveToStorage()
      return users.value[index]
    }
    return null
  }

  function deleteUser(id) {
    const index = users.value.findIndex(u => u.id === id)
    if (index !== -1) {
      users.value.splice(index, 1)
      saveToStorage()
      return true
    }
    return false
  }

  function getUserById(id) {
    return users.value.find(u => u.id === id)
  }

  function resetToApi() {
    localStorage.removeItem(STORAGE_KEY)
    return loadUsers()
  }

  return {
    users,
    loading,
    error,
    loadUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    resetToApi
  }
}
