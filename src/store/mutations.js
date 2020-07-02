export default {
  UPDATE_HEADER_UI: (state, payload) => {
    state.headerUI = {
      ...state.headerUI,
      ...payload
    }
  },
  UPDATE_HEADER_BTN: (state, payload) => {
    state.headerBtn = {
      ...state.headerBtn,
      ...payload
    }
  },
  UPDATE_SHARED_UI: (state, payload) => {
    state.sharedUI = {
      ...state.sharedUI,
      ...payload
    }
  },
  UPDATE_RODAL_ADD_UI: (state, payload) => {
    state.rodalAddUI = {
      ...state.rodalAddUI,
      ...payload
    }
  },
}