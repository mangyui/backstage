
export default {
  state: {
    screenWidth: 0,
    isLeft: false
  },
  mutations: {
    CHANGE_SCREEN (state, width) {
      state.screenWidth = width
    },
    CHANGE_LEFT (state) {
      state.isLeft = !state.isLeft
    },
    NONE_LEFT (state) {
      state.isLeft = false
    }
  },
  actions: {
    Resize ({ commit }, width) {
      commit('CHANGE_SCREEN', width)
    },
    LeftClick ({ commit }) {
      commit('CHANGE_LEFT')
    },
    LeftNone ({ commit }) {
      commit('NONE_LEFT')
    }
  }
}
