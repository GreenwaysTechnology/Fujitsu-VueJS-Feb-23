<script setup>
import { ref } from 'vue';
import { useFetch } from './composables/useFetchDynamic'

const url = ref('https://jsonplaceholder.typicode.com/todos')
const { data, error } = useFetch(url)
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