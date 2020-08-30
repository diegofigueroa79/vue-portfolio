<template>
  <v-app>
    <Navigation />
    
    <v-app-bar
      app
      color="blue"
      clipped-left
      dark
      flat
    >
      <v-app-bar-nav-icon v-on:click.stop="flipDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="display-1">Vue Portfolio</v-toolbar-title>

    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>

import Navigation from './components/home/Navigation'

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
  }),

  methods: {
    flipDrawer: function () {
      this.$store.commit('flipDrawer')
    }
  }
};
</script>
