<template>
  <v-card class="" width="100%" height="100%">
    <v-app-bar color="teal">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MasterViewer</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <router-view :key="key" />
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    name: 'Layout',
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>