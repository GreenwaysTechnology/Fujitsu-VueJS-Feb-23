<script setup>
import { reactive, ref } from 'vue';
import Heroes from './mock-data/users'

const heroes = reactive(Heroes)
const selectedHero = ref(null)

const onSelect = (hero) => {
    selectedHero.value = hero
}
</script>
<template>
    <ul class="heroes">
        <li v-for="hero in heroes " @click="onSelect(hero)" :class="{ selected: hero === selectedHero }">
            <span class="badge">{{ hero.id }}</span> {{ hero.name }}
        </li>
    </ul>
    <div v-if="selectedHero">
        {{ selectedHero.name }}
        {{ selectedHero.email }}
    </div>
</template>
<style></style>