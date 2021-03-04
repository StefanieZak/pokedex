<template>
    <div class="card" v-if="itemPokemon">
      <div class="number-wrapper">
        <h3>{{pokemon.name}}</h3>
        <p>{{itemPokemon.id}}</p>
      </div>
      <div class="img-wrapper">
        <p>{{itemPokemon.types[0].type.name}}</p>
        <img :src="itemPokemon.sprites.other['official-artwork'].front_default">
      </div>
    </div>
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
.card {
  width: 220px;
  height: 180px;
  margin: 0 15px 25px 15px;
  border-radius: 15px;
  background: #48D0B0;
  cursor: pointer;
}

.card h3 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  padding: 15px 10px;
}

.number-wrapper {
  display: flex;
  justify-content: space-between;
}

.number-wrapper p {
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: bold;
  padding-top: 15px;
  padding-right: 20px;
}

.img-wrapper {
  display: flex;
  justify-content: space-between;
}

.img-wrapper p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-secondary);
  font-size: 1.125rem;
  text-transform: capitalize;
  color: #fff;
  background: #60DFC8;
  width: 88px;
  height: 30px;
  border-radius: 10px;
  margin-left: 10px;
}

.img-wrapper img {
  width: 50%;
  margin-right: 10px;
}
</style>