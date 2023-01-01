<template>
  All Todo: {{ allTodosCount }} | Pending Todo: {{ pendingTodosCount }} |
  Completed Todo: {{ completedTodosCount }}
</template>

<script>
import { mapState } from "pinia";
import { useTodoStore } from "../stores/TodoStore";

export default {
  name: "MenuSection",

  computed: {
    ...mapState(useTodoStore, [
      "allTodosCount",
      "completedTodosCount",
      "pendingTodosCount",
    ]),
  },
};
</script>
