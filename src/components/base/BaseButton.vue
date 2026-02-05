<script setup>
defineProps({
  variant: {
    type: String,
    default: 'flat',
    validator: (v) => ['flat', 'elevated', 'tonal', 'outlined', 'text', 'plain'].includes(v)
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'default',
    validator: (v) => ['x-small', 'small', 'default', 'large', 'x-large'].includes(v)
  },
  icon: {
    type: String,
    default: undefined
  },
  prependIcon: {
    type: String,
    default: undefined
  },
  appendIcon: {
    type: String,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <v-btn
    :variant="variant"
    :color="color"
    :size="size"
    :icon="icon"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :loading="loading"
    :disabled="disabled"
    :block="block"
    @click="$emit('click', $event)"
  >
    <slot />
  </v-btn>
</template>
