<script setup>
import { BaseConfirmDialog } from './base'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Confirm Action'
  },
  message: {
    type: String,
    default: 'Are you sure you want to proceed?'
  },
  confirmText: {
    type: String,
    default: 'Delete'
  },
  confirmColor: {
    type: String,
    default: 'error'
  }
})

defineEmits(['update:modelValue', 'confirm', 'cancel'])
</script>

<template>
  <BaseConfirmDialog
    :model-value="modelValue"
    :title="title"
    :message="message"
    :confirm-text="confirmText"
    :confirm-color="confirmColor"
    @update:model-value="$emit('update:modelValue', $event)"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  />
</template>
