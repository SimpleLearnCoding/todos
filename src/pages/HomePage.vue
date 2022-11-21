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

    <div v-if="version === 7">
        <TodoListJsx></TodoListJsx>
    </div>

    <div v-if="version === 8">
        <AntLogin></AntLogin>
    </div>
</template>

<script>
    import TodoList from "@/components/TodoList.vue";
    import WidenAnimation from "@/components/WidenAnimation.vue";
    import MoveAnimation from "@/components/MoveAnimation.vue";
    import TransitionText from "@/components/TransitionText.vue";
    import ScoringUseEmit from "@/components/ScoringUseEmit.vue";
    import AccumulatorCounter from "@/components/AccumulatorCounter.vue";
    import TodoListJsx from "@/components/TodoListJsx.jsx";
    import AntLogin from "@/components/AntLogin.vue";
    import {ref} from "vue";

    export default {
        components: {
            AntLogin,
            TodoList,
            WidenAnimation,
            MoveAnimation,
            TransitionText,
            ScoringUseEmit,
            AccumulatorCounter,
            TodoListJsx,
        },
        setup() {
            return {
                version: ref(8),
                score: ref(3),
            }
        }
    }

</script>
