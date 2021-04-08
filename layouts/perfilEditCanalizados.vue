<template>
  <div>
    <header-canalizados></header-canalizados>

<div class="container w-container">
    <div class="div-block-455">
      <sidebar-left></sidebar-left>
      <div class="div-block-456">
           <Nuxt  />
      </div>
           
    </div>
</div>


   




 <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
import SidebarLeft from '~/components/homeCanalizados/sidebarLeft.vue';
export default {
  components: { footerCanalizados, HeaderCanalizados, SidebarLeft },
  name: "perfilEditCanalizados",
    data() {
    return {
         arrayDataUser: {},
          gruposRecomendados: [], 
        labelRecomendados: 'Tus Grupos'
    };
  },
 
  methods: {
  },
  mounted() {
  },
};
</script>
<style >

.list-10 {
    
    display: inline-block!important;
  
}
.column-10 {
    
    display: grid!important;
}
.image-16 {
   
    margin: auto;
}
</style>