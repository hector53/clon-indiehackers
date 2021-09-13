<template>
<div>
  <footer  class="site-footer ">
    <div
      class="mailing-list-form site-footer__mailing-list-form"
    >

        <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">Page not found</h2>
    <h2 class="mailing-list-form__title" v-else>An error occurred</h2>
     
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