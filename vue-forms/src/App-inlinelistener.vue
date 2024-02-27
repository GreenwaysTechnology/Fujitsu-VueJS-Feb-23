<script setup>
import { ref } from 'vue';
const name = ref('Default name')

</script>
<template>
    <h1>Name {{ name }}</h1>
    <!-- Inline Listener -->
    <input @input="evt => name = evt.target
        .value" :value="name">
</template>