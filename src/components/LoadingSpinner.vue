<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: 'md'
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64
}

function getSize(size) {
  if (typeof size === 'number') return size
  return sizeMap[size] || 32
}
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-progress-circular
      indeterminate
      :color="color"
      :size="getSize(size)"
    />
  </div>
</template>
