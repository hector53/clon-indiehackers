<template>
  <div>
    <b-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col lg="2">
          <div class="div-block-457">
            <sidebar-left></sidebar-left>
          </div>
        </b-col>
        <b-col lg="10">
          <b-row>
            <b-col lg="8">
              <loader v-show="loading"></loader>
              
                <historias-destacadas @cargaCompleta="cargaCompleta" v-show="loading==false" style="    margin-bottom: 20px;" ref="historiasDes"></historias-destacadas>
              
               
                <seccion-discusion v-show="loading==false"></seccion-discusion>
              
              
              
            </b-col>
            <b-col lg="4">
              <LazyHydrate when-visible>
                <columna-derecha-discusion
                  ref="columDere"
                  :msjBienvenidaInit="msjBienvenida"
                ></columna-derecha-discusion>
              </LazyHydrate>
              <LazyHydrate when-visible>
                <sidebar-derecho> </sidebar-derecho>
              </LazyHydrate>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import ColumnaDerechaDiscusion from "./columnaDerechaDiscusion.vue";
import HistoriasDestacadas from "./historiasDestacadas.vue";
import SeccionDiscusion from "./seccionDiscusion.vue";
import SidebarDerecho from "./sidebarDerecho.vue";
import sidebarLeft from "./sidebarLeft.vue";
import UsuariosDestacados from "./usuariosDestacados.vue";
import LazyHydrate from "vue-lazy-hydration";
import Loader from '../loader/loader.vue';

export default {
  components: {
    sidebarLeft,
    LazyHydrate,
    SeccionDiscusion,
    ColumnaDerechaDiscusion,
    UsuariosDestacados,
    HistoriasDestacadas,
    SidebarDerecho,
    Loader,
  },
  name: "bodyCanalizados",

  data() {
    return {
      loading: true,
      arrayPopulares: [],
      gruposRecomendados: [],
      arraySidebar: [],
      labelRecomendados: "Tus Grupos",
      msjBienvenida: false,
    };
  },
  methods: {
    cargaCompleta(){
      this.loading = false
    },
    cambiarColumnas() {
      this.columnaDiscusionG = true;
    },
  },
  async fetch() {},
  mounted() {},
};
</script>

