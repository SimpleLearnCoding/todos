import { defineComponent, h } from "vue"

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
    setup(props, { slots }) {
        return () => h(
            'h' + props.level, // 标签名
            {}, // prop 或 attribute
            slots.default() // 子节点
        )
    }
})
