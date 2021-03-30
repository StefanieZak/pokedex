<template>
  <section class="container">
    <h2>Generations</h2>
      <div class="generations-wrapper">
        <div class="btn-generation" v-for="(generation, index) in generations" :key="index">
          <router-link :to="{name: generation.link}">
            {{generation.title}}
            <img :src="require(`@/assets/${generation.img}`)">
          </router-link>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Generations',
  data() {
    return {
      generations: [
        { 
          link: "generationI",
          title: "Generation I",
          img: "Pokemon-G1.svg"
        },
        { 
          link: "generationII",
          title: "Generation II",
          img: "Pokemon-G2.svg"
        },
        { 
          link: "generationIII",
          title: "Generation III",
          img: "Pokemon-G3.svg"
        },
        { 
          link: "generationIV",
          title: "Generation IV",
          img: "Pokemon-G4.svg"
        },
        { 
          link: "generationV",
          title: "Generation V",
          img: "Pokemon-G5.svg"
        },
        { 
          link: "generationVI",
          title: "Generation VI",
          img: "Pokemon-G6.svg"
        },
        { 
          link: "generationVII",
          title: "Generation VII",
          img: "Pokemon-G7.svg"
        },
        { 
          link: "generationVIII",
          title: "Generation VIII",
          img: "Pokemon-G8.svg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.generations-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-generation a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px 25px 15px;
  width: 220px;
  height: 180px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  color: #222222;
  padding: 15px 0 10px 15px;
  transition: .4s;
  cursor: pointer;
}

.btn-generation a:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 780px) {
.container {
  padding-left:10px;
  padding-right:10px;
}

.btn-generation a {
  margin: 0 15px 25px 15px;
  width: 160px;
  height: 160px;
  font-size: 1rem;
  padding: 5px 0 10px 15px;
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

  .btn-generation a {
    margin: 0 15px 25px 15px;
    width: 130px;
    height: 130px;
    font-size: 1rem;
    text-align: center;
    padding: 0 0 10px 0;
  }
}
</style>