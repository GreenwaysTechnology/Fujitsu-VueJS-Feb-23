<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>
<template>
    <h1>Counter App</h1>
    <h3>Value {{ value }}</h3>
    <button @click="value++">+</button>
</template>