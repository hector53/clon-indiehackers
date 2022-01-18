<template>
    <div>
        <slider-home-top v-if="mostrarSlider" :arrayNoticias="arrayNoticias" class="pl-4 pr-4 mt-4" ></slider-home-top>
    </div>
</template>

<script>
import sliderHomeTop from '~/components/sliderCanalizados/sliderHomeTop.vue';
export default {
  components: { sliderHomeTop },
  layout: "layoutBase",
  data() {
      return {
           arrayNoticias: [],
           mostrarSlider: false
      }
  },
   async mounted() {
    await this.$axios
      .$get("/getpost/getnoticias?fin=3&ini=0&xPag=12")
      .then((response) => {
         console.log(response);
        this.arrayNoticias = response.noticias;
        this.mostrarSlider = true
      });
  },
};
</script>
