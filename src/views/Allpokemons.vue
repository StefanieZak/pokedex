<template>
  <section class="container">
    <h2>All Pokemons</h2>
    <div class="card-wrapper" v-if="pokemons">
      <div v-for="(pokemonContents, index) in pokemons" :key="index">
          <CardPokemon :pokemonContents="pokemonContents"/>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </section>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import { api } from "@/services.js";
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Allpokemons',
  components: {
    CardPokemon,
    InfiniteLoading,
  },
  data() {
    return {
      pokemons: [],
      limit: 36,
      offset: 36,
    }
  },
  methods: {
    getPokemons() {
      api.get(`pokemon?limit=36&offset=0`)
      .then(response => {
        this.pokemons = response.data.results;
      });
    },
    infiniteHandler($state) {
      api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`)
      .then(({ data }) => {
        if (data.results.length) {
          this.offset += 36;
          this.pokemons.push(...data.results);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
  created() {
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