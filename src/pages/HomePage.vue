<template>
    <br>

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

    <div v-if="version === 5">
        <!--    这里将文本移入了 ScoringUseEmit 组件的 <slot> 插槽内    -->
        <!--    <slot> 插槽被视为父组件的元素，会被放在子组件之前，与子组件合并显示    -->
        <ScoringUseEmit theme=red v-model:score="score">当前评分：</ScoringUseEmit>
        <br>{{ score }}
    </div>

    <div v-if="version === 6">
        <AccumulatorCounter></AccumulatorCounter>
    </div>
</template>

<script setup>

import TodoList from "../components/TodoList"
import WidenAnimation from "../components/WidenAnimation"
import MoveAnimation from "@/components/MoveAnimation";
import TransitionText from "@/components/TransitionText";
import ScoringUseEmit from "@/components/ScoringUseEmit";
import AccumulatorCounter from "@/components/AccumulatorCounter";

/**
 * 控制显示页面的版本号
 * @type {number}
 */
const version = 1

import {ref} from "vue";

/**
 * 定义分数更新函数
 * 该分数值由子组件发送给当前组件（父组件）
 */
let score = ref(4)

</script>

<style scoped>

</style>
