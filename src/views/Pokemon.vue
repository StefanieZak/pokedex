<template>
  <section class="container">
    <h3>{{dadosPokemon.name}}</h3>
    <p>{{dadosPokemon.id | pokemonNumber}}</p>
    <p>{{dadosPokemon.types[0].type.name}}</p>
    <p>{{dadosPokemon.types[1].type.name}}</p>
    <img :src="dadosPokemon.sprites.other['official-artwork'].front_default">
  </section>
</template>

<script>
import { api } from "@/services.js";
 
export default {
  name: "Pokemon",
  data() {
    return {
      dadosPokemon: "",
    }
  },
  methods: {
    getPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.dadosPokemon = response.data;
      });
    }
  },
  created() {
    this.getPokemon(this.$route.params.id); 
  }
}
</script>

<style scoped>

</style>