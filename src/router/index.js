import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apis',
      name: 'apis',
      component: () => import('../views/ApiGallery.vue')
    },
    {
      path: '/packages',
      name: 'packages',
      component: () => import('../views/PackageGallery.vue')
    }
  ]
})

export default router
