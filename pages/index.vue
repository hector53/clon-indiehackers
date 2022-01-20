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
            <b-row class="pt-4">
              <b-col
                class="cardCanalizados"
                lg="4"
                md="4"
                sm="6"
                cols="12"
                v-for="(item, index) in arrayInversiones"
                :key="index"
              >
                 <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
                  <img :src="item.imagen" alt="Image"/></nuxt-link>
                <p class="card-text">
                   <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{ item.titulo }}</nuxt-link>
                </p>
                <div class="cardAutorFecha">
                  <p class="card-text small text-muted">{{ item.fecha }}</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
           <!-- Columna derecha populares -->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <h1>Lo más popular</h1>
            <b-row class="pt-4">
              <b-col
                cols="12"
                v-for="(item, index) in arrayPopulares"
                :key="index"
              >
                <b-card
                  :img-src="item.imagen"
                  img-alt="Card image"
                  img-left
                  class="mb-3"
                >
                
                  <b-card-text>
                    <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{ item.titulo }}</nuxt-link>
                  </b-card-text>
                  <div class="cardAutorFecha">
                    <p class="card-text small text-muted">{{ item.fecha }}</p>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
               <!-- Columna derecha populares -->
        </b-row>
      </div>
    </b-container>
<!-- Inversiones -->

<!-- Mira esta Startup with slider -->
    <div
      class="mainMiraEstaStartup pt-4 pb-4"
      v-if="arrayMiraEstaStartup.length > 0"
    >
      <b-container>
        <h1>Mira esta Startup 👇</h1>
        <cat-carousel
          :items="arrayMiraEstaStartup"
          :item-per-page="1"
          :indicators-config="{
            activeColor: '#000',
            size: 10,
            color: '#d1d1d1',
            hideIndicators: false
          }"
        >
          <template slot="item" slot-scope="{ data, index }">
            <div class="item">
              <b-card
                :img-src="data.imagen"
                img-alt="Card image"
                img-left
                class="mb-3"
              >
                <b-card-text class="titleCardMiraEstaStartup">
                   <nuxt-link :to="{ name: 'c-slug', params: { slug: data.slug } }">{{ data.titulo }}</nuxt-link>
                </b-card-text>
                <div class="cardAutorFecha">
                  <p class="card-text small text-muted">{{ data.fecha }}</p>
                </div>
              </b-card>
            </div>
          </template>
        </cat-carousel>
      </b-container>
    </div>
    <!-- Mira esta Startup with slider -->


    <!-- Ecosistema cripto -->
    <b-container>
      <div
        class="mainEcosistemaCripto mainInversiones mt-4 mb-4"
        v-if="arrayEcosistemaCripto.length > 0"
      >
        <b-row class="mt-4">
          <b-col lg="9" md="12" sm="12" cols="12">
            <h1>Ecosistema cripto</h1>
            <b-row class="pt-4">
              <b-col
                class="cardGrandeEcosistema"
                lg="12"
                md="12"
                sm="12"
                cols="12"
              >
                <b-card
                  :img-src="arrayEcosistemaCripto[0].imagen"
                  img-alt="Card image"
                  class="mb-3"
                >
                  <b-card-text class="titleCardMiraEstaStartup">
                     <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayEcosistemaCripto[0].slug } }"  style="color: #3d3d3d!important;" >{{
                      arrayEcosistemaCripto[0].titulo
                    }}</nuxt-link>
                  </b-card-text>
                  <div class="cardAutorFecha">
                    <p class="card-text small text-muted">
                      {{ arrayEcosistemaCripto[0].fecha }}
                    </p>
                  </div>
                </b-card>
              </b-col>
              <b-col
                class="cardCanalizados"
                lg="4"
                md="4"
                sm="6"
                cols="12"
                v-for="(item, index) in arrayEcosistemaCripto2"
                :key="index"
              >
                 <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }"><img :src="item.imagen" alt="Image"
                /></nuxt-link>
                <p class="card-text">
                   <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{ item.titulo }}</nuxt-link>
                </p>
                <div class="cardAutorFecha">
                  <p class="card-text small text-muted">{{ item.fecha }}</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
               <!-- Columna derecha redes sociales y mas -->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <h1>Nuestras redes</h1>
            <div class="cubreCanalziadosRedesSociales mt-4">
              <div class="canalizados_social_type">
                <div class="canalizados-social-box">
                  <a href="https://www.instagram.com/canalizados_/">
                    <div class="canalizados-sp instagram">
                    <b-icon
                      icon="instagram"
                      font-scale="1.5"
                      color="white"
                    ></b-icon>
                  </div>
                  </a>
                  
                  <span class="canalizados_social_info_counter">82</span>
                  <span class="canalizados_social_info_name">Seguidores</span>
                </div>
              </div>
              <div class="canalizados_social_type">
                <div class="canalizados-social-box">
                  <a href="https://twitter.com/Canalizados_">
                    <div class="canalizados-sp twitter">
                      <b-icon
                        icon="twitter"
                        font-scale="1.5"
                        color="white"
                      ></b-icon>
                    </div>
                  </a>
                  <span class="canalizados_social_info_counter">362</span>
                  <span class="canalizados_social_info_name">Seguidores</span>
                </div>
              </div>
              <div class="canalizados_social_type">
                <div class="canalizados-social-box">
                  <a href="https://www.linkedin.com/company/canalizados/">
                    <div class="canalizados-sp linkedin">
                      <b-icon
                        icon="linkedin"
                        font-scale="1.5"
                        color="white"
                      ></b-icon>
                    </div>
                  </a>
                  <span class="canalizados_social_info_counter">2174</span>
                  <span class="canalizados_social_info_name">Seguidores</span>
                </div>
              </div>
            </div>
            <h1 class="mt-3">Startups de Latam</h1>
            <b-row class="mt-3">
              <b-col
                cols="12"
                v-for="(item, index) in arrayStartupsDeLatam"
                :key="index"
              >
                <b-card
                  :img-src="item.imagen"
                  img-alt="Card image"
                  img-left
                  class="mb-3"
                >
                  <b-card-text>
                     <nuxt-link to="#">{{ item.titulo }}</nuxt-link>
                  </b-card-text>
                  <div class="cardAutorFecha">
                    <p class="card-text small text-muted">{{ item.excerpt }}</p>
                  </div>
                </b-card>
              </b-col>
                <nuxt-link class="btnUneteComunidad" :to="{ name: 'registro' }"
              >Únete a la Comunidad</nuxt-link
            >
            </b-row>
          </b-col>
          <!-- Columna derecha redes sociales y mas -->
        </b-row>

