<template>
  <v-col
    class="purple lighten-4"
    cols=12
  >
    <v-row>
      <v-col
        class="purple d-flex justify-center"
        cols=3
        offset=3
      >
        <v-img
          height="200"
          width="200"
          src="../../assets/logo.svg"
        ></v-img>
      </v-col>
      <v-col
        class="blue d-flex justify-center"
        cols=3
      >
        <v-img
          height="220"
          width="220"
          src="../../assets/logo.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-center blue--text">Vue CLI, Vuetify, Vuex, Vue Router</h1>
      </v-col>
    </v-row>
    <v-row>
      <template v-for="(n, index) in 3">
        <v-col :key="index" class="white rounded-xl d-flex justify-center">
          Hello
        </v-col>
      </template>
    </v-row>
  </v-col>
</template>

<script>
export default {
    name: 'Home',
    data: () => ({
      projects: [
        { title: '', description: '', link: ''}
      ]
    })
}
</script>

<style>

</style>