<template>
  <header id="nav" class="sticky-nav" style="padding: 0 !important;">
    <div>
      <span onclick="openNav()" class="collapsable"><i class="fas fa-bars icono-hamburguesa"></i></span>
      <!--Content from sidenav here-->
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div style="display: flex;">
          <img
            :src="$store.state.img_perfil"
            loading="lazy"
            class="image-12"
            style="margin-left: 20px; margin-top: 12px; margin-right: 10px;"
          />
          <div>
            <h4 style="color: #fff;">Pepe rodriguez</h4>
            <p>@peperodriguez</p>
          </div>
        </div>
        <hr style="background-color: #000">
        <div style="text-align: left;">
          <nuxt-link to="/comunidad" style="font-size: 20px;"><i class="fas fa-home"></i> Inicio</nuxt-link>
          <nuxt-link to="/startups" style="font-size: 20px;"><i class="fas fa-rocket"></i> Startups</nuxt-link>
          <nuxt-link to="/staffpicks" style="font-size: 20px;"><i class="fas fa-star"></i> Staff Picks</nuxt-link>
          <nuxt-link to="/grupos" style="font-size: 20px;"><i class="fas fa-comments"></i> Grupos</nuxt-link>
          <nuxt-link to="/ecosistema" style="font-size: 20px;"><i class="fas fa-users"></i> Ecosistema</nuxt-link>
        </div>
        <hr style="background-color: #000">
        <div>
          <div style="position: absolute; bottom: 0; text-aling: center;">Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
          </div>
        </div>
    </div>
    <nav class="container nav-bar w-container padding" :class="{'menosPadding': this.$store.state.cookieLogin}">
      <div class="div-block-413">
        <div
              data-hover=""
              data-delay="0"
              class="dropdown w-dropdown"
              style=""
            >
              <div
                @click="clicLogoInicio"
                class="dropdown-toggle w-dropdown-toggle"
                role="button"
              >
              
                <nuxt-link  to="/comunidad">
                <img src="/images/logo/logo.svg" class="tamaLogoL" />
                </nuxt-link>

                <nuxt-link  to="/comunidad">
                <img src="/images/logo/isotipo_1.svg" class="tamaLogoP" />
                </nuxt-link>


              </div>
              <!--  <nav
                class="w-dropdown-list"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
                <a href="#" class="w-dropdown-link" tabindex="0">📅 Eventos</a
                ><a href="#" class="w-dropdown-link" tabindex="0">📱 Startups</a
                ><a href="#" class="w-dropdown-link" tabindex="0"
                  >🤖 Ecosistema</a
                ><a href="#" class="w-dropdown-link" tabindex="0"
                  >💾 Base de datos</a
                ><a href="#" class="w-dropdown-link" tabindex="0"
                  >✉️ Newsletter</a
                ><a href="#" class="w-dropdown-link" tabindex="0"
                  >✍️ Colaborá</a
                >
              </nav>-->
            </div>
      </div>
      <div class="div-block-414">
        <form action="/buscar" class="search-2 w-form buscadorHeader" method="GET" style="position: relative;">
          <i class="fas fa-search input-search-header" style="position: absolute; top: 10px; left: 10px; width: 20px; height: 20px"></i>
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember8"
            style="position: absolute; bottom: 27%; margin-top: 17px; margin-left: 17px; z-index: 1;"
            class="input-search-header"
            width="18px"
            height="18px"
            
          >
            <path
              d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
            >

            </path>
          </svg> -->
          <input
            type="search"
            class="search-input w-input"
            maxlength="256"
            name="q"
            placeholder="Buscá temas, grupos, usuarios…"
            style="padding-left: 45px; background: #F3F3F3 0% 0% no-repeat padding-box; border: none;"
          /><input
            type="submit"
            value="Search"
            class="search-button w-button"
          />
        </form>
        <nuxt-link to="/buscar" class="buscadorHeaderMovil" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="mysvg"
          >
            <path
              d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
            >
              <!---->
            </path>
          </svg>
        </nuxt-link>
      </div>
      <div class="div-block-415">
        <ul role="list" class="list-8">
          <nuxt-link
            :to="{ name: 'iniciar-sesion' }"
            class="button-init"
            v-if="$store.state.cookieLogin == false"
          >
            Iniciar Sesión
          </nuxt-link>

          <nuxt-link
          class="button-init-register"
            :to="{ name: 'registro' }"
            v-if="$store.state.cookieLogin == false"
          >
            Registrarse
          </nuxt-link>
          <li class="list-item-3" v-if="$store.state.cookieLogin">
            <nuxt-link class="botonCanalizados " to="/post-nuevo">Publicar</nuxt-link>
          </li>
          <li class="list-item-3" v-if="$store.state.cookieLogin">
            <div
              class="div-block-452"
              :class="{ sihaynotify: $store.state.notifyCount > 0 }"
            >
              <nuxt-link
                :to="{
                  name: 'u-username-notificaciones',
                  params: { username: $store.state.username },
                }"
              >
                <div class="w-embed">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI4Mi45MzEgNDY4Yy0yMy4xMzEgMC00MS41LTE1Ljg5Ny00NC44MDQtMzguODk3bC00OC43NzItMzQxLjIyNmMtLjE3OS0xLjI0OC0uNTU3LTMuODc1LTQuNDg1LTMuODc3LS4wMDIgMC0uMDA1IDAtLjAwNyAwLTMuOTIzIDAtNC4zMDMgMi42MjQtNC40ODYgMy44ODVsLTM0LjczNiAyNDMuNTMxYy0zLjE1OCAyMS43NDMtMjAuNjUzIDM3LjU3LTQyLjU1MSAzOC41MzktMjEuOTAxLjk2Ny00MC43MjItMTMuMjUyLTQ1Ljc3Ni0zNC41ODEtLjAxOS0uMDc3LS4wMzYtLjE1My0uMDUzLS4yM2wtMTEuMjE0LTQ5Ljk0N2MtMy4wNDctMTIuNjYyLTE0LjIyOC0yMi4xOTctMjYuMDQ3LTIyLjE5Ny0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHM4Ljk1NC0yMCAyMC0yMGMzMC4zNzIgMCA1Ny43MDUgMjIuMzIxIDY0Ljk5MyA1My4wNzQuMDE5LjA3Ny4wMzYuMTUzLjA1My4yM2wxMS4yMTYgNDkuOTU1Yy4yODIgMS4xNzIgMS4wNjQgMy45MDQgNS4wNiAzLjczNCA0LjEzMy0uMTgzIDQuNTY0LTMuMTU3IDQuNzI3LTQuMjc3bDM0LjczNi0yNDMuNTMxYzMuMjctMjIuNTA4IDIxLjM5MS0zOC4xODUgNDQuMDc4LTM4LjE4NWguMDM5YzIyLjcwNy4wMTggNDAuODIgMTUuNzI4IDQ0LjA0OSAzOC4yMDRsNDguNzcxIDM0MS4yMjVjLjE4MSAxLjI1OS43MDggNC42NjYgNS4zNjkgNC41NyA0LjcwMi0uMDcxIDUuMDg2LTMuNDY1IDUuMjMxLTQuNzQzbDYuODAzLTYwLjQ5MWMxLjIzNC0xMC45NzcgMTEuMTM0LTE4Ljg3NyAyMi4xMS0xNy42MzkgMTAuOTc3IDEuMjM0IDE4Ljg3NCAxMS4xMzMgMTcuNjM5IDIyLjExbC02LjgwNSA2MC41MDRjLTIuNjQyIDIzLjM1NC0yMC44OSAzOS45MDItNDQuMzc3IDQwLjI1NS0uMjU0LjAwMy0uNTA4LjAwNS0uNzYxLjAwNXptMTY5LjI1My0xNDcuNjMzYy4wMi0uMDc5LjAzOS0uMTU4LjA1OC0uMjM3bDcuMDYyLTI5Ljk2N2MzLjkwMS0xNS40OTMgMTcuOTM5LTI3LjE2MyAzMi42OTYtMjcuMTYzIDExLjA0NiAwIDIwLTguOTU0IDIwLTIwcy04Ljk1NC0yMC0yMC0yMGMtMzMuMTU0IDAtNjMuMjQyIDI0LjIzMS03MS41NDIgNTcuNjE3LS4wMi4wNzktLjAzOS4xNTktLjA1OC4yMzhsLTcuMDYzIDI5Ljk3NGMtLjIzOC45NDItLjY2MiAyLjI1My0zLjAwOCAyLjE2Ny0yLjQ0NS0uMDk2LTIuNjg3LTEuNTQ5LTIuODM5LTIuNDU4bC0xNS42OTYtOTUuNzQ2Yy0zLjQwOC0yMC40NDQtMjAuMjUtMzQuMzU0LTQwLjk3OC0zMy43OTktMjAuNzE5LjU0NC0zNi44MTcgMTUuMzA4LTM5LjE0NyAzNS45MDNsLTguNDY5IDc0Ljg1NWMtMS4yNDIgMTAuOTc2IDYuNjQ5IDIwLjg4IDE3LjYyNSAyMi4xMjIgMTAuOTc5IDEuMjQzIDIwLjg4LTYuNjQ5IDIyLjEyMi0xNy42MjVsOC40NjktNzQuODU1Yy4wMTgtLjE1Mi4wMzgtLjI3NC4wNTgtLjM2OS4yMzctLjA1My41NTItLjA2Mi43OS0uMDIxLjAyMi4wODMuMDQ2LjE4Ny4wNjcuMzEybDE1LjY5NiA5NS43NDZjMy4zODggMjAuMzMxIDIwLjEzOSAzNS4wOTUgNDAuNzM0IDM1LjkwNC41OTEuMDIzIDEuMTc4LjAzNSAxLjc2NC4wMzUgMTkuODQzIDAgMzYuODI5LTEzLjIwNCA0MS42NTktMzIuNjMzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                  /></div
              ></nuxt-link>
            </div>
          </li>

          <li class="list-item-3" v-if="$store.state.cookieLogin">
            <div data-hover="" data-delay="0" class="w-dropdown" style="">
              <div
                class="dropdown-toggle-3 w-dropdown-toggle"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
                @click="dropDownPerfilClic"
              >
                <img
                  :src="$store.state.img_perfil"
                  loading="lazy"
                  sizes="32px"
                  alt=""
                  class="image-12"
                />
              </div>
              <nav
                v-if="dropDownPerfil"
                v-click-outside="outDrop"
                class="dropdown-list-2 w-dropdown-list w--open"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
              >
                <nuxt-link
                  class="w-dropdown-link"
                  :to="{
                    name: 'u-username',
                    params: { username: $store.state.username },
                  }"
                  >Perfil</nuxt-link
                >
                <nuxt-link
                  class="w-dropdown-link"
                  tabindex="0"
                  :to="{
                    name: 'u-username-notificaciones',
                    params: { username: $store.state.username },
                  }"
                  >Notificaciones</nuxt-link
                >
                <nuxt-link
                  class="w-dropdown-link"
                  tabindex="0"
                  :to="{
                    name: 'u-username-configuracion',
                    params: { username: $store.state.username },
                  }"
                  >Configuracion</nuxt-link
                ><a
                  href="#"
                  class="w-dropdown-link"
                  @click.prevent="cerrarSesion"
                  tabindex="0"
                  >Salir</a
                >
              </nav>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "headerCanalizados",
  directives: {
    ClickOutside,
  },
  head: {
        title: "Canalizados",
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
            hid: "description",
            name: "description",
            content:
              "Mantenete informado del ecosistema de startups, tecnologia y VCs latinoamericano. Argentina, Chile, Colombia, Peru, Mexico"
          }
        ],
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/bootstrap.min.css"
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/font-awesome.css"
          },
          { 
            rel: "stylesheet", 
            href: "assets/css/owl-carousel.css" 
          },
          { 
            rel: "stylesheet", 
            href: "https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css" 
          },
          
          {
            rel: "icon",
            type: "image/x-icon",
            href: "https://canalizados.com/images/logo/isotipo_1.svg"
          }
        ],
        script: [
          {
            src: "assets/js/bootstrap.min.js"
          },
          {
            src: "//cdn.jsdelivr.net/npm/sweetalert2@11"
          },
          {
            src: "assets/js/scrollreveal.min.js"
          },
          {
            src: "assets/js/alerts.js"
          },
          {
            src: "https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"
          },
          {
            src: "https://kit.fontawesome.com/123aef3e32.js",
            crossorigin: "anonymous"
          }
        ]
      },
  data() {
    return {
      dropDownPerfil: false,
      contadorOut: 0,
    };
  },
  methods: {
    async getCountNotify() {
      if(this.$store.state.cookieLogin){
          await this.$axios
        .$get("/perfil/getcountnotify?p=" + this.$store.state.p)
        .then((response) => {
          this.$store.commit("setnotifyCount", response);
        });
      }
    
    },
    cerrarSesion() {
      this.$cookies.remove("access_token_");
      this.$cookies.remove("user_data_");
      
      location.href = "/";
    },
    dropDownPerfilClic() {
      if (this.dropDownPerfil == false) {
        this.dropDownPerfil = true;
      } else {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      }
    },
    outDrop() {
      if (this.contadorOut > 0) {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      } else {
        this.contadorOut++;
      }
    },
    clicLogoInicio() {
      this.$router.push("/comunidad");
    },
  },
  mounted() {
    this.getCountNotify();
  },
};
</script>
<style scoped>
.logo-hover:hover + .logo-text {
  opacity: 1 !important;
}
a:hover {
  color: #1542c7;
}
.sihaynotify {
  background-color: #7986CB;
}
</style>