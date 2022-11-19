<template>
    <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontWidth">
                <!--        添加点击事件 @click="onRate(num)"        -->
                <!--        vue 3 使用 defineEmit 来定义对外“发射”的数据        -->
                <span @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>

import {computed, defineProps, defineEmits, ref} from "vue";

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

/**
 * vue 3 使用 defineEmit 来定义对外“发射”的事件
 *
 * ex: 定义一个事件发送器并包含 update-rate 事件
 * usage:
 * let emits = defineEmits(['update-rate'])
 *
 * 然后在 js 代码中可将数据 发送 给指定事件
 * ex: 将 num 发送给 update-rate 事件
 * usage:
 * emits('update-rate', num)
 *
 * 在父组件中，接收子组件的数据可使用 @ 标记 加上事件名的形式
 * ex: 父组件利用函数 updateRage() 接收子组件 emit 事件 update-rate 的数据
 * usage:
 * <SubComponentName @update-rate=“updateRage”></SubComponentName>
 *
 * @type {EmitFn<string[]>}
 */
let emits = defineEmits(['update-rate'])
function onRate(num) {
    console.log(`scoring：${num}`)
    emits('update-rate', num)
}

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
