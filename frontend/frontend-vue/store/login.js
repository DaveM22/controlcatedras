export const state = () => ({ usuarioActual: {} })

export const mutations = {
  SET(state, usuario) {
    state.usuarioActual = usuario
  }
}

export const actions = {
  async GetData({ commit }) {
    const response = await this.$axios.$get('cursos')
    commit('SET', response)
  },
  async AddCurso({ commit }, curso) {
    const response = await this.$axios.$post('cursos', curso)
    commit('ADD_CURSO', response)
  }
}
