export default {
  updateHeaderUI: ({ commit }, payload) => {
    commit('UPDATE_HEADER_UI', payload)
  },
  updateHeaderBtn: ({ commit }, payload) => {
    commit('UPDATE_HEADER_BTN', payload)
  },
  updateSharedUI: ({ commit }, payload) => {
    commit('UPDATE_SHARED_UI', payload)
  },
  openSelectIU: ({ commit }, payload) => {
    commit('OPEN_SELECT_UI', payload)
  },
  updateRodalAddUI: ({ commit }, payload) => {
    commit('UPDATE_RODAL_ADD_UI', payload)
  },
}