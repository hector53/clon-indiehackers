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
          :class="{ active: $route.name == 'ecosistema' }"
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
    <b-dropdown id="dropdown-left" text="+" class="m-2">
      <b-dropdown-item href="#"><nuxt-link to="/post-nuevo">Publicar un Post</nuxt-link></b-dropdown-item>
      <b-dropdown-item href="#"><nuxt-link to="/p-nuevo">Publicar un Startup</nuxt-link></b-dropdown-item>
      <b-dropdown-item href="#"><nuxt-link to="/grupo-nuevo">Publicar un Grupo</nuxt-link></b-dropdown-item>
    </b-dropdown>
    <footer>
      <p style="display:flex; justify-content:space-between">
        <span><a href="https://twitter.com/Canalizados_" class="link"><i class="fa fa-twitter" style="margin-left: 20px; font-size: 20px; color: #00acee" aria-hidden="true"></i></a></span>
         <span ><a href="https://www.instagram.com/canalizados_/"><i class="fa fa-instagram" style="font-size: 20px; color: #dd6819" aria-hidden="true"></i></a> </span>
          <span ><a href="https://www.linkedin.com/company/canalizados/" class="link"><i class="fa fa-linkedin" style="margin-right: 20px; font-size: 20px; color: #3f729b"   aria-hidden="true"></i></a ></span>
      </p>
    </footer>
  </div>
</template>


<script>
import sidebarOpcionPost from "../postSeccion/sidebarOpcionPost.vue";
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
  name: "sidebarLeft",
  data() {
    return {
      yMas: false,
    };
  },
  methods: {
  },
  updated() {
    // console.log("cantidad comentarios", this.cantidadComentarios)
  },
};
</script>