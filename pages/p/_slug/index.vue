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

        var tituloSeo = response.data.producto[0].nombreProducto
         const metaArray = [];
 
        metaArray.push(
          {hid: 'description',     name: 'description', content: response.data.producto[0].descripcionCorta },
          { name: 'og:locale', content: 'es_ES' },
          { name: 'og:type', content: 'article' },
          { name: 'og:title', content: response.data.producto[0].nombreProducto },
          { name: 'og:description', content: response.data.producto[0].descripcionCorta },
          { name: 'og:url', content: 'https://canalizados.com/p/'+params.slug },

          { name: 'og:site_name', content: 'Canalizados' },

          { name: 'og:image', content: response.data.producto[0].imagen },

          { name: 'og:image:width', content: '1520' },
          { name: 'og:image:height', content: '800' },

          { name: 'twitter:card', content: 'summary_large_image' },
         
         
         
         );
      

        return { arrayProducto: response.data.producto, SeoPost: metaArray, tituloSeo: tituloSeo};
      }
    
  },
    head(){
    return {
      title: this.tituloSeo,
            meta: this.SeoPost, 
     
    }
  },
  async fetch() {

  },
};
</script>
