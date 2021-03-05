<template>
    <div class="card" :class="typeCard" v-if="itemPokemon">
      <div class="number-wrapper">
        <h3>{{pokemon.name}}</h3>
        <p>{{itemPokemon.id | pokemonNumber}}</p>
      </div>
      <div class="img-wrapper">
        <p :class="bgType">{{itemPokemon.types[0].type.name}}</p>
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
      typeCard: "",
      bgType:"",
    }
  },
  methods: {
    async loadPokemon() {
      this.itemPokemon = await getPokemon(this.pokemon.name);
      this.typeCard = this.itemPokemon.types[0].type.name;
      this.bgType = "type-" + this.itemPokemon.types[0].type.name;
    },
  },
  created() {
    this.loadPokemon() 
  }
}
</script>

<style scoped>
.card {
  width: 220px;
  height: 180px;
  margin: 0 15px 25px 15px;
  border-radius: 15px;
  background: #71a398;
  cursor: pointer;
}

/* background card */
.bug {background: var(--bg-bug);}
.dark {background: var(--bg-dark);}
.dragon {background: var(--bg-dragon);}
.eletric {background: var(--bg-eletric);}
.fairy {background: var(--bg-fairy);}
.fighting {background: var(--bg-fighting);}
.fire {background: var(--bg-fire);}
.flying {background: var(--bg-flying);}
.ghost {background: var(--bg-ghost);}
.grass {background: var(--bg-grass);}
.ground {background: var(--bg-ground);}
.ice {background: var(--bg-ice);}
.normal {background: var(--bg-normal);}
.poision {background: var(--bg-poision);}
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

/* background type */
.type-bug {background: var(--type-bug);}
.type-dark {background: var(--type-dark);}
.type-dragon {background: var(--type-dragon);}
.type-eletric {background: var(--type-eletric);}
.type-fairy {background: var(--type-fairy);}
.type-fighting {background: var(--type-fighting);}
.type-fire {background: var(--type-fire);}
.type-flying {background: var(--type-flying);}
.type-ghost {background: var(--type-ghost);}
.type-grass {background: var(--type-grass);}
.type-ground {background: var(--type-ground);}
.type-ice {background: var(--type-ice);}
.type-normal {background: var(--type-normal);}
.type-poision {background: var(--type-poision);}
.type-psychic {background: var(--type-psychic);}
.type-rock {background: var(--type-rock);}
.type-steel {background: var(--type-steel);}
.type-water {background: var(--type-water);}

.img-wrapper img {
  width: 50%;
  margin-right: 10px;
}

@media screen and (max-width: 780px) {
.card {
    width: 160px;
    height: 160px;
     margin: 0 25px 25px 25px;
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

@media screen and (max-width: 500px) {
  .card {
    width: 140px;
    height: 140px;
    margin: 0 10px 25px 10px;
  }

.card h3 {
  font-size: 1rem;
}

.img-wrapper img {
  position: absolute;
  left: 50%;
  width: 65%;
}

.img-wrapper p {
  font-size: 0.875rem;
  width: 80px;
  height: 25px;
  margin-left: 5px;
}
}
</style>