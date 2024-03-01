<script setup>
import { defineAsyncComponent } from 'vue';


//Internally they use promise to load component
// const HelloAsync = defineAsyncComponent(() => 
//   // return new Promise((resolve, reject) => {
//   //   resolve('../components/HelloWorld.vue')
//   // })
//   import('../components/HelloWorld.vue')
// }))
//simple async component
//const HelloAsync = defineAsyncComponent(() => import('../components/HelloWorld.vue'))

const HelloAsync = defineAsyncComponent({
  loader: () => import('../components/HelloWorld.vue'),
  delay: 5000,
  // loadingComponent: <h1>Loading...</h1>
})


</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloAsync />
  </div>
</template>

