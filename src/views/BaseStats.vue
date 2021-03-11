<template>
  <section class="stats-wrapper">
    <div v-for="(value, index) in stats" :key="index">
      <h4 v-if="stats">{{value.stat.name}}</h4>
      <div class="progress">
      <p class="progress-done" v-if="stats" :style="{width: value.base_stat/2 + '%', opacity: '1', background: value.base_stat >= 50 ? 'lightgreen' : 'tomato' }">{{value.base_stat}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "BaseStats",
  data() {
    return {
      stats: [],
    }
  },
  methods: {
    getPokemon(name) {
      api.get(`pokemon/${name}`)
      .then(response => {
        this.stats = response.data.stats;
      });
    },
  },
  created() {
    this.getPokemon(this.$route.params.id);
  },
}
</script>

<style scoped>
.stats-wrapper {
  margin-top: 40px;
}

h4 {
  font-family: var(--font-secondary);
  font-size: 1rem;
  text-transform: capitalize;
  margin-right: 15px;
}

.progress {
	background-color: #d8d8d8;
	border-radius: 20px;
	margin: 15px 0;
	height: 15px;
	width: 30vw;
}

.progress-done {
	border-radius: 20px;
  color: #222;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

/* Mobile */
@media screen and (max-width: 780px) {
.stats-wrapper {
  margin-left: 20px;
  margin-bottom: 40px;
}

.progress {
	width: 50vw;
}
}

@media screen and (max-width: 500px) {
  .stats-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0 40px 0;
  }

  h4, p {
    font-size: 0.75rem;
    margin: 0 0 0 0;
  }

  .progress {
	height: 12px;
  }
}
</style>