<template>
  <v-app>
    <Menu />
    <Content />
  </v-app>
</template>

<script>
import Content from "@/components/Content.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Projects",
  components: {
    Content,
    Menu
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>