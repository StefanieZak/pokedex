<template>
  <section class="container">
    <h2>Generations</h2>
      <div class="generations-wrapper">
        <div class="btn-generation">
        <router-link :to="{name: 'generationI'}">
          Generation I
          <img src="..\assets\Pokemon-G1.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationII'}">
          Generation II
          <img src="..\assets\Pokemon-G2.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationIII'}">
          Generation III
          <img src="..\assets\Pokemon-G3.svg">
        </router-link>
        </div>
            <div class="btn-generation">
        <router-link :to="{name: 'generationIV'}">
          Generation IV
          <img src="..\assets\Pokemon-G4.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationV'}">
          Generation V
          <img src="..\assets\Pokemon-G5.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationVI'}">
          Generation VI
          <img src="..\assets\Pokemon-G6.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationVII'}">
          Generation VII
          <img src="..\assets\Pokemon-G7.svg">
        </router-link>
        </div>
        <div class="btn-generation">
        <router-link :to="{name: 'generationVIII'}">
          Generation VIII
          <img src="..\assets\Pokemon-G8.svg">
        </router-link>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Generations',
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-left:60px;
  padding-right:60px;
}

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

@media screen and (max-width: 340px) {
  h2 {
    margin: 35px 0 35px 0;
    text-align: center;
  }

  .container {
    padding-left:0px;
    padding-right:0px;
}
}
</style>