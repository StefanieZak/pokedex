<template>
  <section class="container">
    <h2>{{title}}</h2>
    <PageLoading v-if="loading"/>
    <div class="card-wrapper" v-else-if="pokemons">
      <div v-for="(pokemonContents, index) in pokemons" :key="index">
        <CardPokemon :pokemonContents="pokemonContents"/>
      </div>
    </div>
  </section>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import { api } from "@/services.js";

export default {
  name: 'EachGeneration',
  components: {
    CardPokemon,
  },
  data() {
    return {
      loading: true,
      pokemons: [],
      title: "",
      limit: "",
      offset: "",
      generations: {
        generationI: { 
          title: "Generation I",
          limit: 151,
          offset: 0,
        },
        generationII: { 
          title: "Generation II",
          limit: 100,
          offset: 151,
        },
        generationIII: { 
          title: "Generation III",
          limit: 135,
          offset: 251,
        },
        generationIV: { 
          title: "Generation IV",
          limit: 107,
          offset: 386,
        },
        generationV: { 
          title: "Generation V",
          limit: 156,
          offset: 493,
        },
        generationVI: { 
          title: "Generation VI",
          limit: 72,
          offset: 649, 
        },
        generationVII: { 
          title: "Generation VII",
          limit: 88,
          offset: 721,
        },
        generationVIII: { 
          title: "Generation VIII",
          limit: 81,
          offset: 809,
        }
      }
    }
  },
  methods: {
    getInfoGeneration() {
      this.title = this.generations[this.$route.params.id].title;
      this.limit = this.generations[this.$route.params.id].limit;
      this.offset = this.generations[this.$route.params.id].offset;
    },
    getPokemons() {
      this.loading = true;
      api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`)
      .then(response => {
        this.pokemons = response.data.results;
      });
      this.loading = false;
    }
  },
  created() {
    this.getInfoGeneration();
    this.getPokemons();
  },
}
</script>

<style scoped>
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 780px) {
.container {
  padding-left:10px;
  padding-right:10px;
}
}

@media screen and (max-width: 500px) {
  .container {
    width: 90%;
    padding-left:0px;
    padding-right:0px;
  }

  h2 {
    margin: 35px 0 35px 0;
    text-align: center;
  }
}
</style>