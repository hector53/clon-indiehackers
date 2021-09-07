<template>
  <div v-bind="settings" v-if="mostrar">
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
        <div class="d-flex">
          <ContentItem :content="item.excerpt" :slug="item.slug" :nombre="item.username" :fecha="item.fecha"/>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import ContentItem from '../homeCanalizados/newDestacadaComp/contentItem.vue';
export default {
  components: { ContentItem },
  data() {
    return {
      showComplete: false,
      mostrar: false,
      arrayNoticias: [],
    };
  },
  async mounted() {
    await this.$axios
      .$get("/noticias/grupos-inversion")
      .then((response) => {
        console.log(response);
        this.arrayNoticias = response.noticias;
        this.mostrar = true
      });
  },
};
</script>