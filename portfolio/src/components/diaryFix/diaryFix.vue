<template>
  <div class="diary">
      <v-text-field v-model="entryInput.title"></v-text-field>
      <v-text-field v-model="entryInput.text"></v-text-field>
      <v-btn v-on:click="commitEntry">Submit</v-btn>
      <ul>
          <li v-for="(entry, index) in computeEntries" :key="index">
              <p>{{ entry.title }}</p>
              <p>{{ entry.text }}</p>     
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'diaryFix',
    data() {
        return {
            entryInput: {
                title: '',
                text: ''
            }
        }
    },
    computed: {
        computeEntries() {
            return this.$store.getters['diaryFix/getEntries']
        }
    },
    methods: {
        commitEntry() {
            let temp = {}
            temp = Object.assign(temp, this.entryInput)
            this.entryInput.title = null
            this.entryInput.text = null
            this.$store.commit('diaryFix/addEntry', temp)
        }
    }
}
</script>

<style>

</style>