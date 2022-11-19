<template>
    <!-- 需求：每次点击按钮的时候，div 标签的宽度都增加 100px   -->
    <div class="box" :style="{width: width+'px'}"></div>
    <button @click="widenBox">Click to widen 100px!</button>
</template>

<script setup>
import {ref} from "vue";

let width = ref(100)

function widenBox() {
    width.value += 100
}

</script>

<style scoped>
.box {
    background: #42b983;
    height: 100px;
}
</style>
