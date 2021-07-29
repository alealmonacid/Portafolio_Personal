import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Portafolio from '../views/Quien-soy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Portafolio',
    name: 'SobreMi',
    component: Portafolio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
