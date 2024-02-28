<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const counter = ref(0)
onBeforeMount(() => {
  console.log('before mount')
})
//after mount: after ui is rendered
onMounted(() => {
  console.log('after mount')
})
onBeforeUpdate(() => {
  console.log('before update')
})
//after update: after ui is updated
onUpdated(() => {
  console.log('after update')
})
</script>
<template>
  <h1>Component Life Cycles</h1>
  <h2>Counter {{ counter }}</h2>
  <button @click="counter++">+</button>
</template>