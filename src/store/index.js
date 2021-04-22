import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonSelected: "",
    imgPokemonSelected: "",
    nameAttribute: [],
    valueAttribute: [],
    indexSelected: "",
  },
  mutations: {
    getpokemonSelected(state, payload) {
      state.pokemonSelected = payload;
    },
    getImgPokemonSelected(state, payload) {
      state.imgPokemonSelected = payload;
    },
    getNameAttribute(state, payload) {
      state.nameAttribute = payload;
    },
    getValueAttribute(state, payload) {
      state.valueAttribute = payload;
    },
    getIndexSelected(state, payload) {
      state.indexSelected = payload;
    },
  },
  actions: {},
  modules: {},
});
