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
 * question: What is Vuex ?
 * 简单来说，Vuex 是一个状态和数据管理的框架，负责管理项目中多个组件和多个页面共享的数据。
 * 在开发项目的时候，我们就会把数据分成两个部分，一种数据是在某个组件内部使用，我们使用 ref 或者 reactive 定义即可，
 * 另外一种数据需要跨页面共享，就需要使用 Vuex 来进行管理。
 *
 * usage:
 * 使用 state 定义数据，使用 mutation 定义修改数据的逻辑，并且在组件中使用 commit 去调用 mutations。
 * 在此基础之上，还可以用 getters 去实现 Vuex 世界的计算属性，
 * 使用 action 来去定义异步任务，并且在内部调用 mutation 去同步数据。
 *
 * description:
 * Vuex 的出现，让我们整个项目中的数据流动变得非常自然。
 * 数据流向组件，但组件不能直接修改数据，而是要通过 mutation 提出申请，mutation 去修改数据，形成了一个圆环。
 *
 * defects:
 * Vuex 由于在 API 的设计上，对 TypeScript 的类型推导的支持比较复杂，用起来很是痛苦。
 * 为了解决 Vuex 的这个问题，Vuex 的作者最近发布了一个新的作品叫 Pinia，并将其称之为下一代的 Vuex。
 * Pinia 的 API 的设计非常接近 Vuex5 的提案，首先，Pinia 不需要 Vuex 自定义复杂的类型去支持 TypeScript，天生对类型推断就非常友好，
 * 并且对 Vue Devtool 的支持也非常好，是一个很有潜力的状态管理框架。
 * @link https://pinia.vuejs.org/getting-started.html#installation
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
