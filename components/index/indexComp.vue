<template>
  <div 
   :class="{'community__content community__content--showing-welcome' : $store.state.cookieLogin == false, 
  'community__content community__content' : $store.state.cookieLogin }">
    <!-- Seccion de Bienvenida -->
    <section class="community__join-prompt" v-if="$store.state.cookieLogin == false">
      <p>
        Welcome! We're helping each other start profitable online businesses and
        side projects.
      </p>
      <div class="community__join-actions">
        <button class="community__join-button">
          <label>Join Us!</label>
        </button>
        <a
          href="/start"
          id="ember21802184"
          class="ember-view community__join-link"
        >
          <label>or learn more</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802185"
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
    <!-- Fin Seccion de Bienvenida -->

    <!--Seccion Top Stories-->
    <div
    
      class="news-section news-section--mobile news-section--pristine ember-view community__news-section"
    >
      <header>
        <nav>
          <span class="active">Top Historias</span>
          <a href=""  @click.prevent="postNuevo" class="ember-view">
            Post Nuevo
          </a>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember21802188"
          class="ember-view"
        >
          <path
            d="M7 15h13v1h-13v-1zm4-4v3h5v-3h-5zm-1 0h-3v1h3v-1zm-3 3h3v-1h-3v1zm13-1h-3v1h3v-1zm-6.951-6.573v-.396h-1.215v1.941h1.255v-.396h-.78v-.406h.698v-.393h-.698v-.35h.74zm1.396.261l.238 1.284h.5l.501-1.941h-.482l-.249 1.32-.238-1.32h-.492l-.27 1.345-.24-1.345h-.505l.46 1.941h.506l.271-1.284zm1.901.916c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-5.325.368h.485v-1.941h-.438v1.189l-.641-1.189h-.535v1.941h.438v-1.327l.691 1.327zm8.979 1.028h-13v1h13v-1zm0 2h-3v1h3v-1zm-17-9v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 16h-17v-14h17v14z"
          >
            <!---->
          </path>
        </svg>
      </header>

      <div class="news-section__items">
        <a
          target="_blank"
          href="/post/1096ac5400"
          id="ember21802190"
          class="ember-view news-section__item"
        >
          <div class="news-section__item-meta">
            <span>Stories</span>
            <span>·</span>
            <span>6 hours ago</span>
          </div>
          <span class="news-section__item-title"
            >Insights from a digital nomad making $80k/year</span
          >
          <img src="https://i.ibb.co/9nKS2DY/image.png" alt="Image" />
        </a>
      </div>

      <!---->
    </div>
    <!--FIn Seccion Top Stories-->

    <!--Seccion Post-->
    <postSeccion :arrayPostHoy="arrayPostHoy" subNav="1" :filtroBusqueda="filtroBusqueda"
    @changeFiltroBusqueda="changeFiltroBusqueda"
     :filtroTop="filtroTop" ></postSeccion>
    <!--Fin Seccion Post-->

    <!--Seccion Sidebar-->
    <div
      
      class="community-sidebar ember-view community-sidebar"
    >
      <!---->

      <div
       v-if="$store.state.cookieLogin == false"
        class="mailing-list-form ember-view community-sidebar__mailing-list-form"
      >
        <form
          action="https://app.convertkit.com/landing_pages/191452/subscribe"
          class="mailing-list-form__form"
        >
          <p class="mailing-list-form__title">
            News for founders, not consumers.
          </p>

          <p class="mailing-list-form__subtitle">
            Market insights to help grow your indie business.
          </p>

          <div class="mailing-list-form__email-wrapper">
            <input
              value=""
              name="email"
              required="true"
              placeholder="Enter email address"
              id="ember21802294"
              class="ember-text-field ember-view mailing-list-form__email-input"
              type="email"
            />
          </div>

          <div
            class="mailing-list-form__captcha-wrapper"
            style="position: absolute !important; left: -999em !important"
          >
            <input
              placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer."
              value=""
              type="text"
            />
          </div>

          <button class="mailing-list-form__submit-button">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802295"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <span>Subscribe</span>
            </div>
          </button>
        </form>
      </div>

      <section class="community-sidebar__section community-sidebar__groups">
        <header>
          <nav>
           <nuxt-link  
              :to="{
                name: 'grupos' }" class="ember-view"
              >Todos</nuxt-link>
            <span class="active">{{labelRecomendados}}</span>
          </nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802297"
            class="community-sidebar__title-icon ember-view"
          >
            <path
              d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"
            >
              <!---->
            </path>
          </svg>
        </header>

        <div class="groups__scrollbar-occluder">
          <div class="groups__list">


            <div class="groups__group" v-for="(item, index) in gruposRecomendados" :key="index">
            <nuxt-link  
              :to="{
                name: 'grupo-slug',
                params: { slug: item.slug },
              }"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802588"
                  class="group-icon ember-view groups__group-icon"
                >
                  <img :src="item.icono" />
                </picture>
                <p class="groups__group-name">{{item.titulo}}</p>
              </nuxt-link>
            </div>
            
            
            
            
            
            
          
          </div>
        </div>
      </section>

      <div id="ember21802304" class="site-info ember-view">
        <div class="site-info__row">
          <a href="https://twitter.com/IndieHackers" class="site-info__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802305"
              class="site-info__icon ember-view"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              >
                <!---->
              </path>
            </svg>
            <span class="site-info__label">@IndieHackers</span>
          </a>
        </div>

        <div class="site-info__row">
          <a
            href="/about"
            id="ember21802306"
            class="site-info__link ember-view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802307"
              class="site-info__icon ember-view"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"
              >
                <!---->
              </path>
            </svg>
            <span class="site-info__label">FAQ</span>
          </a>
          <span class="site-info__middot">·</span>
          <a href="/terms" id="ember21802308" class="site-info__link ember-view"
            >Terms</a
          >
          <span class="site-info__middot">·</span>
          <a
            href="/privacy"
            id="ember21802309"
            class="site-info__link ember-view"
            >Privacy</a
          >
        </div>
      </div>
    </div>

    <!--Fin Seccion Sidebar-->
  </div>

  
