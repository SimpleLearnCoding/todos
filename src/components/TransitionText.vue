<template>
    <!--  需求：使用一个按钮控制标题文字的显示和隐藏  -->
    <h1 v-if="showTitle">Hello, Transition Text</h1>
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

</style>
