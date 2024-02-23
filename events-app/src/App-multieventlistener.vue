<script setup>
const onMouseLeave = () => {
    console.log('leave')
}
const onMouseEnter = () => {
    console.log('enter')
}

</script>
<template>
    <h1>Event Handling</h1>
    <div v-on="{ mouseenter: onMouseEnter, mouseleave: onMouseLeave }">
        Touch
    </div>
</template>