import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router
