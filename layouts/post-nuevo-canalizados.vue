<template>
  <div>
    <header-canalizados></header-canalizados>

  <Nuxt />


  <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';

export default {
  components: { footerCanalizados, HeaderCanalizados },
  name: "post-nuevo-canalizados",
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
.section-5{
    margin-top: 0;
}

</style>