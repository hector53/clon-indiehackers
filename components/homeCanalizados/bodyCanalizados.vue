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
              <!-- <historias-destacadas ref="historiasDes"></historias-destacadas> -->
              <div>
                <newsDestacadas />
              </div>
              <div>
                <StartupSemanal />
              </div>

              <LazyHydrate when-visible>
                <seccion-discusion></seccion-discusion>
              </LazyHydrate>
              <LazyHydrate when-visible>
                <historias-destacadas ref="historiasDes"></historias-destacadas>
              </LazyHydrate>
            </b-col>

            <b-col lg="4">
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
import StartupSemanal from './startup-semanal.vue';
import ColumnaDerechaDiscusion from "./columnaDerechaDiscusion.vue";
import HistoriasDestacadas from "./historiasDestacadas.vue";
import SeccionDiscusion from "./seccionDiscusion.vue";
import SidebarDerecho from "./sidebarDerecho.vue";
import sidebarLeft from "./sidebarLeft.vue";
import UsuariosDestacados from "./usuariosDestacados.vue";
import LazyHydrate from "vue-lazy-hydration";
import newsDestacadas from './newsDestacadas.vue';

export default {
  components: {
    StartupSemanal,
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
