<template>
  <section class="container">
    <h2>Battle</h2>
    <div>
      <div class="scenery">
        <!-- <img src="@/assets/scenery.svg" alt="scenery"> -->

        <div class="img-computer-pokemon">
          <img
            :src="computerPokemon.imgPokemon"
            :alt="computerPokemon.namePokemon"
          />
        </div>
        <div class="base-computer-pokemon"></div>
        <div class="img-player-pokemon">
          <img :src="imgPokemonSelected" :alt="pokemonSelected" />
        </div>
        <div class="base-player-pokemon"></div>
        <div class="winner">
          <p>{{ winner }}</p>
        </div>

        <div class="computer-pokemon">
          <div class="info-computer-pokemon">
            <h3>{{ computerPokemon.namePokemon }}</h3>
            <div class="attributes">
              <p>{{ nameAttribute }}</p>
              <p>{{ computerPokemon.valueAttribute }}</p>
              <div class="progress">
                <div
                  class="progress-done"
                  :style="{
                    width: computerPokemon.valueAttribute / 2 + '%',
                    opacity: '1',
                    background:
                      computerPokemon.valueAttribute >= 100 ? '#0FD537' : 'red',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="player-pokemon">
          <div class="info-player-pokemon">
            <h3>{{ pokemonSelected }}</h3>
            <div class="attributes">
              <p>{{ nameAttribute }}</p>
              <p>{{ valueAttribute }}</p>
              <div class="progress">
                <div
                  class="progress-done"
                  :style="{
                    width: computerPokemon.valueAttribute / 2 + '%',
                    opacity: '1',
                    background:
                      computerPokemon.valueAttribute >= 100 ? '#0FD537' : 'red',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link class="btn-try-again" to="/battle">Try Again!</router-link>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Battlefield",
  data() {
    return {
      dadosPokemon: "",
      attributes: [],
      winner: "",
      playerPokemon: {
        nameAttribute: "",
        valueAttribute: "",
      },
      computerPokemon: {
        namePokemon: "",
        imgPokemon: "",
        valueAttribute: "",
      },
    };
  },
  computed: {
    pokemonSelected() {
      return this.$store.state.pokemonSelected;
    },
    imgPokemonSelected() {
      return this.$store.state.imgPokemonSelected;
    },
    nameAttributeArray() {
      return this.$store.state.nameAttribute;
    },
    valueAttributeArray() {
      return this.$store.state.valueAttribute;
    },
    indexSelected() {
      return this.$store.state.indexSelected;
    },
  },
  methods: {
    getPlayerPokemon() {
      this.nameAttribute = this.nameAttributeArray[this.indexSelected];
      this.valueAttribute = this.valueAttributeArray[this.indexSelected];
    },
    getComputerPokemon() {
      const numberPokemon = Math.floor(Math.random() * 889) + 1;
      api.get(`pokemon/${numberPokemon}`).then((response) => {
        this.dadosPokemon = response.data;
        this.computerPokemon.namePokemon = this.dadosPokemon.name;
        this.computerPokemon.imgPokemon =
          this.dadosPokemon.sprites.versions["generation-v"]["black-white"]
            .animated.front_default || this.dadosPokemon.sprites.front_default;
        this.stats = response.data.stats;
        this.attributes = this.stats.map((item) => {
          return item.base_stat;
        });
        this.computerPokemon.valueAttribute = this.attributes[
          this.indexSelected
        ];
        this.compareAttribute();
      });
    },
    compareAttribute() {
      if (this.valueAttribute == this.computerPokemon.valueAttribute) {
        this.winner = "draw !!!";
      }
      if (this.valueAttribute > this.computerPokemon.valueAttribute) {
        this.winner = this.pokemonSelected + " wins!!!";
      } else {
        this.winner = this.computerPokemon.namePokemon + " wins!!!";
      }
    },
  },
  created() {
    this.getPlayerPokemon();
    this.getComputerPokemon();
  },
};
</script>

<style scoped>
.scenery {
  width: 55vw;
  height: 430px;
  margin: 0 auto;
  background: #e0e1dc;
  position: relative;
}

