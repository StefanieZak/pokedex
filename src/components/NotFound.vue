<template>
  <section class="container">

    <div class="title">
    <p>4</p>
    <img src="@/assets/psyduck.png">
    <p>4</p>
    </div>

    <p class="descripton">Page not found.<br> You seem more lost than psyduck.</p>

  </section>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-top: 90px;
}

.title p {
  font-size: 12.5rem;
  font-weight: bold;
  color: #FFF700;
  -webkit-text-stroke: 3px #222;
}

.title img {
  height: 100%;
}

.descripton {
  margin: 20px auto;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.5rem;
}

@media screen and (max-width: 768px) {
.title p {
  font-size: 8rem;
}
.title img {
  height: 120px;
  width: 120px;
}
.descripton {
  font-size: 1rem;
}
}

@media screen and (max-width: 420px) {
.title {
  margin-top: 50px;
}

.title p {
  font-size: 5rem;
  -webkit-text-stroke: 2px #222;
}
.title img {
  height: 80px;
  width: 80px;
}
.descripton {
  font-size: 0.875rem;
  line-height: 1rem;
}
}
</style>