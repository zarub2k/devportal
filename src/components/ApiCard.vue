<script setup>
const props = defineProps(['api'])
</script>

<template>
  <div class="apicard">
    <h6 class="text-center">{{ api.name }}</h6>
    <p class="text-sm">{{ api.summary }}</p>
  </div>
</template>

<style scoped>
.apicard {
  @apply border p-2
}
</style>