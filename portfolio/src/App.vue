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

    <v-main class="blue lighten-5">
      <v-container>
        <v-row>
          <v-icon>mdi-home</v-icon>
          <v-breadcrumbs v-bind:items="crumbs" large></v-breadcrumbs>
        </v-row>
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
    crumbs: [
      { text: 'Home', disabled: false, href: '/'}
    ]
  }),

  methods: {
    flipDrawer: function () {
      this.$store.commit('flipDrawer')
    }
  }
};
</script>
