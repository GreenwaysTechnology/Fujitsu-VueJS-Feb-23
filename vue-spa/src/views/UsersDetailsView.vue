<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
console.log(route.params)
const goToUser = () => {
    router.push('/users')
}
</script>
<template>
    <h1>Users View</h1>
    <h2>{{ $route.params.id }}</h2>
    <button @click="goToUser">Users</button>
</template>