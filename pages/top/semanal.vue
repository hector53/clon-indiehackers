<template>
<div>
  <div v-for="(item, index) in arrayPostHoy" :key="index"
          class="feed-item feed-item--compact feed-item--post feed-item--post-in-group ember-view"
        >
          <!---->
          <div class="user-link feed-item__user-link--for-avatar ember-view">
           <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }" 
              class="user-link__link ember-view"
            >
              <picture
                id="ember21802347"
                class="user-avatar ember-view user-link__avatar"
              >
                <img :src="item.avatar" />
              </picture>

              <span class="user-link__name user-link__name--username">
                {{item.username}}
              </span>
              <!----></nuxt-link
            >
            <!---->
          </div>
          <!--votos-->
        <like :p="item.id" :votos="item.votos"></like>
          <!--votos-->
          <div class="feed-item__content">
             <nuxt-link
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }" 
              :title="item.titulo"
              class="ember-view feed-item__title-link"
            >
              {{item.titulo}}
            </nuxt-link>

            <div class="feed-item__metadata">
              <div
                id="ember21802351"
                class="user-link feed-item__user-link--for-metadata ember-view"
              >
                <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }" 
                  class="user-link__link ember-view"
                >
                  

                  <span class="user-link__name user-link__name--username">
                    {{item.username}}
                  </span>
                  <!----></nuxt-link
                >
                <!---->
              </div>
              <div class="feed-item__middot">·</div>

              <nuxt-link
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo },
              }" 
                class="feed-item__group-link ember-view"
              >
                <picture
                  id="ember21802355"
                  class="group-icon ember-view group-link__icon"
                  v-show="item.imagenGrupo != null"
                >
                 
                  <img :src="item.imagenGrupo" />
                </picture>
                <span class="group-link__name" v-show="item.tituloGrupo != null">{{item.tituloGrupo}}</span>
              </nuxt-link>
               <div class="feed-item__middot" v-show="item.imagenGrupo != null">·</div>
            <nuxt-link
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }" 
              class="ember-view feed-item__date"
            >
              {{item.fecha}}
            </nuxt-link>

              <div class="feed-item__middot">·</div>

              <a
               
                class="ember-view feed-item__reply-count"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802358"
                  class="ember-view reply-count__icon"
                >
                  <path
                    d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z"
                  >
                    <!---->
                  </path>
                </svg>
              <span class="reply-count__number-count">{{item.comentarios}}</span>
                <span class="reply-count__full-count">{{item.comentarios}} comments</span>
              </a>

              <!---->
            </div>
          </div>
        </div>

</div>
</template>

<script>
import like from '~/components/likes/like.vue';
export default {
  name: 'semanal', 
  layout: "home",
  components: {like},
  data() {
    return {
      arrayPostHoy: [], 
      gruposRecomendados: [],
      labelRecomendados: 'Recomendados', 
      filtroBusqueda: '', 
      filtroTop: false, 
      

    }
  },
  methods: {

 async   getPostHoy(){
       await this.$axios
        .$get("/getpost/hoy/?filtro=semanal")
        .then((response) => {
          console.log(response)
        this.arrayPostHoy =  response.posts
        });
      },

  
  },
 
  mounted() {

this.getPostHoy()



  },
};
</script>

