<template>
  <header id="nav" class="sticky-nav">
    <nav class="container nav-bar w-container">
      <div class="div-block-413">
        <ul role="list" class="list-2">
          <li class="list-item-8">
            <div
              data-hover=""
              data-delay="0"
              class="dropdown w-dropdown"
              style=""
            >
              <div
                class="dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
              >
                <div class="logo-hover">
                  <div class="html-embed-12 w-embed">
                    <!--?xml version="1.0" encoding="utf-8"?-->
                    <!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 300.2 252.15"
                      style="enable-background: new 0 0 300.2 252.15"
                      xml:space="preserve"
                    >
                      <g>
                        <path
                          style="fill: currentColor"
                          d="M107.27,249.06h85.66c1.89,0,3.62-1.22,4.47-3.16l16.16-36.82c1.67-3.81-0.74-8.31-4.47-8.31H91.11
		c-3.72,0-6.14,4.5-4.47,8.31l16.16,36.82C103.65,247.84,105.38,249.06,107.27,249.06z"
                        ></path>
                        <path
                          style="fill: currentColor"
                          d="M3.54,19.71l13.11,29.88c1.7,3.87,5.15,6.31,8.93,6.31h249.03c3.78,0,7.23-2.44,8.93-6.31
		l13.11-29.88c3.35-7.63-1.49-16.63-8.93-16.63H12.47C5.03,3.08,0.19,12.08,3.54,19.71z"
                        ></path>
                        <path
                          style="fill: currentColor"
                          d="M66.12,152.48h167.96c2.64,0,5.06-1.71,6.25-4.42l14.14-32.23c2.34-5.34-1.04-11.64-6.25-11.64
		H51.97c-5.21,0-8.6,6.3-6.25,11.64l14.14,32.23C61.05,150.77,63.47,152.48,66.12,152.48z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <nuxt-link to="/">
                  <div class="logo-text">CANALIZADOS</div></nuxt-link
                >
              </div>
              <nav
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
              </nav>
            </div>
          </li>
        </ul>
      </div>
      <div class="div-block-414">
        <form action="/search" class="search-2 w-form">
          <input
            type="search"
            class="search-input w-input"
            maxlength="256"
            name="query"
            placeholder="Buscá temas, grupos, usuarios…"
            id="search"
            required=""
          /><input
            type="submit"
            value="Search"
            class="search-button w-button"
          />
        </form>
      </div>
      <div class="div-block-415">
        <ul role="list" class="list-8">
          <nuxt-link
            :to="{ name: 'iniciar-sesion' }"
            v-if="$store.state.cookieLogin == false"
          >
            <li class="list-item-3">Iniciar Sesión</li>
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'registro' }"
            v-if="$store.state.cookieLogin == false"
          >
            <li class="list-item-3">Registrarse</li>
          </nuxt-link>
  <li class="list-item-3" v-if="$store.state.cookieLogin">
             <nuxt-link to="/post-nuevo">Publicar</nuxt-link>
           </li>
          <li class="list-item-3" v-if="$store.state.cookieLogin">
            <div class="div-block-452" :class="{'sihaynotify': $store.state.notifyCount > 0}">
               <nuxt-link
             
             :to="{
                    name: 'u-username-notificaciones',
                    params: { username: $store.state.username },
                  }"
                  > <div class="w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI4Mi45MzEgNDY4Yy0yMy4xMzEgMC00MS41LTE1Ljg5Ny00NC44MDQtMzguODk3bC00OC43NzItMzQxLjIyNmMtLjE3OS0xLjI0OC0uNTU3LTMuODc1LTQuNDg1LTMuODc3LS4wMDIgMC0uMDA1IDAtLjAwNyAwLTMuOTIzIDAtNC4zMDMgMi42MjQtNC40ODYgMy44ODVsLTM0LjczNiAyNDMuNTMxYy0zLjE1OCAyMS43NDMtMjAuNjUzIDM3LjU3LTQyLjU1MSAzOC41MzktMjEuOTAxLjk2Ny00MC43MjItMTMuMjUyLTQ1Ljc3Ni0zNC41ODEtLjAxOS0uMDc3LS4wMzYtLjE1My0uMDUzLS4yM2wtMTEuMjE0LTQ5Ljk0N2MtMy4wNDctMTIuNjYyLTE0LjIyOC0yMi4xOTctMjYuMDQ3LTIyLjE5Ny0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHM4Ljk1NC0yMCAyMC0yMGMzMC4zNzIgMCA1Ny43MDUgMjIuMzIxIDY0Ljk5MyA1My4wNzQuMDE5LjA3Ny4wMzYuMTUzLjA1My4yM2wxMS4yMTYgNDkuOTU1Yy4yODIgMS4xNzIgMS4wNjQgMy45MDQgNS4wNiAzLjczNCA0LjEzMy0uMTgzIDQuNTY0LTMuMTU3IDQuNzI3LTQuMjc3bDM0LjczNi0yNDMuNTMxYzMuMjctMjIuNTA4IDIxLjM5MS0zOC4xODUgNDQuMDc4LTM4LjE4NWguMDM5YzIyLjcwNy4wMTggNDAuODIgMTUuNzI4IDQ0LjA0OSAzOC4yMDRsNDguNzcxIDM0MS4yMjVjLjE4MSAxLjI1OS43MDggNC42NjYgNS4zNjkgNC41NyA0LjcwMi0uMDcxIDUuMDg2LTMuNDY1IDUuMjMxLTQuNzQzbDYuODAzLTYwLjQ5MWMxLjIzNC0xMC45NzcgMTEuMTM0LTE4Ljg3NyAyMi4xMS0xNy42MzkgMTAuOTc3IDEuMjM0IDE4Ljg3NCAxMS4xMzMgMTcuNjM5IDIyLjExbC02LjgwNSA2MC41MDRjLTIuNjQyIDIzLjM1NC0yMC44OSAzOS45MDItNDQuMzc3IDQwLjI1NS0uMjU0LjAwMy0uNTA4LjAwNS0uNzYxLjAwNXptMTY5LjI1My0xNDcuNjMzYy4wMi0uMDc5LjAzOS0uMTU4LjA1OC0uMjM3bDcuMDYyLTI5Ljk2N2MzLjkwMS0xNS40OTMgMTcuOTM5LTI3LjE2MyAzMi42OTYtMjcuMTYzIDExLjA0NiAwIDIwLTguOTU0IDIwLTIwcy04Ljk1NC0yMC0yMC0yMGMtMzMuMTU0IDAtNjMuMjQyIDI0LjIzMS03MS41NDIgNTcuNjE3LS4wMi4wNzktLjAzOS4xNTktLjA1OC4yMzhsLTcuMDYzIDI5Ljk3NGMtLjIzOC45NDItLjY2MiAyLjI1My0zLjAwOCAyLjE2Ny0yLjQ0NS0uMDk2LTIuNjg3LTEuNTQ5LTIuODM5LTIuNDU4bC0xNS42OTYtOTUuNzQ2Yy0zLjQwOC0yMC40NDQtMjAuMjUtMzQuMzU0LTQwLjk3OC0zMy43OTktMjAuNzE5LjU0NC0zNi44MTcgMTUuMzA4LTM5LjE0NyAzNS45MDNsLTguNDY5IDc0Ljg1NWMtMS4yNDIgMTAuOTc2IDYuNjQ5IDIwLjg4IDE3LjYyNSAyMi4xMjIgMTAuOTc5IDEuMjQzIDIwLjg4LTYuNjQ5IDIyLjEyMi0xNy42MjVsOC40NjktNzQuODU1Yy4wMTgtLjE1Mi4wMzgtLjI3NC4wNTgtLjM2OS4yMzctLjA1My41NTItLjA2Mi43OS0uMDIxLjAyMi4wODMuMDQ2LjE4Ny4wNjcuMzEybDE1LjY5NiA5NS43NDZjMy4zODggMjAuMzMxIDIwLjEzOSAzNS4wOTUgNDAuNzM0IDM1LjkwNC41OTEuMDIzIDEuMTc4LjAzNSAxLjc2NC4wMzUgMTkuODQzIDAgMzYuODI5LTEzLjIwNCA0MS42NTktMzIuNjMzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                />
              </div></nuxt-link >
             
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
              <nav v-if="dropDownPerfil"
              v-click-outside="outDrop"
                class="dropdown-list-2 w-dropdown-list w--open"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
              >
              <nuxt-link class="w-dropdown-link"
               :to="{name:'u-username', params: {username: $store.state.username}}"
              >Perfil</nuxt-link >
              <nuxt-link
             class="w-dropdown-link" tabindex="0"
             :to="{
                    name: 'u-username-notificaciones',
                    params: { username: $store.state.username },
                  }"
                  >Notificaciones</nuxt-link  
                  ><a href="#" class="w-dropdown-link" tabindex="0"
                  >Configuracion</a
                ><a href="#" class="w-dropdown-link" @click.prevent="cerrarSesion" tabindex="0">Salir</a>
              </nav>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: "headerCanalizados",
    directives: {
    ClickOutside
  },
  data() {
    return {
        dropDownPerfil: false, 
        contadorOut: 0
    };
  },
  methods: {
    async  getCountNotify(){
         await this.$axios
        .$get("/perfil/getcountnotify?p=" + this.$store.state.p)
        .then((response) => {
              this.$store.commit("setnotifyCount", response );
        });
    },
     cerrarSesion(){
      this.$cookies.remove('access_token_')
        location.href = "/";
    },
      dropDownPerfilClic(){
          if(this.dropDownPerfil == false){
              this.dropDownPerfil = true
          }else{
              this.dropDownPerfil = false
              this.contadorOut = 0
          }
      }, 
      outDrop(){
            if(this.contadorOut > 0){
                    this.dropDownPerfil = false
                    this.contadorOut = 0
            }else{
                    this.contadorOut++
            }
            
      }
  },
  mounted() {
    this.getCountNotify()
  },
};
</script>
<style scoped>
.logo-text {
  opacity: 1;
  color: #1a1b1f!important
}
a:hover {
    color: #1542c7;
}
.sihaynotify{
  background-color: #3e64db;
}
</style>