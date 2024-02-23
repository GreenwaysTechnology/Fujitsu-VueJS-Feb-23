<script>
import { ref } from 'vue'
export default {
    setup() {
        let counter = ref(0)
        const onIncrement = () => {
            counter.value++
            console.log(counter)

        }
        return {
            counter,
            onIncrement
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