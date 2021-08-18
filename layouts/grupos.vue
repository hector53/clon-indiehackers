<template>
  <div class="community community--groups">

  <nav-bar></nav-bar>

<!---->

  <Nuxt keep-alive />

  

<footerSeccion></footerSeccion>
 
</div>
</template>


<script>
import NavBar from '~/components/navbar/navBar.vue';
import postSeccion from '~/components/postSeccion/postSeccion.vue';
import footerSeccion from '~/components/footer/footerSeccion.vue';
export default {
    name: "grupos", 
    components: {NavBar, postSeccion, footerSeccion},
    data() {
        return {

        }
    },
  
}
</script>
