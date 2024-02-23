<script setup>
const onData = (data, event) => {
    console.log(data, event)
}

</script>
<template>
    <h1>Event Handling</h1>
    <button @click="onData('hello', $event)">PassData</button>
</template>