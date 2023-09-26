<template>
  <div id="per-main">
    <div class="container">
      <div class="row">
        <div id="row-per" class="col-md-4" v-for="character in characters" :key="character.id">
          <div class="card">
            <img :src="character.image" class="card-img-top" alt="Personagem imagem">
            <div class="card-body">
              <h5 class="card-title">{{ character.name }}</h5>
              <p class="card-text">Status: {{ character.status }}</p>
              <button class="btn btn-primary" @click="openModal(character)">Quero Mais!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="personagemModal" tabindex="-1" role="dialog" aria-labelledby="labelPersonagem" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">{{ personagemSelecionado.name }}</h1>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="personagemSelecionado.image" class="img-fluid" alt="Character Image">
            <p>Nome: {{ personagemSelecionado.name }}</p>
            <p>Status: {{ personagemSelecionado.status }}</p>
            <p>Species: {{ personagemSelecionado.species }}</p>
            <p>Genero: {{ personagemSelecionado.gender }}</p>
            <p>Localização: {{ personagemSelecionadoLocation.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      personagemSelecionado: {},
      personagemSelecionadoLocation: {}
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters() {
      fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
          this.characters = data.results;
        });
    },
    openModal(character) {
      this.personagemSelecionado = character;
      fetch(character.location.url)
        .then(response => response.json())
        .then(location => {
          this.personagemSelecionadoLocation = location;
          $('#personagemModal').modal('show'); 
        });
    }
  }
};
</script>

<style scoped>
#per-main {
  background-color: black;
  background-image: url("../components/image/ceu.png");
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
  background-attachment: fixed;
}

#row-per {
  margin-top: 8em;
  
}

.card {
  padding: 0;
  border: none;
}
</style>
