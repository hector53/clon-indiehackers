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
   const seoDetails = await axios.get(
      `https://acceso.canalizados.com/api/wp/v2/producto/?slug=${params.slug}`
    );
      const metaArray = [];
     metaArray.push({
              hid: 'description', name: 'description', content: response.data.producto[0].descripcionCorta
        });
      seoDetails.data[0].yoast_meta.map(ele => {
          
        metaArray.push({
         hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
var resultado2 = metaArray.findIndex( fruta => fruta.name === 'og:url' );
metaArray[resultado2].content = metaArray[resultado2].content.replace("http://acceso.canalizados.com", store.state.siteUrlSeo)
var resultado3 = metaArray.findIndex( fruta => fruta.name === 'og:title' );
var tituloSeo = metaArray[resultado3].content
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
