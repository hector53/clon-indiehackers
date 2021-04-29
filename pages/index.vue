<template>
  <div>


    <b-container>
      <b-row  v-for="(item, index) in arrayPostHoy" class="rowIndex"
      :key="index">
          <b-col cols="1" lg="1" sm="1" xs="1" class="votoIndex" >
<like-canalizados :p="item.id" :votos="item.votos"></like-canalizados>
          </b-col>
          <b-col cols="1" lg="1" sm="1" xs="1" class="imgIndex" >
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
          </b-col>
          <b-col cols="10" lg="10" sm="10" xs="10" class="colIndex" >
             <h4 class="h4Index">
                <nuxt-link class="link-14"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"  
            >{{item.titulo}}</nuxt-link>
             </h4>



 <div class="div-block-422">
           
           <nuxt-link
           class="userIndex"
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }" >
          <div class="text-block-7">{{item.username}}</div> </nuxt-link>
          <div class="text-block-6 userIndex ">•</div>

           <nuxt-link  class="text-block-7"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"  
            >{{item.comentarios}} comentarios</nuxt-link>
          <div class="text-block-6">•</div>
           <nuxt-link
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo },
              }" >
          <div class="text-block-7">{{item.tituloGrupo}}</div></nuxt-link>

            <div class="text-block-6">•</div>
          <nuxt-link  class="text-block-7"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"  
            >{{item.fecha}}</nuxt-link>
        </div>




          </b-col>
      </b-row>
    </b-container>


    

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
  components: { likeCanalizados},
  name: "index",
  layout: "homeCanalizados",
  data() {
    return {
      arrayPostHoy: [],
    };
  },
  methods: {
    async getPost(){
 console.log(this.$store.state.emailU)
    await this.$axios.$get("/getpost/hoy/?filtro=semanal").then((response) => {
   //   console.log(response);
      this.arrayPostHoy = response.posts;
    });
    }
  },
  async fetch() {
   
  },
  mounted() {
  this.getPost()
    
  },
};
</script>
