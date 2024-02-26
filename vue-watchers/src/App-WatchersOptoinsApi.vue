<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    counter(newvalue, oldvalue) {
      console.log(`new Value ${newvalue} oldValue ${oldvalue}`)
    }
  }
}
</script>
<template>
  <h1>Counter {{ counter }}</h1>
  <button @click="counter++">+</button>
</template>