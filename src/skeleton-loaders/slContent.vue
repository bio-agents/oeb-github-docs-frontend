<template>
  <v-sheet>
    <v-skeleton-loader
      ref="skeleton"
      :boilerplate="boilerplate"
      :type="type"
      :tile="tile"
      class="mx-auto"
    ></v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    boilerplate: false,
    tile: false,
    type: "article",
    types: []
  }),

  mounted() {
    this.types = Object.keys(this.$refs.skeleton.rootTypes);
  }
};
</script>

<style lang="scss" scoped>
</style>