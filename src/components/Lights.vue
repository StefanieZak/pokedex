<template>
  <section class="lights">
    <span v-for="(light, index) in lights" :key="index" v-bind="light"></span>
  </section>
</template>

<script>

export default {
  name: 'Lights',
  data() {
    return {
      lights: [
        {style: {background: 'linear-gradient(#BCD8FF, #006BFE)'}, class:'firstLight'},
        {style: {background: 'linear-gradient(#FFBCBC, #FF0000)'}, class:'secondLight'},
        {style: {background: 'linear-gradient(#F5FF00, #E4CC2C)'}, class:'thirdLight'},
        {style: {background: 'linear-gradient(#D9FFCD, #2FD100)'}, class:'forthLight'}
      ]
    }
  }
}
</script>

<style scoped>
.lights {
  display: flex;
  align-items: flex-start;
  margin-left: 40px;
}

.lights span {
   width: 40px; 
   height: 40px; 
   display: inline-block;
   position: relative;
   border-radius: 50%;
   border: 5px solid #fff;
   margin-top: 10px;
   margin-right: 10px;
   box-shadow: 3px 3px 5px rgba(114, 6, 6, 0.589) ;
 }

 .lights span:first-child {
   width: 60px; 
   height: 60px; 
 }

 .lights span::before {
   content: '';
   position: absolute;
   top: 2px;
   left: 25%;
   width: 35%;
   height: 35%;
   border-radius: 50%;
   background-color: #fff; 
 }

 @media screen and (max-width: 420px) {
.lights {
  margin-left: 10px;
}

.lights span {
   width: 30px;
   height: 30px;
   border: 3.5px solid #fff;
   margin-top: 10px;
   margin-right: 6px;
 }

  .lights span:first-child {
   width: 50px; 
   height: 50px; 
 }
 }
</style>