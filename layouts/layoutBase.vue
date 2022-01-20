<template>
  <div>
    <header id="nav">
      <b-navbar toggleable="lg" type="light" class="sticky-nav">
        <b-container>
          <b-navbar-toggle
            v-b-toggle.sidebar-backdrop
            target=""
          ></b-navbar-toggle>
          <b-navbar-brand href="#">
            <img src="/images/logo/logo.svg" class="canalizadosBrandPC" />
          </b-navbar-brand>
          <b-icon
            icon="search"
            font-scale="1.5"
            class="searchMovil"
            v-if="clickSearch == false"
            @click="clickSearch = true"
          ></b-icon>

          <button
            type="button"
            aria-label="Close"
            class="close"
            v-else
            @click="clickSearch = false"
          >
            <svg
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="x"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-x b-icon bi"
            >
              <g>
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                ></path>
              </g>
            </svg>
          </button>

          <div class="jeg_search_popup_expand" v-if="clickSearch == true">
            <form
              action="buscar"
              method="get"
              class="jeg_search_form"
              target="_top"
            >
              <input
                name="q"
                class="jeg_search_input"
                placeholder="Buscar..."
                type="text"
                autocomplete="off"
              />
            </form>
          </div>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navTopRight" style="margin-top: 0;">
            <div class="h2 mb-0 iconsHeader">
              <a href="https://www.instagram.com/canalizados_/"><b-icon icon="instagram" font-scale="0.7" class="iconsheaderLink"></b-icon></a>
              <a href="https://twitter.com/Canalizados_"><b-icon icon="twitter" font-scale="0.7" class="iconsheaderLink"></b-icon></a>
              <a href="https://www.linkedin.com/company/canalizados/"><b-icon icon="linkedin" font-scale="0.7" class="iconsheaderLink"></b-icon></a>
            </div>
            <nuxt-link class="btnUneteComunidad" :to="{ name: 'registro' }"
              >Únete a la Comunidad</nuxt-link
            >


            
          </b-navbar-nav>
        </b-container>
      </b-navbar>

      <b-nav class="sticky-nav header2">
        <b-container style="display:flex">
          <b-nav-item>Inversiones</b-nav-item>
          <b-nav-item>Mira esta Startup</b-nav-item>
          <b-nav-item>Recursos</b-nav-item>
          <b-nav-item>Ecosistema Cripto</b-nav-item>
          <b-nav-item>Managament</b-nav-item>

          <b-navbar-nav class="ml-auto" style="margin-top: 0;">
            <div class="jeg_nav_col jeg_nav_right jeg_nav_normal ">
              <div class="item_wrap jeg_nav_alignright">
                <div class="jeg_nav_item jeg_search_wrapper">
                  <a href="#" class="jeg_search_toggle"
                    ><i class="fa fa-search"></i
                  ></a>
                  <form
                    action="buscar"
                    method="get"
                    class="jeg_search_form"
                    target="_top"
                  >
                    <input
                      name="q"
                      class="jeg_search_input"
                      placeholder="Buscar..."
                      type="text"
                      value=""
                      autocomplete="off"
                    />
                    <button
                      aria-label="Search Button"
                      type="submit"
                      class="jeg_search_button btn"
                    >
                      <b-icon icon="search" font-scale="1"></b-icon>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </b-navbar-nav>
        </b-container>
      </b-nav>
    </header>

    <b-sidebar id="sidebar-backdrop" backdrop shadow>
      <template #footer>
        <div class="h2 mb-0 iconsHeader" style="    padding: 20px;">
          <b-icon icon="instagram" font-scale="0.7"></b-icon>
          <b-icon icon="twitter" font-scale="0.7"></b-icon>
          <b-icon icon="linkedin" font-scale="0.7"></b-icon>
        </div>
      </template>
      <div class="px-3 py-2">
        <div class="jeg_nav_col jeg_nav_right jeg_nav_normal ">
          <div class="item_wrap jeg_nav_alignright">
            <div class="jeg_nav_item jeg_search_wrapper">
              <a href="#" class="jeg_search_toggle"
                ><i class="fa fa-search"></i
              ></a>
              <form
                action="https://revistamyt.com/"
                method="get"
                class="jeg_search_form"
                target="_top"
              >
                <input
                  name="s"
                  class="jeg_search_input"
                  placeholder="Buscar..."
                  type="text"
                  value=""
                  autocomplete="off"
                />
                <button
                  aria-label="Search Button"
                  type="submit"
                  class="jeg_search_button btn"
                >
                  <b-icon icon="search" font-scale="1"></b-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <b-navbar-nav class="mt-2 linksSidebarMovil">
          <b-nav-item>Inversiones</b-nav-item>
          <b-nav-item>Mira esta Startup</b-nav-item>
          <b-nav-item>Recursos</b-nav-item>
          <b-nav-item>Ecosistema Cripto</b-nav-item>
          <b-nav-item>Managament</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-sidebar>

    <main>
        <Nuxt />
    </main>

    <footer id="footer" class="footer">
      <div class="w-container">
        <div>Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
        <div class="menuPoliticas">
          <nuxt-link to="/quienes-somos">Quienes Somos </nuxt-link> <a>·</a>
          <nuxt-link to="/politica-de-privacidad">Privacidad </nuxt-link>
          <a>·</a>
          <nuxt-link to="/contacto">Contacto </nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    BIcon
  },
  name: "layoutBase",
  data() {
    return {
      clickSearch: false
    };
  }
};
</script>
