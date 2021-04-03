<template>
  <div class="card" :class="cardByRoute || typeCard" v-if="itemPokemon">
    <router-link :to="{name: 'pokemon', params: {id: itemPokemon.name}}">
      <div class="number-wrapper">
        <h3>{{itemPokemon.name}}</h3>
        <p>{{itemPokemon.id | pokemonNumber}}</p>
      </div>
      <div class="img-wrapper">
        <div>
        <p :class="labelByRoute || bgType">{{itemPokemon.types[0].type.name}}</p>
        <p :class="labelByRoute || bgType" v-if="itemPokemon.types[1]">{{itemPokemon.types[1].type.name}}</p>
        </div>
        <img  v-if="itemPokemon.sprites.other['official-artwork'].front_default" :src="itemPokemon.sprites.other['official-artwork'].front_default" :alt="itemPokemon.name">
        <img v-else src="../assets/pokebola.png">
      </div>
    </router-link>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: 'CardPokemon',
  props: ["pokemonContents"],
  data() {
    return {
      itemPokemon: "",
      typeCard: "",
      bgType:"",
      cardByRoute: "",
      labelByRoute: "",
    }
  },
  methods: {
    getPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.itemPokemon = response.data;
        this.typeCard = this.itemPokemon.types[0].type.name;
        this.bgType = "type-" + this.itemPokemon.types[0].type.name;
      });
    },
    getTypeByRoute() {
      if (this.$route.name === "type") {
        this.cardByRoute = this.$route.params.id;
        this.labelByRoute = "type-" + this.$route.params.id;
      }
    }
  },
  created() {
    this.getPokemon(this.pokemonContents.name); 
    this.getTypeByRoute();
  }
}
</script>

<style scoped>
.card {
  width: 220px;
  height: 200px;
  margin: 0 15px 25px 15px;
  border-radius: 15px;
  background: #71a398;
  cursor: pointer;
  transition: all .3s;
}

.card:hover {
  transform: scale(1.1);
}

/* background card */
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
  color: var(--number-pokemon);
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
  width: 88px;
  height: 30px;
  border-radius: 10px;
  margin-left: 10px;
}

.img-wrapper p:first-child {
  margin-bottom: 10px;
}

.img-wrapper img {
  width: 50%;
  margin-right: 10px;
}

@media screen and (max-width: 790px) {
.card {
    width: 160px;
    height: 160px;
    margin: 0 20px 25px 20px;
  }

.card h3 {
  font-size: 1.2rem;
}

.number-wrapper p {
  font-size: 0.875rem;
}

.img-wrapper {
  position: relative;
}

.img-wrapper img {
  position: absolute;
  left: 60%;
  width: 70%;
}

.img-wrapper p {
  font-size: 1rem;
  width: 88px;
  height: 30px;
  margin-left: 10px;
}
}

@media screen and (max-width: 570px) {
  .card {
    width: 140px;
    height: 140px;
    margin: 0 10px 25px 10px;
  }

.card h3 {
  font-size: 0.875rem;
  padding: 15px 5px 15px 10px;
}

.number-wrapper p {
  font-size: 0.75rem;
  padding-right: 10px;
}

.img-wrapper img {
  position: absolute;
  left: 50%;
  width: 65%;
}

.img-wrapper p {
  font-size: 0.75rem;
  width: 80px;
  height: 25px;
  margin-left: 5px;
}
}
</style>