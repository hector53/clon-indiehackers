<template>
  <div v-bind="settings">
    <div style="margin-bottom: 20px;" class="container-noticias" v-for="(item, index) in arrayNoticias.slice(0, 2)" :key="index">
      <b-row>
        <b-col cols="9">
          <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
            <h3 class="main-title">{{ item.titulo }}</h3>
          </nuxt-link>
        </b-col>
        <b-col cols="3">
          <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
            <img 
              :src="item.imagen" 
              loading="lazy" alt="" 
            />
          </nuxt-link>
        </b-col>
         <div>
        <p style="margin-left: 20px; margin-top: 10px">{{item.contenido.slice(0,210)}}</p>
        </div>
        <nuxt-link
            class="userStaffpick2"
            :to="{
              name: 'u-username',
              params: { username: nombre },
            }"
          >
            <p class="infoAdicional" style="margin-left: 15px;">{{item.username}} </p>
            <p> · </p>
            <p class="infoAdicional">{{ item.fecha }}</p>
          </nuxt-link>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
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