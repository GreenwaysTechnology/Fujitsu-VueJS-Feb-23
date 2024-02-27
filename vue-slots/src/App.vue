<script setup>
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'
import { ref } from 'vue';

const header = ref('header')
</script>
<template>
    <!-- <Layout>
        <template v-slot:header>
            <Header />
        </template>
        <template v-slot:body>
            <Body />
        </template>
        <template v-slot:footer>
            <Footer />
        </template>
    </Layout> -->

    <!-- <Layout>
        <template #header>
            <Header />
        </template> -->
    <!-- Defautl -->
    <!-- <template #default>
            <Header />
        </template>
        <template #body>

            <Body />
        </template>
        <template #footer>
            <Footer />
        </template>
    </Layout> -->

    <Layout>
        <template #[header]>
            <Header />
        </template>
        <template #default>
            <Header />
        </template>
        <template #body>

            <Body />
        </template>
        <template #footer>
            <Footer />
        </template>
    </Layout>
</template>
<style scoped></style>