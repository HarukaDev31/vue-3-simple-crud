<script setup>
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
    default: 'Confirm'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  confirmColor: {
    type: String,
    default: 'error'
  },
  icon: {
    type: String,
    default: 'mdi-alert-circle-outline'
  },
  iconColor: {
    type: String,
    default: 'error'
  },
  maxWidth: {
    type: [String, Number],
    default: 450
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

function confirm() {
  emit('confirm')
}

function cancel() {
  emit('update:modelValue', false)
  emit('cancel')
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    :max-width="maxWidth"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-text class="pt-6">
        <div class="d-flex align-start ga-4">
          <v-avatar :color="iconColor" size="48" variant="tonal">
            <v-icon :icon="icon" size="24" />
          </v-avatar>
          <div>
            <p class="text-h6 mb-1">{{ title }}</p>
            <p class="text-body-2 text-medium-emphasis">{{ message }}</p>
          </div>
        </div>
      </v-card-text>

      <v-card-actions class="pa-4 pt-0">
        <v-spacer />
        <v-btn variant="text" @click="cancel">
          {{ cancelText }}
        </v-btn>
        <v-btn :color="confirmColor" variant="flat" :loading="loading" @click="confirm">
          {{ confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
