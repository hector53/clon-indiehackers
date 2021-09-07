<template>
  <div v-bind="settings" v-if="mostrar">
    <!-- <h1>{{arrayNoticias[0].excerpt.slice(0, 10)}}</h1> -->
    <!-- <b-card>
    <div v-for="(item, index) in arrayNoticias.slice(0, 1)" :key="index">
      <b-row>
        <b-col cols="12">
          <img :src="item.imagen">
        </b-col>
        <b-col cols="7">
          <h3 class="main-title">{{ item.titulo }}</h3>
          <nuxt-link
            class="userStaffpick2"
            :to="{
              name: 'u-username',
              params: { username: item.username },
            }"
          >
            <p class="infoAdicional" style="margin-left: 15px;">{{item.username}} </p>
            <p> · </p>
            <p class="infoAdicional">{{ item.fecha }}</p>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
    </b-card> -->
    <div style="margin-bottom: 20px;" class="container-noticias" v-for="(item, index) in arrayNoticias.slice(0, 2)" :key="index">
      <!-- <h2>Estas son las nuevas novedades sobre <span color="#ccc">{{item.slugGrupo}}</span></h2> -->
      <b-row>
        <b-col cols="9">
          <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
            <h3 class="main-title">{{ item.titulo }}</h3>
          </nuxt-link>
        </b-col>
        <b-col cols="3">
          <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
            <img 
              :src="item.imagen" 
              loading="lazy" alt="" 
            />
          </nuxt-link>
        </b-col>
        <div class="d-flex">
          <ContentItem :content="item.excerpt" :slug="item.slug" :nombre="item.username" :fecha="item.fecha"/>
          <!-- <p>{{arrayNoticias[0].excerpt.slice(0, 10)}}</p> --><!-- 
          <nuxt-link
            class="userStaffpick2"
            :to="{
              name: 'u-username',
              params: { username: item.username },
            }"
          >
            <p class="infoAdicional" style="margin-left: 15px;">{{item.username}} </p>
            <p> · </p>
            <p class="infoAdicional">{{ item.fecha }}</p>
          </nuxt-link> -->
        </div>
        <h4 style="color: #9c9c9c; margin-left: 20px;">Novedades sobre <span style="font-weight: 700">{{item.slugGrupo}}</span></h4>
       <sub-item-destacada :relacionados="item.relacionados" :slug="item.slug" ></sub-item-destacada>
      </b-row>
    </div>
    <!-- <VueSlickCarousel v-bind="settings" style="margin-bottom: 50px;" v-if="mostrar" class="slider">
      <div v-for="(item, index) in arrayNoticias" :key="index" class="p-2">
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
    </VueSlickCarousel> -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SubItemDestacada from './newDestacadaComp/subItemDestacada.vue';
import ContentItem from './newDestacadaComp/contentItem.vue';
export default {
  components: { VueSlickCarousel,SubItemDestacada, ContentItem },
  data() {
    return {
      showComplete: false,
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
              dots: false,
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
      .$get("/noticias/destacada-relacionada")
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

@media screen and (max-width:480px) {
  .slider {
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>