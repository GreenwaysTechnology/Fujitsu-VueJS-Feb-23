<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params)
</script>
<template>
    <h1>Users View</h1>
    <h2>{{ $route.params.id }}</h2>
</template>