<template>
  <div id="ep-main">
    <div class="container">
      <div class="row">
          <h2 class="h2-ep">Episódios</h2>
          <ul class="cards">
            <div class="col-12" v-for="episode in episodes" :key="episode.id">
              <div class="card">
                <h5 class="card-title">{{ episode.name }}</h5>
                <p class="card-text">Episódio: {{ episode.episode }}</p>
                <!-- <p class="card-text">Air Date: {{ episode.air_date }}</p> -->
                <button id="btn-saber-mais" class="btn btn-primary" @click="openModal(episode)">Saber mais!</button>
              </div>
            </div>
          </ul>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <h2 class="h2-ep">Episódios</h2>
          <ul class="cards">
            <div class="col-12" v-for="episode in episodes" :key="episode.id">
              <div class="card">
                <h5 class="card-title">{{ episode.name }}</h5>
                <p class="card-text">Episódio: {{ episode.episode }}</p>
                <!-- <p class="card-text">Air Date: {{ episode.air_date }}</p> -->
                <button id="btn-saber-mais-2" class="btn btn-primary" @click="openModal(episode)">Saber mais!</button>
              </div>
            </div>
          </ul>
      </div>
    </div>
    <div class="modal fade" id="modalEp" tabindex="-1" role="dialog" aria-labelledby="modalEpLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">{{ selectedEpisode.name }}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Nome: {{ selectedEpisode.name }}</p>
            <p>Episódio: {{ selectedEpisode.episode }}</p>
            <p>Data de lançamento: {{ selectedEpisode.air_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../components/style/style.css";
export default {
  data() {
    return {
      episodes: [],
      selectedEpisode: {}
    };
  },
  mounted() {
    this.fetchEpisodes();
  },
  methods: {
    fetchEpisodes() {
      fetch('https://rickandmortyapi.com/api/episode/')
        .then(response => response.json())
        .then(data => {
          this.episodes = data.results;
        });
    },
    openModal(episode) {
      this.selectedEpisode = episode;
      $('#modalEp').modal('show'); 
    }
  }
};
</script>

<style scoped>
#ep-main {
  background-color: black;
  background-image: url("../components/image/background.gif");
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
  height: 100vh;
  background-attachment: fixed;
}

#btn-saber-mais, #btn-saber-mais-2 {
  background-color: #11b0c8;
  border: none;
}
</style>

<!-- <script setup>
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
</style>  -->