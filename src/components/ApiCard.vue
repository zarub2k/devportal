<script setup>
const props = defineProps(['api'])
</script>

<template>
  <div>
    {{ api.name }} - {{ api.id }} - {{ api.version }}
  </div>
</template>