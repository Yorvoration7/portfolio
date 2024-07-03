import {createRouter,createWebHashHistory  } from 'vue-router'
import HomePage from "./components/HomePage/HomePage.vue";

export const router = createRouter({
    history: createWebHashHistory(),

  routes: [
     {path: '/', name: 'home',  component: HomePage},
     {path: '/projects', name: 'projects', component:() => import('./components/Projects/Projects.vue')},
    {path: '/technologies', name: 'technologies', component:() => import('@/components/Technologies/TechnologiesMain.vue')},
    {path: '/about-me', name: 'about-me', component:() => import('./components/AboutMe.vue')},
    {path: '/contact', name: 'contact', component:() => import('@/components/Contactme.vue')},
]
})
