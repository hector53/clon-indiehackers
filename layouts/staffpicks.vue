<template>
  <div>
    <header-canalizados></header-canalizados>

    <StaffPicks />

   <LazyHydrate  when-visible> <footer-canalizados></footer-canalizados>
   </LazyHydrate> 
  </div>
</template>
<script>
import StaffPicks from '~/components/staffpicks/staffpicks.vue';
import BodyCanalizados from '~/components/homeCanalizados/bodyCanalizados.vue';
import SidebarLeft from '../components/homeCanalizados/sidebarLeft.vue';
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
import LazyHydrate from 'vue-lazy-hydration';
export default {
  components: { SidebarLeft, footerCanalizados, BodyCanalizados, HeaderCanalizados, LazyHydrate, StaffPicks},
  name: "homeLayout",
    data() {
    return {};
  },
};
</script>
