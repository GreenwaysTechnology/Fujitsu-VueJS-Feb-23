<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'Name is Missing'
    },
    id: {
        type: [Number, String],
        default: 0
    },
    status: {
        type: Boolean,
        default: false
    }
})
props.name = 'foo'
</script>
<template>
    <h1>Property validation</h1>
    <div>
        <h1>{{ props.id }}</h1>
        <h3>{{ props.name }}</h3>
        <h4>{{ props.status ? 'Available' : 'Not Available' }}</h4>
    </div>
</template>