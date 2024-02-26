<script setup>
import { ref, watch, watchEffect } from 'vue';

const tmpCelsius = ref(0)
const tempFarenheit = ref(0)
//watchers to compute farenheit
watch(tmpCelsius, (newValue) => {
    tempFarenheit.value = Math.round((newValue * 9) / 5 + 32)
})
</script>
<template>
    <h1>TtmpCelsius{{ tmpCelsius }}</h1>

    <h1>Temperature In Farenheit {{ tempFarenheit }}</h1>
    <button @click="tmpCelsius += 3">+</button>
</template>