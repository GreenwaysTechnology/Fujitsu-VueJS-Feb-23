<script setup>
import { ref } from 'vue'
const color = ref('green')
</script>
<template>
    <input v-foucs v-model="color">
    <h1 v-highlight.value="color">Hello</h1>
</template>