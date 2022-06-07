<script setup>
import {HeartIcon} from '@heroicons/vue/outline'
const props = defineProps(['api'])
</script>

<template>
  <div class="apicard">
    <div class="flex">
      <h6 class="text-center mb-2 grow">{{ api.name }}</h6>
      <a href=""><HeartIcon class="icon"/></a>
    </div>
    <p class="text-sm grow">{{ api.summary }}</p>
    <p class="mt-4"><button class="btn-secondary">View details</button></p>
  </div>
</template>

<style scoped>
.apicard {
  @apply flex flex-col border px-3 py-2
}

.icon {
  @apply h-5 w-5 text-api-900
}
</style>