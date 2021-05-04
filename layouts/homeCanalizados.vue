<template>
  <div>
    <header-canalizados></header-canalizados>

    <body-canalizados></body-canalizados>

   <LazyHydrate  when-visible> <footer-canalizados></footer-canalizados>
   </LazyHydrate> 
  </div>
</template>


<script>
import BodyCanalizados from '~/components/homeCanalizados/bodyCanalizados.vue';
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
import LazyHydrate from 'vue-lazy-hydration';
export default {
  components: { footerCanalizados, BodyCanalizados, HeaderCanalizados, LazyHydrate},
  name: "homeLayout",
    data() {
    return {};
  },
};
</script>
