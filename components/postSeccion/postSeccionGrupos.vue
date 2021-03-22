<template>
  <section class="group-index__discussions">
    <header class="community__header">
      <nav id="ember62" class="posts-section__nav ember-view">
        <div class="posts-section__nav-content">
          <a
            href="/group/latin-america"
            id="ember63"
            class="active ember-view posts-section__nav-link"
          >
            Populares
          </a>
          <a
            href="/group/latin-america/newest"
            id="ember64"
            class="ember-view posts-section__nav-link"
          >
            Nuevos
          </a>
        </div>
      </nav>
      <a
        href=""
        id="ember65"
        @click.prevent="postNuevo"
        class="ember-view discussions__create-button"
      >
        Post Nuevo
      </a>
    </header>

    <div class="soc-fd soc-fd--compact ember-view">
      <div
        class="feed-item feed-item--compact feed-item--post 
        feed-item--post-in-group ember-view"
        v-for="(item, index) in arrayPostPopulares" :key="index"
      >
        <div class="user-link feed-item__user-link--for-avatar ember-view">
           <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: item.username },
              }"
            class="user-link__link ember-view"
          >
            <picture
              id="ember135"
              class="user-avatar ember-view user-link__avatar"
            >
              <img :src="item.avatar" />
            </picture>
            <span class="user-link__name user-link__name--username">
              {{item.username}}
            </span>
            </nuxt-link  >
        </div>
        <div class="feed-item__likes" title="Like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember136"
            class="feed-item__likes-icon ember-view"
          >
            <path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
            </path>
          </svg>
          <span class="feed-item__likes-count"> 2 </span>
        </div>
        <div class="feed-item__content">
           <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" 
            class="ember-view feed-item__title-link"
          >
            {{item.titulo}}
          </nuxt-link>
          <div class="feed-item__metadata">
            <div
              id="ember138"
              class="user-link feed-item__user-link--for-metadata ember-view"
            >
            <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: item.username },
              }"
                class="user-link__link ember-view"
              >
                <picture
                  id="ember140"
                  class="user-avatar ember-view user-link__avatar"
                >
                  <img :src="item.avatar" />
                </picture>
                <span class="user-link__name user-link__name--username">
                  {{item.username}}
                </span>
                </nuxt-link>
            </div>
            <div class="feed-item__middot">·</div>
            <nuxt-link  
              :to="{
                name: 'grupo-slug',
                params: { slug: item.slug },
              }"
              class="feed-item__group-link active ember-view"
            >
              <picture
                id="ember142"
                class="group-icon ember-view group-link__icon"
              >
                <img :src="item.imagenGrupo" />
              </picture>
              <span class="group-link__name">{{item.tituloGrupo}}</span>
            </nuxt-link >
            <div class="feed-item__middot">·</div>
            <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" 
              class="ember-view feed-item__date"
            >
              {{item.fecha}}
            </nuxt-link>
            <div class="feed-item__middot">·</div>
            <div class="feed-item__like-count" title="Like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember144"
                class="ember-view like-count__icon"
              >
                <path
                  d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z"
                >
                </path>
              </svg>
              <span class="like-count__count">2</span>
            </div>
            <div class="feed-item__middot">·</div>
            <a
              title="View Comments"
              href=""
              id="ember145"
              class="ember-view feed-item__reply-count"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember146"
                class="ember-view reply-count__icon"
              >
                <path
                  d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z"
                >
                </path>
              </svg>
              <span class="reply-count__number-count">0</span>
              <span class="reply-count__full-count">0 comments</span>
            </a>
          </div>
        </div>
      </div>

     
    </div>
  </section>
</template>

<script>
export default {
  name: "postSeccionGrupos",
  props: [
    "arrayPostHoy",
    "pGroup",
    "imagenGrupo",
    "tituloGrupo",
    "excerptGrupo",
  ],
  data() {
    return {
      arrayPostPopulares: []
    };
  },
  methods: {
    async getPostGrupo(){
       await this.$axios
        .$get("/getpost/groupid?p="+this.pGroup)
        .then((response) => {
          console.log(response)
          if(response.status == 0){
              //algun mensaje
          }else{
            this.arrayPostPopulares = response.posts
          }
          
        })
    },
    postNuevo() {
      if (this.$store.state.tokenUser != "") {
        this.$cookies.set(
          "group_cookie",
          {
            id: this.pGroup,
            imagenGrupo: this.imagenGrupo,
            tituloGrupo: this.tituloGrupo,
            slug: this.$route.params.slug,
            excerptGrupo: this.excerptGrupo,
          },
          {
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
          }
        );
        this.$router.push({ name: "post-nuevo" });
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
  mounted() {
    this.getPostGrupo()
  },
};
</script>

