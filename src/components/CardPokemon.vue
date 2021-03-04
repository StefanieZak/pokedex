<template>
  <section class="card-wrapper">
    <div class="card">
      <h3>{{pokemon.name}}</h3>
      <p>{{itemPokemon.id}}</p>
      <p>{{itemPokemon.types[0].type.name}}</p>
      <img :src="itemPokemon.sprites.other['official-artwork'].front_default">
    </div>
  </section>
</template>

<script>
import { getPokemon } from "@/services.js";

export default {
  name: 'CardPokemon',
  props: ["pokemon"],
  data() {
    return {
      itemPokemon: "",
    }
  },
  methods: {
    async loadPokemon() {
      this.itemPokemon = await getPokemon(this.pokemon.name);
    },
  },
  created() {
    this.loadPokemon();
  }
}
</script>

<style scoped>
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  background: rgb(223, 179, 179);
}

.card {
  width: 220px;
  height: 180px;
  margin-bottom: 25px;
  border-radius: 15px;
  background: rgb(99, 187, 146);
}

.card img {
  width: 30%;
}
</style>