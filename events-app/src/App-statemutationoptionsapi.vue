<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        onIncrement() {
            //mutate the state
            this.counter++
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>