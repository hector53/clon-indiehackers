<template>
  <div>
   <article  class="paginas">
       <h1>Politica de Privacidad</h1>
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
      '/get/politicas/'
    );
    return {contenido: response}
  },
    head(){
    return {
       title: 'Politica de Privacidad - Canalizados',
       
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/politica-de-privacidad'
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