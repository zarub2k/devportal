<template>
  <header class="">
    <div class="navbar">
      <div>
        <router-link :to="{name: 'home'}" class="">
          <p class="circle w-10 h-10 text-center py-2">A</p>
          <!-- <p class="title mt-1">Tham</p> -->
        </router-link>
      </div>
      <div class="navlinks">
        <router-link :to="{name: 'apis'}" class="">API Gallery</router-link>
        <router-link :to="{name: 'packages'}" class="">Package Gallery</router-link>
      </div>   
    </div> 
  </header>
</template>

<style scoped>
.navbar {
  @apply flex px-10 py-2 gap-4
}
.navlinks {
  @apply grow flex gap-10 justify-center mt-1 text-lg
}

.title {
  @apply text-xl font-semibold
}
</style>