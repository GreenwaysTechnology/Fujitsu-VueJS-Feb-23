<script setup>
import { ref } from 'vue'
let counter = ref(0)
const onIncrement = (payload, event) => {
    counter.value += payload
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement(5, $event)">+</button>
    </div>
</template>