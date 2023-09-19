<script setup>
import { onMounted, reactive, ref } from 'vue';
// import ListPokemons from '../components/ListSW.vue';

let baseUrlSvg = ref("https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/");
let pokemons = reactive(ref());

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
  .then(response => response.json())
  .then(response => {
    pokemons.value = response.results;
    console.log(response);
  })
})
</script>


<template>
  <main>
    <div class="container">
      <div id="container-esquerda">
        <div class="container-esquerda">
          <img id="logoA" src="../components/image/LogoA.png" alt="logoRickandMorty" width="397" height="115.72">
          <div class="h1-div">
            <h1 >
              "Viver é  <p>arriscar</p> <p class="p-tudo">tudo"</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}

#container-esquerda {
  display: flex;
  margin: 51px 0 0 80px;
}

.container-esquerda {
  display: block;
}

.p-tudo {
  color: #11B0C8;
}

.h1-div {
  margin-top: 60px;
}




</style>
