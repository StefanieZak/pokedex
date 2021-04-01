<template>
  <section class="loading">
    <img src="@/assets/pokebola.png">
    <p>Loading...</p>
  </section>
</template>

<script>
export default {
  name: "Pageloading",
}
</script>

<style scoped>
  .loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  .loading p {
    margin-top: 20px;
    font-weight: bold;
    color: #222;
  }

  .loading img {
    width: 120px;
    height: 120px;
    margin-top: 40px;
    display: inline-block;
    animation: load .8s infinite alternate;      
  }

  @keyframes load {
    from {
      transform: rotate(20deg); 
    }
    to {
      transform: rotate(-20deg); 
    }
  }
</style>