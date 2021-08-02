<template>
 <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left style="    margin-right: 50px;"></sidebar-left>
      <div class="div-block-456">
        <div class="section-5">
                <body-post-nuevo></body-post-nuevo>
        
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import sidebarLeft from '~/components/homeCanalizados/sidebarLeft.vue';
import BodyPostNuevo from '~/components/postSeccion/bodyPostNuevo.vue';

export default {
  components: { sidebarLeft, BodyPostNuevo },
  name: "post-nuevo",
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
          href: 'https://canalizados.com/post-nuevo'
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