<script setup>
import { reactive, watch } from 'vue';
const comments = reactive({ like: 0, dislike: 0, recommend: { rating: { value: 0 } } })
//watchers
watch(comments, (newValue, oldValue) => {
    //console.log(`New Value ${newValue} Old Value ${oldValue}`)
    console.log(newValue)
})
</script>
<template>
    <h1>Comments {{ comments.like }}</h1>
    <button @click="comments.like++">+</button>
</template>