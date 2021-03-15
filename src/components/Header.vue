<template>
  <section class="header-wrapper">
    <header class="header">
      <Lights/>
      <router-link :to="{name: 'Home'}"><h1>Pokedex</h1></router-link>
    </header>
      <form class="search-wrapper" @submit="searchPokemon">
        <input type="text" id="search" name="search" placeholder="Name or number" v-model="search">
        <button type="submit"><img src="@/assets/lupa.svg" alt="search button"></button>
      </form>
  </section>
</template>

<script>
import Lights from "@/components/Lights.vue";

export default {
  name: 'Header',
  components: {
    Lights,
  },
  data() {
    return {
      search: "",
      processedSearch: "",
    }
  },
  methods: {
    searchPokemon() {
      this.processedSearch = this.search.toLowerCase().replace(/[.]/g, "").trim();
      this.$router.push(`/pokemon/${this.processedSearch}/about`);
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  filter: drop-shadow(-1px 6px 3px rgba(50, 0, 0, 0.4));
}

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 115px;
  background-color: #FF3F3F;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 62% 70%, 50% 100%, 0 100%);
}

input {
  position: absolute;
  top: 70px;
  width: 400px;
  left: 115px;
  padding: 8px 10px;
  background-color: #F9D2D2;
  border-radius: 10px;
}

input:focus {
  background-color: #fff;
  border: 2px solid #a80c0c;
}

input::placeholder {
  font-size: 1rem;
}

.search-wrapper img {
  position: absolute;
  top: 75px;
  left: 480px;
  cursor: pointer;
}

.header h1 {
  margin-top: 10px;
  margin-right: 50px;
}

@media screen and (max-width: 1024px) {
  .header {
  height: 80px;
}

  input {
    position: absolute;
    width: 36vw;
    top: 65px;
    left: 62vw;
  }

  .search-wrapper img {
    top: 70px;
    left: 92vw;
  }

  .header h1 {
    font-size: 1.7rem;
  }
}

 @media screen and (max-width: 420px) {
  .header {
    height: 70px;
  }

  .header h1 {
     font-size: 1.5rem;
     margin-left: 25px;
   }

  input {
    position: absolute;
    width: 38vw;
    top: 55px;
    left: 60vw;
  }

  input::placeholder {
    font-size: 0.625rem;
  }

  .search-wrapper img {
    width: 5%;
    top: 62px;
    left: 92vw;
  }
}
</style>