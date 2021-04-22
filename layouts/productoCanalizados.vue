<template>
  <div>
    <header-canalizados></header-canalizados>

         <Nuxt keep-alive />
    <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
export default {
  components: { footerCanalizados, HeaderCanalizados },
  name: "productoCanalizados",
    data() {
    return {
       arrayProducto: {}
    };
  },
   async fetch() {
      
  },
  methods: {
   

        
  },
  async mounted() {
   
  },
};
</script>
<style >


</style>