<template>
<div>






<b-container  >
  

  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <loader v-if="loader"></loader>
  <b-row v-else>
    <b-col lg="2" >
 <div class="div-block-457">
           <sidebar-left :idE="idE" :p="p" :idP="idP" :votos="votos" v-if="votos"
         :favPost="favPost" :cantidadComentarios="cantidadComentarios" ></sidebar-left>
        </div>
    </b-col>
    <b-col  lg="10">
          <b-row>
               <b-col  lg="8">
                   
               
                    <post-slug-canalizados  :previewUrl="previewUrl" 
                     :arrayPost="arrayPost" v-if="arrayPost"
                   @CantidadComentarios="CantidadComentarios"
                    :status='status'></post-slug-canalizados>

                    
               </b-col>

                <b-col  lg="4">
                  <LazyHydrate  when-visible>  
       <div class="div-block-448">
                
              <follow-seccion :p="p" :avatar="arrayPost[0].avatar"
               :username="arrayPost[0].username"></follow-seccion>
                 <mas-populares></mas-populares>
                <grupos-recomendados></grupos-recomendados>
                <div>
                  <div class="text-block-20">
                    @canalizados<br />FAQ · Terminos · Privacidad
                  </div>
                </div>
              </div>
              </LazyHydrate>  
                </b-col>
          </b-row>
      
    </b-col>
  </b-row>

</b-container>






  </div>
</template>


<script>
import SidebarLeft from '~/components/homeCanalizados/sidebarLeft.vue';
import Loader from '~/components/loader/loader.vue';
import FollowSeccion from '~/components/postSeccion/followSeccion.vue';
import GruposRecomendados from '~/components/postSeccion/gruposRecomendados.vue';
import PostSlugCanalizados from '~/components/postSeccion/postSlugCanalizados.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    SidebarLeft,
    PostSlugCanalizados,
    Loader,
    FollowSeccion,
    GruposRecomendados,
    LazyHydrate,
 MasPopulares: () => import('~/components/postSeccion/masPopulares.vue'),
  },
  name: "bodyPostCanalizados",
  layout: 'postCanalizados',
 async asyncData({ params, store, redirect, app }) {

     const seoDetails = await app.$axios.$get(
      'https://acceso.canalizados.com/api/wp/v2/posts/?slug='+params.slug
    );
     if(seoDetails[0] === undefined){
return redirect('/')
     }else{
 const metaArray = [];
      seoDetails[0].yoast_meta.map(ele => {
        metaArray.push({
         hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
var resultado2 = metaArray.findIndex( fruta => fruta.name === 'og:url' );
metaArray[resultado2].content = metaArray[resultado2].content.replace("http://acceso.canalizados.com", store.state.siteUrlSeo)
var resultado3 = metaArray.findIndex( fruta => fruta.name === 'og:title' );
var tituloSeo = metaArray[resultado3].content
    return { SeoPost: metaArray, tituloSeo: tituloSeo};
     }
   
  },

    head(){
    return {
      title: this.tituloSeo,
            meta: this.SeoPost, 
                 link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/c/' + this.$route.params.slug
        }
      ]
     
    }
  },
   data() {
    return {
        arrayPost: [], 
        idP: 0,
        votos: 0,
        cantidadComentarios: 0, 
        p:0, 
        favPost: 0, 
        status: 2, 
        loader: true, 
        previewUrl: '', 
        producto: false, 
        idE: '', 
        loader: true

    };
  },
  watch: {},
  async fetch() {   
    
  },
  methods: {

      async getpost(){
        
    
          
           
      await this.$axios
      .$get("/getpost/usuario/?slug=" + this.$route.params.slug+"&token="+this.$store.state.tokenUser)
      .then((response) => {
           console.log(response)
        if (response.status == 0) {
            this.status = 0
        //    console.log("estoy aqui redireccionar   ")
            
        } else {
            this.status = 1
                this.arrayPost = response.post
                 this.p = response.post[0].p;
          this.idP = response.post[0].id;
           this.votos = response.post[0].votos;
             this.favPost = response.post[0].fav
             this.cantidadComentarios = response.post[0].cantCommentarios
        //     console.log("votos", this.votos)
      
          //   console.log(response.previewUrl)
             this.previewUrl = response.previewUrl
               this.idE = response.post[0].idE
         //    console.log("idE", this.idE)
        this.loader = false
        }
      });  

      },

    CantidadComentarios(val){
        this.cantidadComentarios = val
    },
  
    async previewUrlPost(url) {
   //   console.log("enviar url: ", url)
      await this.$axios.$get("/link/preview/?url=" + url).then((response) => {
        //  console.log("preview", response)
      });
    },

   

  
  },
  beforeMount() {
  },
  mounted() {
   this.getpost()
  },

};
</script>
