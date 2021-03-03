<template>
  <section class="header-wrapper">
    <header class="header">
      <Lights/>
      <router-link :to="{name: 'Home'}"><h1>Pokedex</h1></router-link>
    </header>
      <div class="search-wrapper">
        <input type="text" id="search" name="search" placeholder="Search...">
        <img src="@/assets/lupa.svg">
      </div>
  </section>
</template>

<script>
import Lights from "@/components/Lights.vue";

export default {
  name: 'Header',
  components: {
    Lights,
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
    top: 65px;
    width: 36vw;
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

  .search-wrapper img {
    top: 70px;
    left: 88vw;
  }
}
</style>