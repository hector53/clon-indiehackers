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
          {hid: 'og:locale',   property: 'og:locale', content: 'es_ES' },
          {hid: 'og:type',   property: 'og:type', content: 'article' },
          {hid: 'og:title',   property: 'og:title', content: response.data.producto[0].nombreProducto+' - Canalizados' },
          {hid: 'og:description',   property: 'og:description', content: response.data.producto[0].descripcionCorta },
          {hid: 'og:url',   property: 'og:url', content: 'https://canalizados.com/p/'+params.slug },

          {hid: 'og:site_name',   property: 'og:site_name', content: 'Canalizados' },

          {hid: 'og:image',   property: 'og:image', content: response.data.producto[0].imagen },

          {hid: 'og:image:width',   property: 'og:image:width', content: '1200' },
          {hid: 'og:image:height',   property: 'og:image:height', content: '630' },

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