<!-- Recursos para startups -->

        <b-row v-if="arrayRecursosParaStartups.length > 0" class="mt-4">
          <b-col lg="9" md="12" sm="12" cols="12">
            <h1>Management y Recursos para Startups</h1>
            <b-row class="pt-4">
              <b-col
                class="cardCanalizados"
                lg="4"
                md="4"
                sm="6"
                cols="12"
                v-for="(item, index) in arrayRecursosParaStartups"
                :key="index"
              >
                 <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }"><img :src="item.imagen" alt="Image"
                /></nuxt-link>
                <p class="card-text">
                   <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{ item.titulo }}</nuxt-link>
                </p>
                <div class="cardAutorFecha">
                  <p class="card-text small text-muted">{{ item.fecha }}</p>
                </div>
              </b-col>
            </b-row>
          </b-col>

          <!-- Newsletter-->
          <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
            <div class="canalizadosNews">
              <div class="canalizadosNewsBox">
                <span class="canalizadosNewsBoxIcon">
                  Newsletter
                </span>
                <p> No pierdas de vista lo que está pasando</p>
                <p>
                 Suscribete al newsletter de Canalizados y recibe las novedades mas importantes del ecosistema emprendedor
                </p>
                <b-form>
                  <b-form-group label="Email (Requerido):" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-button
                    type="submit"
                    variant="primary"
                    block
                    class="btnUneteComunidad"
                    >Suscribirme</b-button
                  >
                </b-form>
              </div>
            </div>
          </b-col>
           <!-- Newsletter-->
        </b-row>
<!-- Recursos para startups -->


      </div>
    </b-container>
     <!-- Ecosistema cripto -->


  </div>
</template>
<script>
import { CatCarousel } from "vue-cat-carousel";
import sliderHomeTop from "~/components/sliderCanalizados/sliderHomeTop.vue";
export default {
  components: { sliderHomeTop, CatCarousel },
  layout: "layoutBase",
  async asyncData({ params, store, redirect, app }) {
    const getData = await app.$axios.$get("/getpost/get_index_nuevo?");
    return {
      arrayNoticias: getData.noticias,
      arrayInversiones: getData.inversiones,
      arrayPopulares: getData.populares
    };
  },
  data() {
    return {
      arrayMiraEstaStartup: [],
      arrayEcosistemaCripto: [],
      arrayEcosistemaCripto2: [],
      arrayRecursosParaStartups: [],
      arrayStartupsDeLatam: []
    };
  },
  async mounted() {
    console.log("populares", this.arrayPopulares);
    await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=2344")
      .then(response => {
        this.arrayMiraEstaStartup = response;
      });
    await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=4031")
      .then(response => {
        console.log("cripto", response);
        this.arrayEcosistemaCripto = response;
        this.arrayEcosistemaCripto2.push(response[1]);
        this.arrayEcosistemaCripto2.push(response[2]);
        this.arrayEcosistemaCripto2.push(response[3]);
      });
    await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=2760")
      .then(response => {
        console.log("cripto", response);
        this.arrayRecursosParaStartups = response;
      });
    await this.$axios.$get("/getpost/get_startups_widget").then(response => {
      console.log("startup", response);
      this.arrayStartupsDeLatam = response;
    });
  }
};
</script>