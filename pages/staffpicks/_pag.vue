<template>
  <div>
    <loader v-show="loader"></loader>


<b-row align-v="stretch">
    <b-col   md="4" class="mb-4"   v-for="(item, index) in arrayNoticias"
        :key="index" >
       

      <div class="cubrePostStaffpicks">
           <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
             <img :src="item.imagen" loading="lazy" alt="" class="image-11" />
              <h3>{{ item.titulo }}</h3>
              <p v-text="item.contenido"></p>
           </nuxt-link>
              <div class="div-block-431" style="padding-left:10px" v-if="item.slugGrupo != ''">
                <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: item.slugGrupo } }"
                  class="link-17"
                  >{{ item.tituloGrupo }}</nuxt-link>
              </div>
              <br>
              <div class="sobreUserStaff">
                <div class="cubreUserStaffpick">
                <nuxt-link
                  class="userStaffpick2"
                  :to="{
                    name: 'u-username',
                    params: { username: item.username },
                  }"
                >
                  <img :src="item.avatar" class="image-12" />
                  <span>{{ item.username }}</span></nuxt-link
                >
                <span style="font-size: 12px;">{{ item.fecha }}</span>
              </div>
              </div>
              
          </div>
    </b-col>
   
  </b-row>





    

    <div class="ui pagination menu">
      <nuxt-link
        class="item primero"
        :to="{ name: 'staffpicks-pag', params: { pag: 1 } }"
        rel="start"
        v-show="paginaActual > 1"
        >Primero</nuxt-link
      >
      <nuxt-link
        class="item"
        :to="{ name: 'staffpicks-pag', params: { pag: paginaActual - 1 } }"
        rel="prev"
        v-show="paginaActual > 1"
        >&lt;</nuxt-link
      >
      <nuxt-link
        class="item"
        v-for="(n, index) in totalPaginas"
        :key="index"
        :class="{ active: n == paginaActual }"
        :to="{ name: 'staffpicks-pag', params: { pag: n } }"
        v-show="n >= num_actual_ini && n <= num_actual_fin"
      >
        {{ n }}</nuxt-link
      >
      <nuxt-link
        class="item"
        :to="{ name: 'staffpicks-pag', params: { pag: paginaActual + 1 } }"
        rel="next"
        v-show="paginaActual < totalPaginas"
        >&gt;</nuxt-link
      >
      <nuxt-link
        class="item ultimo"
        :to="{ name: 'staffpicks-pag', params: { pag: totalPaginas } }"
        rel="start"
        v-show="paginaActual < totalPaginas"
        >Ultimo</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import LikeCanalizados from "~/components/likes/likeCanalizados.vue";
import Loader from "~/components/loader/loader.vue";
export default {
  layout: "perfilEditCanalizados",
  name: "staffpicks",
  components: { Loader, LikeCanalizados },
  async fetch() {},
  head() {
    return {
      title: "Staffpicks - Canalizados",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Canalizados comunidad de emprendedores - Staffpicks",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://canalizados.com/staffpicks",
        },
      ],
    };
  },
  data() {
    return {
      loader: true,
      arrayNoticias: [],
      totalPaginas: 0,
      registrosxPag: 12,
      paginaActual: 1,
      num_actual_ini: 1,
      num_actual_fin: 3,
      ini: 0,
      fin: 12,
    };
  },
  watch: {},
  methods: {
    async get_staffpicks() {
      await this.$axios
        .$get(
          "/getpost/getnoticias?xPag=" +
            this.registrosxPag +
            "&ini=" +
            this.ini +
            "&fin=" +
            this.fin
        )
        .then((response) => {
          console.log(response);
          this.arrayNoticias = response.noticias;
          this.totalPaginas = response.totalPaginas;
          this.paginaActual = parseInt(this.$route.params.pag);
          if (this.$route.params.pag > 1) {
            this.fin = this.registrosxPag;
            this.num_actual_fin = 5;
            if (this.$route.params.pag > 4) {
              if (this.$route.params.pag == this.totalPaginas) {
                this.num_actual_ini = this.paginaActual - 2;
                this.num_actual_fin = this.totalPaginas;
              } else {
                this.num_actual_ini = this.paginaActual - 2;
                this.num_actual_fin = this.paginaActual + 2;
              }
            }
          } else {
            this.paginaActual = 1;
            this.num_actual_fin = 3;
          }
          this.loader = false;
        });
    },
  },
  mounted() {
    this.get_staffpicks();
  },
  created() {
    if (this.$route.params.pag > 1) {
      this.ini = (parseInt(this.$route.params.pag) - 1) * this.registrosxPag;
    } else {
      this.ini = 0;
    }
  },
};
</script>

