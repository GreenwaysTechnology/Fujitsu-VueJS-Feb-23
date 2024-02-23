<script setup>
import { reactive } from 'vue'
import Products from './mock-data/product'

const products = reactive(Products)
</script>
<template>
    <div>
        <h1>Vue Shop</h1>
        <div v-for="product in products" :key="product.id">
            <h3>{{ product.id }} {{ product.title }}</h3>
            <h4>{{ product.category }}</h4>
            <p>{{ product.description }}</p>
            <h5>Price : {{ product.price }}</h5>
            <img :src="product.image" height="200" width="200">
            <h4>Rating By {{ product.rating.count }} Total Rating {{ product.rating.rate }}</h4>
        </div>
    </div>
</template>