<template>
  <section class="lights">
    <span v-for="(button, index) in buttons" :key="index" v-bind="button"></span>
  </section>
</template>

<script>

export default {
  name: 'Lights',
  data() {
    return {
      buttons: [
        {style: {width: '60px', height: '60px', backgroundImage: 'linear-gradient(#fff, #006BFE)'}, class:'firstLight'},
        {style: {width: '40px', height: '40px', backgroundImage: 'linear-gradient(#fff, #FF0000)'}, class:'secondLight'},
        {style: {width: '40px', height: '40px', backgroundImage: 'linear-gradient(#fff, #F7FF2B)'}, class:'thirdLight'},
        {style: {width: '40px', height: '40px', backgroundImage: 'linear-gradient(#fff, #50FF1D)'}, class:'forthLight'},
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
   display: inline-block;
   position: relative;
   border-radius: 50%;
   border: 5px solid #fff;
   transition: filter 0.3s ease-in-out;
   margin-top: 10px;
   margin-right: 10px;
   box-shadow: 3px 3px 5px rgba(114, 6, 6, 0.589) ;
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
</style>