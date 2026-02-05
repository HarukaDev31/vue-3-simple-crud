<script setup>
import { ref } from 'vue'

defineProps({
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  hover: {
    type: Boolean,
    default: true
  },
  noDataText: {
    type: String,
    default: 'No data available'
  },
  searchable: {
    type: Boolean,
    default: false
  },
  searchPlaceholder: {
    type: String,
    default: 'Search...'
  },
  searchKeys: {
    type: Array,
    default: () => []
  }
})

defineEmits(['click:row'])

const search = ref('')
</script>

<template>
  <v-card class="elevation-1 rounded-lg">
    <v-card-title v-if="searchable" class="pa-4 pb-0">
      <v-text-field
        v-model="search"
        :placeholder="searchPlaceholder"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="compact"
        hide-details
        clearable
        single-line
        class="max-w-sm"
      />
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :items-per-page="itemsPerPage"
      :hover="hover"
      :no-data-text="noDataText"
      :search="search"
      @click:row="(event, { item }) => $emit('click:row', item)"
    >
      <template v-for="(_, slot) in $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope || {}" />
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.max-w-sm {
  max-width: 300px;
}
</style>
