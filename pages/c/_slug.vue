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
      'https://acceso.canalizados.com/api/seo/slug/?slug='+params.slug
    );
    
     if(seoDetails.status == 0){
return redirect('/')
     }else{
     //   console.log(seoDetails.post[0].titulo)
     var imagenSeo = seoDetails.post[0].imagen
     imagenSeo = imagenSeo.replace("https", "http")
         const metaArray = []
metaArray.push(
  {
    hid: 'og:type',
     property:"og:type", content:"article"
  },
  {
    hid: 'og:title',
     property:"og:title", content: seoDetails.post[0].titulo
  },
  {
    hid: 'og:description',
     property:"og:description", content:seoDetails.post[0].descripcion
  },
  {
      hid: 'og:url',
     property:"og:url", content:"https://canalizados.com/c/"+params.slug
  },
  {
    hid: 'og:site_name',
     property:"og:site_name", content:"Canalizados"
  },

  {
    hid: 'og:image',
     property:"og:image", content: imagenSeo
  },
   {
      hid: 'twitter:card',
     name:"twitter:card", content:"summary_large_image" 
  },
   {
         hid: 'twitter:label1',
     name:"twitter:label1", content:"Escrito por"
  },
   {
      hid: 'twitter:data1',
     name:"twitter:data1",  content:seoDetails.post[0].username
  },
  {
     hid: 'twitter:title',
  name: 'twitter:title',
  content: seoDetails.post[0].titulo
  },
  {
      hid: 'twitter:image',
  name: 'twitter:image',
  content: imagenSeo
  },
  {
      hid: 'twitter:description',
  name: 'twitter:description',
  content: seoDetails.post[0].descripcion
  },
)
    return { SeoPost: metaArray, tituloSeo: seoDetails.post[0].titulo};
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
      ], 
      script: [
      {src: 'https://platform-api.sharethis.com/js/sharethis.js#property=60c9e07cbae049001929f615&product=inline-share-buttons', 
      async: true
      },
    ],
     
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
