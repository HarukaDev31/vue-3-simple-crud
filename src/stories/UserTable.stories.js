import UserTable from '@/components/UserTable.vue'

export default {
  title: 'Features/UserTable',
  component: UserTable,
  tags: ['autodocs']
}

const sampleUsers = [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', phone: '1-770-736-8031' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', phone: '010-692-6593' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', phone: '493-170-9623' },
  { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', phone: '(254)954-1289' }
]

export const Default = {
  args: {
    users: sampleUsers,
    loading: false
  }
}

export const Loading = {
  args: {
    users: [],
    loading: true
  }
}

export const Empty = {
  args: {
    users: [],
    loading: false
  }
}

export const Interactive = {
  render: () => ({
    components: { UserTable },
    setup() {
      const users = sampleUsers
      const handleEdit = (user) => {
        alert(`Edit user: ${user.name}`)
      }
      const handleDelete = (user) => {
        alert(`Delete user: ${user.name}`)
      }
      return { users, handleEdit, handleDelete }
    },
    template: `
      <UserTable
        :users="users"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `
  })
}
