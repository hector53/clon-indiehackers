<template>
<div class="container w-container">
      <div class="div-block-455">
        <div class="div-block-457">
          <sidebar-left></sidebar-left>
        </div>
        <div class="div-block-456">
          <div class="section-2">
            <div class="columns-5 w-row">
              <seccion-discusion></seccion-discusion>
             <columna-derecha-discusion></columna-derecha-discusion>
            </div>
          </div>
          <div class="section-3">
            <usuarios-destacados></usuarios-destacados>
          </div>
          <div class="section-4">
            <div class="columns-3 w-row">
              <historias-destacadas></historias-destacadas>
              <sidebar-derecho></sidebar-derecho>
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

        }
    },
}
</script>
