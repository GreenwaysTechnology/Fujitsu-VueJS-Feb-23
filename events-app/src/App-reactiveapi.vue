<script setup>
import { reactive } from 'vue'
let review = reactive({ like: 0, dislike: 0 })
const onLike = () => {
    review.like++
}
const onDislike = () => {
    review.dislike++

}
</script>
<template>
    <div>
        <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
        <button @click="onLike">Like</button>
        <button @click="onDislike">Dislike</button>
    </div>
</template>