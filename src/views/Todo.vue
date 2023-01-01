<template>
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold mb-3">Todos</h2>
    <button @click="handelAdd" class="btn mb-3">Add Todo</button>
    <div class="flex justify-between">
      <div class="mb-3">
        <h3 class="text-2xl font-bold mb-3">All Todos</h3>
        <ul class="ml-6">
          <SingleTodo v-for="todo in todos" :key="todo.id" :todo="todo" />
        </ul>
      </div>
      <div class="mb-3">
        <h3 class="text-2xl font-bold mb-3">Pending Todos</h3>
        <ul class="ml-6">
          <SingleTodo
            v-for="todo in pendingTodos"
            :key="todo.id"
            :todo="todo"
          />
        </ul>
      </div>
      <div class="mb-3">
        <h3 class="text-2xl font-bold mb-3">Completed Todos</h3>
        <ul class="ml-6">
          <SingleTodo
            v-for="todo in completedTodos"
            :key="todo.id"
            :todo="todo"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import SingleTodo from "../components/SingleTodo.vue";
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "Todo",
  components: {
    SingleTodo,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useTodoStore, {
      todos: "allTodos",
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos",
    }),
  },
  methods: {
    handelAdd() {
      useTodoStore().handelAdd({
        id: this.todos.length + 1,
        title: "Todo " + (this.todos.length + 1),
        completed: false,
      });
    },
  },
};
</script>
