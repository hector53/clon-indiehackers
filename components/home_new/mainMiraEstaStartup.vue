<template>
   <b-container v-if="arrayMiraEstaStartup.length > 0" >
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
        <p class="historiaParaContar">¿Tienes una historia para contar? <a href="contacto">Publicar mi startup</a></p>
      </b-container>
</template>

<script>
import { CatCarousel } from "vue-cat-carousel";
    export default {
        components:{CatCarousel},
        data() {
            return {
                arrayMiraEstaStartup:[]
            }
        },
      async  mounted() {
            await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=2344")
      .then(response => {
        this.arrayMiraEstaStartup = response;
      });
        },
    }
</script>

