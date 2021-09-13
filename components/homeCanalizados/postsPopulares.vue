<template>
          <div class="div-block-444">
      <div class="div-block-447">
        <div style="text-align: left; letter-spacing: 1.5px; color: #33558B; font-size: 18px !important; font-family: 'Space Grotesk'"><i class="far fa-star"></i> Más populares</div>
      </div>
      <div v-if="$route.name != 'rondas-inversion'">
      <div class="div-block-445"  v-for="(item, index) in arrayPopulares.slice(0,1)" :key="index">
        <div class="div-block-446">
         <div class="text-block-19">
             <nuxt-link  
              to ='/rondas-inversion'  class="link-inline-black"> Las rondas de inversion mas interesantes </nuxt-link>
            
          </div>

          <div class="text-block-imagenP">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }" >
              <img
            src="https://www.ecestaticos.com/image/clipping/fb6eabdbe590c7482b5b9717a397c93d/asi-ha-puesto-contra-las-cuerdas-el-rally-del-bitcoin-a-una-de-las-grandes-cripto-espanolas.jpg"
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
              }"  class="link-inline-black fechaPostPopular"> 31 Ago </nuxt-link></div></div>
      </div>
      </div>
      <div class="div-block-445" v-for="(item, index) in arrayPopulares" :key="index">
        <div class="div-block-446">
         <div class="text-block-19">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }"  class="link-inline-black"> {{item.titulo}} </nuxt-link>
            
          </div>

          <div class="text-block-imagenP">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }" >
              <img
            :src="item.avatar"
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
              }"  class="link-inline grupoPostPopular">{{item.tituloGrupo}}</nuxt-link>
           ·  <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }"  class="link-inline-black fechaPostPopular"> {{item.fecha}} </nuxt-link></div></div>
      </div>
    
      
    </div>
          
</template>


<script>

export default {
    name: "postPopulares", 
    data() {
        return {
            arrayPopulares :  [], 
        }
    },
    methods: {

         async getDatos(){

     await this.$axios
          .$get("/getpost/populares/")
          .then((response) => {
        //  console.log(response)
          this.arrayPopulares =  response
          });

       /*    var cookieRegistro = this.$cookies.get("registro_nuevo");
           if(cookieRegistro){
              this.msjBienvenida = true
           }*/
      }
      
    },
  async  mounted() {
      this.getDatos()

    },
}
</script>
