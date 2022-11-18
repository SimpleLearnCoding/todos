import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from '../pages/HomePage.vue'
import About from '../pages/AbountUs.vue'

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
 * 新建路由实例
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
