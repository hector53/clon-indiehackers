<template>
 <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left></sidebar-left>
      <div class="div-block-456">
        <div class="section-5">
             
        <body-post-editar></body-post-editar>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import sidebarLeft from '~/components/homeCanalizados/sidebarLeft.vue';
import BodyPostEditar from '~/components/postSeccion/bodyPostEditar.vue';

export default {
  components: { sidebarLeft, BodyPostEditar },
  name: "post-editar2",
  layout: 'post-nuevo-canalizados',
    data() {
    return {
        
    };
  },
  head(){
    return {
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/editar-post'
        }
      ]
     
    }
  },
   async fetch() {
   },
  methods: {
     
     },
  mounted() {
  },
};
</script>
<style >


</style>