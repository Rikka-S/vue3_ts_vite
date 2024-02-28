import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    meta: { title: '首页' },
  },
  {
    path: '/tols',
    name: 'tols',
    component: layout,
    meta: { title: '工具' },
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/table/index.vue'),
        meta: { title: '表格' },
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/pinia',
    component: layout,
    meta: { title: 'pinia' },
    children: [
      {
        path: 'use',
        name: 'pinia',
        component: () => import('../views/pinia/index.vue'),
        meta: { title: 'pinia使用' },
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
