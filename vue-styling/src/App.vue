<script setup>
import { ref } from 'vue';
const show = ref(true)
</script>
<template>
    <button @click="show = !show">Toggle</button>
    <Transition>
        <h1 style="color: brown;" v-if="show">Hello</h1>
    </Transition>
</template>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>