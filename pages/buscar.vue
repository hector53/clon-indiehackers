<template>
  <div class="ember-view">
    <div class="search-page">
      <header class="search-page__header">
        <div class="search-page__header-content">
          <a href="/" id="ember6" class="ember-view search-page__logo">
            <img
              class="logo__glyph"
              src="/images/isotipo-canaliza2.svg"
              style="height: 24px; width: 24px"
            />
           <div class="logo-text">CANALIZADOS</div>
          </a>
          <div
            id="ember7"
            class="modal-closer ember-view search-page__close-button"
          >
            <svg
              class="modal-closer__close-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              ></path>
            </svg>
          </div>
        </div>
      </header>

      <ul class="search-page__filters">
        <li class="search-page__filter search-page__filter--selected">Todos</li>
        <li class="search-page__filter">Discusiones</li>
        <li class="search-page__filter">Grupos</li>
        <li class="search-page__filter">Usuarios</li>
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
        <div class="search-page__results-header">
          <h2 class="search-page__results-label">{{totalDiscusiones}} Discusiones</h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers"> 1 – 10 </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember625"
                class="ember-view results-pagination__button results-pagination__button--prev results-pagination__button--disabled"
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
                id="ember626"
                class="ember-view results-pagination__button results-pagination__button--next"
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
              class="search-page__sort-dropdown dropdown-menu dropdown-menu--enabled dropdown-menu--collapsed dropdown-menu--blurred ember-view"
            >
              <div class="dropdown-menu__toggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember628"
                  class="dropdown-menu__toggle-icon ember-view"
                >
                  <path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z">
                    <!---->
                  </path>
                </svg>
                <span class="dropdown-menu__toggle-label">Filtro</span>
              </div>

              <!---->
            </div>
          </div>
        </div>

        <div
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
                {{ item.fecha }} -
                <p v-html="item.contenido"></p>
              </div>

              <div class="result__metadata">
                <span class="result__metadatum">{{ item.votos }} votos</span>
                <span class="result__metadata-separator">·</span>
                <span class="result__metadatum"
                  >{{ item.comentarios }} comentarios</span
                >
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="search-page__results-header">
          <h2 class="search-page__results-label">{{totalGrupos}} Grupos</h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers"> 1 – 5</span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember749"
                class="ember-view results-pagination__button results-pagination__button--prev results-pagination__button--disabled"
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
                id="ember750"
                class="ember-view results-pagination__button results-pagination__button--next"
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
        <div class="search-page__results-header">
          <h2 class="search-page__results-label">{{totalUsuarios}} Usuarios</h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers"> 1 – 6 </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember811"
                class="ember-view results-pagination__button results-pagination__button--prev results-pagination__button--disabled"
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
                id="ember812"
                class="ember-view results-pagination__button results-pagination__button--next"
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
          class="search-page__results-content search-page__results-content--users search-page__results-content--multi"
        >
          <div
            v-for="(item, index) in arrayUsuarios" :key="index"
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
                <picture
                  class="user-avatar ember-view user-link__avatar"
                >
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
export default {
  layout: "buscar",
  name: "buscar",
  data() {
    return {
      q: "",
      arrayBuscarPosts: [],
      arrayGrupos: [],
      arrayUsuarios: [], 
      totalDiscusiones: '', 
      totalGrupos: '', 
      totalUsuarios: ''
    };
  },
  watch: {
    q: function (value) {
      if (value.length == 0) {
        this.q = "";
        this.$router.push("/buscar");
      } else {
        this.$router.push({ query: { q: value } });
        this.getBuscar();
      }
    },
  },
  methods: {
    async getBuscar() {
      this.arrayBuscarPosts = [];
      await this.$axios.$get("/buscar/post/?q=" + this.q).then((response) => {
        console.log(response);
        this.arrayBuscarPosts = response.posts;
        this.arrayGrupos = response.grupos;
        this.arrayUsuarios = response.usuarios
        this.totalDiscusiones = response.totalD
        this.totalGrupos = response.totalG 
        this.totalUsuarios = response.totalU
      });
    },
  },
  mounted() {
    if (this.$route.query.q == undefined) {
    } else {
      this.q = this.$route.query.q;
      this.getBuscar();
    }
  },
};
</script>

