<script setup>
import { useFetch } from './composables/useFetch'
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos')
</script>
<template>
    <h1>Todo App :(Fetch data from api)</h1>
    <!-- Conditional rendering -->
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="data">
        <ul>
            <li v-for="todo of data">
                {{ todo.title }}
            </li>
        </ul>
    </div>
    <!-- Display spinner -->
    <div v-else>
        <h1>Loading....</h1>
    </div>
</template>