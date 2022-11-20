import { createStore } from 'vuex'

/**
 * 定义数据源 store
 *
 * 注册方式：
 * 在项目入口文件（ex：src/main.js），使用 app.use(store) 进行注册
 *
 * question: 什么时候的数据用 Vuex 管理，什么时候数据要放在组件内部使用 ref 管理呢？
 * 对于一个数据，如果只是组件内部使用就是用 ref 管理；
 * 如果我们需要跨组件，跨页面共享的时候，我们就需要把数据从 Vue 的组件内部抽离出来，放在 Vuex 中去管理。
 *
 * @type {Store<{count: number}>}
 */
const store = createStore({
    state () {
        return {
            count: 666
        }
    },
    /**
     * mutations
     * 内部函数会将 state 作为参数，直接操作 state 返回对象中的元素即可完成对元素的修改
     */
    mutations: {
        add (state) {
            state.count++
        }
    }
})

export default store
