<template>
  <div class="" style="">
    <div class="container">
      <!-- <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">¿Perdido, verdad? No es problema, te ayudaremos a volver</h2> -->
      <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">404, Pagina no encontrada 😭</h2>
      <h4 class="mailing-list-form__title" v-if="error.statusCode === 404">¡Infórmate sobre este error! ➡️<a href="#" class="link"> Soporte</a></h4>
      <h2 class="mailing-list-form__title" v-else>Algo salió mal</h2>
      <h2 class="mailing-list-form__title" > <NuxtLink  to="/comunidad"><b-button variant="outline-dark">Volver a la página principal</b-button></NuxtLink> </h2>
    </div>

    <!-- <header>
      <Header />
    </header>
    <body class="row" style="overflow: hidden">
    <aside class="" style="margin-left: 250px; margin-top: 10px">
      <SideBar />
    </aside>
    <main>
      <section>
      <div 
        class=""
        style="margin-left: 310px"
      >
        <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">¿Perdido, verdad? No es problema</h2>
        <h2 class="mailing-list-form__title" v-else>An error occurred</h2>
        <h2 class="mailing-list-form__title" > <NuxtLink  to="/"><button>Tocá este boton para volver al inicio</button></NuxtLink> </h2>  
      </div>
      </section>
    </main>
    </body> -->

  <!--   <header>
      <Header />
    </header>
    <footer  class="site-footer ">
    <div
      class="d-block m-auto"
      style="width: 300px;"
    >

        <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">¿Perdido, verdad? No es problema</h2>
        <h2 class="mailing-list-form__title" v-else>Algo salió mal</h2>
        <h2 class="mailing-list-form__title" > <NuxtLink  to="/">Volver a la página principal</NuxtLink> </h2>
     
    </div>
  
  </footer> -->
  </div>
</template>

<script>
import SideBar from '../components/homeCanalizados/sidebarLeft.vue';
import Header from '../components/homeCanalizados/headerCanalizados.vue';
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  components: {
    SideBar,
    Header,
  }
};
</script>
