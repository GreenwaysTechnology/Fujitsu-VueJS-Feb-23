<!-- Mouse Tracking feature -->
<script setup>
import { useMouseTrack } from './composables/useMouseTracker'
const { x, y } = useMouseTrack()
</script>
<template>
    <h1>Mouse Positions are at X: {{ x }} Y:{{ y }}</h1>
</template>