</template>

<script>
import postSeccion from '~/components/postSeccion/postSeccion.vue';
export default {
  name: 'indexComp', 
  
  components: {postSeccion},
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
    changeFiltroBusqueda(filtro){
        this.filtroBusqueda = filtro
        if(filtro == 'hoy'){
          this.filtroTop = true
        }

        this.getPostHoy()
    },
 
 async   getPostHoy(){
   console.log("/getpost/hoy/?filtro="+this.filtroBusqueda)
       await this.$axios
        .$get("/getpost/hoy/?filtro="+this.filtroBusqueda)
        .then((response) => {
          console.log(response)
        this.arrayPostHoy =  response.posts
        });
      },

   async   getGrupos(){

      await this.$axios
        .$get("/grupos/recomendados/?token="+this.$store.state.tokenUser)
        .then((response) => {
          console.log(response)
          if(response.status > 0){
            if(response.status == 2){
                this.labelRecomendados = 'Recomendados'
            }
            if(response.status == 1){
                this.labelRecomendados = 'Sus Grupos'
            }
              this.gruposRecomendados =  response.grupos
          }
      
        });

      }
  },
   async fetch() {

      
     
    
      

        
   },
  mounted() {

    if(this.$route.params.slug == 'top' || this.$route.params.slug == 'nuevos'){

            if(this.$route.params.slug == 'top'){
              console.log("existe el top")
                if(this.$route.params.sub == 'semanal' || this.$route.params.sub == 'mensual'
                 || this.$route.params.sub == 'todos'    ){
                   console.log("existe semana mes o tods", this.$route.params.sub)

                   this.filtroTop = true
                   this.filtroBusqueda = this.$route.params.sub
                   console.log(this.filtroBusqueda)
                }else{
                  console.log("filtro es hoy")
                    this.filtroBusqueda = 'hoy'
                }
            }

            if(this.$route.params.slug == 'nuevos'){
               this.filtroTop = false
               this.filtroBusqueda = 'nuevos'
                if(this.$route.params.sub){
                      this.filtroBusqueda = 'hoy'
                }
            }
        
    }else{
       this.filtroTop = true
          this.filtroBusqueda = 'hoy'
    }
this.getPostHoy()
this.getGrupos()
console.log("slugmountedcom")
   









  },
};
</script>

