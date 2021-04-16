<template>

<div>
 <loader v-show="loader"></loader>

    <div class="search-page" v-show="loader==false">
    
      <ul class="search-page__filters">
        <li
          class="search-page__filter"
          :class="{ 'search-page__filter--selected': tab == 0 }"
          @click="cambiarTab(0)"
        >
          Todos
        </li>
        <li
          class="search-page__filter"
          :class="{ 'search-page__filter--selected': tab == 4 }"
          @click="cambiarTab(4)"
        >
          Noticias
        </li>
        <li
          class="search-page__filter"
          :class="{ 'search-page__filter--selected': tab == 1 }"
          @click="cambiarTab(1)"
        >
          Discusiones
        </li>
        <li
          class="search-page__filter"
          :class="{ 'search-page__filter--selected': tab == 2 }"
          @click="cambiarTab(2)"
        >
          Grupos
        </li>
        <li
          class="search-page__filter"
          :class="{ 'search-page__filter--selected': tab == 3 }"
          @click="cambiarTab(3)"
        >
          Usuarios
        </li>
      </ul>

      <div class="search-page__field-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember8"
          class="search-page__field-icon ember-view"
        >
          <path
            d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
          >
            <!---->
          </path>
        </svg>
        <input
          autocomplete="off"
          placeholder="Escribe algo para buscar aquí..."
          class="ember-text-field ember-view search-page__field"
          bubbles=""
          type="text"
          v-model="q"
        />
      </div>

      <div
        class="search-page__results"
        v-if="q != '' && arrayBuscarPosts.length > 0"
      >
        <div class="search-page__results-header" v-show="tab == 0 || tab == 4">
          <h2 class="search-page__results-label">
            {{ totalNo }} Noticias
          </h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers">
              {{ ini }} – {{ end }}
            </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(4, 1)"
                class="ember-view results-pagination__button results-pagination__button--prev"
                :class="{ 'results-pagination__button--disabled': ini == 0 }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(4, 2)"
                class="ember-view results-pagination__button results-pagination__button--next"
                :class="{
                  'results-pagination__button--disabled':
                    arrayBuscarPosts.length < pp,
                }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>

          <div class="search-page__results-actions">
            <div
              id="ember2148"
              class="search-page__sort-dropdown dropdown-menu dropdown-menu--enabled dropdown-menu--expanded dropdown-menu--hovered ember-view"
            >
              <div class="dropdown-menu__toggle" @click="filtroDrop = true" >
                  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember2149"
                  class="dropdown-menu__toggle-icon ember-view"
                >
                  <path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z">
                    <!---->
                  </path>
                </svg>
                <span class="dropdown-menu__toggle-label">{{filtroText}}</span>
              </div>

              <div
              v-if="filtroDrop"
                class="dropdown-menu__items"
                style="inset: 0px auto auto 0px"
                v-click-outside="filtroDropOut"
                
              >
                
                <div @click="filtrarby(1)">Mas votados</div>
                <div @click="filtrarby(2)">Más comentados</div>
                <div @click="filtrarby(3)">Recientes</div>
                <div @click="filtrarby(4)">Últimos</div>
              </div>
            </div>
          </div>
        </div>


 <div
          v-show="tab == 0 || tab == 4"
          class="search-page__results-content search-page__results-content--discussions search-page__results-content--multi"
        >
          <div
            v-for="(item, index) in arrayNoti"
            :key="index"
            class="search-page__result search-result search-result--discussion ember-view"
          >
            <div class="user-link ember-view result__user-link">
              <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }"
                class="user-link__link ember-view"
              >
                <picture class="user-avatar ember-view user-link__avatar">
                  <img :src="item.avatar" />
                </picture>

                <span class="user-link__name user-link__name--username">
                  {{ item.username }}
                </span>

                <!---->

                <!----></nuxt-link
              >
              <!---->
              <!---->
            </div>
            <nuxt-link
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"
              class="ember-view result__text-link"
            >
              <div class="result__title" v-html="item.titulo"></div>

              <div class="result__snippet">
                
                <p v-html="item.contenido"></p>
              </div>

              <div class="result__metadata">
                <span class="result__metadatum">{{ item.votos }} votos</span>
                <span class="result__metadata-separator">·</span>
                <span class="result__metadatum"
                  >{{ item.comentarios }} comentarios </span
                >
   <span class="result__metadata-separator">·</span>
                 <span class="result__metadatum"
                  >{{item.fecha}}</span
                >

              </div>
            </nuxt-link>
          </div>





          
        </div>



