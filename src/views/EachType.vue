<template>
  <section class="container">
    <h2>{{title}}</h2>
    <PageLoading v-if="loading"/>
    <div class="card-wrapper" v-else-if="pokemons">
      <div v-for="(pokemonContents, index) in pokemons" :key="index">
        <CardPokemon :pokemonContents="pokemonContents.pokemon"/>
      </div>
    </div>
  </section>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import { api } from "@/services.js";

export default {
  name: 'EachType',
    components: {
    CardPokemon,
  },
  data() {
    return {
      loading: true,
      pokemons: "",
      title: "",
    }
  },
  methods: {
    titleType() {
      this.title = this.$route.params.id;
    },
    getPokemonsByType() {
      this.loading = true;
      api.get(`type/${this.$route.params.id}`)
      .then(response => {
        this.pokemons = response.data.pokemon;
      });
      this.loading = false;
    },
  },
  created() {
    this.titleType();
    this.getPokemonsByType();
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