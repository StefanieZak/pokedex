<template>
  <section>
    <table v-if="dadosPokemon">
        <tr v-if="species">
          <td>Habitat</td>
          <td>{{species.habitat.name}}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td class="lower-case">{{dadosPokemon.height | weightHeightPokemon}} m</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td class="lower-case">{{dadosPokemon.weight | weightHeightPokemon}} kg</td>
        </tr>
        <tr>
          <td>Abilities</td>
          <td>{{dadosPokemon.abilities[0].ability.name}}</td>
          <td v-if="dadosPokemon.abilities[1]">{{dadosPokemon.abilities[1].ability.name}}</td>
        </tr>
        <tr v-if="species">
          <td>Egg groups</td>
          <td>{{species.egg_groups[0].name}}</td>
          <td v-if="species.egg_groups[1]">{{species.egg_groups[1].name}}</td>
        </tr>
        <tr v-if="description.descriptions">
          <td>Description</td>
          <td class="first-lether">{{description.descriptions[2].description}}</td>
        </tr>
      </table>
      <div class="capture" v-if="species">
        <p>Capture Rate</p>
        <div class="progress">
          <div class="progress-done">{{species.capture_rate}}</div>
        </div>
      </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "About",
    data() {
    return {
      dadosPokemon: "",
      description: "",
      species: "",
      bg: "",
      bgType: "",
    }
  },
  methods: {
    getPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.dadosPokemon = response.data;
        this.bg = this.dadosPokemon.types[0].type.name;
        this.bgType = "type-" + this.dadosPokemon.types[0].type.name;
        this.getDescription(this.dadosPokemon.id);
        this.getSpecies(this.dadosPokemon.id);
      });
    },
    getDescription(id) {
      api.get(`characteristic/${id}`)
      .then(response => {
        this.description = response.data;
      });
    },
    getSpecies(id) {
      api.get(`pokemon-species/${id}`)
      .then(response => {
        this.species = response.data;
        this.captureRate(this.species.capture_rate);
      });
    },
    captureRate(valor) {
      this.$nextTick(() => {
      const progress = document.querySelector(".progress-done");
      console.log(progress);
      progress.style.width = ( valor / 6) + "%";
      progress.style.opacity = 1;
      });
    }
  },
  created() {
    this.getPokemon(this.$route.params.id);
  },
}
</script>

<style scoped>

</style>