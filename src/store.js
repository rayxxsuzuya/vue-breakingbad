import Vuex from "vuex";
import axios from "axios";

export default new Vuex.Store({
  state: {
    characters: null,
  },
  getters: {
    CHARACTERS: (state) => {
      return state.characters;
    },
  },
  mutations: {
    SET_CHARACTERS: (state, payload) => {
      state.characters = payload;
    },
  },
  actions: {
    GET_CHARACTERS: async (context) => {
      let { data } = await axios.get(
        "https://breakingbadapi.com/api/characters?limit=14"
      );
      context.commit("SET_CHARACTERS", data);
    },
  },
});