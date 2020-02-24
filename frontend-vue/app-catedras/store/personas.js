export const state = () => ({ personas: [] })

export const mutations = {
  SET_PERSONAS(state, personas) {
    state.personas = personas
  },
  ADD_PERSONA(state, persona) {
    state.personas.push(persona)
  },
  UPDATE_PERSONA(state, persona) {
    state.personas.splice(
      state.personas.findIndex((x) => x.id === persona.id),
      1,
      persona
    )
  },
  DELETE_PERSONA(state, id) {
    state.personas.splice(
      state.personas.findIndex((x) => x.id === id),
      1
    )
  }
}

export const actions = {
  async GetData({ commit }) {
    const response = await this.$axios.$get('personas')
    commit('SET_PERSONAS', response)
  },
  async AddPersona({ commit }, persona) {
    const response = await this.$axios.$post('personas', persona)
    commit('ADD_PERSONA', response)
  },
  async UpdatePersona({ commit }, persona) {
    const response = await this.$axios.$put('personas', persona)
    commit('UPDATE_PERSONA', response)
  },
  async DeletePersona({ commit }, id) {
    await this.$axios.$delete('personas/' + id)
    commit('DELETE_PERSONA', id)
  }
}
