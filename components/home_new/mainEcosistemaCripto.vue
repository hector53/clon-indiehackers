<template>
  <b-row class="pt-4" v-if="arrayEcosistemaCripto.length>0">
    <b-col class="cardGrandeEcosistema" lg="12" md="12" sm="12" cols="12">
      <b-card
        :img-src="arrayEcosistemaCripto[0].imagen"
        img-alt="Card image"
        class="mb-3"
      >
        <b-card-text class="titleCardMiraEstaStartup">
          <nuxt-link
            :to="{
              name: 'c-slug',
              params: { slug: arrayEcosistemaCripto[0].slug }
            }"
            style="color: #3d3d3d!important;"
            >{{ arrayEcosistemaCripto[0].titulo }}</nuxt-link
          >
        </b-card-text>
        <div class="cardAutorFecha">
          <p class="card-text small text-muted">
            {{ arrayEcosistemaCripto[0].fecha }}
          </p>
        </div>
      </b-card>
    </b-col>
    <b-col
      class="cardCanalizados"
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, index) in arrayEcosistemaCripto2"
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
      arrayEcosistemaCripto: [],
      arrayEcosistemaCripto2: [],
      
    };
  },
  async mounted() {
    await this.$axios
      .$get("/getpost/get_posts_by_group_id/?groupId=4031")
      .then(response => {
        console.log("cripto", response);
        this.arrayEcosistemaCripto = response;
        this.arrayEcosistemaCripto2.push(response[1]);
        this.arrayEcosistemaCripto2.push(response[2]);
        this.arrayEcosistemaCripto2.push(response[3]);
      });
 
  }
};
</script>
