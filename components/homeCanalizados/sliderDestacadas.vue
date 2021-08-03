<template>
  <div class="card mb-5" style="border-radius: 10px;">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://acceso.canalizados.com/wp-content/uploads/2021/08/IMG_9903-1024x573.jpeg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    <h3 class="title-slider" style="font-weight: bold;">Newtopia invertirá USD 50 M en startups en etapa temprana de América Latina</h3>
    <h4>América Latina vive un boom alrededor del venture capital global con nombres de la talla de Sequoia Capital, Andreessen Horowitz y SoftBank. Ahora, Newtopia VC acaba de lanzarse desde Argentina con USD $50 millones para invertir en startups de toda la región.</h4>
    <div class="" style="display: flex;">
    <img src="https://acceso.canalizados.com/wp-content/uploads/2021/06/2_20140707_132434%20(2)-150x150.jpg" alt="" class="image-12">
    <h7>jose.martin</h7>
    <p>·</p>
    <p>03/08/2021</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>