<template>
  <div>
 <b-row class="mb-5" style="    margin: 0;"  >
      <b-col md="6" class="mt-3" style="padding: 5px;"
         v-for="(item, index) in arrayNoticias"
      :key="index"
       >
         <nuxt-link
                :to="{ name: 'c-slug', params: { slug: item.slug } }" >

                  <div class="cubrePostStaffpicks">
            <img :src="item.imagen" loading="lazy" alt="" class="image-11">
            <div>
              <h3>{{ item.titulo }}</h3>
            <p v-text="item.contenido"></p>
            <div class="cubreUserStaffpick">
<nuxt-link  class="userStaffpick2" :to="{ name: 'u-username', params: { username: item.username } }">
            <img  :src="item.imagen" class="image-12"> <span>{{item.username}}</span></nuxt-link>
            <span style="    font-size: 12px;">{{ item.fecha }}</span>
            </div>
            
            </div>
            
        </div>

         </nuxt-link>
      
      </b-col>
</b-row>



    
     <nuxt-link to="/staffpicks" v-if="btnVerMas" class="botonCanalizados btnVerMas" 
     data-v-70e177c0="">Ver más...</nuxt-link>
               
  </div>
</template>


<script>
import likeCanalizados from '../likes/likeCanalizados.vue';
export default {
  components: { likeCanalizados },
  name: "historiasDestacadas",
  data() {
    return {
      arrayNoticias: [],
      btnVerMas: false
    };
  },
  async fetch() {},
  async mounted() {
    await this.$axios.$get("/getpost/getnoticias?fin=12&ini=0&xPag=12").then((response) => {
     // console.log(response);
      this.arrayNoticias = response.noticias;
      this.btnVerMas = true
    });
  },
};
</script>
