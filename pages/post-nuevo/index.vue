<template>
 <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left></sidebar-left>
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