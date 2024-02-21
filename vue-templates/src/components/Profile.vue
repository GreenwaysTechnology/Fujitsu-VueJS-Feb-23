<!-- <script>
export default {
    data() {
        return {
            id: 1,
            firstName: 'Subramanain',
            lastName: 'Murugan',
            points: 100,
            status: true,
            address: {
                city: 'Coimbatore',
                state: 'Tamil Nadu',
                country: 'India',
            }
        }
    }
}
</script>
<template>
    <h1>ID {{ id }}</h1>
    <h2>Name {{ firstName }} {{ lastName }}</h2>
    <h3>Points {{ points }}</h3>
    <h3>Status {{ status ? 'Available' : 'Not Available' }}</h3>
    <address>
        <p>{{ address.city }}, {{ address.state }}</p>
    </address>
</template>
<style></style> -->

<!-- <script>
export default {
    setup() {
        const id = 1;
        const firstName = 'Subramanian'
        const lastName = 'Murugan';
        const status = true
        const address = {
            city: "Coimbatore",
            state: "Tamil Nadu"
        }
        return {
            id,
            firstName,
            lastName,
            status,
            address
        }
    }
}
</script>
<template>
    <h1>ID {{ id }}</h1>
    <h2>Name {{ firstName }} {{ lastName }}</h2>
    <h3>Points {{ points }}</h3>
    <h3>Status {{ status ? 'Available' : 'Not Available' }}</h3>
    <address>
        <p>{{ address.city }}, {{ address.state }}</p>
    </address>
</template>
<style></style> -->

<!-- setup attribute -->
<script setup>
const id = 1;
const firstName = 'Subramanian'
const lastName = 'Murugan';
const status = true
const address = {
    city: "Coimbatore",
    state: "Tamil Nadu"
}
</script>
<template>
    <h1>ID {{ id }}</h1>
    <h2>Name {{ firstName }} {{ lastName }}</h2>
    <h3>Points {{ points }}</h3>
    <h3>Status {{ status ? 'Available' : 'Not Available' }}</h3>
    <address>
        <p>{{ address.city }}, {{ address.state }}</p>
    </address>
</template>
<style></style>
