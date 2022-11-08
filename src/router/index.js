import Vue from 'vue'
import VueRouter from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import PagInicio from '@/components/PagInicio.vue'
import RegistroPost from '@/components/RegistroPost.vue'
import LisConvocatorias from '@/components/LisConvocatorias.vue'
import LisHabilitados from '@/components/LisHabilitados.vue'
import BienvenidoUsuario from '@/components/BienvenidoUsuario'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagInicio',
    component: PagInicio
  },
  {
    path: '/registro',
    name: 'RegistroPost',
    component: RegistroPost
  },
  {
    path: '/convocatorias',
    name: 'LisConvocatorias',
    component: LisConvocatorias
  },
  {
    path: '/habilitados',
    name: 'LisHabilitados',
    component: LisHabilitados
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registrocompleto',
    name: 'registrocompleto',
    component: () => import('../views/RegistroCompleto.vue')
  },
  {
    path: '/usr',
    name: 'bienvenidoUsr',
    component: BienvenidoUsuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
