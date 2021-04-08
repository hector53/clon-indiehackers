<template>
  <div>
    <header-canalizados></header-canalizados>
<body-perfil-canalizados v-if="$store.state.username == $route.params.username"
 :arrayDataUser="arrayDataUser" @recargarDataUser="recargarDataUser" :gruposRecomendados="gruposRecomendados"
  :labelRecomendados="labelRecomendados"></body-perfil-canalizados>
    <body-perfil-canalizados-2 v-else :gruposRecomendados="gruposRecomendados"
  :labelRecomendados="labelRecomendados" :arrayDataUser="arrayDataUser"  @recargarDataUser="recargarDataUser"></body-perfil-canalizados-2>
    <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
import BodyPerfilCanalizados from '~/components/perfil/bodyPerfilCanalizados.vue';
import BodyPerfilCanalizados2 from '~/components/perfil/bodyPerfilCanalizados2.vue';
export default {
  components: { footerCanalizados, HeaderCanalizados, BodyPerfilCanalizados, BodyPerfilCanalizados2 },
  name: "perfilCanalizados",
    data() {
    return {
         arrayDataUser: {},
          gruposRecomendados: [], 
        labelRecomendados: 'Tus Grupos'
    };
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
      }, 

        async   getGrupos(){

      await this.$axios
        .$get("/grupos/recomendados/?token="+this.$store.state.tokenUser)
        .then((response) => {
          console.log(response)
          if(response.status > 0){
            if(response.status == 2){
                this.labelRecomendados = 'Grupos Recomendados'
            }
            if(response.status == 1){
                this.labelRecomendados = 'Tus Grupos'
            }
              this.gruposRecomendados =  response.grupos
              
                //     this.$store.commit('setLoader', false);
              /// console.log("test loader", this.$store.state.loader)
          }
      
        });

      }
  },
  mounted() {
    this.getGrupos()
  },
};
</script>
<style >
a {
    
    color: #3e64db;
    
}
.list-10 {
    
    display: inline-block!important;
  
}
.column-10 {
    
    display: grid!important;
}
.image-16 {
   
    margin: auto;
}
</style>