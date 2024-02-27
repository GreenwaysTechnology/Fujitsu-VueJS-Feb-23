<script setup>
import { provide, readonly, ref } from 'vue';
import Child1 from './components/Child1.vue';
const message = ref('hello')
const counter = ref(0)

const companyName = ref("vuejs corporation")

//with dependency injection
provide("companyName", readonly(companyName))
provide('info', { counter, message })

</script>
<template>
  <h1>Root-App</h1>
  <Child1 :message="message"></Child1>
</template>