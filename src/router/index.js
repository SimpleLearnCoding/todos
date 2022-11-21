import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from '../pages/HomePage.vue'
import About from '../pages/AboutUs.vue'

/**
 * 定义页面路由
 *
 * @type {[{path: string, component, name: string}, {path: string, component, name: string}]}
 */
const routes = [
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

/**
 *
 * question: 前端路由的实现原理
 * 通过 URL 区分路由的机制上，有两种实现方式：
 * 一种是 hash 模式，通过 URL 中 # 后面的内容做区分，我们称之为 hash-router；
 * 另外一个方式就是 history 模式，在这种方式下，路由看起来和正常的 URL 完全一致。
 * 这两个不同的原理，在 vue-router 中对应两个函数，分别是 createWebHashHistory 和 createWebHistory。
 *
 * @type {Router}
 */
const router = createRouter({

    /**
     * 配置内部使用 hash 模式的路由
     * -- url 会使用 # 符号来区分
     */
    history: createWebHashHistory(),

    routes
})

export default router
