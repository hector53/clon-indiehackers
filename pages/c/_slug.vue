<template>
<div>




<loader v-if="loader"></loader>

<b-container v-else >
  

  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <b-row>
    <b-col lg="2" >
 <div class="div-block-457">
           <sidebar-left :idE="idE" :p="p" :idP="idP" :votos="votos" v-if="votos"
         :favPost="favPost" :cantidadComentarios="cantidadComentarios" ></sidebar-left>
        </div>
    </b-col>
    <b-col  lg="10">
          <b-row>
               <b-col  lg="8">
                   
               <loader v-show="loader"></loader>
                    <post-slug-canalizados v-show="loader==false" :previewUrl="previewUrl"  :arrayPost="arrayPost" v-if="arrayPost"
                    :arrayTrend="arrayTrend" @CantidadComentarios="CantidadComentarios"
                    :status='status'></post-slug-canalizados>

                    
               </b-col>

                <b-col  lg="4">
       <div class="div-block-448">
              <follow-seccion :p="p" :avatar="arrayPost[0].avatar" :username="arrayPost[0].username"></follow-seccion>
                 <mas-populares></mas-populares>
                <grupos-recomendados></grupos-recomendados>
                <div>
                  <div class="text-block-20">
                    @canalizados<br />FAQ · Terminos · Privacidad
                  </div>
                </div>
              </div>
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
import MasPopulares from '~/components/postSeccion/masPopulares.vue';
import PostSlugCanalizados from '~/components/postSeccion/postSlugCanalizados.vue';
import axios from 'axios'

export default {
  components: {
    SidebarLeft,
    PostSlugCanalizados,
    Loader,
    FollowSeccion,
    MasPopulares,
    GruposRecomendados,
    

  },
  name: "bodyPostCanalizados",
  layout: 'postCanalizados',
 async asyncData({ params, store, redirect }) {

     const seoDetails = await axios.get(
      `https://acceso.canalizados.com/api/wp/v2/posts/?slug=${params.slug}`
    );
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
     
    }
  },
   data() {
    return {
        arrayPost: [], 
        arrayTrend: [], 
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
                this.arrayTrend = response.trending
                 this.p = response.post[0].p;
          this.idP = response.post[0].id;
           this.votos = response.post[0].votos;
             this.favPost = response.post[0].fav
             this.cantidadComentarios = response.post[0].cantCommentarios
        //     console.log("votos", this.votos)
             this.loader = false
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
