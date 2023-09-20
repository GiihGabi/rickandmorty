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
              "Viver é arriscar <p class="p-tudo"> &nbsp; tudo"</p>
            </h1>
          </div>
        </div>
      </div>
      <div class="btn-group" id="button-esquerda">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          <div>
            <img src="../components/image/neptuno.png" alt="" width="40">
          </div>
          Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>
      <div>

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

#button-esquerda {
  margin: 51px 0 0 80px;
}

.btn-group>.btn[data-v-b4e148ca] {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4D4D4D;
  background-color: #87F54E;
  display: flex;
  align-items: center;
  justify-content: space-around;
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

.btn-group>.btn {
  width: 433px;
  height: 50px;
}

.navbar-toggler-icon
{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(123, 245, 30, 0.75)' stroke-width='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

</style>
