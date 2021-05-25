<template>
  <div>
    <div
      class="div-block-419"
      v-for="(item, index) in arrayPostHoy"
      :key="index"
    >
     <like-canalizados :p="item.id" :votos="item.votos"></like-canalizados>
     
      <div class="div-block-421">
        <div class="div-block-424">
          <nuxt-link class="link-14"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"  
            >{{item.titulo}}</nuxt-link
          >
        </div>
        <div class="div-block-422">
             <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }" >
          <div class="div-block-420 ">
            
            <img
              :src="item.avatar"
              loading="lazy"
             
              alt=""
              class="image-10 first"
            />
              
          </div>
          </nuxt-link>
           <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }" >
          <div class="text-block-7">{{item.username}}</div> </nuxt-link>
          <div class="text-block-6">•</div>
          <div class="text-block-7">{{item.comentarios}} comentarios</div>
          <div class="text-block-6">•</div>
           <nuxt-link
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo },
              }" >
          <div class="text-block-7">{{item.tituloGrupo}}</div></nuxt-link>
        </div>
      </div>
    </div>

                  <div class="div-block-434">
                    <div>Hay {{arrayPostHoy.length}} publicaciones esta semana</div>
                    <div class="text-block-6">•</div>
                    <a href="#" class="link-18">Siguiente pagina</a>
                  </div>
  </div>
</template>


<script>
import likeCanalizados from '~/components/likes/likeCanalizados.vue';
export default {
  components: { likeCanalizados },
  name: "grupo-slug-popular-nuevos",
  layout: "grupoCanalizados",
  head(){
    return {
      title: this.tituloSeo,
            meta: this.SeoPost, 
                 link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/g/' + this.$route.params.slug+'/nuevos'
        }
      ]
     
    }
  },
  data() {
    return {
      arrayPostHoy: [],
    };
  },
  async fetch() {
    await this.$axios.$get("/grupos/getpostbyslug/?slug="+this.$route.params.slug+"&s=nuevos").then((response) => {
      console.log(response);
      this.arrayPostHoy = response.posts;
    });
  },
};
</script>
