<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
    setup() {
        const state = reactive({
            firstName: 'Subramanian',
            lastName: '',
            contact: {
                email: ''
            }
        })
        const rules = {
            firstName: { required }, // Matches state.firstName
            lastName: { required }, // Matches state.lastName
            contact: {
                email: { required, email } // Matches state.contact.email
            }
        }

        const v$ = useVuelidate(rules, state)

        const onSubmit = (e) => {
            console.log('there')
            console.log(state)
            e.preventDefault()
        }

        return { state, v$, onSubmit }
    }
}
</script>
<template>
    <form @submit="onSubmit">
        <div :class="{ error: v$.firstName.$errors.length < 0 }">
            <input v-model="state.firstName">
            <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
                <div class="error-msg">{{ error.$message }}</div>
            </div>
            <button type="submit">Submit</button>
        </div>
    </form>
</template>