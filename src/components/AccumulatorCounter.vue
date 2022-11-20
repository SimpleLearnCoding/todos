<template>
  <div class="color">
    Count: {{ count }} |
    <button @click="add">Accumulator</button>
  </div>
</template>
<script setup>

import {computed, ref} from "vue";
import {useStore} from "vuex";

/*
* 使用 useStore 获取数据源
* */
let store = useStore()
/*
* 定义 count 为数据源 store 中的 count 属性
* */
let count = computed(() => store.state.count)

let color = ref('#42b983')
/**
 * 使用 add 函数实现数字的修改
 * 对于 ref 返回的响应式数据，需要修改 .value 才能生效
 *
 * 对于来自数据源的数据，属于 Vuex 统一管理
 * 需要使用 store.commit("add") 去触发 mutation 来修改数据
 * 其中 add 必须为 mutations 中已定义的方法
 */
function add() {
    store.commit("add")
    color.value = Math.random() > 0.5 ? '#42b983' : '#55c8d7';
}
</script>
<style scoped>
.color {
  /* 使用 v-bind 在 style 中直接使用 JavaScript 中的变量 */
  color: v-bind(color);
}
</style>
