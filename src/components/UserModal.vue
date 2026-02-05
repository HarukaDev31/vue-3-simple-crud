<script setup>
import { watch, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { BaseModal } from './base'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  user: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'save'])

const isEditMode = computed(() => props.user !== null)
const modalTitle = computed(() => isEditMode.value ? 'Edit User' : 'Add New User')

const validationSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  phone: yup.string().required('Phone is required')
})

const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: username, errorMessage: usernameError } = useField('username')
const { value: email, errorMessage: emailError } = useField('email')
const { value: phone, errorMessage: phoneError } = useField('phone')

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    if (props.user) {
      setValues({
        name: props.user.name,
        username: props.user.username,
        email: props.user.email,
        phone: props.user.phone
      })
    } else {
      resetForm()
    }
  }
})

const onSubmit = handleSubmit((values) => {
  emit('save', values)
  emit('update:modelValue', false)
})

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <BaseModal
    :model-value="modelValue"
    :title="modalTitle"
    :max-width="600"
    @update:model-value="$emit('update:modelValue', $event)"
    @close="close"
  >
    <v-form @submit.prevent="onSubmit">
      <v-text-field
        v-model="name"
        label="Name"
        variant="outlined"
        density="comfortable"
        :error-messages="nameError"
        class="mb-2"
      />

      <v-text-field
        v-model="username"
        label="Username"
        variant="outlined"
        density="comfortable"
        :error-messages="usernameError"
        class="mb-2"
      />

      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        variant="outlined"
        density="comfortable"
        :error-messages="emailError"
        class="mb-2"
      />

      <v-text-field
        v-model="phone"
        label="Phone"
        type="tel"
        variant="outlined"
        density="comfortable"
        :error-messages="phoneError"
      />
    </v-form>

    <template #actions>
      <v-spacer />
      <v-btn variant="text" @click="close">Cancel</v-btn>
      <v-btn color="primary" variant="flat" @click="onSubmit">
        {{ isEditMode ? 'Save Changes' : 'Add User' }}
      </v-btn>
    </template>
  </BaseModal>
</template>
