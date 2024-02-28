<script setup>
import { onMounted, ref } from 'vue';

const data = ref(null)
const error = ref(null)

//function to fetch data 
const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    try {
        const response = await fetch(url)
        const todos = await response.json()
        console.log(todos)
        data.value = todos
    }
    catch (err) {
        console.log(err)
        error.value = err
    }
}

//onMounted: all api calls must be made after dom ready
onMounted(() => {
    //fetchData()
    //in order to show some delay we can use timer: todo:you can remove after testing
    setTimeout(() => {
        fetchData()
    }, 5000)
})
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