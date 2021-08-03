<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      style="margin-bottom: 50px"
    >
    <div v-for="index in 9" :key="index" class="p-2">
<div class="cubrePostStaffpicks"  >
        <a
          href="/c/olaclick-recauda-usd-2-m-para-revolucionar-la-industria-de-los-servicios"
          class=""
          ><img
            src="https://acceso.canalizados.com/wp-content/uploads/2021/08/Restaurante-300x200.jpg"
            loading="lazy"
            alt=""
            class="image-11"
          />
          <h3>
            OlaClick recauda USD 2 M para revolucionar la industria de los
            servicios
          </h3>
          </a
        >
        <!---->
        <br />
        <div class="sobreUserStaff2">
          <div class="cubreUserStaffpick">
            <a href="/u/gzcasti" class="userStaffpick2"
              ><img
                src="https://acceso.canalizados.com/wp-content/uploads/2021/04/Foto-de-perfil-4-liviana-150x150.jpg"
                class="image-12"
              />
              <span>gzcasti</span></a
            >
            <span style="font-size: 12px">8 mins</span>
          </div>
        </div>
      </div>

    </div>
      
    </VueSlickCarousel>
  </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slide: 0,
      sliding: null,
      settings: {
  "dots": true,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 3,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
.sobreUserStaff2 {
  width: 90%;
}

</style>