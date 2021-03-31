<template>
<div>
   
    <headerGrupoSlug :imagenGrupo="imagenGrupo" :tituloGrupo="tituloGrupo" :excerptGrupo="excerptGrupo"
    :rolUser="rolUser" :rolName="rolName" @getGrupoNow="refreshGroups" :pGroup="pGroup"
    ></headerGrupoSlug>

  







  
</div>
  
</template>

<script>
import headerGrupoSlug from '~/components/gruposlug/headerGrupoSlug.vue';
export default {
  layout: "grupo",
  name: "miembrosGrupos",
  components: {headerGrupoSlug},
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
            this.miembrosO = response.grupo[0].miembrosO

            }
        })

    },
  data() {
    return {
        
       miembrosO: '',
        pGroup:'',
        tituloGrupo: '',
        excerptGrupo: '',
        imagenGrupo: '',
        contenido: '',
        miembros: '',
        moderadores:'',
        rolName: '',
        rolUser: ''
    };
  },
  watch: {
  },
  methods: {
       refreshGroups() {
      this.$fetch()
    }
  
  },
  mounted() {
      console.log(this.$route)
  },
};
</script>

