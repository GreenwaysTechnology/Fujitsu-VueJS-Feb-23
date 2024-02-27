<script setup>
import { ref } from 'vue';
const name = ref('Default name')

</script>
<template>
    <h1>Name {{ name }}</h1>
    <input v-model="name">
</template>