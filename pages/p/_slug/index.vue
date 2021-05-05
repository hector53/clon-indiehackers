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
        
        return { arrayProducto: response.data.producto};
      }
    
  },
  async fetch() {

  },
};
</script>
