<script setup>
import { ClipboardListIcon, CubeTransparentIcon, PresentationChartLineIcon } from '@heroicons/vue/outline'
</script>

<template>
  <section class="border px-10 py-2">
    <div class="grid grid-cols-2">
      <div class="text-center m-auto">
        <p class="hero leading-relaxed">API Platform for</p>
        <p class="hero">Enterprises</p>
        <div class="mt-4">
          <!-- <Subscribe /> -->
        </div>
      </div>
      <div>
        <img src="../assets/bg.jpg" />
      </div>
    </div>

    <div>
      <h5 class="text-center mb-4 mt-4">Services</h5>
      <div class="grid grid-cols-3 gap-4">
        <div class="service-card">
          <p>
            <CubeTransparentIcon class="service-card-icon" />
          </p>
          <h5>Browse APIs</h5>
          <p class="service-card-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec finibus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
          <p>
            <button class="btn-secondary">Know more</button>
          </p>
        </div>

        <div class="service-card">
          <p>
            <ClipboardListIcon class="service-card-icon" />
          </p>
          <h5>Engage</h5>
          <p class="service-card-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec finibus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
          <p>
            <button class="btn-secondary">Know more</button>
          </p>
        </div>

        <div class="service-card">
          <p>
            <PresentationChartLineIcon class="service-card-icon" />
          </p>
          <h5>API Insights</h5>
          <p class="service-card-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec finibus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
          <p>
            <button class="btn-secondary">Know more</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  @apply border p-2 space-y-2
}
.service-card-icon {
  @apply h-10 w-10 text-green-600
}
</style>