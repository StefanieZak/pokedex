import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonSelected: "",
    nameAttribute: [],
    valueAttribute: [],
    indexSelected: "",
  },
  mutations: {
    getpokemonSelected(state, payload) {
      state.namePokemonPlayer = payload;
      console.log("Nome pokemon jogador", payload);
    },
    getNameAttribute(state, payload) {
      state.nameAttribute = payload;
      console.log("Nome atributo", payload);
    },
    getValueAttribute(state, payload) {
      state.valueAttribute = payload;
      console.log("valor atributo", payload);
    },
    getIndexSelected(state, payload) {
      state.indexSelected = payload;
      console.log("index selecionado", payload);
    },
  },
  actions: {},
  modules: {},
});
