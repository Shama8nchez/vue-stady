import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/ApiView.vue'),
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/ApiViewWithStore.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
