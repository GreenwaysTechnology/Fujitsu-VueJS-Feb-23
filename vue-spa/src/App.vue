<!-- Landing Page -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <div style="margin-left: 10px;">
    <h1 style="text-align: center;"> Router Application</h1>
    <hr>
    <!-- Menu Bar -->
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/counter">Counter</RouterLink>
        </li>
        <li>
          <RouterLink to="/users">Users</RouterLink>
        </li>
        <li>
          <RouterLink to="/movies">Movies</RouterLink>
        </li>
      </ul>
    </nav>
    <hr>
    <!-- Place holder component to display pages -->
    <RouterView />
  </div>
</template>