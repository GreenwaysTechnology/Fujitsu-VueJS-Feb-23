<script>
export default {

  methods: {
    //listeners
    onIncrement(evt) {
      console.log('button is clicked')
    }
  }
}
</script>
<template>
  <h1>Event Handling</h1>
  <button v-on:click="onIncrement">Increment</button>
  <button @click="onIncrement">Increment</button>
</template>