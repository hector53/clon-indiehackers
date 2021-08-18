<template>
  <div class="post-page
           post-page--post
           post-page--browser ">

  <nav-bar></nav-bar>

<!---->

  <Nuxt keep-alive  />

  

<footerSeccion></footerSeccion>
 
</div>
</template>


<script>
import NavBar from '~/components/navbar/navBar.vue';
import postSeccion from '~/components/postSeccion/postSeccion.vue';
import footerSeccion from '~/components/footer/footerSeccion.vue';
import Loader from '~/components/loader/loader.vue';
export default {
    name: "postSlug", 
    components: {NavBar, postSeccion, footerSeccion, Loader},
    data() {
        return {

        }
    },
  
}
</script>
