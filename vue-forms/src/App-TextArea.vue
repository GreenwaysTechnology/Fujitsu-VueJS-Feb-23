<script setup>
import { ref } from 'vue';
const mail = ref('')

</script>
<template>
    <h1>Mail {{ mail }}</h1>
    <label id="mail">Mail</label>
    <textarea v-model="mail"  />
</template>