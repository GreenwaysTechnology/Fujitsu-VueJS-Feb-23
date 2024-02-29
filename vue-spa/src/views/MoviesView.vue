<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
    <h1>Movie Page</h1>
    <ul>
        <li>
            <RouterLink to="/movies/action">
                <span>Action</span>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/horror">
                <span>Horror</span>
            </RouterLink>
        </li>
    </ul>
    <!-- Place holder component to display pages -->
    <RouterView />
</template>