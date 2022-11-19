<template>

    <div v-if="version === 1">
        <TodoList></TodoList>
    </div>

    <div v-if="version === 2">
        <WidenAnimation></WidenAnimation>
    </div>

    <div v-if="version === 3">
        <MoveAnimation></MoveAnimation>
    </div>
</template>

<script setup>

import TodoList from "../components/TodoList"
import WidenAnimation from "../components/WidenAnimation"
import MoveAnimation from "@/components/MoveAnimation";

/**
 * 控制显示页面的版本号
 * @type {number}
 */
const version = 3

</script>

<style scoped>

</style>
