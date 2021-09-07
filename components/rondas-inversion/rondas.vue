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
              <h1 style="color: #7986CB; font-weight: 700; margin-top: 0;">Rondas de Inversión</h1>
                <Publicaciones />

                <LazyHydrate when-visible>
                   <RondasDestacadas ref="historiasDes"/>
                </LazyHydrate>

            </b-col>
            <b-col lg="4">
              <LazyHydrate when-visible>
                <sidebar-derecho> </sidebar-derecho>
              </LazyHydrate>
              <LazyHydrate when-visible>
                <columna-derecha-discusion
                  ref="columDere"
                  :msjBienvenidaInit="msjBienvenida"
                ></columna-derecha-discusion>
              </LazyHydrate>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Publicaciones from './publicaciones.vue';
import RondasDestacadas from './rondas-destacadas.vue';
import ColumnaDerechaDiscusion from "../homeCanalizados/columnaDerechaDiscusion.vue";
import HistoriasDestacadas from "../homeCanalizados/historiasDestacadas.vue";
import SeccionDiscusion from "../homeCanalizados/seccionDiscusion.vue";
import SidebarDerecho from "../homeCanalizados/sidebarDerecho.vue";
import sidebarLeft from "../homeCanalizados/sidebarLeft.vue";
import UsuariosDestacados from "../homeCanalizados/usuariosDestacados.vue";
import LazyHydrate from "vue-lazy-hydration";
import newsDestacadas from '../homeCanalizados/newsDestacadas.vue';

export default {
  components: {
    RondasDestacadas,
    Publicaciones,
    sidebarLeft,
    LazyHydrate,
    SeccionDiscusion,
    ColumnaDerechaDiscusion,
    UsuariosDestacados,
    HistoriasDestacadas,
    SidebarDerecho,
    newsDestacadas
  },
  name: "bodyCanalizados",

  data() {
    return {
      slide: 0,
      sliding: null,
      arrayPopulares: [],
      gruposRecomendados: [],
      arraySidebar: [],
      labelRecomendados: "Tus Grupos",
      msjBienvenida: false
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    cambiarColumnas() {
      this.columnaDiscusionG = true;
    }
  },
  async fetch() {},
  mounted() {}
};
</script>
