<template>
 <div>

   
    <loader v-show="loader"></loader>

    <div v-show="loader==false">

 <div class="div-block-425"  v-for="(item, index) in arrayPosts" :key="index">
      <div class="div-block-430">
                    <a href="#" class="link-16">{{item.fecha}} - <span class="creastePost">Creaste un Post</span></a>
                  </div>
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
                    
          <div class="user-feed-item__markdown-content" v-if="item.esLink == 1" >
         
        </div>
                  <p style="margin-top: -10px;" v-if="item.esLink == 1">   <a :href="item.contenido"  target="_blank">{{item.contenido}}</a> </p>
                  <p style="margin-top: -10px;" v-else v-html="item.contenido"> </p>
                </div>
                <div class="div-block-428">
                  
                
                 
                </div>
              </div>



    </div>
             


  </div>
</template>

<script>
export default {
      layout: "perfilCanalizados",
  name: "historyPerfilCanalizados",
  components: {},
   head(){
    return {
      title: 'Usuario - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - Usuario' }
    ],
       link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/u/'+this.$route.params.username+'/historial'
        }
      ]
     
    }
  },
  data() {
    return {
      activePost: true, 
      arrayPosts: [],
      loader: true
    };
  },
  methods: {
    async getHistory() {
    
      await this.$axios
        .$get("/perfil/gethistory?username=" + this.$route.params.username)
        .then((response) => {
            console.log(response)
          this.arrayPosts = response.post
          this.loader = false
        });
    },
  },
  async fetch() {},
  mounted() {
  console.log(this.$route)
       this.getHistory()
    
   
  },
};
</script>
<style >
.creastePost{
    font-weight: bold;
}
</style>
