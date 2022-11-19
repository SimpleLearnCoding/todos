<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontWidth">
                <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>

import {computed, defineProps, ref} from "vue";

let props = defineProps({
    score: Number,
    theme: {
        type: String,
        default: "orange"
    }
})

const themeObj = {
    "black": "#000000",
    "red": "#f80707",
    "green": "#0ff807",
    "orange": "#fa541c",
}
const fontStyle = computed(() => {
    return `color: ${themeObj[props.theme]}`
})

/**
 * 定义打分星星的宽度：由 score 分数决定
 *
 * fixme 指针滑动时会错位——火狐浏览器
 */
let width = ref(props.score)
function mouseOver(i) {
    width.value = i
}
function mouseOut() {
    width.value = props.score
}
const fontWidth = computed(() => `width: ${width.value}em;`)

</script>

<style scoped>
.rate {
    position: relative;
    display: inline-block;
}

.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>
