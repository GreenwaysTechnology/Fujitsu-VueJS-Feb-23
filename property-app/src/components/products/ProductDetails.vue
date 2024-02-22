<!-- <script>
export default {
    props: ['title', 'product']
}
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>Id {{ product.id }}</h1>
        <h2>Name {{ product.name }}</h2>
        <h2>Model {{ product.model }}</h2>
        <h2>Price {{ product.price }}</h2>
        <h2>Qty {{ product.qty }}</h2>
        <h2>Stock {{ product.inStock ? 'Available' : 'Out of Stock' }}</h2>

    </div>
</template> -->

<script>
export default {
    props: ['title', 'product'],
    setup(props) {
        //how to access props inside setup function
        //console.log(this.props.title)
        console.log(props.title)

    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>Id {{ product.id }}</h1>
        <h2>Name {{ product.name }}</h2>
        <h2>Model {{ product.model }}</h2>
        <h2>Price {{ product.price }}</h2>
        <h2>Qty {{ product.qty }}</h2>
        <h2>Stock {{ product.inStock ? 'Available' : 'Out of Stock' }}</h2>

    </div>
</template>

<!-- <script setup>
const props = defineProps(['title', 'product'])

</script>
<template>
    <h1>{{ props.title }}</h1>
    <div>
        <h1>Id {{ props.product.id }}</h1>
        <h2>Name {{ props.product.name }}</h2>
        <h2>Model {{ props.product.model }}</h2>
        <h2>Price {{ props.product.price }}</h2>
        <h2>Qty {{ props.product.qty }}</h2>
        <h2>Stock {{ props.product.inStock ? 'Available' : 'Out of Stock' }}</h2>

    </div>
</template> -->