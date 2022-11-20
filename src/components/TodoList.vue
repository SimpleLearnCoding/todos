<template>
    <h3>Todo List</h3>
    <br>

    <!--      requirement: Displays a pop-up reminder when the user's input is empty      -->
    <!--     Read the TransitionText component code for the transition component description.     -->
    <transition name="modal">
        <div class="info-wrapper" v-if="showModal">
            <div class="info">
                No input detected!
            </div>
        </div>
    </transition>

    <input v-model="title" type="text" @keydown.enter="addTodo">

    <button v-if="active < all" @click="clear">清理</button>

    <ul v-if="todos.length">
        <!--  Notice: 使用 v-for 指令时，需要定义 :key ，其值要设置为在当条指令内已定义的变量，例如这里的 todo -->
        <li v-for="todo in todos" :key="todo">
            <input type="checkbox" v-model="todo.done">
            <span :class="{done:todo.done}">{{ todo.title }}</span>
        </li>
    </ul>
    <div v-else>暂无数据</div>

    <div>
        全选<input type="checkbox" v-model="allDone"/>
        <span> {{ active }} / {{ all }} </span>
    </div>


    <!--  切换全屏  -->
    <div v-if="!isFullscreen">
        <button @click="toggle">Enter Screen</button>
    </div>

</template>


<!-- 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。 -->
<script setup>

import {useFullscreen} from "@vueuse/core"

/**
 * 使用 vue 官方团队出品的工具包 vueuse
 * 它把开发中常见的属性都封装成为响应式函数。
 *
 * VueUse 中包含了很多我们常用的工具函数，
 * 可以把网络状态、异步请求的数据、动画和事件等功能，都看成是响应式的数据去管理。
 */
const {isFullscreen, toggle} = useFullscreen()

import {ref} from "vue";
import {computed} from "vue";

/**
 * 弹窗显示配置
 */
let showModal = ref(false)

function useTodos() {

    /**
     * 使用引入的 ref 函数包裹变量
     * 使其成为响应式数据
     */
    let title = ref("")
    let todos = ref([])

    /**
     * 使用 function 定义函数
     * 而不是在 app 的 methods 内定义函数
     *
     * function 内可直接访问外部已定义的变量
     */
    function addTodo() {

        /**
         * 检测到用户什么都没输入时，显示弹窗
         * 并在 1500ms 后关闭
         */
        if (!title.value) {
            showModal.value = true

            setTimeout(() => {
                showModal.value = false
            }, 1500)

            return
        }

        todos.value.push({
            title: title.value,
            done: false
        })

        /**
         * 这里仍要注意：对于 ref 返回的响应式数据，需要修改 .value 才能生效
         * @type {string}
         */
        title.value = ""
    }

    /**
     * 同样，使用 .value 属性来修改值
     */
    function clear() {
        todos.value = todos.value.filter(v => !v.done)
    }

    /**
     * 计算属性
     * 单独引入 computed()
     * @type {ComputedRef<number>}
     */
    let all = computed(() => todos.value.length)
    /**
     * 同样使用 computed() 来赋值计算属性
     * @type {ComputedRef<number>}
     */
    let active = computed(() => todos.value.filter((v) => !v.done).length)

    /**
     * 使用 computed() 赋值计算属性 - 对象形式
     * @type {WritableComputedRef<boolean>}
     */
    let allDone = computed({
        get: function () {
            return active.value === 0
        },
        set: function (val) {
            todos.value.forEach((todo) => {
                todo.done = val
            })
        }
    })

    return {title, todos, addTodo, clear, active, all, allDone}
}

/**
 * 使用一个函数把一个功能相关的数据和方法都维护在一起。
 * 对代码进行拆分，把功能独立的模块封装成一个独立的函数，真正做到按需拆分。
 */
let {title, todos, addTodo, clear, active, all, allDone} = useTodos()

/**
 * watchEffect()
 *
 * 在数据变化之后执行指定的函数
 *
 */
import {watchEffect} from "vue";

let todoLocalData = ref(JSON.parse(localStorage.getItem('todos') || '[]'));
if (todoLocalData.value.length > 0) {
    /**
     * 使用 contact 合并数组
     *
     * notice 请注意这里需要赋值，contact 并不直接对原始对象进行操作
     */
    // console.log(todoLocalData.value)
    todos.value = todos.value.concat(todoLocalData.value)
}
watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
})

</script>

<style scoped>


/**
 * 弹窗动画效果
 */
.modal-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-enter-active {
    transition: all 0.3s ease;
}

.modal-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-leave-active {
    transition: all 0.3s ease;
}

/**
 * 弹窗样式
 */
.info-wrapper {
    position: fixed;
    top: 20px;
    width: 200px;
}

.info {
    padding: 20px;
    color: white;
    background: #f68266;
}
</style>
