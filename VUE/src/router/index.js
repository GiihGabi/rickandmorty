import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Episodio from '../views/Episodio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/episodio',
      name: 'episodio',
      component: () => import('../views/Episodio.vue')
    }
  ]
})

export default router
