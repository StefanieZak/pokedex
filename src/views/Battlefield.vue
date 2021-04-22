<template>
  <section class="container">
    <h2>Battle</h2>
    <div>
      <img src="@/assets/scenery.svg" alt="scenery">

      <div class="computer-pokemon">
        <h3>{{computerPokemon.namePokemon}}</h3>
        <p>{{nameAttribute}}</p>
        <p>{{computerPokemon.valueAttribute}}</p>
        <div></div>
        <img :src="computerPokemon.imgPokemon" :alt="computerPokemon.namePokemon">
      </div>

      <div class="player-pokemon">
        <h3>{{pokemonSelected}}</h3>
        <p>{{nameAttribute}}</p>
        <p>{{valueAttribute}}</p>
        <div></div>
        <img :src="imgPokemonSelected" :alt="pokemonSelected">
      </div>

      <div class="winner">
        <p></p>
      </div>

      <router-link class="btn-try-again" to="/battle">Try Again!</router-link>

    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Battlefield",
  data() {
    return {
      dadosPokemon: "",
      attributes: [],
      playerPokemon: {
        nameAttribute: "",
        valueAttribute: ""
      },
      computerPokemon: {
        namePokemon: "",
        imgPokemon: "",
        valueAttribute: ""
      }
    }
  },
  computed: {
    pokemonSelected() {
      return this.$store.state.pokemonSelected;
    },
    imgPokemonSelected() {
      return this.$store.state.imgPokemonSelected;
    },
    nameAttributeArray() {
      return this.$store.state.nameAttribute;
    },
    valueAttributeArray() {
      return this.$store.state.valueAttribute;
    },
    indexSelected() {
      return this.$store.state.indexSelected;
    }
  },
  methods: {
    getPlayerPokemon() {
      this.nameAttribute = this.nameAttributeArray[this.indexSelected];
      this.valueAttribute = this.valueAttributeArray[this.indexSelected];
    },
    getComputerPokemon() {
      const numberPokemon = Math.floor(Math.random() * 889) + 1;
      api.get(`pokemon/${numberPokemon}`)
      .then( response => {
        this.dadosPokemon = response.data;
        this.computerPokemon.namePokemon = this.dadosPokemon.name;
        this.computerPokemon.imgPokemon = this.dadosPokemon.sprites.front_default;
        this.stats = response.data.stats;
        this.attributes = this.stats.map((item) => {
            return item.base_stat;
        });
        this.computerPokemon.valueAttribute = this.attributes[this.indexSelected];
      }) 
    }
  },
  created() {
    this.getPlayerPokemon();
    this.getComputerPokemon();
  }
}
</script>

<style scoped>

</style>