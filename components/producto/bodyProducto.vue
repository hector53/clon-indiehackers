<template>
  <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left  style="    margin-right: 50px;"></sidebar-left>
      <div class="div-block-456">
        <div class="section-5">
          <div class="div-block-433">
            <div class="columns-6 w-row">
              <div class="column-10 w-col w-col-3">
                <img
                  :src="arrayProducto[0].imagen"
                  loading="lazy"
                  sizes="(max-width: 479px) 7vw, 120px"
                  alt=""
                  class="image-16"
                />
                <div class="list-13">
                  <button
                    :disabled="disableB"
                    class="text-block-33"
                    @click.prevent="followUser"
                  >
                    <span v-if="yalosigo == 0">Seguir</span>
                    <span v-else>Dejar de Seguir</span>
                  </button>
                </div>
              </div>
              <div class="w-col w-col-9">
                <h1 class="h1user">
                  <a
                    target="_blank"
                    class="nombreProducto"
                    :href="arrayProducto[0].urlProducto"
                  >
                    <span>@{{ arrayProducto[0].nombreProducto }} </span></a
                  >
                  <nuxt-link
                    v-if="arrayProducto[0].d == 1"
                    :to="{
                      name: 'producto-slug-editar',
                      params: { slug: $route.params.slug },
                    }"
                    class="ember-view user-header__header-button user-header__header-button--edit"
                  >
                    <div class="header-button__content">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="ember559"
                        class="ember-view header-button__icon"
                      >
                        <path
                          d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"
                        >
                          <!---->
                        </path>
                      </svg>
                    </div>
                  </nuxt-link>
                </h1>

                <div>{{ arrayProducto[0].descripcionCorta }}</div>
                <ul role="list" class="list-10" style="    margin-top: 20px;">
                  <li class="list-item-11" v-for="(item, index) in arrayProducto[0].tags" :key="index">
                    <a  class="">{{item.name}}</a>
                  </li>
                
                </ul>
              </div>
            </div>
            <ul role="list" class="list-12">
              <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{ activeTabPerfil: $route.name == 'producto-slug' }"
                  :to="{
                    name: 'producto-slug',
                    params: { slug: $route.params.slug },
                  }"
                >
                  <div>Inicio</div></nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'producto-slug-seguidores',
                  }"
                  :to="{
                    name: 'producto-slug-seguidores',
                    params: { slug: $route.params.slug },
                  }"
                  ><div>Seguidores ({{ seguidores }})</div></nuxt-link
                >
              </li>
              <li>
                <a
                  class="list-item-13"
                  :href="arrayProducto[0].urlProducto"
                  target="_blank"
                  ><div>Web</div></a
                >
              </li>
              <li v-if="arrayProducto[0].url_facebook">
                <a
                  :href="arrayProducto[0].url_facebook"
                  target="_blank"
                  class="list-item-13"
                  ><div>Facebook</div></a
                >
              </li>

              <li v-if="arrayProducto[0].url_twitter">
                <a
                  :href="arrayProducto[0].url_twitter"
                  target="_blank"
                  class="list-item-13"
                  ><div>Twitter</div></a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="section-4">
          <div class="columns-3 w-row">
            <div class="column-4 w-col w-col-8">
              <Nuxt keep-alive />
            </div>
            <div class="column-5 w-col w-col-4">
              <div class="div-block-448">
                <div class="div-block-444">
                  <div class="div-block-447">
                    <div class="html-embed-7 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45ODY4NSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExNC41OTM3NSA0OTEuMTQwNjI1Yy01LjYwOTM3NSAwLTExLjE3OTY4OC0xLjc1LTE1LjkzMzU5NC01LjE4NzUtOC44NTU0NjgtNi40MTc5NjktMTIuOTkyMTg3LTE3LjQ0OTIxOS0xMC41ODIwMzEtMjguMDkzNzVsMzIuOTM3NS0xNDUuMDg5ODQ0LTExMS43MDMxMjUtOTcuOTYwOTM3Yy04LjIxMDkzOC03LjE2Nzk2OS0xMS4zNDc2NTYtMTguNTE5NTMyLTcuOTc2NTYyLTI4LjkwNjI1IDMuMzcxMDkzLTEwLjM2NzE4OCAxMi41NDI5NjgtMTcuNzA3MDMyIDIzLjQwMjM0My0xOC43MTA5MzhsMTQ3Ljc5Njg3NS0xMy40MTc5NjggNTguNDMzNTk0LTEzNi43NDYwOTRjNC4zMDg1OTQtMTAuMDQ2ODc1IDE0LjEyMTA5NC0xNi41MzUxNTYgMjUuMDIzNDM4LTE2LjUzNTE1NiAxMC45MDIzNDMgMCAyMC43MTQ4NDMgNi40ODgyODEgMjUuMDIzNDM3IDE2LjUxMTcxOGw1OC40MzM1OTQgMTM2Ljc2OTUzMiAxNDcuNzczNDM3IDEzLjQxNzk2OGMxMC44ODI4MTMuOTgwNDY5IDIwLjA1NDY4OCA4LjM0Mzc1IDIzLjQyNTc4MiAxOC43MTA5MzggMy4zNzEwOTMgMTAuMzY3MTg3LjI1MzkwNiAyMS43MzgyODEtNy45NTcwMzIgMjguOTA2MjVsLTExMS43MDMxMjUgOTcuOTQxNDA2IDMyLjkzNzUgMTQ1LjA4NTkzOGMyLjQxNDA2MyAxMC42Njc5NjgtMS43MjY1NjIgMjEuNjk5MjE4LTEwLjU3ODEyNSAyOC4wOTc2NTYtOC44MzIwMzEgNi4zOTg0MzctMjAuNjA5Mzc1IDYuODkwNjI1LTI5LjkxMDE1NiAxLjMwMDc4MWwtMTI3LjQ0NTMxMi03Ni4xNjAxNTYtMTI3LjQ0NTMxMyA3Ni4yMDMxMjVjLTQuMzA4NTk0IDIuNTU4NTk0LTkuMTA5Mzc1IDMuODYzMjgxLTEzLjk1MzEyNSAzLjg2MzI4MXptMTQxLjM5ODQzOC0xMTIuODc1YzQuODQzNzUgMCA5LjY0MDYyNCAxLjMwMDc4MSAxMy45NTMxMjQgMy44NTkzNzVsMTIwLjI3NzM0NCA3MS45Mzc1LTMxLjA4NTkzNy0xMzYuOTQxNDA2Yy0yLjIxODc1LTkuNzQ2MDk0IDEuMDg5ODQzLTE5LjkyMTg3NSA4LjYyMTA5My0yNi41MTU2MjVsMTA1LjQ3MjY1Ny05Mi41LTEzOS41NDI5NjktMTIuNjcxODc1Yy0xMC4wNDY4NzUtLjkxNzk2OS0xOC42ODc1LTcuMjM0Mzc1LTIyLjYxMzI4MS0xNi40OTIxODhsLTU1LjA4MjAzMS0xMjkuMDQ2ODc1LTU1LjE0ODQzOCAxMjkuMDY2NDA3Yy0zLjg4MjgxMiA5LjE5NTMxMi0xMi41MjM0MzggMTUuNTExNzE4LTIyLjU0Njg3NSAxNi40Mjk2ODdsLTEzOS41NjI1IDEyLjY3MTg3NSAxMDUuNDY4NzUgOTIuNWM3LjU1NDY4NyA2LjYxMzI4MSAxMC44NTkzNzUgMTYuNzY5NTMxIDguNjIxMDk0IDI2LjUzOTA2MmwtMzEuMDYyNSAxMzYuOTM3NSAxMjAuMjc3MzQzLTcxLjkxNDA2MmM0LjMwODU5NC0yLjU1ODU5NCA5LjEwOTM3Ni0zLjg1OTM3NSAxMy45NTMxMjYtMy44NTkzNzV6bS04NC41ODU5MzgtMjIxLjg0NzY1NnMwIC4wMjM0MzctLjAyMzQzOC4wNDI5Njl6bTE2OS4xMjg5MDYtLjA2MjUuMDIzNDM4LjA0Mjk2OWMwLS4wMjM0MzggMC0uMDIzNDM4LS4wMjM0MzgtLjA0Mjk2OXptMCAwIiBmaWxsPSIjM2U2NGRiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                      />
                    </div>
                    <div class="text-block-17">Información</div>
                  </div>

                  <div class="div-block-461">
                    <p>{{ arrayProducto[0].motivacion }}</p>
                  </div>
                  <div class="div-block-461" v-if="arrayProducto[0].fundador>0">
                    <div class="text-block-31">Fundador</div>

                    <div class="seeProduct">
                      <nuxt-link
                        class="image-17"
                        :to="{
                          name: 'u-username',
                          params: { username: arrayProducto[0].fundador },
                        }"
                      >
                        <img
                          :src="arrayProducto[0].imgFundador"
                          loading="lazy"
                          sizes="32px"
                          alt=""
                        />
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: 'u-username',
                          params: { username: arrayProducto[0].fundador },
                        }"
                      >
                        <span>{{ arrayProducto[0].fundador }}</span></nuxt-link
                      >
                    </div>
                  </div>
                </div>

                <div>
                  <div class="text-block-20">
                    @canalizados<br />FAQ · Terminos · Privacidad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SidebarLeft from "../homeCanalizados/sidebarLeft.vue";

export default {
  components: { SidebarLeft },
  props: ["arrayProducto"],
  name: "bodyProducto",
  data() {
    return {
      seguidores: this.arrayProducto[0].seguidores,
      yalosigo: this.arrayProducto[0].yalosigo,
      disableB: false,
    };
  },
  methods: {
    async followUser() {
      this.disableB = true;
      console.log("seguir o dejar de seguir");
      if (this.$store.state.cookieLogin == false) {
        this.$router.push("/iniciar-sesion");
        return false;
      }
      await this.$axios
        .$get(
          "/productos/seguirproducto?idP=" +
            this.arrayProducto[0].idP +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
          this.disableB = false;
          if (response.status == 1 || response.status == 2) {
            this.seguidores = response.seguidores;
            this.yalosigo = response.yalosigo;
          }
        });
    },
  },
  mounted() {
    console.log(this.arrayProducto);
  },
};
</script>
