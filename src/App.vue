<template>
  <MenuSection />

  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import MenuSection from "./components/MenuSection.vue";

export default {
  name: "App",
  components: {
    MenuSection,
  },
};
</script>
