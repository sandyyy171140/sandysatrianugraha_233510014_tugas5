import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'Todo', component: AboutView },
  { path: '/home', name: 'Home', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
