<script setup>
import { ref } from 'vue';
const values = ref([])

</script>
<template>
    <h1>Course Information</h1>
    <input type="checkbox" id="frontend" value="FrontEnd" v-model="values" />
    <label for="frontend">Front End</label>
    <input type="checkbox" id="backend" value="Backend" v-model="values" />
    <label for="backend">Back End</label>
    <input type="checkbox" id="devops" value="Devops" v-model="values" />
    <label for="devops">Devops</label>
    <div>
        <h2>Selected Courses</h2>
        <ul>
            <li v-for="course in values">
                <span>{{ course }}</span>
            </li>
        </ul>
    </div>
</template>