<template>
  <div>
   <article class="paginas">
       <h1>Quienes Somos</h1>
       <p v-html="contenido"></p>
   </article>
  </div>
</template>
<script>
export default {
  name: "politica-de-privacidad",
  layout: "perfilEditCanalizados",
  async asyncData({ params, store, redirect, app }) {
     const response = await app.$axios.$get(
      '/get/quienessomos/'
    );
    return {contenido: response}
  },
    head(){
    return {
       title: 'Quienes Somos - Canalizados',
       
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/quienes-somos'
        }
      ]
    }
  },
  data() {
    return {
    };
  },
  methods: {
  
  },
  mounted() {
  },
};
</script>
