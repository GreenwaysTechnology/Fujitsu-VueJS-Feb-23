<script setup>
import { onMounted } from 'vue';
import { todosStore } from '../stores/todo'
const todos = todosStore()
onMounted(() => {
    todos.getTodos()
})
</script>
<template>
    <h1>Todo App with Pinia</h1>
    <div v-for="todo in todos.todolist">
        <h2>{{ todo.id }} {{ todo.title }}</h2>
    </div>
</template>