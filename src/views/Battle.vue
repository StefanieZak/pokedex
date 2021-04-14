<template>
  <section class="container">
    <h2>Battle</h2>
      <div class="form-select">
        <form class="search-pokemon" @submit="searchPokemon">
          <input type="text" id="search" name="search" placeholder="Choose your pokemon" v-model="search">
          <button type="submit"><img src="@/assets/lupa.svg" alt="search button"></button>
        </form>

        <select name="select" v-model="selected">
          <option value="attribute" selected disabled>Choose your attribute</option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special-Attack</option>
          <option value="special-defense">Special-Defense</option>
          <option value="speed">Speed</option>
        </select>
      </div>

      <div>

      </div>

      <button>Battle</button>
  </section>
</template>

<script>
export default {
  name: "Battle"
}
</script>

<style scoped>
.form-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}

form {
  position: relative;
  margin-right: 30px;
}

.search-pokemon input {
  width: 300px;
  font-size: 1rem;
  padding: 8px 10px;
  background-color: #ddd;
  border-radius: 10px;
  color: #222;
}

.search-pokemon input:focus {
  background-color: #eee;
  border: 1px solid #444;
}

.search-pokemon input::placeholder {
  font-size: 1rem;
  color: #222;
}

.search-pokemon button {
  position: absolute;
  top: 4px;
  right: 10px;
  background: none;
  cursor: pointer;
}

select {
  width: 280px;
  font-family: var(--font-secondary);
  font-size: 1rem;
  padding: 0 10px;
  background-color: #ddd;
  border-radius: 10px;
  border: 0;
  border-bottom: 2px solid transparent; 
  color: #222;
  outline: none;
  cursor: pointer;
}

select:focus {
  outline: 0;
  border-bottom-color: #444;
}

option {
  background: transparent;
  border: none;
}

</style>