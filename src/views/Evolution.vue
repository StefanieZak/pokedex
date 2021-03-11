<template>
  <section>
    <img src="">
    <h4>Nome pokemon</h4>
    <p>Level evolução</p>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Evolution",
    data() {
    return {
      dadosPokemon: {},
      evolutions: {},
    }
  },
  methods: {
    getPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.dadosPokemon = response.data;
        this.getEvolutions(this.dadosPokemon.id);
      });
    },
    getEvolutions(id) {
      api.get(`evolution-chain/${id}`)
      .then(response => {
        this.evolutions = response.data;
      });
    }
  },
  created() {
    this.getPokemon(this.$route.params.id);
  },
}
</script>