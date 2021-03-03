<template>
<transition>
  <section class="home-wrapper">
    <div class="btn-wrapper">
    <router-link :to="{name: 'allpokemons'}">
      All Pokemons
      <img class="all-btn" src="@/assets/all-btn.png">
    </router-link>
    </div>
    <div class="btn-wrapper">
    <router-link :to="{name: 'generations'}">
      Generations
      <img class="generation-btn" src="@/assets/generation-btn.jpg">
    </router-link>
    </div>
    <div class="btn-wrapper">
    <router-link :to="{name: 'types'}">
      Types
      <img class="types-btn" src="@/assets/types-btn.jpg">
    </router-link>
    </div>
  </section>
  </transition>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
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
  box-shadow: 3px 3px 5px rgba(114, 6, 6, 0.589) ;
  border-radius: 10px;
  padding-left: 30px;
  margin-bottom: 30px;
  transition: .4s;
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

@media  screen and (max-width: 1400px) { 
  .all-btn {
  margin-left: 40%;
  }
  .generation-btn {
    margin-left: 42%;
  }
  .types-btn {
    margin-left: 54%;
  }
}

@media  screen and (max-width: 1024px) { 
  .all-btn {
  margin-left: 20%;
  }
  .generation-btn {
    margin-left: 22%;
  }
  .types-btn {
    margin-left: 38%;
  }
}

@media  screen and (max-width: 768px) { 
  .all-btn {
  margin-left: 5%;
  }
  .generation-btn {
    margin-left: 8%;
  }
  .types-btn {
    margin-left: 30%;
  }
}

@media  screen and (max-width: 500px) { 
  .btn-wrapper a {
  min-width: 280px;
  padding-left: 15px;
  }
  .generation-btn {
    height: 75%;
    margin-left: 2%;
  }
}

</style>