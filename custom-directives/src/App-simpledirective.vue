<script setup>
const vFocus = {
  //define life cycle methods
  mounted: (element) => {
    //we can get dom element here, on which element you have attached 
    console.log(element)
    element.focus()

  }
}
</script>
<template>
  <h1>Custom Directives</h1>
  <input v-focus>
</template>