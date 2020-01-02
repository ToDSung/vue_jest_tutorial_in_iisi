import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vuexMessage: '我是那個 vuex 預設值啦',
  },
  mutations: {
    SET_VUEX_MESSAGE: (state, vuexMessage) => {
      state.vuexMessage = vuexMessage;
    },
  },
  actions: {
    set_vuex_message: (context, payload) => {
      context.commit('SET_VUEX_MESSAGE', payload);
    },
  },
  getters: {
    vuex_message: state => state.vuexMessage,
  },
});
