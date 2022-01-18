<template>
<div>
  <header id="nav">
    <b-navbar toggleable="lg" type="light" class="sticky-nav">
      <b-navbar-brand href="#">
        <img src="/images/logo/logo.svg" class="canalizadosBrandPC" />
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" style="margin-top: 0;">
        <div class="h2 mb-0 iconsHeader">
          <b-icon icon="instagram" font-scale="0.7"></b-icon>
          <b-icon icon="twitter" font-scale="0.7"></b-icon>
          <b-icon icon="linkedin" font-scale="0.7"></b-icon>
        </div>
        <nuxt-link class="btnUneteComunidad" to="iniciar-sesion"
          >Únete a la Comunidad</nuxt-link
        >
      </b-navbar-nav>
    </b-navbar>

    <b-nav class="sticky-nav header2">
      <b-nav-item >Inversiones</b-nav-item>
      <b-nav-item>Mira esta Startup</b-nav-item>
      <b-nav-item>Recursos</b-nav-item>
      <b-nav-item>Ecosistema Cripto</b-nav-item>
      <b-nav-item>Managament</b-nav-item>

      <b-navbar-nav class="ml-auto" style="margin-top: 0;">
         <b-nav-form>
           <b-icon icon="search" font-scale="2"></b-icon>
        </b-nav-form>
          
      </b-navbar-nav>
    </b-nav>
  </header>
<main><Nuxt  /></main>
</div>



</template>
<script>
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    BIcon
  },
  name: "layoutBase",
  data() {
    return {};
  }
};
</script>
