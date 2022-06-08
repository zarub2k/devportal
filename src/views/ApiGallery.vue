<script setup>
  import { ref, onMounted } from 'vue'
  import ApiService from '../service/ApiService'
  import ApiCard from '../components/ApiCard.vue'

  let apis = ref([])
  
  const BASE_URL = import.meta.env.VITE_DEVPORTAL_API_URL
  onMounted(() => {
    search()
  })

  const dummy = () => {
    apis.value.push({
      name: 'Hello API',
      summary: 'Hello api summary',
    })
    apis.value.push({
      name: 'Portal API',
      summary: 'Portal api summary',
    })
    apis.value.push({
      name: 'Hello API 1',
      summary: 'Hello api summary 1',
    })
    apis.value.push({
      name: 'Portal API 1',
      summary: 'Portal api summary 1',
    })
  }

  const all = () => {
    const apiUrl = BASE_URL + '/apis'
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        apis.value = data.result
      })
  }

  const search = () => {
    const searchUrl = BASE_URL + '/search/basic'
    const searchOption = {
      conjuction: 'AND',
      criterias: [
        {
          field: 'latest',
          values: ['true'],
          operation: 'EQUALS'
        }
      ]
    }

    fetch(searchUrl, {
      method: 'POST',
      body: JSON.stringify(searchOption),
      headers: {
      'Content-Type': 'application/json'
    },
    })
    .then(response => response.json())
    .then((data) => {
      apis.value = data.result
    })
  }
</script>
<template>
  <section class="px-10 py-2">
    <div class="grid grid-cols-3 md:grid-cols-4 gap-4" v-if="apis.length > 0">
      <ApiCard v-for="api in apis" :key="api.id" :api="api" />
    </div>
    <div v-else>
      No api(s) found!
    </div>
  </section>
</template>