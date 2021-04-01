<template>
  <section class="box">
    <PageLoading v-if="loading"/>
    <div v-else-if="dadosPokemon">
        <div class="info-wrapper" v-if="species">
          <p>Habitat</p>
          <p>{{species.habitat.name}}</p>
        </div>
        <div class="info-wrapper">
          <p>Height</p>
          <p class="lower-case">{{dadosPokemon.height | weightHeightPokemon}} m</p>
        </div>
        <div class="info-wrapper">
          <p>Weight</p>
          <p class="lower-case">{{dadosPokemon.weight | weightHeightPokemon}} kg</p>
        </div>
        <div class="info-wrapper">
          <p>Abilities</p>
          <p>{{dadosPokemon.abilities[0].ability.name}}</p>
          <p v-if="dadosPokemon.abilities[1]">{{dadosPokemon.abilities[1].ability.name}}</p>
        </div>
        <div class="info-wrapper" v-if="species">
          <p>Egg groups</p>
          <p>{{species.egg_groups[0].name}}</p>
          <p v-if="species.egg_groups[1]">{{species.egg_groups[1].name}}</p>
        </div>
        <div class="info-wrapper" v-if="description.descriptions">
          <p>Description</p>
          <p class="first-lether">{{description.descriptions[2].description}}</p>
        </div>
      </div>
      <div class="capture" v-if="species">
        <div class="rate">
        <p>Capture Rate</p>
        <p>{{species.capture_rate}}</p>
        </div>
        <div class="progress">
          <div class="progress-done"></div>
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
      loading: true,
      dadosPokemon: "",
      description: "",
      species: "",
      bg: "",
      bgType: "",
    }
  },
  methods: {
    getPokemon(name) {
      this.loading = true;
      api.get(`pokemon/${name}`)
      .then(response => {
        this.dadosPokemon = response.data;
        this.bg = this.dadosPokemon.types[0].type.name;
        this.bgType = "type-" + this.dadosPokemon.types[0].type.name;
        this.getDescription(this.dadosPokemon.id);
        this.getSpecies(this.dadosPokemon.id);
      });
      this.loading = false;
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
.box {
  margin-top: 30px;
}

.first-column {
  z-index: 2;
}

.info-wrapper {
  display: flex;
  border-bottom: 2px solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  width: 80%;
}

.info-wrapper p:nth-child(2),
.info-wrapper p:nth-child(3) {
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: normal;
  text-transform: capitalize;
  color: #222;
  margin-bottom: 1rem;
  margin-left: 40px;
}

.info-wrapper p:first-child {
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #9e9e9e;
  margin-bottom: 1rem;
}

.lower-case {
  text-transform: lowercase;
}

.rate {
  display: flex;
}

.rate p {
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: bold;
  color: #9e9e9e;
}

.rate p:nth-child(even) {
  margin-left: 20px;
  font-weight: normal;
  color:#222;
}

.progress {
	background-color: #d8d8d8;
	border-radius: 20px;
	margin: 15px 0;
	height: 20px;
	width: 300px;
}

.progress-done {
	background: linear-gradient(to left, #70f27b, #f34a4a);
	border-radius: 20px;
  color: #222;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
  padding-left: 5px;
}

/* Mobile */
@media screen and (max-width: 780px) {
  .box {
    margin-left: 20px;
  }
  
  .capture {
    margin-bottom: 40px;
  }

  .progress {
    height: 15px;
    width: 300px;
    margin-top: 15px;
  }
}

@media screen and (max-width: 500px) {
  .box {
    margin-left: 0px;
    margin-top: 20px;
  }

  .info-wrapper p:nth-child(2),
  .info-wrapper p:nth-child(3) {
    font-size: 0.75rem;
    margin-left: 20px;
  }

  .info-wrapper p:first-child {
    font-size: 0.75rem;
  }

  .rate p {
    font-size: 0.75rem;
  }

  .rate p:nth-child(even) {
    margin-left: 20px;
    color:#222;
  }

  .progress {
    font-size: 0.75rem;
    height: 12px;
    width: 180px;
  }
}
</style>