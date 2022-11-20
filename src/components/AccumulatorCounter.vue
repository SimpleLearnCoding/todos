<template>
  <div class="color">
    Count: {{ count }} |
    <button @click="add">Accumulator</button>
  </div>
</template>
<script setup>

import {ref} from "vue";

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
</script>
<style scoped>
.color {
  /* 使用 v-bind 在 style 中直接使用 JavaScript 中的变量 */
  color: v-bind(color);
}
</style>
