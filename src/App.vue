<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DHeader from './components/DHeader.vue'
import DFooter from './components/DFooter.vue'
</script>

<template>
  <DHeader />
  <main>
    <RouterView />
  </main>
  <DFooter />
</template>