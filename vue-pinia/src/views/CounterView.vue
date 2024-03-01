<script setup>
import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()
</script>
<template>
    <h1>Counter Pinia</h1>
    <h1>Value : {{ counterStore.counter }}</h1>
    <button @click="counterStore.increment">+</button>
</template>