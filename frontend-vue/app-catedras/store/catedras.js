export const state = () => ({ catedras: [], cursoActual: {} })

export const mutations = {
  SET_CATEDRAS(state, catedras) {
    state.catedras = catedras
  },
  ADD_CURSO(state, curso) {
    state.catedras.push(curso)
  },
  GET_CURSO(state, curso) {
    state.cursoActual = curso
  },
  UPDATE_CURSO(state, curso) {
    state.catedras.splice(
      state.catedras.findIndex((x) => x.id === curso.id),
      1,
      curso
    )
  },
  DELETE_CURSO(state, id) {
    state.catedras.splice(
      state.catedras.findIndex((x) => x.id === id),
      1
    )
  }
}

export const actions = {
  async GetData({ commit }) {
    const response = await this.$axios.$get('cursos')
    commit('SET_CATEDRAS', response)
  },
  async AddCurso({ commit }, curso) {
    const response = await this.$axios.$post('cursos', curso)
    commit('ADD_CURSO', response)
  },
  async GetCursoById({ commit }, id) {
    const response = await this.$axios.$get('cursos/' + id)
    commit('GET_CURSO', response)
  },
  async UpdateCurso({ commit }, curso) {
    const response = await this.$axios.$put('cursos', curso)
    commit('UPDATE_CURSO', response)
  },
  async DeleteCurso({ commit }, id) {
    await this.$axios.$delete('cursos/' + id)
    commit('DELETE_CURSO', id)
  }
}
