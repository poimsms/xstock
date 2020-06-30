// Vue
import Router from 'vue-router'

// Normal loading
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'
import Login from '@/pages/Login.vue'
import RodalAdd from '@/pages/RodalAdd.vue'
import RodalSpecies from '@/pages/RodalSpecies.vue'
import RodalInventory from '@/pages/RodalInventory.vue'

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/', name: 'home',
    component: Home
  },
  {
    path: '*', name: 'not-found',
    component:  NotFound
  },
  {
    path: '/login', name: 'login',
    component: Login
  },
  {
    path: '/rodal-ingreso', name: 'rodal-ingreso',
    component: RodalAdd
  },
  {
    path: '/rodal-especies', name: 'rodal-especies',
    component: RodalSpecies
  },
  {
    path: '/rodal-inventario', name: 'rodal-inventario',
    component: RodalInventory
  },
]

// Router instance
const router = new Router({
  mode: 'history',
  base: '/',
  fallback: false,
  hash: false,
  routes
})

export default router