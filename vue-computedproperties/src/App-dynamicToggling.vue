<script>
export default {
    data() {
        return {
            status: true
        }
    },
    computed: {
        toggle() {
            if (this.status) {
                return true
            } else {
                return false
            }

        }

    }
}
</script>
<template>
    <button @click="status = !status">{{ status }}</button>
</template>