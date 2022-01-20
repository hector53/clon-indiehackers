<template>

 <b-row class="pt-4">
          <b-col
            class="cardCanalizados"
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(item, index) in arrayInversiones"
            :key="index"
          >
            <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">
              <img :src="item.imagen" alt="Image"
            /></nuxt-link>
            <p class="card-text">
              <nuxt-link
                :to="{ name: 'c-slug', params: { slug: item.slug } }"
                >{{ item.titulo }}</nuxt-link
              >
            </p>
            <div class="cardAutorFecha">
              <p class="card-text small text-muted">{{ item.fecha }}</p>
            </div>
          </b-col>
        </b-row>

</template>

<script>
export default {
  props: ["arrayInversiones", "arrayPopulares"]
};
</script>
