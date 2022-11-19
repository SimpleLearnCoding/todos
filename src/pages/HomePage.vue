<template>

    <div v-if="version === 1">
        <TodoList></TodoList>
    </div>

    <div v-if="version === 2">
        <WidenAnimation></WidenAnimation>
    </div>

</template>

<script setup>

import TodoList from "../components/TodoList"
import WidenAnimation from "../components/WidenAnimation"

/**
 * 控制显示页面的版本号
 * @type {number}
 */
const version = 2

</script>

<style scoped>

</style>
