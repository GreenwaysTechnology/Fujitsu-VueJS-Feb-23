<script setup>
import { RouterLink } from 'vue-router';
import { useFetch } from '../composables/useFetch'
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/users')

</script>
<template>
    <h1>Users Master Page</h1>
    <!-- Conditional rendering -->
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="data">
        <ul>
            <li v-for="user of data">
                <!-- Dynamic Urls -->
                <!-- <RouterLink :to="`/details/${user.id}`">
                    {{ user.name }}
                </RouterLink> -->
                <!-- With named routing -->
                <RouterLink :to="{ name: 'details', params: { id: user.id } }">
                    {{ user.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
    <!-- Display spinner -->
    <div v-else>
        <h1>Loading....</h1>
    </div>
</template>