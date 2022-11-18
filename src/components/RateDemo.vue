<template>
  <div>
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
 * @type {Readonly<ExtractPropTypes<{score: NumberConstructor}>>}
 */
let props = defineProps({
  score: Number
})

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.score, 10 - props.score))

</script>

<style scoped>

</style>
