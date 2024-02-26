<script>
import { computed, ref } from 'vue';

export default {
    setup() {
        const product = ref(2)

        const productNo = computed(() => {
            return product.value
        })
        return {
            productNo
        }
    }
}
</script>
<template>
    <h1>{{ productNo }}</h1>
</template>