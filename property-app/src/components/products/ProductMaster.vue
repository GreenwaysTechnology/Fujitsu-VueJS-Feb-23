<!-- <script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: { ProductDetails },
    data() {
        return {
            product: {
                id: 1,
                name: 'IPHONE',
                model: '15 Max Pro',
                qty: 10,
                price: 124000,
                inStock: true
            }
        }
    }
}
</script>
<template>
    <h1>Product Master</h1>
    <!-- sending data from Productmaster to ProductDetails -->
    <!-- <ProductDetails title="Product Details Page" v-bind:product="product"></ProductDetails> -->
    <!-- <ProductDetails title="Product Details Page" :product="product"></ProductDetails> -->
<!-- </template> -->

<!-- Props with Compostion setup fun -->
<!-- <script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: { ProductDetails },
    setup() {
        return {
            product: {
                id: 1,
                name: 'IPHONE',
                model: '15 Max Pro',
                qty: 10,
                price: 124000,
                inStock: true
            }
        }
    }
}
</script>
<template>
    <h1>Product Master</h1>
    <ProductDetails title="Product Details Page" :product="product"></ProductDetails>
</template> -->

<!-- Setup attribute -->

<script setup>
import ProductDetails from './ProductDetails.vue'
const product = {
    id: 1,
    name: 'IPHONE',
    model: '15 Max Pro',
    qty: 10,
    price: 124000,
    inStock: true
}
</script>
<template>
    <h1>Product Master</h1>
    <ProductDetails title="Product Details Page" :product="product"></ProductDetails>
</template>