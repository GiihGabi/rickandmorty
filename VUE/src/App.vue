<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import "./components/style/app.css";

let num = ref(0);

</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <div></div>
        <routerLink to="/" class="nav-link" aria-current="page"><img src="./components/image/LogoA.png" alt="" width="305"></routerLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-success" id="teste"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <p class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</p>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div id="menu-conteudo">
            <div>
              <div>
                <routerLink to="/" class="nav-link" aria-current="page">Home</routerLink>
              </div>
              <div>
                <routerLink to="/episodio" class="nav-link" aria-current="page">Episódios</routerLink>
              </div>
              <div>
                <routerLink to="/personagens" class="nav-link" aria-current="page">Personagens</routerLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="main">
    <router-view></router-view>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler {
  border: none;
  margin: 0 40px 0 0;

}

.navc {
  width: 2300px;
  display: flex;
  justify-content: center;
}

nav[data-v-7a7a37b1] {
  height: 100px;
  background-color: black;
  box-shadow: 0px 0px 20px 0px #00F227;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(123, 245, 30, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
#offcanvasDarkNavbar{
  background-color: black !important;
  border-radius: 0 0 0 8em;
  border-left: 1px solid #00F227;
  font-size: 26px;
}
.offcanvas-header {
  justify-content: space-between;
  margin: 2em 1em 0 1em;
}

#menu-conteudo {
  font-size: 26px;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.offcanvas-body {
  color: white;
}

.nav-link:hover {
  color: #00F227;
}
 #gif {
  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>
