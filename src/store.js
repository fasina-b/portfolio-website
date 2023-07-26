// store.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    // Your state properties go here
    // For example:
    count: 0,
  },
  mutations: {
    // Your mutations go here
    // For example:
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // Your actions go here
    // For example:
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    // Your getters go here
    // For example:
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
