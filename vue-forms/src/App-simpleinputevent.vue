<script setup>
import { ref } from 'vue';

const name = ref('Default name')
const getInput = evt => {
  console.log(evt.target.value)
  name.value = evt.target.value
}
</script>
<template>
  <h1>Name {{ name }}</h1>
  <input @input="getInput" :value="name">
</template>