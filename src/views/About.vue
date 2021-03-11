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
        <div class="rate">
        <p>Capture Rate</p>
        <p c>{{species.capture_rate}}</p>
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
table {
  width: 100%;
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 30px;
  border-collapse: separate; 
  border-spacing: 0 1rem ;
}

table td {
  margin-left: 10px;
}

table td:first-child {
  color: #BFBFC0;
}

.lower-case {
  text-transform: lowercase;
}

.first-lether {
  text-transform: initial;
}

.first-column {
  z-index: 2;
}

.first-column p {
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: bold;
  color: #BFBFC0;
  margin-bottom: 1rem;
}

.rate {
  display: flex;
}

.rate p:nth-child(even) {
  margin-left: 20px;
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
    margin: 15px 0 0 8%;
  }
}

@media screen and (max-width: 500px) {
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
    height: 12px;
    width: 180px;
  }
}
</style>