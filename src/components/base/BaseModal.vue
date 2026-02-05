<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: [String, Number],
    default: 600
  },
  persistent: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

function close() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    :max-width="maxWidth"
    :persistent="persistent"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h6">{{ title }}</span>
        <v-btn icon="mdi-close" variant="text" density="compact" @click="close" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-4">
        <slot />
      </v-card-text>

      <template v-if="$slots.actions">
        <v-divider />
        <v-card-actions class="pa-4">
          <slot name="actions" />
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>
