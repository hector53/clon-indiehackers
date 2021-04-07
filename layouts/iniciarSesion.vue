<template>
  <div>
    <header-canalizados></header-canalizados>

    <body-canalizados-2></body-canalizados-2>
    <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import BodyCanalizados2 from '~/components/homeCanalizados/bodyCanalizados2.vue';
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
export default {
  components: { footerCanalizados, HeaderCanalizados, BodyCanalizados2 },
  name: "canalizadosIniciarSesion",
    data() {
    return {};
  },
};
</script>
