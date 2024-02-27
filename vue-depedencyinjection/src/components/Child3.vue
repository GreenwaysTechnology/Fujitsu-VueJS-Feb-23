<script setup>
import { inject } from 'vue';

const props = defineProps(['message'])

//access the data which was injected in parent component
let companyName = inject("companyName", "Your Company");

companyName.value = "React js"

const info = inject('info')

</script>
<template>
    <h1>Child-3 - Got Props {{ props.message }}</h1>
    <h2>Global Data : - {{ companyName }}</h2>
    <h3>Info {{ info }}</h3>
</template>