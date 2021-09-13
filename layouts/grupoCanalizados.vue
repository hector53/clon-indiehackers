<template>
  <div>
    <header-canalizados></header-canalizados>
    <body-grupo ref="bodyGrupo"
    :responseGrupo="responseGrupo" :pGroup="pGroup" :tituloGrupo="tituloGrupo" :excerptGrupo="excerptGrupo"
    :imagenGrupo="imagenGrupo" :contenido="contenido" :miembros="miembros" :moderadores="moderadores"
    :rolName="rolName" :rolUser="rolUser" :miembrosO="miembrosO" :fechaM="fechaM"
    @getGrupoNow="getGrupoNow"
    ></body-grupo>    

    


     <footer-canalizados></footer-canalizados>
  </div>
</template>


<script>
import BodyGrupo from '~/components/gruposlug/bodyGrupo.vue';
import footerCanalizados from '~/components/homeCanalizados/footerCanalizados.vue';
import HeaderCanalizados from '~/components/homeCanalizados/headerCanalizados.vue';
export default {
  components: { footerCanalizados, HeaderCanalizados, BodyGrupo },
  name: "grupoCanalizados",
    data() {
    return {
       
       miembrosO: '',
        pGroup:'',
        fechaM: '',
        tituloGrupo: '',
        excerptGrupo: '',
        imagenGrupo: '',
        contenido: '',
        miembros: '',
        moderadores:'',
        rolName: '',
        rolUser: '', 
        tab: 0, 
        responseGrupo: ''
    };
  },
   async fetch() {


        


  await this.$axios
        .$get("/grupos/getslug?slug="+this.$route.params.slug+"&token="+this.$store.state.tokenUser)
        .then((response) => {
          console.log(response)
            if (response.status == 0) {
            return app.redirect("/");
            } else {
            var rolName = 0;
            if (response.grupo[0].rolUser == 1) {
            rolName = "Owner";
            }
            if (response.grupo[0].rolUser == 2) {
            rolName = "Moderador";
            }
            if (response.grupo[0].rolUser == 3) {
            rolName = "Miembro";
            }

            this.responseGrupo= response
            this.pGroup= response.grupo[0].id
            this.tituloGrupo= response.grupo[0].titulo
            this.excerptGrupo= response.grupo[0].excerpt
            this.imagenGrupo= response.grupo[0].imagen
            this.contenido= response.grupo[0].contenido
            this.miembros= response.grupo[0].miembros
            this.moderadores= response.grupo[0].moderadores
            this.rolName= rolName
            this.rolUser= response.grupo[0].rolUser
            this.fechaM = response.grupo[0].fechaM
            this.miembrosO = response.grupo[0].miembrosO

            }
        })

  },
  methods: {
      
    changeModeradores(moderadores){
        this.moderadores = moderadores
    },
    changeIconHeGroup(icono){
        this.imagenGrupo = icono
    },
      cambiarTab(tab){
          this.tab = tab
      },
      getGrupoNow(){
          this.refreshGroups()
      },
 
   refreshGroups() {
      this.$fetch()
    }
  },
  mounted() {
  },
};
</script>
