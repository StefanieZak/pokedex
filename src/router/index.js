import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Allpokemons from "../views/Allpokemons.vue";
import Generations from "../views/Generations.vue";
import EachGeneration from "../views/EachGeneration.vue";
import Types from "../views/Types.vue";
import EachType from "../views/EachType.vue";
import Battle from "../views/Battle.vue";
import Pokemon from "../views/Pokemon.vue";
import About from "../views/About.vue";
import BaseStats from "../views/BaseStats.vue";
import NotFound from "../components/NotFound.vue";

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
    path: "/pokemon/:id",
    name: "pokemon",
    component: Pokemon,
    children: [
      {
        path: "/pokemon/:id/about",
        name: "pokemon",
        component: About,
      },
      {
        path: "/pokemon/:id/basestats",
        name: "basestats",
        component: BaseStats,
      },
    ],
  },
  {
    path: "/generations",
    name: "generations",
    component: Generations,
  },
  {
    path: "/generations/:id",
    name: "generation",
    component: EachGeneration,
  },
  {
    path: "/types",
    name: "types",
    component: Types,
  },
  {
    path: "/types/:id",
    name: "type",
    component: EachType,
  },
  {
    path: "/battle",
    name: "battle",
    component: Battle,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
