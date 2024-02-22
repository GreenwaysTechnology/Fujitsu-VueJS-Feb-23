<script>
export default {
    setup() {
        //listener
        // function onIncrement(evt) {
        //     console.log('increment')
        // }
        //es 6 arrow functions
        const onIncrement = () => {
            console.log('increment')
        }
        //function must be returned
        return {
            onIncrement
        }
    }
}
</script>
<template>
    <h1>Event Handling</h1>
    <button @click="onIncrement">Increment</button>
</template>