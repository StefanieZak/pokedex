<template>
  <section class="header-wrapper">
    <header class="header">
        <div class="input-wrapper">
          <Lights/>
          <div class="search-wrapper">
            <input type="text" id="search" name="search" placeholder="Search...">
            <img src="@/assets/lupa.svg">
          </div>
        </div>
      <h1>Pokedex</h1>
    </header>
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
  width: 100%;
  height: 115px;
  background-color: #FF3F3F;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 62% 70%, 50% 100%, 0 100%);
  z-index: 1;
}

.header input {
  width: 400px;
  margin-left: 115px;
  padding: 8px 10px;
  background-color: #F9D2D2;
  border-radius: 10px;
}

.header input:focus {
  background-color: #fff;
  border: 2px solid #a80c0c;
}

input::placeholder {
  font-size: 1rem;
}

.search-wrapper {
  position: relative;
}

.search-wrapper img {
  position: absolute;
  top: calc(50% - 12.5px);
  right: 10px;
}

.header h1 {
  margin-top: 10px;
  margin-right: 50px;
}
</style>