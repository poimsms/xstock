import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UI: {
            route: 'inicio',
            dialog: false,
            dialogRodal: false,
            dialogEspecie: false,
            fullDialog: false,
            date: false,
            drawer: false
        }
    },
    actions: {
        updateUI:({ commit }, payload)=>{
            commit('UPDATE_UI', payload)
        },        
    },
    mutations: {
        UPDATE_UI: (state, payload) => {
            console.log('pasooo');
                      
            state.UI = {
                ...state.UI,
                ...payload
            }
        },
    }
});