<template>
  <li class="mb-4">
    {{ todo.title }} |
    <button @click="handelDelete" class="btn">Delete Todo</button> |
    <button @click="handelComplete" class="btn">
      {{ todo.completed ? "Make Pending" : "Make Completed" }}
    </button>
  </li>
</template>

<script>
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "SingleTodo",
  props: {
    todo: {
      type: Object,
    },
  },

  methods: {
    handelDelete() {
      useTodoStore().deleteTodo(this.todo.id);
    },

    handelComplete() {
      useTodoStore().changeStatus(this.todo.id);
    },
  },
};
</script>
