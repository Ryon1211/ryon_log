import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        isMobile: false,
      }
    },
    mutations: {
      changeIsMobile: (state, payload_bool) => {
        state.isMobile = payload_bool;
      }
    }
  })
}

export default createStore;