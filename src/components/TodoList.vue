<template>
  <div>
    <h3>Todo List</h3>

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

  </div>
</template>


<!-- 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。 -->
<script setup>

import {computed, ref} from "vue";

/**
 * 使用引入的 ref 函数包裹数字
 * 返回的 count 变量就是响应式的数据
 */
let count = ref(1)

/**
 * 使用 add 函数实现数字的修改
 * 对于 ref 返回的响应式数据，需要修改 .value 才能生效
 */
function add() {
  count.value++
}

/**
 * 使用一个函数把一个功能相关的数据和方法都维护在一起。
 * 对代码进行拆分，把功能独立的模块封装成一个独立的函数，真正做到按需拆分。
 */
let {title, todos, addTodo, clear, active, all, allDone} = useTodos()

function useTodos() {

  /**
   * 使用引入的 ref 函数包裹变量
   * 使其成为响应式数据
   */
  let title = ref("")
  let todos = ref([
    {
      title: "eat",
      done: false
    }, {
      title: "study",
      done: true
    }
  ])

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
  color: #42b983;
}
</style>
