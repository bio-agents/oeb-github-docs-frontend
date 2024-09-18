<template>
  <span>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-agentbar-title>Documentation</v-agentbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-subheader>PROJECTS</v-subheader>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <span v-for="(v,k) in projects" v-bind:key="k">
              <v-list-item-title>
                <router-link :to="'/'+k">
                  <v-btn text isactive medium color="blue">{{v}}</v-btn>
                </router-link>
              </v-list-item-title>
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <span v-if="menu!=''">
        <v-subheader>REPOSITORIES</v-subheader>
        <v-list dense v-for="(v,k) in menu" v-bind:key="k">
          <v-list-item @click="setUrlForContent(k)">
            <v-list-item-content>
              <v-list-item-title>{{v}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </span>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Menu",
  created() {
    this.$route.params.id ? this.getMenu(this.$route.params.id) : "";
    this.getProjects();
  },
  data() {
    return {
      menu: "",
      drawer: null,
      projects: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.params.id != from.params.id) {
        this.getMenu(to.params.id);
      }
    }
  },
  methods: {
    async getMenu(id) {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const menu = await this.$http.get(this.$baseUrl + id, config);
      this.menu = menu.data;
    },
    async getProjects() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const projects = await this.$http.get(
        this.$baseUrl + this.$projects,
        config
      );
      this.projects = projects.data;
    },
    setUrlForContent(m) {
      this.$router
        .push({
          name: "projectAndRepo",
          params: { repository: m }
        })
        .catch();
      this.$store.commit("url/updateUrl", m);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
