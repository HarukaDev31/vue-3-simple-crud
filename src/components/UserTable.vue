<script setup>
import { computed } from 'vue'
import { BaseTable } from './base'

const props = defineProps({
  users: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete'])

const headers = [
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Username', key: 'username', align: 'start' },
  { title: 'Email', key: 'email', align: 'start' },
  { title: 'Phone', key: 'phone', align: 'start' },
  { title: 'Actions', key: 'actions', align: 'end', sortable: false }
]
</script>

<template>
  <BaseTable
    :headers="headers"
    :items="users"
    :loading="loading"
    :items-per-page="10"
    no-data-text="No users found"
    searchable
    search-placeholder="Search users..."
  >
    <template #item.actions="{ item }">
      <v-btn
        icon="mdi-pencil"
        variant="text"
        color="primary"
        size="small"
        @click.stop="emit('edit', item)"
      />
      <v-btn
        icon="mdi-delete"
        variant="text"
        color="error"
        size="small"
        @click.stop="emit('delete', item)"
      />
    </template>
  </BaseTable>
</template>
