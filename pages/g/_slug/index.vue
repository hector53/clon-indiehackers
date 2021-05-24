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
import axios from 'axios'
export default {
  components: { likeCanalizados },
  name: "grupo-slug-popular-index",
  layout: "grupoCanalizados",
 async asyncData({ params, store, redirect }) {

     const seoDetails = await axios.get(
      `https://acceso.canalizados.com/api/wp/v2/grupos/?slug=${params.slug}`
    );

    console.log(seoDetails.data[0])
  if(seoDetails.data[0] === undefined){

    return redirect('/')

    
  }else{

    const metaArray = [];
    
      seoDetails.data[0].yoast_meta.map(ele => {
        metaArray.push({
         hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
//metaArray[4].content = metaArray[4].content.replace("http://acceso.canalizados.com", store.state.siteUrlSeo)
var tituloSeo = metaArray[2].content
    return { SeoPost: metaArray, tituloSeo: tituloSeo}
      
  }
    
  },
   head(){
    return {
      title: this.tituloSeo,
            meta: this.SeoPost, 
                 link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/g/' + this.$route.params.slug
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
   
  },
  methods: {
   async getpostspo(){
     console.log("/grupos/getpostbyslug/?slug="+this.$route.params.slug+"&s=populares")
       await this.$axios.$get("/grupos/getpostbyslug/?slug="+this.$route.params.slug+"&s=populares").then((response) => {
    //  console.log(response);
      this.arrayPostHoy = response.posts;
    });
    }
  },
  mounted() {
    this.getpostspo()
  },
};
</script>
