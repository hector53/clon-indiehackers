<template>
  <div>
<div class="cubreBtnMisPubli">
  <button @click="misPublicaciones" class="btnCanalizado" :class="{'escalaGris' : misPubli == false}" >Mis Publicaciones</button>
  <button @click="misPubliSeguidas" class="btnCanalizado" :class="{'escalaGris' : misPubli}">Publicaciones Seguidas</button>
</div>

    <loader v-show="loader"></loader>

    <div v-show="loader==false">

 <div class="div-block-425"  v-for="(item, index) in arrayDestacados" :key="index">
                <div class="div-block-432">
                  <div class="columns w-row">
                    <div class="column w-col w-col-12">
                      <h3>
                      <nuxt-link
                  :to="{
                    name: 'c-slug',
                    params: { slug: item.slug },
                  }"
                          class="link-15"
                          >{{item.titulo}}</nuxt-link>
                      </h3>
                      <div class="div-block-426">
                        <div class="div-block-431">
                        <nuxt-link class="link-17"
                  :to="{
                    name: 'g-slug',
                    params: { slug: item.slugGrupo },
                  }"      >{{item.tituloGrupo}}</nuxt-link
                          >
                        </div>
                       
                      </div>
                    </div>
                 
                  </div>
                </div>
                <div>
                  <p style="margin-top: -10px;">
                {{item.contenido}}
                  </p>
                </div>
                <div class="div-block-428">
                  
                  <div class="div-block-430">
                    <a href="#" class="link-16">{{item.votos}} Votos</a>
                  </div>
                      <div class="text-block-6">•</div>
                  <div class="div-block-430">
                    <a href="#" class="link-16">{{item.comentarios}} Comentarios</a>
                  </div>
                    <div class="text-block-6">•</div>
                  <div class="div-block-430">
                    <a href="#" class="link-16">{{item.fecha}}</a>
                  </div>
                </div>
              </div>



    </div>
             


  </div>
</template>

<script>
import Loader from '~/components/loader/loader.vue';


export default {
  components: {Loader  },
  layout: "perfilCanalizados",
  name: "perfilPostsDestacados",
  head(){
    return {
      title: this.$route.params.username+' - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - '+this.$route.params.username }
    ],
       link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/u/'+this.$route.params.username
        }
      ]
     
    }
  },
  data() {
    return {
          arrayDestacados: [], 
          loader: true, 
          misPubli: true, 
    };
  },

  watch: {
    
  },
  methods: {
    misPubliSeguidas(){
        if(this.misPubli){
                    //hago algo
                    this.misPubli = false
                    this.loader = true
                    this.getPubliSeguidas()
              }
    },
    misPublicaciones(){
      if(this.misPubli==false){
            //hago algo
            this.misPubli = true
             this.loader = true
             this.getDestacados()
      }
    },
     async getPubliSeguidas(){

    
      await this.$axios
        .$get("/perfil/getpubliseguidas?username=" + this.$route.params.username)
        .then((response) => {
         //   console.log(response)
          this.arrayDestacados = response
          this.loader = false
        });
    },

    async getDestacados(){

    
      await this.$axios
        .$get("/perfil/getdestacados?username=" + this.$route.params.username)
        .then((response) => {
         //   console.log(response)
          this.arrayDestacados = response
          this.loader = false
        });
    }
    
  },
  mounted() {
    this.getDestacados()
  },
};
</script>
<style >
.btnCanalizado{
      background: #7986CB;
    color: white;
    border-radius: 5px;
    padding: 10px; 
      outline: none!important;
}
.cubreBtnMisPubli{
      margin-bottom: 20px;
    display: inline-block;
      outline: none!important;
}
.escalaGris{
      filter: grayscale(.7);
    cursor: pointer;
    opacity: .5;
}
input[type="button"] {
 
  outline: none!important;
}
</style>

