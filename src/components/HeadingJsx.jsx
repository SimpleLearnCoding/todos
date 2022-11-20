import {defineComponent} from "vue"

/*
* 使用 defineComponent 定义一个组件，组件内部配置了 props 和 setup。
*
* 这里的 setup 函数返回值是一个函数，就是我们所说的 render 函数。
* render 函数返回 h 函数的执行结果，h 函数的第一个参数就是标签名。
*
* 我们可以很方便地使用字符串拼接的方式，实现类似 ==根据值来渲染不同标签== 的需求。
*
* 像这种连标签名都需要动态处理的场景，就需要通过手写 h 函数来实现。
* */
export default defineComponent({
    /*
    * 接收一个 level 属性，其类型为 Number，必需
    * */
    props: {
        level: {
            type: Number,
            required: true
        }
    },

    /**
     * 使用 JSX 插件 而不是 h 函数
     * @param props
     * @param slots
     * @returns {function()}
     */
    setup(props, {slots}) {

        /**
         * 使用变量 tag 计算出标签类型，直接使用渲染
         * 然后使用一个大括号把默认插槽包起来就可以了
         * @type {string}
         */

        const tag = 'h' + props.level
        return () => <tag>{slots.default()}</tag>
    }
})