.info-computer-pokemon,
.info-player-pokemon {
  width: 280px;
  background: #f4f0d3;
  border: 4px solid #2f302b;
  border-radius: 25px 0 25px 0;
  font-family: "Free pixel";
  text-transform: capitalize;
  font-weight: bold;
}

.info-computer-pokemon {
  box-shadow: 6px 6px 6px;
  position: absolute;
  top: 2%;
  left: 2%;
}

.info-player-pokemon {
  box-shadow: -6px 6px 6px;
  position: absolute;
  bottom: 4%;
  right: 2%;
}

.img-computer-pokemon {
  position: absolute;
  bottom: 25%;
  right: 8%;
  z-index: 1;
}

.img-player-pokemon {
  position: absolute;
  bottom: 0;
  left: 6%;
  z-index: 1;
}

.img-computer-pokemon img,
.img-player-pokemon img {
  width: 250px;
}

.base-computer-pokemon,
.base-player-pokemon {
  display: block;
  width: 420px;
  height: 140px;
  background: #b3ae90;
  border: 9px solid #c8c8b0;
  border-radius: 50%;
}

.base-computer-pokemon {
  position: absolute;
  top: 45%;
  right: 1%;
}

.base-player-pokemon {
  position: absolute;
  bottom: -6%;
  left: 1%;
}

.info-computer-pokemon h3,
.info-player-pokemon h3 {
  font-size: 1.375rem;
  margin: 8px 0 0 15px;
}

.attributes {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
}

.attributes p {
  margin-right: 8px;
}

.progress {
  background-color: #222;
  border-radius: 20px;
  margin: 15px 0;
  height: 8px;
  width: 100px;
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

.winner {
  width: 55vw;
  height: 100px;
  margin: 0 auto;
  background: #9cb9bd;
  border: 9px solid #ff946c;
  position: absolute;
  bottom: -100px;
  left: 0;
}

.winner p {
  font-family: "Free pixel";
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #355f65;
  margin-top: 28px;
}

.btn-try-again {
  display: block;
  width: 130px;
  font-family: "Free pixel";
  font-weight: bold;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1rem;
  color: #b39b00;
  background: #fefe81;
  border-radius: 10px;
  padding: 15px;
  margin: 140px auto 50px;
  cursor: pointer;
}

.btn-try-again:hover {
  color: #fefe81;
  background: #b39b00;
}

@media screen and (max-width: 1300px) {
  .scenery {
    height: 750px;
  }
  .info-player-pokemon {
    bottom: 38%;
  }
  .img-computer-pokemon {
    bottom: 48%;
    right: 10%;
  }
  .img-player-pokemon {
    left: 8%;
  }
  .base-computer-pokemon {
    top: 35%;
  }
}

@media screen and (max-width: 780px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }

  h2 {
    margin: 35px 0 35px 0;
    text-align: center;
  }

  .scenery {
    height: 600px;
  }

  .info-player-pokemon {
    bottom: 38%;
  }

  .img-computer-pokemon {
    bottom: 50%;
    right: 12%;
  }

  .img-player-pokemon {
    bottom: 0%;
    left: 12%;
  }

  .img-computer-pokemon img,
  .img-player-pokemon img {
    width: 180px;
  }

  .base-computer-pokemon,
  .base-player-pokemon {
    width: 280px;
    height: 100px;
  }

  .winner p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 550px) {
  .container {
    width: 90%;
    padding-left: 0px;
    padding-right: 0px;
  }

  .scenery {
    width: 80vw;
    height: 480px;
  }

  .info-computer-pokemon,
  .info-player-pokemon {
    width: 210px;
    font-size: 0.75rem;
    box-shadow: none;
  }

  .info-player-pokemon {
    bottom: 35%;
  }

  .info-computer-pokemon h3,
  .info-player-pokemon h3 {
    font-size: 1rem;
  }

  .progress {
    width: 60px;
  }

  .img-computer-pokemon {
    right: 8%;
  }

  .img-player-pokemon {
    left: 5%;
  }

  .img-computer-pokemon img,
  .img-player-pokemon img {
    width: 140px;
  }

  .base-computer-pokemon,
  .base-player-pokemon {
    width: 200px;
    height: 80px;
  }

  .winner {
    width: 80vw;
  }
}
</style>
