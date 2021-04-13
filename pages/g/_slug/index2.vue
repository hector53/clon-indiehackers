<template>
  <div>
    <headerGrupoSlug :imagenGrupo="imagenGrupo" :tituloGrupo="tituloGrupo" :excerptGrupo="excerptGrupo"
    :rolUser="rolUser" :rolName="rolName" @getGrupoNow="refreshGroups" :pGroup="pGroup" :tab="tab" @changeTab="cambiarTab"
    ></headerGrupoSlug>

  <contentDiscusion :imagenGrupo="imagenGrupo" :tituloGrupo="tituloGrupo" :miembros="miembros" :miembrosO="miembrosO"  :excerptGrupo="excerptGrupo"
  :contenido="contenido" :moderadores="moderadores" @changeModeradores="changeModeradores" :tab="tab" :pGroup="pGroup" @changeIconGrupoHeader="changeIconHeGroup"></contentDiscusion>


  </div>
</template>

<script>
import headerGrupoSlug from '~/components/gruposlug/headerGrupoSlug.vue';
import contentDiscusion from '~/components/gruposlug/contentDiscusion.vue';
export default {
  layout: "grupo",
  name: "grupo-slug",
  components: {contentDiscusion, headerGrupoSlug},
  async asyncData(app) {
   
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
        rolUser: '', 
        tab: 0
        
    };
  },
  watch: {},
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
 
   refreshGroups() {
      this.$fetch()
    }
  },
  mounted() {
  },
};
</script>

