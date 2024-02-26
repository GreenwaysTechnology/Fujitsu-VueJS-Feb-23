<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

const childCounter = ref(0)
const getChildData = data => {
    console.log(data)
    childCounter.value = data
}
</script>
<template>
    <h1>Parent</h1>
    <h2>Data from Child {{ childCounter }}</h2>

    <hr />
    <Counter @on-request="getChildData"></Counter>
</template>