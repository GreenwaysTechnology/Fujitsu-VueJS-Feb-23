<script setup>
import { reactive } from 'vue'
const todos = reactive([])

const addItem = () => {
    todos.push({ id: Math.random(), text: 'Learn vue' })
}
</script>
<template>
    <h1>Todo App</h1>
    <hr />
    <ul>
        <li v-for="todo in todos">
            <span>{{ todo }}</span>
        </li>
    </ul>
    <button @click="addItem">Add Todo</button>
</template>