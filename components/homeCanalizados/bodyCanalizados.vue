<template>
<div class="container w-container">
      <div class="div-block-455">
        <div class="div-block-457">
          <sidebar-left></sidebar-left>
        </div>
        <div class="div-block-456">

            <div class="columns-8 w-row">
                <div class="w-col w-col-8">
                       <seccion-discusion ></seccion-discusion>
                       <historias-destacadas></historias-destacadas>
                </div>
                <div class="w-col w-col-4">
 <columna-derecha-discusion :msjBienvenidaInit="msjBienvenida" :arrayPopulares="arrayPopulares"></columna-derecha-discusion>
           <sidebar-derecho :arrayPopulares="arrayPopulares" 
              :labelRecomendados="labelRecomendados" :gruposRecomendados="gruposRecomendados"></sidebar-derecho>
                </div>
            </div>





        </div>
      </div>
    </div>
</template>


<script>
import ColumnaDerechaDiscusion from './columnaDerechaDiscusion.vue'
import HistoriasDestacadas from './historiasDestacadas.vue'
import SeccionDiscusion from './seccionDiscusion.vue'
import SidebarDerecho from './sidebarDerecho.vue'
import sidebarLeft from './sidebarLeft.vue'
import UsuariosDestacados from './usuariosDestacados.vue'

export default {
  components: { sidebarLeft, SeccionDiscusion, ColumnaDerechaDiscusion, UsuariosDestacados, HistoriasDestacadas, SidebarDerecho },
    name: "bodyCanalizados", 
    
    data() {
        return {
            arrayPopulares :  [], 
              gruposRecomendados: [], 
        labelRecomendados: 'Tus Grupos', 
        msjBienvenida: false
        }
    },
    methods: {
      async getDatos(){

     await this.$axios
          .$get("/getpost/populares/")
          .then((response) => {
        //  console.log(response)
          this.arrayPopulares =  response
          });

           var cookieRegistro = this.$cookies.get("registro_nuevo");
           if(cookieRegistro){
              this.msjBienvenida = true
           }
      },
      cambiarColumnas(){
        this.columnaDiscusionG = true
      },
        async   getGrupos(){

      await this.$axios
        .$get("/grupos/recomendados/?token="+this.$store.state.tokenUser)
        .then((response) => {
        //  console.log(response)
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
     async fetch() {
  },
    mounted() {
       this.getDatos()
      this.getGrupos()
    },
}
</script>

