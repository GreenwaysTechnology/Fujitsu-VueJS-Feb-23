import { defineStore } from "pinia";

export const todosStore = defineStore('todos', {
    state: () => {
        return {
            todos: [],
            error: null
        }
    },
    actions: {
        async getTodos() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const todos = await response.json()
                this.todos = todos;
            }
            catch (err) {
                this.error = err
            }
        }
    },
    getters: {
        todolist: state => state.todos
    }
})