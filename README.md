# Vue 3 CRUD - User Management

A complete CRUD application for user management built with Vue 3, Vuetify 3, and VeeValidate.

## Features

- List users in a data table with search functionality
- Add new users with form validation
- Edit existing users
- Delete users with confirmation dialog
- Data persistence with localStorage
- Reset to original API data

## Tech Stack

- **Vue 3** - Composition API
- **Vuetify 3** - UI Component Library
- **VeeValidate + Yup** - Form validation
- **Vite** - Build tool
- **Tailwind CSS** - Utility classes
- **Storybook** - Component documentation

## Project Structure

```
src/
├── components/
│   ├── base/                    # Reusable base components
│   │   ├── BaseButton.vue
│   │   ├── BaseTable.vue
│   │   ├── BaseModal.vue
│   │   ├── BaseConfirmDialog.vue
│   │   └── index.js
│   ├── UserTable.vue
│   ├── UserModal.vue
│   ├── ConfirmDialog.vue
│   └── LoadingSpinner.vue
├── composables/
│   └── useUsers.js              # User state management
├── services/
│   └── userService.js           # API calls
├── stories/                     # Storybook stories
└── utils/
    └── validators.js
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Run Storybook

```bash
npm run storybook
```

### Build for production

```bash
npm run build
```

## Base Components

### BaseTable

Data table with built-in search functionality.

```vue
<BaseTable
  :headers="headers"
  :items="items"
  :loading="loading"
  searchable
  search-placeholder="Search..."
/>
```

### BaseModal

Modal dialog with title, content, and actions slots.

```vue
<BaseModal v-model="isOpen" title="Modal Title">
  <p>Content here</p>
  <template #actions>
    <v-btn @click="isOpen = false">Close</v-btn>
  </template>
</BaseModal>
```

### BaseConfirmDialog

Confirmation dialog for destructive actions.

```vue
<BaseConfirmDialog
  v-model="isOpen"
  title="Delete Item"
  message="Are you sure?"
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
```

### BaseButton

Button wrapper with common variants.

```vue
<BaseButton color="primary" prepend-icon="mdi-plus">
  Add Item
</BaseButton>
```

## API

The application consumes data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

Data is stored locally in localStorage after the initial fetch, allowing CRUD operations to persist across page reloads.

## License

MIT
