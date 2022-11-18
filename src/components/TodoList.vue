<template>
  <div>
    <h3>Todo List</h3>

    Count: {{ count }} |
    <button @click="add">Accumulator</button>
  </div>
</template>


<!-- 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。 -->
<script setup>

import {ref} from "vue";

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

</script>

<style scoped>
h3  {
  color: #42b983;
}
</style>
