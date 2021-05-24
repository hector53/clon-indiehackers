<template>
   <div>
        <header class="mt-1 headerGrupo">
        <h1>Top Grupos</h1>
        <nuxt-link to="/grupo-nuevo" class="botonCanalizados aliD">Crear Grupo</nuxt-link>
           
        </header>
   <b-row class="miDeck mb-5"  >
       <b-col md="4" class="mt-3" v-for="(item, index) in arrayGrupos" :key="index" >
           <client-only> <nuxt-link :to="{name: 'g-slug', params: {slug: item.slug}}">
            <b-card
            border-variant="primary"
            header=" "
            header-bg-variant="primary"
            align="left"
            :title="item.titulo"
            >
            <b-card-text>
                <p v-text="item.excerpt"></p>
                <h4 class="cantPubliGrupo">{{item.cantPubli}} publicaciones </h4>
            </b-card-text>
            </b-card>
            </nuxt-link></client-only>
           
       </b-col> 
       
   </b-row>
   
   
   </div>
</template>

<script>

export default {
  layout: "perfilEditCanalizados",
  name: "grupos",
  components: {},
 async fetch() {
      
  await this.$axios
        .$get("/grupos/getgrupostop")
        .then((response) => {
            console.log(response)
          this.arrayGrupos = response
        })
  },
  data() {
    return {
        arrayGrupos: []
    };
  },
   head(){
    return {
      title: 'Grupos - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - Grupos' }
    ],
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/grupos'
        }
      ]
     
    }
  },
  watch: {},
  methods: {
  
  },
  mounted() {
  },
  created() {
    
  },
};
</script>

