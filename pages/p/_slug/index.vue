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
          { property: 'og:locale', content: 'es_ES' },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: response.data.producto[0].nombreProducto+' - Canalizados' },
          { property: 'og:description', content: response.data.producto[0].descripcionCorta },
          { property: 'og:url', content: 'https://canalizados.com/p/'+params.slug },

          { property: 'og:site_name', content: 'Canalizados' },

          { property: 'og:image', content: response.data.producto[0].imagen },

          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },

          { name: 'twitter:card', content: 'summary_large_image' },
         
         
         
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
