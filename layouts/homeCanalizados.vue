<template>
  <div>
    <header-canalizados></header-canalizados>

    <body-canalizados></body-canalizados>

    <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import BodyCanalizados from '~/components/homeCanalizados/bodyCanalizados.vue';
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
export default {
  components: { footerCanalizados, BodyCanalizados, HeaderCanalizados },
  name: "homeLayout",
    data() {
    return {};
  },
};
</script>
