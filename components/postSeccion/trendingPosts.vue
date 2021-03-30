<template>
  <div id="ember1225" class="post-page__recommendations ember-view">
      <div class="post-page__recommendations-heading">
        Trending Canalizados
      </div>

      <div class="post-page__recommendations-list">
       <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" 
          class="ember-view post-page__recommendation"
          v-for="(item, index) in trending" :key="index"
        >
          <img
            class="post-page__recommendation-image"
            :src="item.imagen"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              {{item.titulo}}
            </span>
            <span class="post-page__recommendation-footer">
              <picture
              
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
             

                <img :src="item.avatar" />
              </picture>
              {{item.comentarios}} comentarios
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1229"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </nuxt-link>
        
      </div>
    </div>
</template>


<script>

export default {
    name: "trendingPosts", 
    props: ['trending'],
    data() {
        return {

        }
    },
  
}
</script>
