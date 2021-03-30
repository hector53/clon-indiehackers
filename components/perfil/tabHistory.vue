<template>
<div>
  <loader v-show="loader"></loader>

  <section  v-show="loader == false"  class="user-feed ember-view">
    <div class="user-feed__options">
      <div>
        <div>
          <li 
          @click="activePost = !activePost"
          class="user-feed__option
           user-feed__option--selected">
            <svg v-if="activePost"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember414"
              class="user-feed__option-icon ember-view"
            >
              <path
                d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"
              >
              </path>
            </svg>


          <svg v-if="activePost==false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember722" class="user-feed__option-icon ember-view"><path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z">
         </path>
          </svg>
            <span class="user-feed__option-label">Posts</span>
          </li>
        </div>
      </div>
    </div>
<div v-if="activePost">

  <div
      v-for="(item, index) in arrayPosts" :key="index"
      class="user-feed__item user-feed-item user-feed-item--post ember-view"
    >
      <header class="user-feed-item__header">
        <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }"
          class="user-feed-item__date ember-view"
        >
          {{item.fecha}}</nuxt-link
        >
        <span class="user-feed-item__summary">
       <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" class="ember-view"
            >Creaste un post</nuxt-link  >
        </span>
      </header>

      <div class="user-feed-item__content">
        <p class="user-feed-item__post-title">
         <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" class="ember-view"
            >{{item.titulo}}</nuxt-link >
        </p>

        <div class="user-feed-item__markdown-content" v-if="item.esLink == 0" v-html="item.contenido">
         
        </div>

          <div class="user-feed-item__markdown-content" v-if="item.esLink == 1" >
           <a :href="item.contenido" target="_blank">{{item.contenido}}</a>
        </div>


      </div>
    </div>
</div>
    
 
    <button class="user-feed__load-button">
      <div class="user-feed__load-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember514"
          class="user-feed__load-icon ember-view"
        >
          <path
            d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24-4v20h2v-18h18v-2h-20zm18 13h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
          >
            <!---->
          </path>
        </svg>
        <span class="user-feed__load-label">Load More</span>
      </div>
    </button>
  </section>
  </div>
</template>

<script>
export default {
  name: "tabHistory",
  components: {},
  data() {
    return {
      activePost: true, 
      arrayPosts: [],
      loader: true
    };
  },
  methods: {
    async getHistory() {
    
      await this.$axios
        .$get("/perfil/gethistory?username=" + this.$route.params.username)
        .then((response) => {
            console.log(response)
          this.arrayPosts = response.post
          this.loader = false
        });
    },
  },
  async fetch() {},
  mounted() {
  
       this.getHistory()
    
   
  },
};
</script>

