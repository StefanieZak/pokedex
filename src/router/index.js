import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Allpokemons from "../views/Allpokemons.vue";
import Generations from "../views/Generations.vue";
import GenerationI from "../views/generations/GenerationI.vue";
import GenerationII from "../views/generations/GenerationII.vue";
import GenerationIII from "../views/generations/GenerationIII.vue";
import GenerationIV from "../views/generations/GenerationIV.vue";
import GenerationV from "../views/generations/GenerationV.vue";
import GenerationVI from "../views/generations/GenerationVI.vue";
import GenerationVII from "../views/generations/GenerationVII.vue";
import GenerationVIII from "../views/generations/GenerationVIII.vue";
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
    children: [
      {
        path: "generationI",
        name: "generationI",
        component: GenerationI,
      },
      {
        path: "generationII",
        name: "generationII",
        component: GenerationII,
      },
      {
        path: "generationIII",
        name: "generationIII",
        component: GenerationIII,
      },
      {
        path: "generationIV",
        name: "generationIV",
        component: GenerationIV,
      },
      {
        path: "generationV",
        name: "generationV",
        component: GenerationV,
      },
      {
        path: "generationVI",
        name: "generationVI",
        component: GenerationVI,
      },
      {
        path: "generationVII",
        name: "generationVII",
        component: GenerationVII,
      },
      {
        path: "generationVIII",
        name: "generationVIII",
        component: GenerationVIII,
      },
    ]
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