<div class="search-page__results-header" v-show="tab == 0 || tab == 1">
          <h2 class="search-page__results-label">
            {{ totalDiscusiones }} Discusiones
          </h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers">
              {{ ini }} – {{ end }}
            </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(1, 1)"
                class="ember-view results-pagination__button results-pagination__button--prev"
                :class="{ 'results-pagination__button--disabled': ini == 0 }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(1, 2)"
                class="ember-view results-pagination__button results-pagination__button--next"
                :class="{
                  'results-pagination__button--disabled':
                    arrayBuscarPosts.length < pp,
                }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>

                  </div>

        <div
          v-show="tab == 0 || tab == 1"
          class="search-page__results-content search-page__results-content--discussions search-page__results-content--multi"
        >

        
          <div
            v-for="(item, index) in arrayBuscarPosts"
            :key="index"
            class="search-page__result search-result search-result--discussion ember-view"
          >
            <div class="user-link ember-view result__user-link">
              <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }"
                class="user-link__link ember-view"
              >
                <picture class="user-avatar ember-view user-link__avatar">
                  <img :src="item.avatar" />
                </picture>

                <span class="user-link__name user-link__name--username">
                  {{ item.username }}
                </span>

                <!---->

                <!----></nuxt-link
              >
              <!---->
              <!---->
            </div>
            <nuxt-link
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"
              class="ember-view result__text-link"
            >
              <div class="result__title" v-html="item.titulo"></div>

              <div class="result__snippet">
                
                <p v-html="item.contenido"></p>
              </div>

              <div class="result__metadata">
                <span class="result__metadatum">{{ item.votos }} votos</span>
                <span class="result__metadata-separator">·</span>
                <span class="result__metadatum"
                  >{{ item.comentarios }} comentarios </span
                >
   <span class="result__metadata-separator">·</span>
                 <span class="result__metadatum"
                  >{{item.fecha}}</span
                >

              </div>
            </nuxt-link>
          </div>





          
        </div>
        <div class="search-page__results-header" v-show="tab == 0 || tab == 2">
          <h2 class="search-page__results-label">{{ totalGrupos }} Grupos</h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers"
              >{{ ini }} – {{ end }}</span
            >

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(2, 1)"
                class="ember-view results-pagination__button results-pagination__button--prev"
                :class="{ 'results-pagination__button--disabled': ini == 0 }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(2, 2)"
                class="ember-view results-pagination__button results-pagination__button--next"
                :class="{
                  'results-pagination__button--disabled':
                    arrayGrupos.length < pp,
                }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>

          <!---->
        </div>

        <div
          v-show="tab == 0 || tab == 2"
          class="search-page__results-content search-page__results-content--groups search-page__results-content--multi"
        >
          <div
            v-for="(item, index) in arrayGrupos"
            :key="index"
            class="search-page__result search-result search-result--group ember-view"
          >
            <nuxt-link
              :to="{
                name: 'g-slug',
                params: { slug: item.slug },
              }"
              class="ember-view result__group-link"
            >
              <picture
                id="ember1005"
                class="group-icon ember-view result__group-icon"
              >
                <img :src="item.imagen" />
              </picture>

              <div class="result__group-text">
                <span class="result__group-name" v-html="item.titulo"> </span>

                <span class="result__group-description" v-html="item.contenido">
                </span>

                <div class="result__metadata">
                  <span class="result__metadatum"
                    >{{ item.miembros }} miembros</span
                  >
                  <span class="result__metadata-separator">·</span>
                  <span class="result__metadatum">{{ item.fecha }}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="search-page__results-header" v-show="tab == 0 || tab == 3">
          <h2 class="search-page__results-label">
            {{ totalUsuarios }} Usuarios
          </h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers">
              {{ ini }} – {{ end }}
            </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(3, 1)"
                class="ember-view results-pagination__button results-pagination__button--prev"
                :class="{ 'results-pagination__button--disabled': ini == 0 }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(3, 2)"
                class="ember-view results-pagination__button results-pagination__button--next"
                :class="{
                  'results-pagination__button--disabled':
                    arrayUsuarios.length < pp,
                }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>

          <!---->
        </div>

        <div
          v-show="tab == 0 || tab == 3"
          class="search-page__results-content search-page__results-content--users search-page__results-content--multi"
        >
          <div
            v-for="(item, index) in arrayUsuarios"
            :key="index"
            class="search-page__result search-result search-result--user ember-view"
          >
            <div class="user-link ember-view result__user-link">
              <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.slug },
                }"
                class="user-link__link ember-view"
              >
                <picture class="user-avatar ember-view user-link__avatar">
                  <img :src="item.avatar" />
                </picture>

                <span class="user-link__name" v-html="item.username"></span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import loader from '~/components/loader/loader.vue';
