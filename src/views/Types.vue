<template>
  <section class="container">
    <h2>Types</h2>

    <div class="types-wrapper">
      <div class="btn-types" v-for="(type, index) in types" :key="index">
        <router-link :to="{name: type}">
          <img :src="require(`@/assets/type-${type}.svg`)">
          <p class="type-bug">{{type}}</p>      
        </router-link>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Types',
  data() {
    return {
      types: [
        "bug",
        "dark",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "ghost",
        "grass",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "steel",
        "water",
      ]
    }
  }
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