<script setup>
import { ref } from 'vue';

const choice = ref('Male')
</script>
<template>
    <div>
        <h1>Select Gender</h1>
        <input type="radio" id="Male" value="Male" checked v-model="choice" />
        <label for="Male">Male</label>
        <input type="radio" id="Female" value="Female" v-model="choice" />
        <label for="Female">Female</label>
        <input type="radio" id="ThirdGender" value="ThirdGender" v-model="choice" />
        <label for="ThirdGender">ThirdGender</label>
    </div>
    <div>
        You Have selected {{ choice }}
    </div>
</template>