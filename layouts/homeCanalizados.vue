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
<style >
.div-block-458{
  height: 530px;
}
.div-block-433 {
  
    height: 100%;
}

.div-block-444 {
  
    height: 100%;
}
</style>
