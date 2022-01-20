<template>
  <div>
    <!-- slider home top -->
    <b-container class="containerSliderHome">
      <slider-home-top
        :arrayNoticias="arrayNoticias"
        class="mt-4"
      ></slider-home-top>
    </b-container>
    <!-- slider home top -->

    <!-- Inversiones-->
    <b-container>
      <div class="mainInversiones">
        <b-row class="mb-5">
          <b-col lg="9" md="12" sm="12" cols="12">
            <h1>Inversiones</h1>
            <main-inversiones
              :arrayInversiones="arrayInversiones"
            ></main-inversiones>
          </b-col>
          <!-- Columna derecha populares -->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <h1>Lo más popular</h1>
            <main-populares :arrayPopulares="arrayPopulares"></main-populares>
          </b-col>
          <!-- Columna derecha populares -->
        </b-row>
      </div>
    </b-container>
    <!-- Inversiones -->

    <!-- Mira esta Startup with slider -->
    <div class="mainMiraEstaStartup pt-4 pb-4">
      <main-mira-esta-startup></main-mira-esta-startup>
    </div>
    <!-- Mira esta Startup with slider -->

    <!-- Ecosistema cripto -->
    <b-container>
      <div class="mainEcosistemaCripto mainInversiones mt-4 mb-4">
        <b-row class="mt-4">
          <b-col lg="9" md="12" sm="12" cols="12">
            <h1>Ecosistema cripto</h1>
            <main-ecosistema-cripto></main-ecosistema-cripto>
          </b-col>
          <!-- Columna derecha redes sociales y mas -->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <h1>Nuestras redes</h1>
            <widget-seguidores-sociales></widget-seguidores-sociales>
          </b-col>
          <!-- Columna derecha redes sociales y mas -->
        </b-row>
      </div>
    </b-container>

    <!-- Ecosistema cripto -->
    
 <!-- Recursos para startups -->
    <b-container>
      <div class="mainEcosistemaCripto mainInversiones mt-4 mb-4">
        <b-row class="mt-4">
          <b-col lg="9" md="12" sm="12" cols="12">
            <h1>Management y Recursos para Startups</h1>
            <main-recursos></main-recursos>
          </b-col>
          <!-- Newsletter-->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <main-news-letter></main-news-letter>
           </b-col>
          <!-- Newsletter-->
        </b-row>
      </div>
    </b-container>
     <!-- Recursos para startups -->
  </div>
</template>
<script>
import SliderHomeTop from "~/components/home_new/sliderHomeTop.vue";
import MainInversiones from "~/components/home_new/mainInversiones.vue";
import MainMiraEstaStartup from "~/components/home_new/mainMiraEstaStartup.vue";
import MainEcosistemaCripto from "~/components/home_new/mainEcosistemaCripto.vue";
import MainPopulares from "~/components/home_new/mainPopulares.vue";
import MainRecursos from '~/components/home_new/mainRecursos.vue';
import MainNewsLetter from '~/components/home_new/mainNewsLetter.vue';
import WidgetSeguidoresSociales from '~/components/home_new/widgetSeguidoresSociales.vue';
export default {
  components: {
    MainInversiones,
    SliderHomeTop,
    MainMiraEstaStartup,
    MainEcosistemaCripto,
    MainPopulares,
    MainRecursos,
    MainNewsLetter,
    WidgetSeguidoresSociales
  },
  layout: "layoutBase",
  async asyncData({ params, store, redirect, app }) {
    const getData = await app.$axios.$get("/getpost/get_index_nuevo?");
    return {
      arrayNoticias: getData.noticias,
      arrayInversiones: getData.inversiones,
      arrayPopulares: getData.populares
    };
  }
};
</script>
