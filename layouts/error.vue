<template>
<div>
  <footer  class="site-footer ember-view">
    <div
      id="ember21802311"
      class="mailing-list-form ember-view site-footer__mailing-list-form"
    >

        <h2 class="mailing-list-form__title" v-if="error.statusCode === 404">Page not found</h2>
    <h2 class="mailing-list-form__title" v-else>An error occurred</h2>
  <h2 class="mailing-list-form__title" > <NuxtLink  to="/">Home page</NuxtLink> </h2>
     
    </div>
  
  </footer>

 
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>