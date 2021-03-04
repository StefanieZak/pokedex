<template>
  <section class="container">
    <h2>All Pokemons</h2>
    <div class="card-wrapper" v-if="pokemons">
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <CardPokemon :pokemon="pokemon"/>  
      </div>  
    </div>
  </section>
</template>

<script>
import { getPokemons } from "@/services.js";
import CardPokemon from "@/components/CardPokemon.vue"

export default {
  name: 'Allpokemons',
  components: {
    CardPokemon
  },
  data() {
    return {
      pokemons: "",
    }
  },
  methods: {
    async loadPokemons() {
      this.pokemons = await getPokemons();
    },
  },
  created() {
    this.loadPokemons();
  }
}
</script>

<style scoped>
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>