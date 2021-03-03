<template>
  <div id="app">
    <Header/>
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

body, ul, li, h1, h2, p {
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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2.625rem;
  font-weight: bold;
  color: #fff;
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

:root {
  --bg-bug: #53D26E;
  --bg-dark:#040708;
  --bg-dragon:#63CAD9;
  --bg-eletric:#FFD86F;
  --bg-fairy:#EC2674;
  --bg-fighting:#F0623A;
  --bg-fire:#FB6C6C;
  --bg-flying:#9FB9CB;
  --bg-ghost:#906791;
  --bg-grass:#48D0B0;
  --bg-ground:#A9702D;
  --bg-ice:#95D1EB;
  --bg-normal:#EAB4C4;
  --bg-poision:#AE88DD;
  --bg-psychic:#FF73BE;
  --bg-rock:#7D7D7D;
  --bg-steel:#4DAD8D;
  --bg-water:#79BFFE;

  --type-bug: #7EE895;
  --type-dark:#20373F;
  --type-dragon:#77E2F1;
  --type-eletric:#FAE8A2;
  --type-fairy:#EF71A3;
  --type-fighting:#FE8C6B;
  --type-fire:#F88C8B;
  --type-flying:#B7CEDD;
  --type-ghost:#B282B4;
  --type-grass:#60DFC8;
  --type-ground:#C98638;
  --type-ice:#AADFF6;
  --type-normal:#FFC5D6;
  --type-poision:#C89DFD;
  --type-psychic:#FE9DD1;
  --type-rock:#A1A0A0;
  --type-steel:#59C5A1;
  --type-water:#8FD1FE;

  --number-pokemon: #22222283;
}
</style>
