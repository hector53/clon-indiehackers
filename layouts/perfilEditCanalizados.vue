<template>
  <div>
    <header-canalizados></header-canalizados>


<b-container >
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <b-row>
    <b-col lg="2" >
          <sidebar-left></sidebar-left>
    </b-col>
    <b-col  lg="10">
           <Nuxt  />

    </b-col>

  </b-row>


</b-container>



   




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
         
    };
  },
 
  methods: {
  },
  mounted() {
  },
};
</script>
