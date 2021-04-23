<template>
  <section class="community__posts-section">
      <header class="posts-section__header has-sub">
        <nav id="ember21802235" class="posts-section__nav ember-view">
          <div class="posts-section__nav-content">
            <!---->
            <nuxt-link   :to="{name: 'index' }" 
              class="ember-view posts-section__nav-link"
              :class="{'active' : filtroTop}"
            >
              Populares
            </nuxt-link>

           <nuxt-link   to="/nuevos" 
              class="ember-view posts-section__nav-link"
              :class="{'active' : filtroTop == false && filtroBusqueda == 'nuevos'}"
            >
              Nuevos
            </nuxt-link>

            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
        </nav>
        <a
         href=""
         @click.prevent="postNuevo"
          class="ember-view posts-section__create-button"
        >
          Post Nuevo
        </a>
      </header>

      <nav id="ember21802239" class="posts-section__sub-nav ember-view" v-if="filtroTop">
        <nuxt-link   :to="{name: 'index' }" 
          class="ember-view sub-nav__link"
           :class="{'active' : filtroBusqueda == 'hoy' && filtroTop}"
        >
          Hoy
        </nuxt-link >

         <a  href="/top/semanal" 
          class="ember-view sub-nav__link"
          :class="{'active' : filtroBusqueda == 'semanal'  && filtroTop}"
          @click.prevent="cambiarFiltroBusqueda('semanal')"
        >
          Semanal
        </a >

         <a  href="/top/mensual" 
          class="ember-view sub-nav__link"
          :class="{'active' : filtroBusqueda == 'mensual'  && filtroTop}"
          @click.prevent="cambiarFiltroBusqueda('mensual')"
        >
          Mensual
        </a>

       <a  href="/top/todos" 
          class="ember-view sub-nav__link"
          :class="{'active' : filtroBusqueda == 'todos'  && filtroTop}"
           @click.prevent="cambiarFiltroBusqueda('todos')"
        >
         Todo
        </a>
      </nav>






      <div
     
        class="soc-fd soc-fd--compact ember-view posts-section__posts"
      >
        <!---->
        <!--repetir aqui van los post-->
        <div v-for="(item, index) in arrayPostHoy" :key="index"
          class="feed-item feed-item--compact feed-item--post feed-item--post-in-group ember-view"
        >
          <!---->
          <div class="user-link feed-item__user-link--for-avatar ember-view">
           <nuxt-link
              :to="{
                name: 'perfil-username',
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
                name: 'post-slug',
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
                name: 'perfil-username',
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
                name: 'post-slug',
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
                name: 'post-slug',
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
                <span class="reply-count__number-count">3</span>
                <span class="reply-count__full-count">3 comments</span>
              </a>

              <!---->
            </div>
          </div>
        </div>

        <!---->
        <!---->

        <!---->
        <a
          href="/?page=2"
          id="ember21802290"
          class="ember-view soc-fd__pagination-link"
        >
          <label>Next Page</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802291"
            class="ember-view"
          >
            <path
              d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
            >
              <!---->
            </path>
          </svg>
        </a>



      </div>
    </section>
</template>

<script>
import like from '~/components/likes/like.vue';
export default {
   loading: false,
    name: "postSeccion", 
    props:['arrayPostHoy', 'subNav', 'filtroBusqueda', 'filtroTop'],
    components: {like},
    data() {
        return {
            
        }
    },
    methods: {
      cambiarFiltroBusqueda(filtro){
       this.$router.push('/top/'+filtro)
       this.$emit("changeFiltroBusqueda", filtro);
      },
         postNuevo(){
        if(this.$store.state.tokenUser != ''){
          this.$router.push({name: 'post-nuevo'})
        }else{
          this.$router.push({name: 'login'})
        }
    },
    },
    mounted() {
    
     
    },
}
</script>

