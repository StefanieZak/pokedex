<template>
  <section class="container">
    <div class="bg-pokemon" :class="bg"></div>
    <div class="bg-white"></div>
    <div class="wrapper" v-if="dadosPokemon">
    <div class="first-column">
     <nav class="nav-pokemon">
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link :to="{name: 'basestats'}">Base Stats</router-link>
      <router-link :to="{name: 'evolution'}">Evolution</router-link>
     </nav>
     <router-view></router-view>
    </div>
      <div class="second-column">
        <div class="number-wrapper">
        <h3>{{dadosPokemon.name}}</h3>
        <p>{{dadosPokemon.id | pokemonNumber}}</p>
        </div>
        <div class="type-wrapper">
        <p :class="bgType">{{dadosPokemon.types[0].type.name}}</p>
        <p :class="bgType" v-if="dadosPokemon.types[1]">{{dadosPokemon.types[1].type.name}}</p>
        </div>
        <img :src="dadosPokemon.sprites.other['official-artwork'].front_default">
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Pokemon",
  data() {
    return {
      dadosPokemon: "",
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
      });
    },
  },
  created() {
    this.getPokemon(this.$route.params.id);
  },
}
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

.wrapper {
  display: flex;
}

.bg-pokemon {
  position: absolute;
  top: 0;
  right: 0;
  border-style: solid;
  border-width: 0 700px 600px 0;
}

.bug {border-color: transparent var(--bg-bug) transparent transparent;}
.dark {border-color: transparent var(--bg-dark) transparent transparent;}
.dragon {border-color: transparent var(--bg-dragon) transparent transparent;}
.electric {border-color: transparent var(--bg-electric) transparent transparent;}
.fairy {border-color: transparent var(--bg-fairy) transparent transparent;}
.fighting {border-color: transparent var(--bg-fighting) transparent transparent;}
.fire {border-color: transparent var(--bg-fire) transparent transparent;}
.flying {border-color: transparent var(--bg-flying) transparent transparent;}
.ghost {border-color: transparent var(--bg-ghost) transparent transparent;}
.grass {border-color: transparent var(--bg-grass) transparent transparent;}
.ground {border-color: transparent var(--bg-ground) transparent transparent;}
.ice {border-color: transparent var(--bg-ice) transparent transparent;}
.normal {border-color: transparent var(--bg-normal) transparent transparent;}
.poison {border-color: transparent var(--bg-poison) transparent transparent;}
.psychic {border-color: transparent var(--bg-psychic) transparent transparent;}
.rock {border-color: transparent var(--bg-rock) transparent transparent;}
.steel {border-color: transparent var(--bg-steel) transparent transparent;}
.water {border-color: transparent var(--bg-water) transparent transparent;}

.first-column {
  width: 60%;
}

.nav-pokemon {
  display: flex;
  width: 80%;
  border-bottom: 3px solid #EBEBEB;
}

.nav-pokemon a {
  margin: 60px 74px 10px 0;
  color: #BFBFC0;
  font-family: var(--font-secondary);
  font-size: 1.125rem;
  font-weight: bold;
  z-index: 1;
}

.nav-pokemon a:hover {
  color: #222;
}

.router-link-exact-active {
  color: #222;
}

.second-column {
  z-index: 2;
}

.second-column img {
  margin-top: 10px;
}

.number-wrapper {
  display: flex;
  justify-content: space-between;
}

.number-wrapper h3 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  margin: 20px 0 20px 0;
}

.number-wrapper p {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--number-pokemon);
  margin-top: 20px;
}

.type-wrapper {
  display: flex;
}

.type-wrapper p {
  font-family: var(--font-secondary);
  font-size: 1.125rem;
  text-transform: capitalize;
  color: #fff;
  margin-right: 15px;
  padding: 10px 15px;
  border-radius: 10px;
}

@media screen and (max-width: 1410px) {
  .nav-pokemon {
    width: 70%;
  }

  .nav-pokemon a {
    margin: 60px 40px 10px 0;
  }

  table {
    width: 70%;
  }

  .progress {
    height: 15px;
  }
}

@media screen and (max-width: 1250px) {
  .bg-pokemon {
    border-width: 0 500px 500px 0;
  }

  .nav-pokemon {
    width: 70%;
  }

  .nav-pokemon a {
    font-size: 1rem;
    margin: 60px 20px 10px 0;
  }

  table {
    width: 90%;
  }
}

@media screen and (max-width: 1100px) {
  .nav-pokemon {
    width: 80%;
  }

  table {
    width: 100%;
  }
}

/* Mobile */
@media screen and (max-width: 780px) {
  .container { 
    padding-left: 20px;
    padding-right: 20px;
  }

  .bg-pokemon {
    border-width: 0 0 0 0;
    height: 50vh;
    width: 100%;
  }

  .bg-white {
    position: absolute;
    top: 40vh;
    right: 0;
    height: 15%;
    width: 100%;
    border-radius: 40px;
    background: #fff;
  }

  .bug {background: var(--bg-bug);}
  .dark {background: var(--bg-dark);}
  .dragon {background: var(--bg-dragon);}
  .electric {background: var(--bg-electric);}
  .fairy {background: var(--bg-fairy);}
  .fighting {background: var(--bg-fighting);}
  .fire {background: var(--bg-fire);}
  .flying {background: var(--bg-flying);}
  .ghost {background: var(--bg-ghost);}
  .grass {background: var(--bg-grass);}
  .ground {background: var(--bg-ground);}
  .ice {background: var(--bg-ice);}
  .normal {background: var(--bg-normal);}
  .poison {background: var(--bg-poison);}
  .psychic {background: var(--bg-psychic);}
  .rock {background: var(--bg-rock);}
  .steel {background: var(--bg-steel);}
  .water {background: var(--bg-water);}

  .wrapper {
    flex-flow: column;
  }
  .first-column { order: 2;}
  .second-column { order: 1;}

  .second-column img {
    margin: 10px auto;
    width: 70%;
  }

  .first-column {
    width: 100%;
  }

  .nav-pokemon {
    width: 100%;
  }

  .nav-pokemon a {
    margin: 20px 10% 10px 20px;
  }

  table {
    width: 100%;
    margin-top: 20px;
  }

  .capture {
    display: flex;
  }

  .progress {
    height: 15px;
    width: 300px;
    margin: 2px 0 0 25px;
  }
}

@media screen and (max-width: 500px) {
  .container {
    width: 90%;
  }

  .bg-pokemon {
    height: 35vh;
  }

  .bg-white {
    top: 30vh;
    height: 10%;
    border-radius: 40px;
  }

   .number-wrapper h3 {
    font-size: 1.125rem;
    margin: 20px 0 20px 0;
  }

  .number-wrapper p {
    font-size: 1.125rem;
    margin-top: 20px;
  }

  .type-wrapper p {
    font-size: 1rem;
    padding: 5px 10px;
  }

  .nav-pokemon a {
    font-size: 0.875rem;
    margin: 20px 10% 10px 0;
  }

  table {
    font-size: 0.75rem;
    width: 100%;
    margin-top: 10px;
  }

  .first-column p {
    font-size: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .capture {
    display: flex;
  }

  .progress {
    font-size: 0.75rem;
    height: 10px;
    width: 180px;
    margin: 2px 0 0 8%;
  }

  @media screen and (max-width: 360px) {
  .nav-pokemon a {
    font-size: 0.75rem;
  }
  }
}

</style>