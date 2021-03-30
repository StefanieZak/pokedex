import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Allpokemons from "../views/Allpokemons.vue";
import Generations from "../views/Generations.vue";
import EachGeneration from "../views/EachGeneration.vue";
import Types from "../views/Types.vue";
import Bug from "../views/types/Bug.vue";
import Dark from "../views/types/Dark.vue";
import Dragon from "../views/types/Dragon.vue";
import Electric from "../views/types/Electric.vue";
import Fairy from "../views/types/Fairy.vue";
import Fighting from "../views/types/Fighting.vue";
import Fire from "../views/types/Fire.vue";
import Flying from "../views/types/Flying.vue";
import Ghost from "../views/types/Ghost.vue";
import Grass from "../views/types/Grass.vue";
import Ground from "../views/types/Ground.vue";
import Ice from "../views/types/Ice.vue";
import Normal from "../views/types/Normal.vue";
import Poison from "../views/types/Poison.vue";
import Psychic from "../views/types/Psychic.vue";
import Rock from "../views/types/Rock.vue";
import Steel from "../views/types/Steel.vue";
import Water from "../views/types/Water.vue";
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
    path: "/bug",
    name: "bug",
    component: Bug,
  },
  {
    path: "/dark",
    name: "dark",
    component: Dark,
  },
  {
    path: "/dragon",
    name: "dragon",
    component: Dragon,
  },
  {
    path: "/electric",
    name: "electric",
    component: Electric,
  },
  {
    path: "/fairy",
    name: "fairy",
    component: Fairy,
  },
  {
    path: "/fighting",
    name: "fighting",
    component: Fighting,
  },
  {
    path: "/fire",
    name: "fire",
    component: Fire,
  },
  {
    path: "/flying",
    name: "flying",
    component: Flying,
  },
  {
    path: "/ghost",
    name: "ghost",
    component: Ghost,
  },
  {
    path: "/grass",
    name: "grass",
    component: Grass,
  },
  {
    path: "/ground",
    name: "ground",
    component: Ground,
  },
  {
    path: "/ice",
    name: "ice",
    component: Ice,
  },
  {
    path: "/normal",
    name: "normal",
    component: Normal,
  },
  {
    path: "/poison",
    name: "poison",
    component: Poison,
  },
  {
    path: "/psychic",
    name: "psychic",
    component: Psychic,
  },
  {
    path: "/rock",
    name: "rock",
    component: Rock,
  },
  {
    path: "/steel",
    name: "steel",
    component: Steel,
  },
  {
    path: "/water",
    name: "water",
    component: Water,
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
