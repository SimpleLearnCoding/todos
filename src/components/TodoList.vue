<template>
  <div>
    <h3>Todo List</h3>

    <div>
        <!--    这里将文本移入了 ScoringUseEmit 组件的 <slot> 插槽内    -->
        <!--    <slot> 插槽被视为父组件的元素，会被放在子组件之前，与子组件合并显示    -->
        <ScoringUseEmit theme=red v-model:score="score">当前评分：</ScoringUseEmit>
        <br>{{score}}
    </div>

    <div class="">
      Count: {{ count }} |
      <button @click="add">Accumulator</button>
    </div>

    <br>

    <div class="">
      <input v-model="title" type="text" @keydown.enter="addTodo">

      <button v-if="active < all" @click="clear">清理</button>

      <ul v-if="todos.length">
        <!--  Notice: 使用 v-for 指令时，需要定义 :key ，其值要设置为在当条指令内已定义的变量，例如这里的 todo-->
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

    </div>

    <!--  切换全屏  -->
    <div v-if="!isFullscreen">
      <button @click="toggle">Enter Screen</button>
    </div>

  </div>
</template>


<!-- 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。 -->
<script setup>

/**
 * 引入封装的组件
 */
import ScoringUseEmit from "@/components/ScoringUseEmit";

import { useFullscreen } from "@vueuse/core"
/**
 * 使用 vue 官方团队出品的工具包 vueuse
 * 它把开发中常见的属性都封装成为响应式函数。
 *
 * VueUse 中包含了很多我们常用的工具函数，
 * 可以把网络状态、异步请求的数据、动画和事件等功能，都看成是响应式的数据去管理。
 */
const { isFullscreen,toggle } = useFullscreen()

import {computed, ref} from "vue";

/**
 * 定义分数更新函数
 * 该分数值由子组件发送给当前组件（父组件）
 */
let score = ref(3.5)

/**
 * 使用引入的 ref 函数包裹数字
 * 返回的 count 变量就是响应式的数据
 */
let count = ref(1)
let color = ref('#42b983')

/**
 * 使用 add 函数实现数字的修改
 * 对于 ref 返回的响应式数据，需要修改 .value 才能生效
 */
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? '#42b983' : '#55c8d7';
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

</script>

<style scoped>
h3 {
  /* 使用 v-bind 在 style 中直接使用 JavaScript 中的变量 */
  color: v-bind(color);
}
</style>
