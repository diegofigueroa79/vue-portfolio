<template>
  <v-col
    cols=12
  >
    <v-row>
      <v-col
        class="d-flex justify-center"
        cols=3
        offset=3
      >
        <v-img
          contain
          height="200"
          width="200"
          src="../../assets/logo.svg"
        ></v-img>
      </v-col>
      <v-col
        class="d-flex justify-center"
        cols=3
      >
        <v-img
          contain
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
        <v-col :key="index" class="d-flex justify-center mt-12">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="400"
              link
              v-bind:to="project.url"
              :elevation="hover ? 12 : 2"
            >
              <v-img
                width=300
                height=200
                v-bind:src="project.img"
              ></v-img>
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
        { title: 'Diary', description: 'Simple app for logging your diary entries', url: '/diary/', img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'},
        { title: 'Calculator', description: 'Simple calculator app', url: '/calculator/', img: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'}
      ]
    })
}
</script>

<style>

</style>