<template>
  <div>
    
<b-row align-v="stretch">
    <b-col   md="6" class="mb-4"   v-for="(item, index) in arrayNoticias"
        :key="index" >
       

      <div class="cubrePostStaffpicks">
           <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
             <img :src="item.imagen" loading="lazy" alt="" class="image-11" />
              <h3>{{ item.titulo }}</h3>
              <p v-text="item.contenido"></p>
           </nuxt-link>
              <div class="div-block-431" style="padding-left:10px" v-if="item.slugGrupo != ''">
                <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: item.slugGrupo } }"
                  class="link-17"
                  >{{ item.tituloGrupo }}</nuxt-link>
              </div>
              <br>
              <div class="sobreUserStaff">
                <div class="cubreUserStaffpick">
                <nuxt-link
                  class="userStaffpick2"
                  :to="{
                    name: 'u-username',
                    params: { username: item.username },
                  }"
                >
                  <img :src="item.avatar" class="image-12" />
                  <span>{{ item.username }}</span></nuxt-link
                >
                <span style="font-size: 12px">{{ item.fecha }}</span>
              </div>
              </div>
              
          </div>
    </b-col>
   
  </b-row>

    <nuxt-link
      to="/staffpicks"
      v-if="btnVerMas"
      class="botonCanalizados btnVerMas"
      data-v-70e177c0=""
      >Ver más...</nuxt-link
    >
  </div>
</template>


<script>
import likeCanalizados from "../likes/likeCanalizados.vue";
export default {
  components: { likeCanalizados },
  name: "historiasDestacadas",
  data() {
    return {
      arrayNoticias: [],
      btnVerMas: false,
    };
  },
  async fetch() {},
  async mounted() {
    await this.$axios
      .$get("/getpost/getnoticias?fin=12&ini=0&xPag=12")
      .then((response) => {
         console.log(response);
        this.arrayNoticias = response.noticias;
        this.btnVerMas = true;
        console.log("ya cargo las historias ")
        this.$emit("cargaCompleta")
      });
  },
};
</script>
