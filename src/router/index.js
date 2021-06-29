import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/csv',
    children: [
      {
        path: '/spread',
        component: () => import('@/views/Spread.vue'),
        name: 'Spread',
        meta: { title: 'spread', icon: '', affix: true }
      },
      {
        path: '/table',
        component: () => import('@/views/Table.vue'),
        name: 'Table',
        meta: { title: 'table', icon: '', affix: true }
      },
      {
        path: '/csv',
        component: () => import('@/views/CSV.vue'),
        name: 'CSV',
        meta: { title: 'csv', icon: '', affix: true }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
