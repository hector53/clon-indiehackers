<template>
          <div class="div-block-444">
      <div class="div-block-447">
        <div style="text-align: left; letter-spacing: 1.5px; color: #33558B; font-size: 18px !important; font-family: 'Space Grotesk'"><i class="fas fa-money-bill-wave"></i> Rondas de Inversion</div>
      </div>
      <div>
      <div class="div-block-445"  v-for="(item, index) in arrayNoticias" :key="index">
        <div class="div-block-446">
         <div class="text-block-19">
             <nuxt-link  
              to ='/rondas-inversion'  class="link-inline-black"> {{item.titulo}} </nuxt-link>
            
          </div>

          <div class="text-block-imagenP">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }" >
              <img
            :src="item.imagen"
            loading="lazy"
            alt=""
            class="image-14"
          />
             </nuxt-link> 
          </div>
        
        </div>
        <div><div class="text-block-18">
           <nuxt-link  
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo }
              }"  class="link-inline grupoPostPopular">Rondas de Inversion</nuxt-link>
           ·  <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }"  class="link-inline-black fechaPostPopular"> {{item.fecha}} </nuxt-link></div></div>
      </div>
      </div>
     
    
      
    </div>
          
</template>


<script>

export default {
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
    .$get("/noticias/grupos-inversion")
    .then((response) => {
      console.log(response);
      this.arrayNoticias = response.noticias;
      this.btnVerMas = true;
    });
  },
}
</script>
