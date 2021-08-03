<template>
  <div>
    <VueSlickCarousel v-bind="settings" style="margin-bottom: 50px" v-if="mostrar">
      <div v-for="(item, index) in arrayNoticias"        :key="index" class="p-2">
        <div class="cubrePostStaffpicks">
          <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
            <img :src="item.imagen" loading="lazy" alt="" class="image-11 imgslider" />
            <h3>{{ item.titulo }}</h3>
          </nuxt-link>
          <div
            class="div-block-431"
            style="padding-left: 10px"
            v-if="item.slugGrupo != ''"
          >
            <nuxt-link
              :to="{ name: 'g-slug', params: { slug: item.slugGrupo } }"
              class="link-17"
              >{{ item.tituloGrupo }}</nuxt-link
            >
          </div>
          <br />
          <div class="sobreUserStaff2">
            <div class="cubreUserStaffpick">
              <nuxt-link
                class="userStaffpick2"
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }"
              >
                <img :src="item.avatar" class="image-12" />
                <span>{{ item.username }}</span></nuxt-link
              >
              <span style="font-size: 12px">{{ item.fecha }}</span>
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
      mostrar: false,
      arrayNoticias: [],
      slide: 0,
      sliding: null,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
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
  async mounted() {
    await this.$axios
      .$get("/getpost/getnoticias?fin=12&ini=0&xPag=9")
      .then((response) => {
        console.log(response);
        this.arrayNoticias = response.noticias;
        this.mostrar = true
      });
  },
};
</script>

<style>
.sobreUserStaff2 {
  width: 90%;
}
.imgslider{
  height: auto;
}
</style>