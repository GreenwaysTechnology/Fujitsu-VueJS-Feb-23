<!--  -->
<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs()
console.log(attrs)

// defineOptions({
//     inheritAttrs: true
// })
</script>
<template>
    <!-- <div style="background-color: aquamarine;">
        <button v-bind="$attrs">Click</button>
    </div> -->
    <button>Click</button>
</template>
<style scoped>
.fancy-btn {
    background-color: #af4c60;
}
</style>