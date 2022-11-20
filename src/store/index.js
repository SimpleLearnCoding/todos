import { createStore } from 'vuex'

/**
 * 定义数据源 store
 *
 * 注册方式：
 * 在项目入口文件（ex：src/main.js），使用 app.use(store) 进行注册
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
