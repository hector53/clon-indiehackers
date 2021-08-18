<template>
  <div class="user  ">

  <nav-bar></nav-bar>

 <div>
<perfil-user v-if="$store.state.username == $route.params.username"
 :arrayDataUser="arrayDataUser" @recargarDataUser="recargarDataUser"></perfil-user>
<perfil-not-user v-else  :arrayDataUser="arrayDataUser"  @recargarDataUser="recargarDataUser" ></perfil-not-user>
  </div>

  

  

<footerSeccion></footerSeccion>
 
</div>
</template>


<script>

import perfilUser from '~/components/perfil/perfilUser.vue';
import perfilNotUser from '~/components/perfil/perfilNotUser.vue';
import NavBar from '~/components/navbar/navBar.vue';
import postSeccion from '~/components/postSeccion/postSeccion.vue';
import footerSeccion from '~/components/footer/footerSeccion.vue';
export default {
    name: "default", 
    components: {NavBar, postSeccion, footerSeccion, perfilUser, perfilNotUser },
    data() {
        return {
 arrayDataUser: {}
        }
    },
      async fetch() {
      await this.$axios
        .$get("/perfil/getdatainicial?username=" + this.$route.params.username+"&token="+this.$store.state.tokenUser)
        .then((response) => {
            console.log(response)
            this.arrayDataUser = response
        });
  },

    methods: {

    recargarDataUser(){
      this.$fetch()
    }
    
  },
  
}
</script>
