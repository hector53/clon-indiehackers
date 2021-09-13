<template>
  <div class="div-block-449">
    <div class="div-block-467">
      <sidebar-opcion-post
        :idE="idE"
        :p="p"
        :idP="idP"
        :votos="votos"
        :favPost="favPost"
        :cantidadComentarios="cantidadComentarios"
        v-if="$route.name == 'c-slug'"
      ></sidebar-opcion-post>
      <ul role="list" class="list-7">
        <li
          class="list-item-9"
          :class="{ active: $route.name == 'comunidad' }"
        >
          <nuxt-link to="/comunidad" style="display: flex; box-shadow: 0px 3px 6px #45454524;">
            <div class="html-embed-3 w-embed" >
              <i class="fas fa-home icono-sidebarleft" :class="{ active: $route.name == 'comunidad' }"></i>
            </div>
            <div
              class="text-block-21"
              :class="{ active: $route.name == 'comunidad' }"
            >
              Inicio
            </div>
          </nuxt-link>
        </li>

        <li class="list-item-9" :class="{ active: $route.name == 'startups' }">
          <nuxt-link to="/startups" style="display: flex; box-shadow: 0px 3px 6px #45454524;">
            <div class="html-embed-7 w-embed">
              <i class="fas fa-rocket icono-sidebarleft" :class="{ active: $route.name == 'startups' }"></i>
            </div>
            <div
              class="text-block-21"
              :class="{ active: $route.name == 'startups' }"
            >
              Startups
            </div>
          </nuxt-link>
        </li>
        <li class="list-item-9" :class="{ active: $route.name == 'staffpicks-pag' }">
          <nuxt-link to="/staffpicks" style="display: flex; box-shadow: 0px 3px 6px #45454524;">
            <div class="html-embed-9 w-embed">
              <i class="fas fa-star icono-sidebarleft" :class="{ active: $route.name == 'staffpicks-pag' }"></i>
            </div>
            <div
              class="text-block-21"
              :class="{ active: $route.name == 'staffpicks-pag' }"
            >
              Staff Picks
            </div>
          </nuxt-link>
        </li>

        <li 
          class="list-item-9"
          :class="{ active: $route.name == 'rondas-inversion' }"
        >
          <nuxt-link to="/rondas-inversion" style="display: flex; box-shadow: 0px 3px 6px #45454524;">
            <div class="html-embed-9 w-embed">
              <i class="fas fa-money-bill-wave-alt icono-sidebarleft" :class="{ active: $route.name == 'rondas-inversion' }"></i>
            </div>
            <div
              class="text-block-21"
              :class="{ active: $route.name == 'rondas-inversion' }"
            >
              Inversiones
            </div>
          </nuxt-link>
        </li>
        <li 
          class="list-item-9"
          :class="{ active: $route.name == 'grupos' }"
        >
          <nuxt-link to="/grupos" style="display: flex; box-shadow: 0px 3px 6px #45454524;">
            <div class="html-embed-9 w-embed">
              <i class="fas fa-comments icono-sidebarleft" :class="{ active: $route.name == 'grupos' }"></i>
            </div>
            <div
              class="text-block-21"
              :class="{ active: $route.name == 'grupos' }"
            >
              Grupos
            </div>
          </nuxt-link>
        </li>

      </ul>
    </div>
    <!-- <li class="list-item-3" v-if="$store.state.cookieLogin">
            <div data-hover="" data-delay="0" class="w-dropdown" style="">
              <div
                class="dropdown-toggle-3 w-dropdown-toggle botonCanalizados"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
                @click="dropDownPerfilClic"
              >
                <h1>pepe</h1>
              </div>
              <nav
                v-if="dropDownPerfil"
                v-click-outside="outDrop"
                class="dropdown-list-2 w-dropdown-list w--open"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
              >
                <p>PEPE1</p>
                <p>PEPE2</p>
                <p>PEPE3</p>
              </nav>
            </div>
          </li> -->

    <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret class="mb-3">
      <template #button-content>
        <button class="botonCanalizados">Publicar <i class="fas fa-chevron-down"></i></button><span class="sr-only">Search</span>
      </template>
      <b-dropdown-item href="#"><nuxt-link to="/post-nuevo" class="botonCanalizados">Publicar un Post</nuxt-link></b-dropdown-item>
      <b-dropdown-item href="#"><nuxt-link to="/p-nuevo" class="botonCanalizados">Publicar un Startup</nuxt-link></b-dropdown-item>
      <b-dropdown-item href="#"><nuxt-link to="/grupo-nuevo" class="botonCanalizados">Publicar un Grupo</nuxt-link></b-dropdown-item>
    </b-dropdown>
    <footer>
      <div style="display: flex; justify-content: space-between;">
        <span><a href="https://twitter.com/Canalizados_" class="link"><i class="fa fa-twitter" style="margin-left: 20px; font-size: 20px; color: #00acee" aria-hidden="true"></i></a></span>
         <span ><a href="https://www.instagram.com/canalizados_/"><i class="fa fa-instagram" style="font-size: 20px; color: #dd6819" aria-hidden="true"></i></a> </span>
          <span ><a href="https://www.linkedin.com/company/canalizados/" class="link"><i class="fa fa-linkedin" style="margin-right: 20px; font-size: 20px; color: #3f729b"   aria-hidden="true"></i></a ></span>
      </div>
    </footer>
  </div>
</template>

<script>
import sidebarOpcionPost from "../postSeccion/sidebarOpcionPost.vue";
import ClickOutside from "vue-click-outside";
export default {
  components: { sidebarOpcionPost },
  props: [
    "p",
    "idP",
    "votos",
    "favPost",
    "cantidadComentarios",
    "previewUrl",
    "idE",
  ],
  directives: {
    ClickOutside,
  },
  name: "sidebarLeft",
  data() {
    return {
      dropDownPerfil: false,
      yMas: false,
    };
  },
  methods: {
    dropDownPerfilClic() {
      if (this.dropDownPerfil == false) {
        this.dropDownPerfil = true;
      } else {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      }
    },
    outDrop() {
      if (this.contadorOut > 0) {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      } else {
        this.contadorOut++;
      }
    },
  },
  updated() {
    // console.log("cantidad comentarios", this.cantidadComentarios)
  },
};
</script>