<template>
  <div>

 <p>Este es el lugar para mostrar tus mejores publicaciones: las historias, los consejos y las discusiones de las que estás más orgulloso. Simplemente cree una publicación o visite cualquiera de sus publicaciones existentes, luego haga clic en el menú de opciones para agregarlas en la siguiente lista.</p>
   
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
  data() {
    return {
          arrayDestacados: [], 
          loader: true
    };
  },

  watch: {
    
  },
  methods: {

    async getDestacados(){

    
      await this.$axios
        .$get("/perfil/getdestacados?username=" + this.$route.params.username)
        .then((response) => {
            console.log(response)
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

