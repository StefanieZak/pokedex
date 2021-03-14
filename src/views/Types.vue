<template>
  <section class="container">
    <h2>Types</h2>
      <div class="types-wrapper">
        <div class="btn-types">
          <router-link :to="{name: 'bug'}">
            <img src="@/assets/type-bug.svg">
            <p class="type-bug">Bug</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'dark'}">
            <img src="@/assets/type-dark.svg">
            <p class="type-dark">Dark</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'dragon'}">
            <img src="@/assets/type-dragon.svg">
            <p class="type-dragon">Dragon</p>          
          </router-link>
        </div>
          <div class="btn-types">
          <router-link :to="{name: 'electric'}">
            <img src="@/assets/type-electric.svg">
            <p class="type-electric">Electric</p>          
          </router-link>
        </div>
         <div class="btn-types">
          <router-link :to="{name: 'fairy'}">
            <img src="@/assets/type-fairy.svg">
            <p class="type-fairy">Fairy</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'fighting'}">
            <img src="@/assets/type-fighting.svg">
            <p class="type-fighting">Fighting</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'fire'}">
            <img src="@/assets/type-fire.svg">
            <p class="type-fire">Fire</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'flying'}">
            <img src="@/assets/type-flying.svg">
            <p class="type-flying">Flying</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'ghost'}">
            <img src="@/assets/type-ghost.svg">
            <p class="type-ghost">Ghost</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'grass'}">
            <img src="@/assets/type-grass.svg">
            <p class="type-grass">Grass</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'ground'}">
            <img src="@/assets/type-ground.svg">
            <p class="type-ground">Ground</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'ice'}">
            <img src="@/assets/type-ice.svg">
            <p class="type-ice">Ice</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'normal'}">
            <img src="@/assets/type-normal.svg">
            <p class="type-normal">Normal</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'poison'}">
            <img src="@/assets/type-poison.svg">
            <p class="type-poison">Poison</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'psychic'}">
            <img src="@/assets/type-psychic.svg">
            <p class="type-psychic">Psychic</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'rock'}">
            <img src="@/assets/type-rock.svg">
            <p class="type-rock">Rock</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'steel'}">
            <img src="@/assets/type-steel.svg">
            <p class="type-steel">Steel</p>          
          </router-link>
        </div>
        <div class="btn-types">
          <router-link :to="{name: 'water'}">
            <img src="@/assets/type-water.svg">
            <p class="type-water">Water</p>          
          </router-link>
        </div>                                                                                                                      
      </div>
  </section>
</template>

<script>
export default {
  name: 'Types',
}
</script>

<style scoped>
.types-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 130px;
  padding-right: 130px;
}

.btn-types {
  margin: 0 15px 50px 15px;
}

.btn-types p {
  font-family: var(--font-secondary);
  padding: 8px 20px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  margin-top: 5px;
}

.type-bug {background: var(--type-bug);}
.type-dark {background: var(--type-dark);}
.type-dragon {background: var(--type-dragon);}
.type-electric {background: var(--type-electric);}
.type-fairy {background: var(--type-fairy);}
.type-fighting {background: var(--type-fighting);}
.type-fire {background: var(--type-fire);}
.type-flying {background: var(--type-flying);}
.type-ghost {background: var(--type-ghost);}
.type-grass {background: var(--type-grass);}
.type-ground {background: var(--type-ground);}
.type-ice {background: var(--type-ice);}
.type-normal {background: var(--type-normal);}
.type-poison {background: var(--type-poison);}
.type-psychic {background: var(--type-psychic);}
.type-rock {background: var(--type-rock);}
.type-steel {background: var(--type-steel);}
.type-water {background: var(--type-water);}

@media screen and (max-width: 1450px) {
  .types-wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    padding-left:10px;
    padding-right:10px;
  }

  h2 {
    margin: 35px 0 35px 0;
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  .types-wrapper {
    padding-left: 10px;
    padding-right: 10px;
  }

  .btn-types {
    margin: 0 15px 35px 15px;
  }

  .btn-types p {
    font-size: 0.875rem;
    font-weight: bold;
  }
}

@media screen and (max-width: 500px) {
  .container {
    width: 90%;
    padding-left:0px;
    padding-right:0px;
  }
}
</style>