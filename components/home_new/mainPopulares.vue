<template>
    <b-row class="pt-4">
              <b-col
                cols="12"
                v-for="(item, index) in arrayPopulares"
                :key="index"
              >
                <b-card
                  :img-src="item.imagen"
                  img-alt="Card image"
                  img-left
                  class="mb-3"
                >
                
                  <b-card-text>
                    <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }">{{ item.titulo }}</nuxt-link>
                  </b-card-text>
                  <div class="cardAutorFecha">
                    <p class="card-text small text-muted">{{ item.fecha }}</p>
                  </div>
                </b-card>
              </b-col>
            </b-row>
</template>

<script>
    export default {
        props:["arrayPopulares"]
    }
</script>

