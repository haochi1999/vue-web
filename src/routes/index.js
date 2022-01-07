import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/', 
    redirect: {name: 'home'},
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'record',
    path: '/record',
    component: () => import('@/views/Record.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;