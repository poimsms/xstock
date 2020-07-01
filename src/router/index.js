// Vue
import Router from 'vue-router'

// Normal loading
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'
import Login from '@/pages/Login.vue'
import RodalAdd from '@/pages/RodalAdd.vue'
import RodalResults from '@/pages/RodalResults.vue'
import Quiz from '@/pages/Quiz.vue'

import RodalSpecies from '@/pages/RodalSpecies.vue'
import RodalInventory from '@/pages/RodalInventory.vue'
import Catalog from '@/pages/Catalog.vue'

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
    path: '/rodal-resultados', name: 'rodal-resultados',
    component: RodalResults
  },
  {
    path: '/rodal-preguntas', name: 'rodal-preguntas',
    component: Quiz
  },
  {
    path: '/rodal-inventario', name: 'rodal-inventario',
    component: RodalInventory
  },
  {
    path: '/catalogo', name: 'catalogo',
    component: Catalog
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