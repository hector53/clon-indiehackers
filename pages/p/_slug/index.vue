<template>
 <div>
   <body-producto  :arrayProducto="arrayProducto"></body-producto>
  
 </div>  
</template>


<script>
import axios from 'axios'
import bodyProducto from '~/components/producto/bodyProducto.vue';
export default {
  components: { bodyProducto },
  name: "producto-slug",
  layout: "productoCanalizados",
  data() {
    return {
    };
  },

  async asyncData({ params, store, redirect }) {

     const response = await axios.get(
      `https://acceso.canalizados.com/api/productos/getdetailproducto?slug=${params.slug}&token=${store.state.tokenUser}`
    );
    console.log(response.data)
      if(response.data.status == 2){
        return redirect('/')
      }else{

        var tituloSeo = response.data.producto[0].nombreProducto+' - Canalizados'
         const metaArray = [];
 
        metaArray.push(
          {hid: 'description',     name: 'description', content: response.data.producto[0].descripcionCorta },
          {hid: 'og:locale',   name: 'og:locale', content: 'es_ES' },
          {hid: 'og:type',   name: 'og:type', content: 'article' },
          {hid: 'og:title',   name: 'og:title', content: response.data.producto[0].nombreProducto+' - Canalizados' },
          {hid: 'og:description',   name: 'og:description', content: response.data.producto[0].descripcionCorta },
          {hid: 'og:url',   name: 'og:url', content: 'https://canalizados.com/p/'+params.slug },

          {hid: 'og:site_name',   name: 'og:site_name', content: 'Canalizados' },

          {hid: 'og:image',   name: 'og:image', content: response.data.producto[0].imagen },

          {hid: 'og:image:width',   name: 'og:image:width', content: '1200' },
          {hid: 'og:image:height',   name: 'og:image:height', content: '630' },

          {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
         
         
         
         );
      

        return { arrayProducto: response.data.producto, SeoPost: metaArray, tituloSeo: tituloSeo};
      }
    
  },
    head(){
    return {
      title: this.tituloSeo,
            meta: this.SeoPost, 
            link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/p/' + this.$route.params.slug
        }
      ]
     
    }
  },
  async fetch() {

  },
};
</script>
