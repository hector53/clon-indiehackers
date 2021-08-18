<template>
  <div class="community community--top community--homepage">

  <nav-bar></nav-bar>

  <div 
   :class="{'community__content community__content--showing-welcome' : $store.state.cookieLogin == false, 
  'community__content community__content' : $store.state.cookieLogin }">
    <!-- Seccion de Bienvenida -->
   <seccion-bienvenida v-if="$store.state.cookieLogin == false"></seccion-bienvenida>
    <!-- Fin Seccion de Bienvenida -->

    <!--Seccion Top Stories-->
    <seccion-top-historias></seccion-top-historias>
    <!--FIn Seccion Top Stories-->

    <!--Seccion Post-->
   
<section class="community__posts-section">
      <header class="posts-section__header has-sub">
        <nav id="ember21802235" class="posts-section__nav ember-view">
          <div class="posts-section__nav-content">
            <!---->
            <nuxt-link   :to="'/'" 
              class="ember-view posts-section__nav-link"
              :class="{'active' : $route.name == 'index'}"
            >
              Populares
            </nuxt-link>

          <nuxt-link   :to="{name: 'top-nuevos' }" 
              class="ember-view posts-section__nav-link"
              :class="{'active' : $route.name == 'top-nuevos'}"
            >
              Nuevos
            </nuxt-link>

            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
        </nav>
        <a
         href=""
         @click.prevent="postNuevo"
          class="ember-view posts-section__create-button"

        >
          Post Nuevo
        </a>
      </header>

      <nav id="ember21802239" class="posts-section__sub-nav ember-view" >
        <nuxt-link   :to="'/'" 
          class="ember-view sub-nav__link"
           :class="{'active' : $route.name == 'index'}"
        >
          Hoy
        </nuxt-link >

           <nuxt-link   :to="{name: 'top-semanal' }" 
          class="ember-view sub-nav__link"
           :class="{'active' : $route.name == 'top-semanal'}"
        >
          Semanal
        </nuxt-link >

           <nuxt-link   :to="{name: 'top-mensual' }" 
          class="ember-view sub-nav__link"
           :class="{'active' : $route.name == 'top-mensual'}"
        >
          Mensual
        </nuxt-link >

           <nuxt-link   :to="{name: 'top-todos' }" 
          class="ember-view sub-nav__link"
           :class="{'active' : $route.name == 'top-todos'}"
        >
          Todos
        </nuxt-link >
      </nav>


      <div
     
        class="soc-fd soc-fd--compact ember-view posts-section__posts"
      >
        <!---->
        <!--repetir aqui van los post-->
        <Nuxt keep-alive />

      </div>
    </section>

    <!--Fin Seccion Post-->

    <!--Seccion Sidebar-->
    <div
      class="community-sidebar ember-view community-sidebar"
    >
      <!---->

     <seccion-mail-form  v-if="$store.state.cookieLogin == false"></seccion-mail-form>

     <seccion-sidebar-grupos :gruposRecomendados="gruposRecomendados" :labelRecomendados="labelRecomendados"></seccion-sidebar-grupos>

     <seccion-footer-sidebar></seccion-footer-sidebar>

    </div>

    <!--Fin Seccion Sidebar-->
  </div>

<footerSeccion></footerSeccion>
 
</div>
</template>


<script>
import NavBar from '~/components/navbar/navBar.vue';
import footerSeccion from '~/components/footer/footerSeccion.vue';

import SeccionBienvenida from '~/components/home/seccionBienvenida.vue';
import SeccionMailForm from '~/components/home/seccionMailForm.vue';
import SeccionSidebarGrupos from '~/components/home/seccionSidebarGrupos.vue';
import SeccionTopHistorias from '~/components/home/seccionTopHistorias.vue';
import postSeccion from '~/components/postSeccion/postSeccion.vue';
import SeccionFooterSidebar from '~/components/home/seccionFooterSidebar.vue';



export default {
    name: "homeLayout", 
    components: {NavBar, postSeccion, footerSeccion, 
    postSeccion, SeccionBienvenida, SeccionTopHistorias, SeccionMailForm, SeccionSidebarGrupos,
        SeccionFooterSidebar},
    data() {
        return {
  gruposRecomendados: [],
      labelRecomendados: 'Recomendados', 
        }
    },
  methods: {
        postNuevo(){
        if(this.$store.state.tokenUser != ''){
          this.$router.push({name: 'post-nuevo'})
        }else{
          this.$router.push({name: 'login'})
        }
    },
      async   getGrupos(){

      await this.$axios
        .$get("/grupos/recomendados/?token="+this.$store.state.tokenUser)
        .then((response) => {
          console.log(response)
          if(response.status > 0){
            if(response.status == 2){
                this.labelRecomendados = 'Recomendados'
            }
            if(response.status == 1){
                this.labelRecomendados = 'Sus Grupos'
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

}
</script>
