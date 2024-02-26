<script setup>
import { ref } from 'vue'
const isActive = ref(false)
const highLight = () => {
    if (isActive.value) {
        isActive.value = false
    } else {
        isActive.value = true
    }
}
</script>
<template>
    <h1 @mouseover="highLight" :class="{ blockquote: isActive }">Hello</h1>
</template>