<template>
<div>
  <footer  class="site-footer ">
    <div
      class="mailing-list-form site-footer__mailing-list-form"
    >

        <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">404, Pagina no encontrada 😭</h2>
      <h4 class="mailing-list-form__title" v-if="error.statusCode === 404">¡Infórmate sobre este error! ➡️<a href="#" class="link"> Soporte</a></h4>
      <h2 class="mailing-list-form__title" v-else>Algo salió mal</h2>
      <h2 class="mailing-list-form__title" > <NuxtLink  to="/comunidad"><b-button variant="outline-dark">Volver a la página principal</b-button></NuxtLink> </h2>
     
    </div>
  
  </footer>

 
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "perfilEditCanalizados", // you can set a custom layout for the error page
};
</script>