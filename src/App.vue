<template>
  <div id="app">
    <Header/>
      <transition mode="out-in">
        <router-view />
      </transition>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  }
}
</script>

<style>
/* reset */
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, h3, h4, p, a, button {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #FF6C6C;
}

h1 {
  font-family: var(--font-default);
  font-size: 2.625rem;
  font-weight: bold;
  color: #fff;
}

h2 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  margin: 35px 0 50px 0;
}

a {
  text-decoration: none;
}

input {
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  border: none;
  outline: none;
}

:root {
  --bg-bug: #53D26E;
  --bg-dark:#483C5C;
  --bg-dragon:#63CAD9;
  --bg-electric:#FFD86F;
  --bg-fairy:#EC2674;
  --bg-fighting:#F0623A;
  --bg-fire:#FB926C;
  --bg-flying:#9FB9CB;
  --bg-ghost:#906791;
  --bg-grass:#48D0B0;
  --bg-ground:#A9702D;
  --bg-ice:#95D1EB;
  --bg-normal:#EAB4C4;
  --bg-poison:#AE88DD;
  --bg-psychic:#FF73BE;
  --bg-rock:#7D7D7D;
  --bg-steel:#4DAD8D;
  --bg-water:#79BFFE;

  --type-bug: #7EE895;
  --type-dark:#210E40;
  --type-dragon:#77E2F1;
  --type-electric:#F0C314;
  --type-fairy:#EF71A3;
  --type-fighting:#FE8C6B;
  --type-fire:#FDB69C;
  --type-flying:#B7CEDD;
  --type-ghost:#B282B4;
  --type-grass:#60DFC8;
  --type-ground:#C98638;
  --type-ice:#63AECE;
  --type-normal:#FFC5D6;
  --type-poison:#C89DFD;
  --type-psychic:#FE9DD1;
  --type-rock:#A1A0A0;
  --type-steel:#59C5A1;
  --type-water:#8FD1FE;

  --number-pokemon: #22222270;

  --font-default: 'IBM Plex Sans', sans-serif;
  --font-secondary: Arial, Helvetica, sans-serif;
}

  @font-face {
    font-family: "Free Pixel";
    src: url("./assets/FreePixel.ttf");
 }

.container {
  display: flex;
  flex-direction: column;
  padding-left:60px;
  padding-right:60px;
  margin: 25px auto;
  width: 80%;
  min-height: 100vh;
  background: #fff;
  border-radius: 10px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

/* background type */
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

</style>
