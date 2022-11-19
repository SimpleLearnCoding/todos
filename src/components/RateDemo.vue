<template>
    <div :style="fontStyle">
        {{ rate }}
    </div>
</template>

<script setup>

/**
 * 使用 defineProps 来规范传递数据的格式
 *
 * 这里规定了组件会接收外部传来的 value 属性，并且只能是数字
 * 然后根据 value 的值计算出评分的星星。
 */
import {computed, defineProps} from "vue";

/**
 * 使用组件的方式就是使用 :score 的方式
 * 通过属性把 score 传递给 Rate 组件
 * 就能够在页面上根据 score 的值
 * ex: 显示出三颗实心的星星
 * usage: <RateDemo :score="3"></RateDemo>
 *
 * 即规定：组件将接收外部传来的 score 属性，并且该属性只能为数字 Number
 * 然后根据该 score 属性，计算出评分的星星
 *
 * 添加了 theme 属性
 * ex: 显示 三颗红色的实心星星
 * usage: <RateDemo :score=3 theme=red></RateDemo>
 *
 * fixme score属性需要在前面加一个 : 冒号，而 theme 不需要
 *
 * @type {Readonly<ExtractPropTypes<{score: NumberConstructor, theme: {default: string, type: StringConstructor}}>>}
 */
let props = defineProps({
    score: Number,
    theme: {
        type: String,
        default: "orange"
    }
})

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.score, 10 - props.score))

/**
 * 添加颜色主题
 * @type {{red: string, orange: string, green: string, black: string}}
 */
const themeObj = {
    'black': '#000000',
    'red': '#f80707',
    'green': '#0ff807',
    'orange': '#fa541c',
}
const fontStyle = computed(() => {
    return `color: ${themeObj[props.theme]}`
})

</script>

<style scoped>

</style>
