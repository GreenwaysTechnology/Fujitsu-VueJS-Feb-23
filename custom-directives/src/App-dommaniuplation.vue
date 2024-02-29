<script setup>
const vHighlight = {
    mounted: (element) => {
        element.addEventListener('mousemove', evt => {
            highlight('yellow')
        })
        element.addEventListener('mouseleave', evt => {
            highlight(null)
        })
        const highlight = color => {
            element.style.backgroundColor = color
        }
    }

}
</script>
<template>
    <h1 v-highlight>Custom Directives</h1>
</template>