import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import InfiniteLoading from "vue-infinite-loading";

Vue.config.productionTip = false;

Vue.filter("pokemonNumber", (valor) => {
  valor = Number(valor);
  if (valor < 10) {
    return "00" + valor;
  }
  if (valor <= 99) {
    return "0" + valor;
  }
  if (valor > 10000) {
    return valor - 9000;
  } else {
    return valor;
  }
});

Vue.filter("weightHeightPokemon", (valor) => {
  valor = valor / 10;
  return valor;
});

Vue.use(InfiniteLoading, {}),
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
