<template>
  <b-row class="pt-4" v-if="arrayRecursosParaStartups.length>0">
    <b-col
      class="cardCanalizados"
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, index) in arrayRecursosParaStartups"
      :key="index"
    >
      <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }"
        ><img :src="item.imagen" alt="Image"
      /></nuxt-link>
      <p class="card-text">
        <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{
          item.titulo
        }}</nuxt-link>
      </p>
      <div class="cardAutorFecha">
        <p class="card-text small text-muted">{{ item.fecha }}</p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
        arrayRecursosParaStartups: []
    };
  },
  async mounted() {
    await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=2760")
      .then(response => {
        console.log("cripto", response);
        this.arrayRecursosParaStartups = response;
      });
  }
};
</script>
