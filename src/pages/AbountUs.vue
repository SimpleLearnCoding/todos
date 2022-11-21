<template>
    <HeadingJsx :level="1">About Us</HeadingJsx>
    <AntDesignLayout></AntDesignLayout>
</template>

<script>

import HeadingJsx from "@/components/HeadingJsx.jsx";
import AntDesignLayout from "@/components/AntDesignLayout.vue";

import {defineComponent} from "vue";

export default defineComponent({
    components: {
        HeadingJsx, AntDesignLayout
    }
})

</script>

<style scoped>

</style>
