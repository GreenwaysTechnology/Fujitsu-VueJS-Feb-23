<!-- Data binding with directives -->

<script setup>
const firstName = 'Subramanian'
</script>
<template>
    <h1>Interpolation using mustache notation</h1>
    <p>Name {{ firstName }}</p>
    <h1>Interpolation using Directives v-text</h1>
    <p v-text="`Name ${firstName}`"></p>
    <h1>Interpolation using Directives v-html</h1>
    <p v-html="`Name ${firstName}`"></p>
</template>

