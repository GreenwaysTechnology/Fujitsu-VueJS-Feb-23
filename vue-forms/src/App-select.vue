<script setup>
import { ref } from 'vue';

const courses = ref(["Vue", "Angular", "Microservices"])
const selectedCourses = ref('Microservices')
</script>
<template>
    <div>
        <select v-model="selectedCourses">
            <option disabled value>Select Your Course</option>
            <option v-for="course of courses">
                {{ course }}
            </option>
        </select>
    </div>
    <div>
        Your course is {{ selectedCourses }}
    </div>
</template>
<style></style>