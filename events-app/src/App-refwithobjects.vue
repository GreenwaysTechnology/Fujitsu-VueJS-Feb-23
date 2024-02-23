<script setup>
import { ref } from 'vue'
let review = ref({ like: 0, dislike: 0 })
const onLike = () => {
    review.value.like++
}
const onDislike = () => {
    review.value.dislike++

}
</script>
<template>
    <div>
        <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
        <button @click="onLike">Like</button>
        <button @click="onDislike">Dislike</button>
    </div>
</template>