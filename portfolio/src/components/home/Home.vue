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
      <template v-for="(project, index) in projects">
        <v-col :key="index" class="white rounded-xl d-flex justify-center">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="400"
              link
              v-bind:to="project.url"
              :elevation="hover ? 12 : 2"
            >
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-subtitle>{{ project.description }}</v-card-subtitle>
            </v-card>
          </v-hover>
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
        { title: 'Diary', description: 'Simple app for logging your diary entries', url: '/diary/'}
      ]
    })
}
</script>

<style>

</style>