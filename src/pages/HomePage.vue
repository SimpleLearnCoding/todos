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

    <div v-if="version === 4">
        <TransitionText></TransitionText>
    </div>
</template>

<script setup>

import TodoList from "../components/TodoList"
import WidenAnimation from "../components/WidenAnimation"
import MoveAnimation from "@/components/MoveAnimation";
import TransitionText from "@/components/TransitionText";

/**
 * 控制显示页面的版本号
 * @type {number}
 */
const version = 4

</script>

<style scoped>

</style>
