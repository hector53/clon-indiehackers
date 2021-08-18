<template>
  
<div>
<tabDiscusion :excerptGrupo="excerptGrupo" :imagenGrupo="imagenGrupo" :tituloGrupo="tituloGrupo" :miembros="miembros" :miembrosO="miembrosO" v-if="tab == 0"
  :contenido="contenido" :moderadores="moderadores" :pGroup="pGroup" ></tabDiscusion>

<tabMiembros  :moderadores="moderadores" :pGroup="pGroup"  v-if="tab == 1" ></tabMiembros>


<tabConfigurar :moderadores="moderadores" @changeModeradores="changeModeradores" 
 @changeIconGrupo="changeIconHeader" :pGroup="pGroup"  v-if="tab == 2" 
 :excerptGrupo="excerptGrupo" :contenido="contenido" ></tabConfigurar>

</div>


  
</template>

<script>
import tabDiscusion from '~/components/gruposlug/tabDiscusion.vue';
import tabMiembros from '~/components/gruposlug/tabMiembros.vue';
import tabConfigurar from '~/components/gruposlug/tabConfigurar.vue';
export default {
  name: "contentDiscusion",
  props:['miembros', 'miembrosO', 'imagenGrupo', 'tituloGrupo', 'contenido', 'moderadores', 'tab', 'pGroup', 'excerptGrupo'],
  components: {tabDiscusion, tabMiembros, tabConfigurar},
   async fetch() {

        
},
  data() {
    return {
        
    };
  },
  watch: {
  },
  methods: {
    changeModeradores(moderadores){

       this.$emit("changeModeradores", moderadores);

    },
   changeIconHeader(icono){
     this.$emit("changeIconGrupoHeader", icono);
   }
  
  },
  mounted() {
  },
};
</script>

