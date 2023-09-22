<script setup>
import { onMounted, reactive, ref } from 'vue';
import "../components/style/style.css";
import ListTemps from '../components/ListTemps.vue';

let baseUrlSvg = ref("https://rickandmortyapi.com/api/episode");
let temps = reactive(ref());

onMounted(() => {
  fetch("https://rickandmortyapi.com/api/episode")
  .then(response => response.json())
  .then(response => {
    temps.value = [];
    response.results.forEach(ep => {
      fetch(ep.characters[ep.characters.length - 1])
      .then(response => response.json())
      .then(response => {
        const arrTemp = ep;
        arrTemp.image = response.image;
        temps.value.push(arrTemp)
      })
    })
    console.log(temps.value)
  })
})
</script>


<template>
  <main>
    <div id="ep-main">
      <div class="img-fav">
        <img src="../components/image/favorites.png" alt="" width="508" style="margin: 58px 0 0 0;">
      </div>
      <div class="container">
        <h2 class="h2-ep">Temporada 1</h2>
        <ul class="cards">
          <ListTemps 
          v-for="temp in temps"
          :key="temp.name"
          :name="temp.name"
          :baseUrlSvg="temp.image"
          />
        </ul>
      </div>
      <div class="container" >
        <h2 class="h2-ep">Temporada 2</h2>
        <ul class="cards">
          <ListTemps 
          v-for="temp in temps"
          :key="temp.name"
          :name="temp.name"
          :baseUrlSvg="temp.image"
          />
        </ul>
      </div>
    </div>
  </main>
</template>
<style scoped>
#ep-main {
  background-color: black;
  background-image: url("../components/image/ceu.png");
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
  background-attachment: fixed;
}
</style>