<template>
    <!--  需求：使用一个按钮控制标题文字的显示和隐藏  -->

    <!--  使用 transition 组件  -->
    <!--  包裹需要动画的元素，并通过设置 transition 组件的 class 来控制动画  -->
    <!--  例如这里设置了 fade 动画效果（褪色、渐隐）  -->
    <!--  对应进（Enter）出（Leave）动画的 class 名应为：fade-enter-active、fade-leave-active  -->
    <!--  另还需设置动画的进出开始（From）和结束（To）效果，class 名为：fade-enter-from、fade-leave-to  -->
    <transition name="fade">
        <h1 v-if="showTitle">Hello, Transition Text</h1>
    </transition>
    <br>
    <button @click="toggle">Toggle Text</button>
</template>

<script setup>
    import {ref} from "vue";

    let showTitle = ref(true)

    function toggle() {
        showTitle.value = !showTitle.value
    }

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s linear;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
