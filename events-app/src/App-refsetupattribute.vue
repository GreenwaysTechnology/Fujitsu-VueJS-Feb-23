<script setup>
import { ref } from 'vue'
let counter = ref(0)
const onIncrement = () => {
    counter.value++
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>