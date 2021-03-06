<template>
  <section class="container" v-on:scroll="infinityScroll">
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
      limit: 36,
      offset: 0,
    }
  },
  methods: {
    async loadPokemons() {
      this.pokemons = await getPokemons(this.limit, this.offset);
    },
    async infinityScroll() {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.90) {
        this.pokemons = await getPokemons(this.limit, this.offset)
          this.offset += 36;
        console.log(height,this.limit, this.offset, this.pokemons);
      }
    }
  },
  created() {
    this.loadPokemons();
    window.addEventListener('scroll', this.infinityScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.infinityScroll);
  }
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