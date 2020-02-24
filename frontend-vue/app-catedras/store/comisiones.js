export const state = () => ({ comisiones: [] })

export const mutations = {
  SET(state, comisiones) {
    state.comisiones = comisiones
  },
  ADD(state, comision) {
    state.comisiones.push(comision)
  },
  UPDATE(state, comision) {
    state.comisiones.splice(
      state.comisiones.findIndex((x) => x.id === comision.id),
      1,
      comision
    )
  },
  DELETE(state, id) {
    state.comisiones.splice(
      state.comisiones.findIndex((x) => x.id === id),
      1
    )
  }
}

export const actions = {
  async GetData({ commit }) {
    const response = await this.$axios.$get('comisiones')
    commit('SET', response)
  },
  async AddComision({ commit }, comision) {
    const response = await this.$axios.$post('comisiones', comision)
    commit('ADD', response)
  },
  async UpdateComision({ commit }, comision) {
    const response = await this.$axios.$put('comisiones', comision)
    commit('UPDATE', response)
  },
  async DeleteComision({ commit }, id) {
    await this.$axios.$delete('comisiones/' + id)
    commit('DELETE', id)
  }
}
