<script setup>
import { reactive, toRefs } from 'vue'
//destructure
let { like, dislike, recommend } = toRefs(reactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
}))
</script>
<template>
    <div>
        <h1>Like {{ like }} Dislike {{ dislike }} Rating {{ recommend.rating.value }}</h1>
        <button @click="like++">Like</button>
        <button @click="dislike++">Dislike</button>
        <button @click="recommend.rating.value++">Rating</button>

    </div>
</template>