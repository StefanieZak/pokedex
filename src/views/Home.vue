<template>
  <section>
    <transition>
      <section class="home-wrapper">
        <div class="btn-wrapper">
          <router-link :to="{ name: 'allpokemons' }">
            All Pokemon
            <img class="all-btn" src="@/assets/all-btn.png" />
          </router-link>
        </div>

        <div class="btn-wrapper">
          <router-link :to="{ name: 'generations' }">
            Generations
            <img class="generation-btn" src="@/assets/generation-btn.jpg" />
          </router-link>
        </div>

        <div class="btn-wrapper">
          <router-link :to="{ name: 'types' }">
            Types
            <img class="types-btn" src="@/assets/types-btn.jpg" />
          </router-link>
        </div>

        <div class="btn-wrapper">
          <router-link :to="{ name: 'battle' }">
            Battle
            <img class="battle-btn" src="@/assets/battle.png" />
          </router-link>
        </div>

        <div @click.prevent="openModal">
          <img
            class="question"
            src="@/assets/question-mark.png"
            alt="Question"
          />
        </div>
      </section>
    </transition>

    <div v-if="showModal">
      <WhichPokemon @closeModal="showModal = false" />
    </div>
  </section>
</template>

<script>
import WhichPokemon from "../components/WhichPokemon.vue";

export default {
  name: "Home",
  components: {
    WhichPokemon,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
}

.btn-wrapper a {
  display: flex;
  align-items: center;
  width: 50vw;
  height: 90px;
  font-family: var(--font-default);
  font-size: 1.5rem;
  color: #222222;
  background: #fff;
  box-shadow: 3px 3px 5px rgba(114, 6, 6, 0.589);
  border-radius: 10px;
  padding-left: 30px;
  margin-bottom: 30px;
  transition: 0.4s;
  cursor: pointer;
  overflow: hidden;
}

.btn-wrapper a:hover {
  transform: scale(1.05);
}

.all-btn {
  height: 240%;
  margin-left: 55%;
  margin-bottom: 70px;
}

.generation-btn {
  height: 100%;
  margin-left: 56%;
}

.types-btn {
  height: 220%;
  margin-left: 68%;
  margin-bottom: 50px;
}

.battle-btn {
  height: 110%;
  margin-left: 66%;
  margin-bottom: 10px;
}

.question {
  width: 30%;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.question:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 1400px) {
  .all-btn {
    margin-left: 40%;
  }
  .generation-btn {
    margin-left: 42%;
  }
  .types-btn {
    margin-left: 54%;
  }
  .battle-btn {
    margin-left: 52%;
  }
}

@media screen and (max-width: 1024px) {
  .all-btn {
    margin-left: 20%;
  }
  .generation-btn {
    margin-left: 22%;
  }
  .types-btn {
    margin-left: 38%;
  }
  .battle-btn {
    margin-left: 36%;
  }
}

@media screen and (max-width: 768px) {
  .all-btn {
    margin-left: 5%;
  }
  .generation-btn {
    height: 75%;
    margin-left: 8%;
  }
  .types-btn {
    margin-left: 30%;
  }
  .battle-btn {
    margin-left: 28%;
  }
}

@media screen and (max-width: 500px) {
  .btn-wrapper a {
    min-width: 280px;
    padding-left: 15px;
  }
  .generation-btn {
    margin-left: 2%;
  }
}
</style>
