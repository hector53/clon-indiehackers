<template>
  <div>
    <slider-home-top
      :arrayNoticias="arrayNoticias"
      class="pl-4 pr-4 mt-4"
    ></slider-home-top>

    <div class="mainInversiones">
      <h1>Inversiones</h1>
      <b-row>
        <b-col lg="9" md="12" sm="12" cols="12" class="mt-4">
          <b-row>
            <b-col
              class="colCardCanalizados"
              lg="4"
              md="4"
              sm="6"
              cols="12"
              v-for="(item, index) in arrayInversiones"
              :key="index"
            >
              <b-card
                :img-src="item.imagen"
                img-alt="Image"
                img-top
                class="cardCanalizados"
              >
                <b-card-text>
                  <nuxt-link to="#">{{ item.titulo }}</nuxt-link>
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  item.fecha
                }}</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
          <h1>Lo más popular</h1>
          <b-row>
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
                  <nuxt-link to="#">{{ item.titulo }}</nuxt-link>
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  item.fecha
                }}</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <div class="mainMiraEstaStartup" v-if="arrayMiraEstaStartup.length>0">
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
                <nuxt-link to="#">{{ data.titulo }}</nuxt-link>
              </b-card-text>
              <b-card-text class="small text-muted">{{
                data.fecha
              }}</b-card-text>
            </b-card>
          </div>
        </template>
      </cat-carousel>
    </div>

    <div class="mainEcosistemaCripto mainInversiones mt-4 mb-4" v-if="arrayEcosistemaCripto.length>0">
      <h1>Ecosistema cripto</h1>

      <b-row>
        <b-col lg="9" md="12" sm="12" cols="12" class="mt-4">
          <b-row>
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
                img-left
                class="mb-3"
              >
                <b-card-text class="titleCardMiraEstaStartup">
                  <nuxt-link to="#">{{ arrayEcosistemaCripto[0].titulo }}</nuxt-link>
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  arrayEcosistemaCripto[0].fecha
                }}</b-card-text>
              </b-card>
            </b-col>


            <b-col
              class="colCardCanalizados mt-5"
              lg="4"
              md="4"
              sm="6"
              cols="12"
              v-for="(item, index) in arrayEcosistemaCripto2"
              :key="index"
            >
              <b-card
                :img-src="item.imagen"
                img-alt="Image"
                img-top
                class="cardCanalizados"
              >
                <b-card-text>
                  <nuxt-link to="#">{{ item.titulo }}</nuxt-link>
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  item.fecha
                }}</b-card-text>
              </b-card>
            </b-col>


          </b-row>
        </b-col>

        <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
          <h1>Seguidores en las redes</h1>
        </b-col>
      </b-row>


      <h1>Management y Recursos para Startups</h1>


      <b-row v-if="arrayRecursosParaStartups.length>0">
        <b-col lg="9" md="12" sm="12" cols="12" class="mt-4">
          <b-row>

            <b-col
              class="colCardCanalizados"
              lg="4"
              md="4"
              sm="6"
              cols="12"
              v-for="(item, index) in arrayRecursosParaStartups"
              :key="index"
            >
              <b-card
                :img-src="item.imagen"
                img-alt="Image"
                img-top
                class="cardCanalizados"
              >
                <b-card-text>
                  <nuxt-link to="#">{{ item.titulo }}</nuxt-link>
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  item.fecha
                }}</b-card-text>
              </b-card>
            </b-col>


          </b-row>
        </b-col>

        <b-col cols="12" lg="3" md="12" class="sidebarInversiones">
          <h1>Suscribirse al News</h1>
        </b-col>
      </b-row>
    </div>

  

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
      arrayRecursosParaStartups: []
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
          console.log("cripto", response)
        this.arrayEcosistemaCripto = response;
        this.arrayEcosistemaCripto2.push(response[1])
        this.arrayEcosistemaCripto2.push(response[2])
        this.arrayEcosistemaCripto2.push(response[3])
      });

      await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=2760")
      .then(response => {
          console.log("cripto", response)
        this.arrayRecursosParaStartups = response;
      });
  }
};
</script>
