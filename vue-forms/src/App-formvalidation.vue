<script setup>
import { reactive } from 'vue';

const data = reactive({
    errors: [],
    name: null,
    age: null,
    movie: null
})
const checkForm = (e) => {
    if (data.name && data.age) return true;
    data.errors = [];
    if (!data.name) data.errors.push("Name required.");
    if (!data.age) data.errors.push("Age required.");
    e.preventDefault()

}
</script>
<template>
    <form id="app" @submit="checkForm">

        <p v-if="data.errors.length">
            <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in data.errors">{{ error }}</li>
        </ul>
        </p>

        <p>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="data.name">
        </p>

        <p>
            <label for="age">Age</label>
            <input type="number" name="age" id="age" v-model="data.age" min="0">
        </p>

        <p>
            <label for="movie">Favorite Movie</label>
            <select name="movie" id="movie" v-model="data.movie">
                <option>Star Wars</option>
                <option>Vanilla Sky</option>
                <option>Atomic Blonde</option>
            </select>
        </p>

        <p>
            <input type="submit" value="Submit">
        </p>

    </form>
</template>