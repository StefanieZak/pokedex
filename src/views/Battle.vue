<template>
  <section class="container">
    <h2>Battle</h2>
      <div class="form-select">
        <form class="search-pokemon" @submit.prevent="searchBattle">
          <input type="text" id="search-battle" name="search-battle" placeholder="Choose your pokemon" v-model="search">
          <button type="submit"><img src="@/assets/lupa.svg" alt="search button"></button>
        </form>

        <select name="select" v-model="selected" @change="getAttribute" :disabled="!this.infoPokemon ? true : false">
          <option value="attribute" selected disabled>Choose your attribute</option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special-Attack</option>
          <option value="special-defense">Special-Defense</option>
          <option value="speed">Speed</option>
        </select>
      </div>

      <div class="card" :class="bgType" v-if="infoPokemon">
        <img v-if="infoPokemon.sprites.front_default" :src="infoPokemon.sprites.front_default" :alt="infoPokemon.name">

         <div class="stats-wrapper">
          <div v-for="(value, index) in stats" :key="index">
              <div class="flex">
              <p v-if="stats">{{value.stat.name}}</p>
              <p>{{value.base_stat}}</p>
              <div class="progress">
              <p class="progress-done" v-if="stats" :style="{width: value.base_stat/2 + '%', opacity: '1', background: value.base_stat >= 80 ? '#0FD537' : 'red' }">{{value.base_stat}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="not-found" v-if="notFound">
        <img src="@/assets/pokebola.png">
        <p>Sorry! Pokemon not found!<br>Try another name.</p>
      </div>

      <button class="btn-battle disabled">Battle</button>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Battle",
  data() {
    return {
      search: "",
      processedSearch: "",
      pokemon: "",
      pokemonNameList: [],
      infoPokemon: "",
      stats: "",
      bgType: "",
      notFound: false,
      disabled: true,
      selected: "",
    }
  },
  methods: {
    getPokemonByName() {
      api.get(`pokemon?limit=890&offset=0`)
      .then(response => {
        this.pokemon = response.data.results;
        this.pokemonNameList = this.pokemon.map((item) => {
          return item.name;
        });
      });
    },
    searchBattle() {
      this.processedSearch = this.search.toLowerCase().replace(/[.,;?!@#$%¨&*()0123456789]/g, "").trim();
      this.getCardPokemon();
    },
    getCardPokemon() {
      if (this.pokemonNameList.includes(this.processedSearch)) {
        api.get(`pokemon/${this.processedSearch}`)
        .then(response => {
          this.infoPokemon = response.data;
          this.stats = response.data.stats;
          console.log(this.stats);
          this.bgType = this.infoPokemon.types[0].type.name;
        });
      }
      else {
        this.notFound = true;
      }
    },
    getAttribute() {
      // if(...includes(this.selected)) {
      //   return...
      // }
      console.log(this.selected);
      const btn = document.querySelector('.btn-battle');
      btn.classList.remove('disabled');
    }
  },
  created() {
    this.getPokemonByName();
  }
}
</script>

<style scoped>
.form-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
}

form {
  position: relative;
  margin-right: 30px;
}

.search-pokemon input {
  width: 300px;
  font-size: 1rem;
  padding: 8px 10px;
  background-color: #ffffbb;
  border-radius: 10px;
  color: #222;
}

.search-pokemon input:focus {
  background-color: #ffff75;
}

.search-pokemon input::placeholder {
  font-size: 1rem;
  color: #222;
}

.search-pokemon button {
  position: absolute;
  top: 4px;
  right: 10px;
  background: none;
  cursor: pointer;
}

select {
  width: 280px;
  font-family: var(--font-secondary);
  font-size: 1rem;
  padding: 0 10px;
  background-color: #ffffbb;
  border-radius: 10px;
  border: 0;
  border-bottom: 2px solid transparent; 
  color: #222;
  outline: none;
  cursor: pointer;
}

select:focus {
  outline: 0;
  border-bottom-color: #444;
  background-color: #ffff75;
}

.card {
  width: 350px;
  margin: 0 auto 50px;
  background: #71a398;
  border: 4px solid #222;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
}

/* background border*/
.bug {border: 4px solid var(--bg-bug);}
.dark {border: 4px solid var(--bg-dark);}
.dragon {border: 4px solid var(--bg-dragon);}
.electric {border: 4px solid var(--bg-electric);}
.fairy {border: 4px solid var(--bg-fairy);}
.fighting {border: 4px solid var(--bg-fighting);}
.fire {border: 4px solid var(--bg-fire);}
.flying {border: 4px solid var(--bg-flying);}
.ghost {border: 4px solid var(--bg-ghost);}
.grass {border: 4px solid var(--bg-grass);}
.ground {border: 4px solid var(--bg-ground);}
.ice {border: 4px solid var(--bg-ice);}
.normal {border: 4px solid var(--bg-normal);}
.poison {border: 4px solid var(--bg-poison);}
.psychic {border: 4px solid var(--bg-psychic);}
.rock {border: 4px solid var(--bg-rock);}
.steel {border: 4px solid var(--bg-steel);}
.water {border: 4px solid var(--bg-water);}

/* background card */
.bug {background: #53D26E70;}
.dark {background: #483C5C70;}
.dragon {background: #63CAD970;}
.electric {background: #FFD86F70;}
.fairy {background: #EC267470;}
.fighting {background: #F0623A70;}
.fire {background: #FB926C70;}
.flying {background: #9FB9CB70;}
.ghost {background: #90679170;}
.grass {background: #48D0B070;}
.ground {background: #A9702D70;}
.ice {background: #95D1EB70;}
.normal {background: #EAB4C470;}
.poison {background: #AE88DD70;}
.psychic {background: #FF73BE70;}
.rock {background: #7D7D7D70;}
.steel {background: #4DAD8D70;}
.water {background: #79BFFE70;}

.card img {
  width: 80%;
  margin: 0 auto;
}

.flex {
  display: flex;
  align-items: center;
}

.stats-wrapper p {
  font-family: "Free Pixel";
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-right: 15px;
}

.stats-wrapper p:first-child {
  width: 200px;
}

.progress {
	background-color: #222;
	border-radius: 20px;
	margin: 15px 0;
	height: 10px;
	width: 200px;
}

.progress-done {
	border-radius: 20px;
  color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.not-found img {
  margin: 0 auto;
  max-width: 5rem;
}

.not-found p {
  margin: 20px 0 30px;
  line-height: 1.5rem;
  font-weight: bold;
  color: rgb(207, 0, 0);
  text-align: center;
}

.btn-battle {
  width: 130px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #B39B00;
  background: #FEFE81;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto 50px;
  cursor: pointer;
}

.btn-battle:hover {
  color: #FEFE81;
  background: #B39B00;
}

.disabled {
  display: none;
}

</style>