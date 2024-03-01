//composition api syntax -setup function 
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    //biz logic
    const increment = () => {
        count.value++
    }
    //getter 
    const counter = computed(() => count.value)
    return {
        counter, increment
    }
})