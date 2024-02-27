<script setup>
import { inject } from 'vue';
import Child3 from './Child3.vue';
const props = defineProps(['message'])
const version = inject('version')
</script>
<template>
    <h1>Child-2 -> {{ version }}</h1>
    <Child3 :message="props.message"></Child3>
</template>