import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Allpokemons from "../views/Allpokemons.vue";
import Generations from "../views/Generations.vue";
import Types from "../views/Types.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allpokemons",
    name: "allpokemons",
    component: Allpokemons,
  },  
  {
    path: "/generations",
    name: "generations",
    component: Generations,
  },  
  {
    path: "/types",
    name: "types",
    component: Types,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
