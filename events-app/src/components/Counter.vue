<script setup>
import { ref } from 'vue';
const counter = ref(0)
const emit = defineEmits(['onRequest'])

const onSend = () => {
    counter.value++
    //emit event
    emit('onRequest', counter.value)
}

</script>
<template>
    <h1>Child component-Counter</h1>
    <button @click="onSend">SendToParent</button>
</template>