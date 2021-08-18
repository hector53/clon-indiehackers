<template>
                <div class="div-block-448">
                  
                  <posts-populares></posts-populares>
                  <grupos-recomendados></grupos-recomendados>
                  
                  
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
