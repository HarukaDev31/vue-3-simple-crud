import { BaseTable } from '@/components/base'

export default {
  title: 'Base/BaseTable',
  component: BaseTable,
  tags: ['autodocs']
}

const sampleHeaders = [
  { title: 'ID', key: 'id', align: 'start' },
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Email', key: 'email', align: 'start' },
  { title: 'Status', key: 'status', align: 'center' }
]

const sampleItems = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending' }
]

export const Default = {
  args: {
    headers: sampleHeaders,
    items: sampleItems
  }
}

export const Loading = {
  args: {
    headers: sampleHeaders,
    items: [],
    loading: true
  }
}

export const Empty = {
  args: {
    headers: sampleHeaders,
    items: [],
    noDataText: 'No records found'
  }
}

export const WithCustomSlot = {
  render: () => ({
    components: { BaseTable },
    setup() {
      return {
        headers: [
          ...sampleHeaders,
          { title: 'Actions', key: 'actions', align: 'end', sortable: false }
        ],
        items: sampleItems
      }
    },
    template: `
      <BaseTable :headers="headers" :items="items">
        <template #item.status="{ item }">
          <v-chip
            :color="item.status === 'Active' ? 'success' : item.status === 'Inactive' ? 'error' : 'warning'"
            size="small"
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template #item.actions="{ item }">
          <v-btn icon="mdi-pencil" variant="text" size="small" />
          <v-btn icon="mdi-delete" variant="text" size="small" color="error" />
        </template>
      </BaseTable>
    `
  })
}
