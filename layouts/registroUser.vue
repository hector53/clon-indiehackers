<template>
  <div class="authentication authentication-sign-up">

  <nav-bar></nav-bar>

<!---->

  <Nuxt />

  

<footerSeccion></footerSeccion>
 
</div>
</template>


<script>
import NavBar from '~/components/navbar/navBar.vue';
import postSeccion from '~/components/postSeccion/postSeccion.vue';
import footerSeccion from '~/components/footer/footerSeccion.vue';
export default {
    name: "default", 
    components: {NavBar, postSeccion, footerSeccion},
    data() {
        return {

        }
    },
  
}
</script>
