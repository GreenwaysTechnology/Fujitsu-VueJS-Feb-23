<script setup>

</script>
<template>
    <!-- <slot name="header">
        <h1>Default header</h1>
    </slot> -->
    <!-- Default slot -->
    <slot>
        <h1>Default header</h1>
    </slot>
    <slot name="body">
        <h1>Default body</h1>

    </slot>
    <slot name="footer">
        <h1>Default footer</h1>

    </slot>
</template>
<style scoped></style>