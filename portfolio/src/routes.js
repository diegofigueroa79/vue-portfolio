import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home/Home'
import Diary from './components/diary/Diary'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/vue-portfolio/', component: Home },
        { path: '/diary/', component: Diary }
    ]
})