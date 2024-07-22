/*
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 11:54:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-22 12:06:53
 * @@param: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
