<script setup>
import { ref, watchEffect } from 'vue';
const counter = ref(0)
//watchers
watchEffect(() => {
    console.log(counter.value)
})
</script>
<template>
    <h1>Counter {{ counter }}</h1>
    <button @click="counter++">+</button>
</template>