<template>
  <v-app>
    <Navigation />
    
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
    //
  }),
};
</script>
