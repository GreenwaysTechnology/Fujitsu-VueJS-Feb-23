import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  //state declaration using state function ===data function
  state: () => {
    return {
      //reactive by default
      count: 10
    }
  },
  //mutations
  actions: {
    //biz logic
    increment() {
      this.count++
    }
  },
  //getters 
  getters: {
    counter: state => state.count
  }

})