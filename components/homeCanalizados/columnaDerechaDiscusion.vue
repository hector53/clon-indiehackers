<template>
  <div class="columnaDerechaIndex">
    <div class="div-block-458" v-if="$store.state.cookieLogin && msjBienvenida">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="cerrarBienvenida"
          class="ember-view options-header__remove-icon svgCloseBienvenida"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          ></path>
        </svg>
        <h3 class="heading-4">Ya sos parte de canalizados!</h3>
        <div class="text-block-26">Esto es lo que podés hacer</div>
      </div>
      <ul role="list" class="list-9">
        <li class="list-item-10">
          <div class="text-block-27">
            <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: $store.state.username },
              }"
              >👋 &nbsp;&nbsp;Completá tu perfil</nuxt-link
            >
          </div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
            🎬 &nbsp;&nbsp;Seguí intereses y personas
          </div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
            <nuxt-link to="/post-nuevo"
              >✍️ &nbsp;&nbsp;Escribí tu primer publicación</nuxt-link
            >
          </div>
        </li>
      </ul>
    </div>

    

    <div class="div-block-438" v-for="(item, index) in arraySidebar.usuarios" :key="index">
      <div class="div-block-439">
        <h3 class="heading-3">
          <nuxt-link :to="{name: 'u-username', params: {username: item.username}}">
            {{item.nombres}}</nuxt-link></h3>
          <nuxt-link :to="{name: 'u-username', params: {username: item.username}}">
        <img
          width="48"
          height="48"
          :src="item.avatar"
          loading="lazy"
          alt=""
          class="image-13"
        />
          </nuxt-link>
      </div>
      <div class="div-block-440">
        <div>{{item.ciudad}}</div>
      </div>
      <div><nuxt-link to="/ecosistema"  class="button-3 w-button">Conocé el ecosistema</nuxt-link></div>
    </div>


    <div class="div-block-438" v-for="(item, index) in arraySidebar.productos" :key="index+1000">
      <div class="div-block-439">
        <h3 class="heading-3">
          <nuxt-link :to="{name: 'p-slug', params: {slug: item.slug}}">
            {{item.titulo}}</nuxt-link></h3>
          <nuxt-link :to="{name: 'p-slug', params: {slug: item.slug}}">
        <img
          width="48"
          height="48"
          :src="item.imagen"
          loading="lazy"
          alt=""
          class="image-13"
        />
          </nuxt-link>
      </div>
      <div class="div-block-440">
        <div>{{item.excerpt}}</div>
      </div>
      <div><nuxt-link to="/startups" class="button-3 w-button">Startups de Latam</nuxt-link></div>
    </div>

    
  </div>
</template>


<script>
export default {
  name: "columnaDerechaDiscusion",
  props: [ "msjBienvenidaInit", ],
  data() {
    return {
      msjBienvenida: this.msjBienvenidaInit,
      arraySidebar: []
    };
  },
  methods: {
      async   getSidebarDerecho(){

      await this.$axios
        .$get("/getpost/sidebarderecho/")
        .then((response) => {
              this.arraySidebar = response
        });

      },
    cerrarBienvenida() {
      this.$cookies.remove("registro_nuevo");
      this.msjBienvenida = false;
    },
  },
  async mounted() {
    this.getSidebarDerecho()
  },
};
</script>