export default {
  components: { loader },
  layout: "perfilEditCanalizados",
  name: "buscar",
   directives: {
    ClickOutside
  },
  data() {
    return {
      loader:true,
      q: "",
      arrayBuscarPosts: [],
      arrayGrupos: [],
      arrayUsuarios: [],
      arrayNoti: [],
      totalDiscusiones: "",
      totalGrupos: "",
      totalUsuarios: "",
      totalNo: "",
      f: "",
      p: 0,
      ini: 0,
      pp: 0,
      end: 0,
      tab: 0,
      filtroDrop: false, 
      filtroText: 'Recientes', 
      s: 'recientes', 
      sActivo: false,
      contadorFiltro: 0
    };
  },
  watch: {
    q: function (value) {
      if (value.length == 0) {
        this.$router.push("/buscar");
        this.arrayBuscarPosts = [];
        this.arrayGrupos = [];
        this.arrayUsuarios = [];
      } else {

          if(this.$route.query.s){
            this.s = this.$route.query.s
              this.$router.push({ query: { q: value, s: this.s } });
            if(this.s == 'masvotados'){
            this.filtroText = 'Más votados'
            }
            if(this.s == 'mascomentados'){
            this.filtroText = 'Más comentados'
            }
            if(this.s == 'recientes'){
            this.filtroText = 'Recientes'
            }
            if(this.s == 'ultimos'){
            this.filtroText = 'Últimos'
            }

               this.getBuscar();
            return
          }


        if (this.$route.query.p && this.$route.query.f) {
          this.p = this.$route.query.p;
          this.f = this.$route.query.f;
          this.$router.push({ query: { q: value, f: this.f, p: this.p } });

          if (this.f == "discusiones") {
            this.tab = 1;
          }
          if (this.f == "grupos") {
            this.tab = 2;
          }
          if (this.f == "usuarios") {
            this.tab = 3;
          }
          if (this.f == "noticias") {
            this.tab = 4;
          }

           this.getBuscar();
            return
        } else {
          this.$router.push({ query: { q: value } });
           this.getBuscar();
            return
        }

     
      }
    },
  },
  methods: {
    cerrarBusqueda() {
      this.$router.push("/");
    },
    cambiarPage(tipo, atrasalante) {
      if (atrasalante == 1) {
        //atras
        this.p--;
      } else {
        this.p++;
      }

      if (tipo == 0) {
        //discusiones
        this.f = "";

        this.tab = 0;
    
      }

      if (tipo == 1) {
        //discusiones
        this.f = "discusiones";
       
        this.tab = 1;
      }

      if (tipo == 2) {
        //grupos
        this.f = "grupos";
        this.tab = 2;
      
      }

      if (tipo == 3) {
        //usuarios
        this.f = "usuarios";
        this.tab = 3;
       
      }
       if (tipo == 4) {
        //usuarios
        this.f = "noticias";
        this.tab = 4;
       
      }

      if(this.$route.query.s){
            this.$router.push({
          query: { q: this.q, p: this.p, f: this.f, s: this.s },
        });
      }else{
          this.$router.push({
          query: { q: this.q, p: this.p, f: this.f },
        });
      }

        this.getBuscar();

    },
    filtroDropOut(){
      if(this.contadorFiltro > 0){
        this.filtroDrop = false
        this.contadorFiltro = 0
      }else{
        this.contadorFiltro++
      }
        
    },
    cambiarTab(tab) {
      this.tab = tab;

      if (tab == 0) {
        //discusiones
        this.f = "";
        this.p = 0;
        this.$router.push({ query: { q: this.q } });

          if(this.sActivo){
           this.$router.push({ query: { q: this.q, s:this.s } });
        }else{
         this.$router.push({ query: { q: this.q } });
        }


        this.tab = 0;
      }

      if (tab == 1) {
        //discusiones
        this.f = "discusiones";
        this.p = 0;
      
       
        if(this.sActivo){
           this.$router.push({ query: { q: this.q, f: this.f, s:this.s } });
        }else{
           this.$router.push({ query: { q: this.q, f: this.f } });
        }
        this.tab = 1;
      }

        if (tab == 4) {
        //discusiones
        this.f = "noticias";
        this.p = 0;
      
       
        if(this.sActivo){
           this.$router.push({ query: { q: this.q, f: this.f, s:this.s } });
        }else{
           this.$router.push({ query: { q: this.q, f: this.f } });
        }
        this.tab = 4;
      }

      if (tab == 2) {
        //discusiones
        this.f = "grupos";
        this.p = 0;
        this.$router.push({ query: { q: this.q, f: this.f } });
        this.tab = 2;
      }

      if (tab == 3) {
        //discusiones
        this.f = "usuarios";
        this.p = 0;
        this.$router.push({ query: { q: this.q, f: this.f } });
        this.tab = 3;
      }

      if (this.$route.query.p != undefined) {
        this.getBuscar();
      }
    },
    filtrarby(filtro) {
      this.filtroDrop = false
       this.filtroS = filtro
       this.contadorFiltro = 0
       this.sActivo = true
      if(filtro == 1){
        this.filtroText = 'Más votados'
        this.s = 'masvotados'
      }

      if(filtro == 2){
        this.filtroText = 'Más comentados'
        this.s = 'mascomentados'
      }

      if(filtro == 3){
        this.filtroText = 'Recientes'
        this.s = 'recientes'
      }

      if(filtro == 4){
        this.filtroText = 'Últimos'
        this.s = 'ultimos'
      }
       this.$router.push({ query: { q: this.q, s: this.s } });
       this.getBuscar()
        
    },
    async getBuscar() {
    
      this.arrayBuscarPosts = [];
      await this.$axios
        .$get("/buscar/post/?q=" + this.q + "&f=" + this.f + "&p=" + this.p+"&s="+this.s)
        .then((response) => {
          console.log(response);
          this.arrayBuscarPosts = response.posts;
          this.arrayGrupos = response.grupos;
          this.arrayUsuarios = response.usuarios;
          this.arrayNoti = response.noticias;
          this.totalDiscusiones = response.totalD;
          this.totalGrupos = response.totalG;
          this.totalUsuarios = response.totalU;
          this.totalNo = response.totalNo;
          this.pp = response.pp;
          this.ini = response.ini;
          this.end = response.end;
          this.loader = false
        });
    },
  },
  mounted() {
    if (this.$route.query.q == undefined) {
      this.loader = false
    } else {
      this.q = this.$route.query.q;
    }

  },
};
</script>

<style>
.query-match {
  color: #3e64db !important;
}
</style>