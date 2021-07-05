<template>
                <div class="div-block-448">
                  
                  <posts-populares></posts-populares>

                  <grupos-recomendados></grupos-recomendados>
                 
                  <div>
                    <div class="text-block-20">
                      <a class="linkTwitter" href="https://twitter.com/canalizados_">
                      @canalizados_</a>
                      <div class="menuPoliticas">
                        <nuxt-link to="/quienes-somos">Quienes Somos </nuxt-link> <a>·</a>
                         <nuxt-link to="/politica-de-privacidad" >Privacidad </nuxt-link> <a>·</a>
                         <nuxt-link to="/contacto" >Contacto </nuxt-link>
                      </div>
                      
                    </div>
                  </div>
                </div>
          
</template>


<script>
import GruposRecomendados from './gruposRecomendados.vue'
import postsPopulares from './postsPopulares.vue'

export default {
  components: { postsPopulares, GruposRecomendados },
    name: "sidebarDerecho", 
    data() {
        return {
        }
    },
    methods: {
      
    },
  async  mounted() {
    },
}
</script>
