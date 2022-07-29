import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './pages/LoginPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            props: true
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./pages/RegisterPage'),
            props: true
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./pages/MainPage'),
            props: true
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./pages/AdminPage'),
            props: true
        },
        {
            path: '/admin/:id',
            name: 'editar',
            component: () => import('./pages/EditarPage'),
            props: true
        },
        // {
        //     path: '/usuarios/:valor?',
        //     name: 'usuarios',
        //     component: () => import('./pages/Usuarios')
        // }
    ]
})