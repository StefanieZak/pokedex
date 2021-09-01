<template>
  <div class="which-pokemon_container">
    <div class="which-pokemon_bg">
      <div class="close" @click.prevent="$emit('closeModal')">x</div>
      <div class="which-pokemon">
        <img :src="imgPokemon" :alt="rightPokemon" id="imgPokemon" />
        <h2>Who's that pokémon?</h2>
        <div class="notranslate">
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
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "WhichPokemon",
  data() {
    return {
      namesPokemon: [],
      rightPokemon: "",
      newPokemon: "",
      imgPokemon: "",
      canSelect: true,
    };
  },
  methods: {
    randomNumber() {
      const totalPokemons = 149;
      return Math.floor(Math.random() * totalPokemons) + 1;
    },
    getPokemon() {
      const promise1 = api.get(`pokemon/${this.randomNumber()}`);
      const promise2 = api.get(`pokemon/${this.randomNumber()}`);
      const promise3 = api.get(`pokemon/${this.randomNumber()}`);

      Promise.all([promise1, promise2, promise3]).then((response) => {
        this.pokemon = response.map((item) => item.data.name);
        this.namesPokemon = [...new Set(this.pokemon)].sort();
        console.log(this.namesPokemon);
        if (this.namesPokemon.length < 3) {
          api.get(`pokemon/${this.randomNumber()}`).then((response) => {
            this.newPokemon = [response.data.name];
            this.namesPokemon = this.namesPokemon
              .concat(this.newPokemon)
              .sort();
          });
        }
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
        const img = document.querySelector("#imgPokemon");
        img.style.filter = "brightness(100%)";
      } else {
        event.target.style.background = "#fec5c5";
        event.target.style.border = "3px solid #a01313";
        event.target.style.color = "#222";
      }
    },
  },
  created() {
    this.getPokemon();
  },
};
</script>

<style scoped>
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
  border-radius: 5px;
}

.which-pokemon {
  position: absolute;
  bottom: 50px;
  left: 0;
}

.which-pokemon img {
  width: 50%;
  margin: 0 auto;
  filter: brightness(0%);
  transition: 1s;
}

.which-pokemon h2 {
  font-family: var(--font-default);
  font-size: 1.125rem;
  font-weight: bold;
  margin: 20px 0 20px 125px;
}

.which-pokemon p {
  width: 300px;
  font-family: var(--font-default);
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  border: 3px solid #3564ae;
  border-radius: 10px;
  background: #fff;
  line-height: 1.6875rem;
  margin-left: 85px;
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

@media screen and (max-width: 940px) {
  .which-pokemon_bg {
    background-image: url("../assets/which-pokemon-mobile.png");
    width: 300px;
  }

  .which-pokemon {
    bottom: 30px;
  }

  .which-pokemon img {
    width: 60%;
  }

  .which-pokemon h2 {
    font-size: 1rem;
    margin: 20px 0 20px 55px;
  }

  .which-pokemon p {
    width: 220px;
    font-size: 0.875rem;
    padding: 5px 0;
    margin-left: 40px;
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
</style>
