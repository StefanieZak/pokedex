<template>
  <section class="container">
    <h2>Battle</h2>

      <div class="form-select">
        <form class="search-pokemon" @keyup="searchBattle" @submit.prevent="searchBattle" autocomplete="off">
          <input type="text" id="search-battle" name="search-battle" placeholder="Choose your pokemon" v-model="search">
          <button type="submit"><img src="@/assets/pixel-lupa.svg" alt="search button"></button>
          <div id="sugegestion">
          <div class="sugegestion" @click="sugegestionSelected" v-for="(item, index) in sugegestion" :key="index">{{item}}</div>
          </div>
        </form>

        <select name="select" v-model="attributeSelected" @change="getAttributeByIndex" :disabled="!this.infoPokemon ? true : false">
          <option value="" selected disabled>Choose your attribute</option>
          <option v-for="(value, index) in stats" :key="index" :value="value.stat.name">{{value.stat.name}}</option>
        </select>
      </div>

    <PageLoading v-if="loading"/>

      <div class="card" :class="bgType" v-if="infoPokemon">
        <img v-if="infoPokemon.sprites.front_default" :src="infoPokemon.sprites.front_default" :alt="infoPokemon.name">

         <div class="stats-wrapper">
          <div v-for="(value, index) in stats" :key="index">
              <div class="flex">
              <p v-if="stats">{{value.stat.name}}</p>
              <p>{{value.base_stat}}</p>
              <div class="progress">
              <p class="progress-done" v-if="stats" :style="{width: value.base_stat/3 + '%', opacity: '1', background: value.base_stat >= 100 ? '#0FD537' : 'red' }">{{value.base_stat}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="not-found" v-if="notFound">
        <img src="@/assets/pokebola.png">
        <p>Sorry! Pokemon not found!<br>Try another name.</p>
      </div>

        <router-link class="btn-battle disabled" to="/battlefield">Ready</router-link>
        
  </section>
</template>

<script>
import { api } from "@/services.js";
import PageLoading from '../components/PageLoading.vue';

export default {
  name: "Battle",
  components: {
    PageLoading,
  },
  data() {
    return {
      search: "",
      processedSearch: "",
      sugegestion: "",
      pokemon: "",
      pokemonNameList: [],
      infoPokemon: "",
      stats: "",
      bgType: "",
      notFound: false,
      disabled: true,
      attributeSelected: "",
      valueAttribute: [],
      nameAttribute: [],
      indexSelected: "",
      loading: false,
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
      if(!this.search) return;
      this.suggestionStyle = document.querySelector('#sugegestion');
      this.suggestionStyle.classList.remove('disabled');
      this.processedSearch = this.search.toLowerCase().replace(/[.,;?!@#$%¨&*()0123456789]/g, "").trim();
      if( this.search.length > 1) {
        this.sugegestion = this.pokemonNameList.filter((pokemon) => {
          return pokemon.startsWith(this.processedSearch);
        });
      }
      this.getCardPokemon();
    },
    sugegestionSelected(event) {
      this.processedSearch = event.target.textContent;
      this.search = event.target.textContent;
      this.getCardPokemon();
      this.suggestionStyle.classList.add('disabled');
    },
    getCardPokemon() {
      if (this.pokemonNameList.includes(this.processedSearch)) {
        this.loading = true;
        this.notFound = false;
        this.$store.commit("getpokemonSelected", this.processedSearch);
        api.get(`pokemon/${this.processedSearch}`)
        .then(response => {
          this.infoPokemon = response.data;
          this.stats = response.data.stats;
          this.valueAttribute = this.stats.map((item) => {
            return item.base_stat;
        });
          this.nameAttribute = this.stats.map((item) => {
            return item.stat.name;
        });
          this.bgType = this.infoPokemon.types[0].type.name;
          this.$store.commit("getNameAttribute", this.nameAttribute);
          this.$store.commit("getValueAttribute", this.valueAttribute);
          this.$store.commit("getImgPokemonSelected", this.infoPokemon.sprites.back_default);
          this.loading = false;
        });
      }
      else {
        this.notFound = true;
        this.infoPokemon = false;
      }
    },
    getAttributeByIndex() {
      this.indexSelected = this.nameAttribute.indexOf(this.attributeSelected);
      this.$store.commit("getIndexSelected", this.indexSelected);

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
  justify-content: center;
  margin-bottom: 60px;
}

form {
  position: relative;
  margin-right: 30px;
}

.search-pokemon input {
  width: 300px;
  font-family: "Free pixel";
  font-weight: bold;
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
  font-family: "Free pixel";
  font-weight: bold;
  font-size: 1rem;
  color: #222;
}

.search-pokemon button {
  position: absolute;
  top: 6px;
  right: 15px;
  background: none;
  cursor: pointer;
}

.sugegestion {
  width: 300px;
  font-family: "Free pixel";
  font-weight: bold;
  font-size: 1rem;
  padding: 8px 10px;
  background-color: #ffff75;
  color: #222;
  cursor: pointer;
}

form div + div {
  border-top: 1px solid rgb(192, 179, 0);
}

.sugegestion:nth-of-type(1) {
  border-radius: 10px 10px 0 0;
}

.sugegestion:last-child {
  border-radius: 0 0 10px 10px;
}

select {
  width: 280px;
  height: 35px;
  font-family: "Free pixel";
  font-weight: bold;
  font-size: 1rem;
  text-transform: capitalize;
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
  background: url("../assets/scenery.png") no-repeat;
  background-size: cover;
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
  margin-left: -1px;
}

.not-found img {
  margin: 0 auto;
  max-width: 5rem;
}

.not-found p {
  font-family: "Free pixel";
  font-weight: bold;
  line-height: 1.5rem;
  margin: 20px 0 30px;
  color: rgb(207, 0, 0);
  text-align: center;
}

.btn-battle {
  width: 130px;
  font-family: "Free pixel";
  font-weight: bold;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
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

@media screen and (max-width: 920px) {
.container {
  padding-left:10px;
  padding-right:10px;
}

h2 {
  margin: 35px 0 35px 0;
  text-align: center;
}

.form-select {
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

form {
  margin-right: 0px;
  margin-bottom: 15px;
}

.search-pokemon input {
  width: 260px;
}

select {
  width: 210px;
  padding: 5px 10px;
}

.card {
  width: 280px;
  margin: 0 auto 30px;
}

.stats-wrapper p {
  font-size: 12px;
  margin-right: 8px;
}

.progress {
	width: 180px;
}

.btn-battle {
  width: 100px;
  padding: 10px;
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

  .card {
    width: 220px;
  }

  .stats-wrapper p:first-child {
    width: 150px;
  }
}

</style>