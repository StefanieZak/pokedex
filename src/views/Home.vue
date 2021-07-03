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

    <div class="which-pokemon_container" v-if="showModal">
      <div class="which-pokemon_bg">
        <div class="close" @click.prevent="showModal = false">x</div>
        <div class="which-pokemon">
          <img :src="imgPokemon" />
          <h2>Who's that pokémon?</h2>
          <p
            v-for="(option, index) in namesPokemon"
            :key="index"
            @click="canSelect && check($event)"
          >
            {{ option }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Home",
  data() {
    return {
      showModal: false,
      namesPokemon: [],
      rightPokemon: "",
      imgPokemon: "",
      canSelect: true,
    };
  },
  methods: {
    openModal() {
      this.getPokemon();
      this.showModal = true;
    },
    randomNumber() {
      const totalPokemons = 149;
      return Math.floor(Math.random() * totalPokemons) + 1;
    },
    getPokemon() {
      const promise1 = api.get(`pokemon/${this.randomNumber()}`);
      const promise2 = api.get(`pokemon/${this.randomNumber()}`);
      const promise3 = api.get(`pokemon/${this.randomNumber()}`);

      Promise.all([promise1, promise2, promise3]).then((response) => {
        this.namesPokemon = response.map((item) => item.data.name).sort();
        this.rightPokemon = response[0].data.name;
        this.imgPokemon =
          response[0].data.sprites.other["official-artwork"].front_default;
      });
    },
    check(event) {
      if (
        this.rightPokemon.toLowerCase() === event.target.innerText.toLowerCase()
      ) {
        event.target.style.background = "#c5fed3";
        event.target.style.border = "3px solid #13a01c";
        event.target.style.color = "#222";
        this.canSelect = false;
      } else {
        event.target.style.background = "#fec5c5";
        event.target.style.border = "3px solid #a01313";
        event.target.style.color = "#222";
      }
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

.which-pokemon_container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.which-pokemon_bg {
  background-image: url("../assets/which-pokemon.png");
  background-size: cover;
  width: 900px;
  height: 500px;
  position: relative;
}

.which-pokemon {
  position: absolute;
  bottom: 70px;
  left: 0;
}

.which-pokemon img {
  width: 40%;
  margin: 0 auto;
  filter: brightness(0);
}

.which-pokemon h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
}

.which-pokemon p {
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  border: 3px solid #3564ae;
  border-radius: 10px;
  background: #fff;
  line-height: 1.6875rem;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
}

.which-pokemon p:hover {
  background: #3564ae;
  color: #fff;
}

.which-pokemon p + p {
  margin-top: 10px;
}

.close {
  position: absolute;
  top: -10px;
  right: -10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 10px;
  color: #3b5ba6;
  background: #ffcb05;
  border: 5px solid #3b5ba6;
  border-radius: 100%;
  box-shadow: inset -4px 4px 2px #967802, -4px 4px 2px #26324ebd;
  cursor: pointer;
  transition: 0.3s;
}

.close:hover {
  color: #ffcb05;
  background: #3b5ba6;
  box-shadow: -4px 4px 2px #26324e;
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

@media screen and (max-width: 940px) {
  .which-pokemon_bg {
    background-image: url("../assets/which-pokemon-mobile.png");
    width: 300px;
  }

  .which-pokemon h2 {
    font-size: 1rem;
  }

  .which-pokemon p {
    width: 220px;
    font-size: 0.875rem;
    padding: 5px 0;
  }

  .which-pokemon p + p {
    margin-top: 20px;
  }

  .close {
    background: #fff;
  }

  .close:hover {
    color: #fff;
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
