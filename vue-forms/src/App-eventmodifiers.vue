<script setup>
const onSubmit = (event) => {
    event.preventDefault()
    console.log('form submission')
}
</script>
<template>
    <form action="http://www.google.com">
        <button @click="onSubmit">Submit</button>
    </form>
</template>