
<template>
  <span>
    <v-content>
      <slContent v-show="content==null" fluid />
      <v-container v-show="content!=null" fluid>
        <v-sheet v-html="content" fluid></v-sheet>
      </v-container>
    </v-content>
  </span>
  <!-- <div v-html="content" fluid></div> -->
</template>



<script>
import slContent from "@/skeleton-loaders/slContent.vue";
export default {
  components: {
    slContent
  },
  name: "Content",
  created() {
    this.$route.params.repository
      ? this.getContent(this.$route.params.repository)
      : "";
  },
  data() {
    return {
      content: process.env.VUE_APP_DESC
    };
  },
  watch: {
    $route(to, from) {
      if (
        to.params.repository != undefined &&
        to.params.repository != from.params.repository
      ) {
        this.getContent(to.params.repository);
      }
    }
  },
  methods: {
    async getContent(clickedUrl) {
      let config = {
        headers: {
          "Content-type": "text/html;charset=UTF-8"
        }
      };

      const content = await this.$http.get(
        this.$baseUrl + this.$gh + clickedUrl,
        config
      );
      return (this.content = content.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
