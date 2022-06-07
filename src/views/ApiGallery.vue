<script setup>
  import { ref, onMounted } from 'vue'
  import ApiService from '../service/ApiService'
  import ApiCard from '../components/ApiCard.vue'

  let apis = ref([])
  // apis.value.push({
  //   name: 'Hello API',
  //   summary: 'Hello api summary'
  // })
  // apis.value.push({
  //   name: 'Portal API',
  //   summary: 'Portal api summary'
  // })

  onMounted(() => {
    const apiUrl = import.meta.env.VITE_DEVPORTAL_API_URL + '/apis'
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        apis.value = data.result
      })
  })

  const endpoint = import.meta.env.VITE_DEVPORTAL_API_URL
  console.log(endpoint)
</script>
<template>
  <section>
    <div v-if="apis.length > 0">
      <ApiCard v-for="api in apis" :key="api.id" :api="api" />
    </div>
    <div v-else>
      No api(s) is available
    </div>
  </section>
</template>