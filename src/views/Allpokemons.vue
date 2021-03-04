<template>
  <section class="container">
    <h2>All Pokemons</h2>
    <div v-if="pokemons">
      <div class="card" v-for="(pokemon, index) in pokemons" :key="index">
        <h3>{{pokemon.name}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { getPokemons } from "@/services.js";

export default {
  name: 'Allpokemons',
  data() {
    return {
      pokemons: null,
    }
  },
  methods: {
    async loadPokemons() {
      this.pokemons = await getPokemons();
    }
  },
  created() {
    this.loadPokemons();
  }
}
</script>

<style scoped>

</style>