<script setup>

</script>


<template>
  <main>
    <div class="container">
      <div id="container-esquerda">
        <div class="container-esquerda">
          <img id="logoA" src="../components/image/LogoA.png" alt="logoRickandMorty" width="397" height="115.72">
          <div class="h1-div">
            <h1>
              "Viver é arriscar <p class="p-tudo"> &nbsp; tudo"</p>
            </h1>
          </div>
          <div id="ball">
            <img src="../components/image/ball.png" alt="" width="">
          </div>
        </div>
      </div>
      <div class="btn-group" id="button-esquerda">
        <div class="btn-group dropend">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
            aria-expanded="false">
            <div >
              <img src="../components/image/neptuno.png" alt="" width="40">
            </div>
            <p class="p-pesquisar">Quero procurar ...</p>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><routerLink to="/episodio" class="nav-link" aria-current="page">Epsódios</routerLink></li>
            <li><routerLink to="/personagens" class="nav-link" aria-current="page">Personagens</routerLink></li>
          </ul>
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
  height: calc(100vh - 100px);
  background-color: black;
  background-image: url("../components/image/rickBack.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 40%;
  overflow-x: hidden;
}


#container-esquerda {
  display: flex;
  margin: 51px 0 0 80px;
}

#button-esquerda {
  margin: 5em 0 0 80px;
}

.btn-group>.btn[data-v-b4e148ca] {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #4D4D4D;
  background-color: #87F54E;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;

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
  height: 70px;
}

.p-pesquisar {
  font-weight: 600;
  font-size: 24px;
}

</style>
