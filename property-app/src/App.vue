<script setup>
import User from './components/User.vue';
// const id = false
const id = 1
const name = 'Subramanian'
const status = true
</script>
<template>
    <h1>Property validation</h1>
    <User />
    <User :id="id" :name="name" :status="status" />
</template>