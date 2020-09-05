import Vue from 'vue'
import Vuex from 'vuex'
import diary from './modules/diary'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    flipDrawer: state => {
      state.drawer = !state.drawer
    }
  },
  actions: {
  },
  modules: {
    diary
  },
  getters: {
    getDrawer: state => state.drawer
  }
})
