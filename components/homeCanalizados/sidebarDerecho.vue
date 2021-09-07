<template>
                <div class="div-block-448">
                  <TopGrupos />
                  <Rondas v-if="$route.name != 'staffpicks'" />
                  <posts-populares></posts-populares>
                  <!-- <grupos-recomendados></grupos-recomendados> -->
                  
                  
                </div>
          
</template>


<script>
import TopGrupos from './top-grupos.vue';
import Rondas from './rondas.vue';
import GruposRecomendados from './gruposRecomendados.vue'
import postsPopulares from './postsPopulares.vue'

export default {
  components: {TopGrupos, Rondas,  postsPopulares, GruposRecomendados },
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
