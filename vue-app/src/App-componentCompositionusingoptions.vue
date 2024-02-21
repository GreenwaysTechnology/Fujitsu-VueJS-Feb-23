<!-- Component Composition using Options api -->
<script>
import Welcome from './components/Welcome.vue';
export default {
    //components
    components: {
        //Welcome: Welcome
        Welcome //ES6 object destructuring syntax
    }
}
</script>
<template>
    <h1>Component Composition using Options Api</h1>
    <Welcome></Welcome>
</template>
