import Vue from 'vue'
import Vuex from 'vuex'
import screen from './screen'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...screen.state
  },
  mutations: {
    ...screen.mutations
  },
  actions: {
    ...screen.actions
  },
  getters: {
    screenWidth: state => state.screenWidth,
    isLeft: state => state.isLeft
  }
})
