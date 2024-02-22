<script setup>
const onIncrement = () => {
    console.log('increment')
}
</script>
<template>
    <h1>Event Handling</h1>
    <button @click="onIncrement">Increment</button>
</template>