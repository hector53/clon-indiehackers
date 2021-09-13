<template>
                <div class="div-block-448">
                  <TopGrupos />
                  <Rondas v-if="$route.name != 'staffpicks-pag'" />
                  <RondasInversion v-if="$route.name != 'rondas-inversion'" />
                  <!-- <posts-populares></posts-populares> -->
                  <!-- <grupos-recomendados></grupos-recomendados> -->
                  
                  
                </div>
          
</template>


<script>
import TopGrupos from './top-grupos.vue';
import Rondas from './rondas.vue';
import RondasInversion from './rondas-inversion.vue';
import GruposRecomendados from './gruposRecomendados.vue'
import postsPopulares from './postsPopulares.vue'

export default {
  components: {TopGrupos, Rondas, RondasInversion,  postsPopulares, GruposRecomendados },
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
