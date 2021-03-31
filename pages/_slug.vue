<template>
<div class="interviews__body">
    <div class="interviews__header">
      <h1 class="interviews__title" style="margin-bottom: 20px">{{titulo}}</h1>
   <div class="interviews__description" v-html="contenido">  </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "slugPages",
   layout: "paginas",
  components: {},
  data() {
    return {
        contenido: '',
        titulo: ''
    };
  },
  methods: {
     
   },
  async fetch() {
       await this.$axios
        .$get("/wp/v2/pages?slug=" + this.$route.params.slug)
        .then((response) => {
       console.log(response)
            this.contenido = response[0].content.rendered
            this.titulo =  response[0].title.rendered
        
        });
  },
  mounted() {
  },
};
</script>
<style>
    @import '~/assets/css/canalizados.css';
    </style>
