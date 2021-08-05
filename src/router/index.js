import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/pembeli/Home.vue'
import Riwayatsekolah from '../views/sekolah/Riwayatsekolah.vue'
import Namapembeli from '../views/pembeli/Namapembeli.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/riwayatsekoalah',
    name: 'Riwayatsekoalah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Riwayatsekolah
  },
  {
    path: '/namapembeli/:id',
    name: 'Namapembeli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Namapembeli
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
