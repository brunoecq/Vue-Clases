import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Contacto from './views/Contacto.vue'


Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: () => import('./views/Ayuda.vue')
    },
    {
      path: '/usuarios/:id',
      name: 'usuarios',
      component: () => import('./views/Usuarios.vue')
    },
    {
      path: '/ciclos',
      name: 'ciclos',
      component: () => import('./views/Ciclos.vue')
    },
 ]
 
})
