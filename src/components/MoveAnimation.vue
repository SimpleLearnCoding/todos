<template>
    <!--  需求：一个来回滑动的方块  -->
    <div class="box"></div>
</template>

<script setup>

</script>

<style scoped>
.box {
    width: 30px;
    height: 30px;
    background: #42b983;

    /**
    * 使用相对定位，并进行线性移动动画
    * animation 属性：move 动画、持续 2s、线性移动、无限循环
    * 其中，move 动画由 @keyframes 进行定制
    */
    position: relative;
    animation: move 2s linear infinite;
}

/**
 * @keyframes 定制 move 动画
 * 内部定义了动画 0%、50% 和 100% 的位置
 */
@keyframes move {
    0% {
        left: 0
    }
    50% {
        left: 200px
    }
    100% {
        left: 0
    }
}
</style>
