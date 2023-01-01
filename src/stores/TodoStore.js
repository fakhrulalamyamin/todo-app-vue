import { defineStore } from "pinia";

export const useTodoStore = defineStore('TodoStore', {
    // state
    state: () => ({
        todos: [
            {id: 1, title: 'Todo 1', completed: false},
            {id: 2, title: 'Todo 2', completed: false},
            {id: 3, title: 'Todo 3', completed: false},
            {id: 4, title: 'Todo 4', completed: true},
            {id: 5, title: 'Todo 5', completed: true},
        ]
    }),
    // action
    actions: {
        handelAdd(todo) {
            this.todos.push(todo)
        },

        deleteTodo(id) {
            this.todos = this.todos.filter( todo => todo.id !== id)
        },

        changeStatus(id) {
            this.todos = this.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo;
            })
        }

    },
    // getter
    getters: {
        allTodos: (state) => state.todos,
        completedTodos: (state) => state.todos.filter(todo => todo = todo.completed),
        pendingTodos: (state) => state.todos.filter(todo => todo = !todo.completed),
        allTodosCount: (state) => state.todos.length,
        completedTodosCount: (state) => state.todos.filter(todo => todo = todo.completed).length,
        pendingTodosCount: (state) => state.todos.filter(todo => todo = !todo.completed).length
    }
})