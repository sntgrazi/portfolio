import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/telaInicial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

  ]
})

export default router
