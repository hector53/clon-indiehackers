<template>
  <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left></sidebar-left>
      <div class="div-block-456">
        <div class="section-5">
          <div class="div-block-433">
            <div class="columns-6 w-row">
              <div class="column-10 w-col w-col-3">
                <img
                  :src="$store.state.img_perfil"
                  loading="lazy"
                  sizes="(max-width: 479px) 7vw, 120px"
                  alt=""
                  class="image-16"
                />
                <div>
                    <ul role="list" class="list-13">
                        <li class="list-item-14">
                            <a class="text-block-33" href="#"  @click.prevent="followUser">
                                <span v-if="arrayDataUser.yalosigo == 0">Seguir</span>
                                 <span v-else>Dejar de Seguir</span>
                            </a>
                        </li>
                        <li class="list-item-15">
                             <div class="text-block-34">...</div>
                        </li>
                     </ul>
                </div>
              </div>
              <div class="w-col w-col-9">
                <h1 class="h1user">
                 <span>@{{ $store.state.username }} </span> <span>- {{ $store.state.nombres }}</span>
                  <nuxt-link
                  :to="{
                    name: 'u-username-edit',
                    params: { username: $store.state.username},
                  }" class="ember-view user-header__header-button user-header__header-button--edit">
                  <div class="header-button__content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember559" class="ember-view header-button__icon"><path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z">
<!----></path>
</svg>
                  </div>
                  </nuxt-link>
                </h1>
                <div>{{ $store.state.bio }}</div>

                <ul role="list" class="list-11">
                  <li class="list-item-12">
                    <div class="html-embed-13 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMy41OTcgNTEzLjU5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMjYzLjI3OCwwLjEwN0MxNTguOTc3LTMuNDA4LDczLjMyMyw4MC4wOTUsNzMuMzIzLDE4My42MDJjMCwxMTcuNDY5LDExMi43MywyMDIuNzIsMTc1LjkxNSwzMjUuMzIyICAgYzMuMjA4LDYuMjI1LDEyLjE2OSw2LjIzMywxNS4zODgsMC4wMDljNTcuMTYtMTEwLjMxNywxNTQuODU0LTE4NC4yOTEsMTcyLjk1OS0yOTAuNTY5ICAgQzQ1Ni4zMzEsMTA4LjM4NywzNzQuNzc2LDMuODY2LDI2My4yNzgsMC4xMDd6IE0yNTYuOTIzLDI3OS43NzNjLTUzLjExMywwLTk2LjE3MS00My4wNTktOTYuMTcxLTk2LjE3MSAgIHM0My4wNTktOTYuMTcxLDk2LjE3MS05Ni4xNzFjNTMuMTEzLDAsOTYuMTcyLDQzLjA1OSw5Ni4xNzIsOTYuMTcxUzMxMC4wMzYsMjc5Ljc3MywyNTYuOTIzLDI3OS43NzN6IiBmaWxsPSIjYmJiYmJiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                      />
                    </div>
                    <div>{{ $store.state.ciudad }}</div>
                  </li>
                  <div class="text-block-6">•</div>
                  <li class="list-item-12">
                    <div>{{ $store.state.edad }}</div>
                  </li>
                  <div class="text-block-6">•</div>
                  <li class="list-item-12">
                    <a
                      :href="'https://twitter.com/' + $store.state.twitter"
                      target="_blank"
                    >
                      <div class="html-embed-8 w-embed">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiM2ZjZmNmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        /></div
                    ></a>

                    <div class="text-block-6">•</div>
                    <a :href="'mailto:' + $store.state.email">
                      <div class="html-embed-8 w-embed">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ2Nyw2MUg0NUMyMC4yMTgsNjEsMCw4MS4xOTYsMCwxMDZ2MzAwYzAsMjQuNzIsMjAuMTI4LDQ1LDQ1LDQ1aDQyMmMyNC43MiwwLDQ1LTIwLjEyOCw0NS00NVYxMDYgICAgQzUxMiw4MS4yOCw0OTEuODcyLDYxLDQ2Nyw2MXogTTQ2MC43ODYsOTFMMjU2Ljk1NCwyOTQuODMzTDUxLjM1OSw5MUg0NjAuNzg2eiBNMzAsMzk5Ljc4OFYxMTIuMDY5bDE0NC40NzksMTQzLjI0TDMwLDM5OS43ODh6ICAgICBNNTEuMjEzLDQyMWwxNDQuNTctMTQ0LjU3bDUwLjY1Nyw1MC4yMjJjNS44NjQsNS44MTQsMTUuMzI3LDUuNzk1LDIxLjE2Ny0wLjA0NkwzMTcsMjc3LjIxM0w0NjAuNzg3LDQyMUg1MS4yMTN6IE00ODIsMzk5Ljc4NyAgICBMMzM4LjIxMywyNTZMNDgyLDExMi4yMTJWMzk5Ljc4N3oiIGZpbGw9IiNiZWJlYmUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul role="list" class="list-12">
              <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{ activeTabPerfil: $route.name == 'u-username' }"
                  :to="{
                    name: 'u-username',
                    params: { username: $route.params.username },
                  }"
                >
                  <div>Publicaciones</div></nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'u-username-historial',
                  }"
                  :to="{
                    name: 'u-username-historial',
                    params: { username: $route.params.username },
                  }"
                  ><div>Historial</div></nuxt-link
                >
              </li>
                  <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'u-username-notificaciones',
                  }"
                  :to="{
                    name: 'u-username-notificaciones',
                    params: { username: $route.params.username },
                  }"
                  ><div>Notificaciones</div></nuxt-link
                >
              </li>
                  <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'u-username-configuracion',
                  }"
                  :to="{
                    name: 'u-username-configuracion',
                    params: { username: $route.params.username },
                  }"
                  ><div>Configuración</div></nuxt-link
                >
              </li>
              <li class="list-item-13">
                <div class="text-block-29">  {{ arrayDataUser.seguidosCant }}</div>
                <div class="text-block-30">Seguidos</div>
              </li>
              <li class="list-item-13">
                <div class="text-block-29">  {{ arrayDataUser.seguidoresCant }}</div>
                <div class="text-block-30">Seguidores</div>
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
                    <div class="text-block-17">Datos</div>
                  </div>
                  
                  <div class="div-block-461">
                    <div class="text-block-31">Seguidos</div>
                    <div class="div-block-420 pic-hover"  >
                        <div v-for="(item, index) in arrayDataUser.seguidos" :key="index">
                            <nuxt-link class="image-17" :to="{name:'u-username', params: {username: item.username}}" >
                            <img 
                            :src="item.avatar"
                            loading="lazy"
                            sizes="32px"
                            alt=""
                            
                            />
                            </nuxt-link>
                        </div>
                    </div>
                  </div>
                  <div class="div-block-461">
                    <div class="text-block-31">Seguidores</div>
                    <div class="div-block-420 pic-hover">
                        <div v-for="(item, index) in arrayDataUser.seguidores" :key="index">
                            <nuxt-link class="image-17" :to="{name:'u-username', params: {username: item.username}}" >
                            <img 
                            :src="item.avatar"
                            loading="lazy"
                            sizes="32px"
                            alt=""
                            
                            />
                            </nuxt-link>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="div-block-444">
                  <div class="div-block-447">
                    <div class="html-embed-7 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywwSDE1QzYuNzE2LDAsMCw2LjcxNiwwLDE1djM4NS42MDFjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg4MS40VjQ5N2MwLDYuMDY3LDMuNjU1LDExLjUzNyw5LjI2LDEzLjg1OCAgICBjMS44NTYsMC43NjksMy44MDUsMS4xNDIsNS43MzcsMS4xNDJjMy45MDQsMCw3Ljc0MS0xLjUyNCwxMC42MS00LjM5NGw5Mi4wMDYtOTIuMDA2SDQ5N2M4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjE1ICAgIEM1MTIsNi43MTYsNTA1LjI4NCwwLDQ5NywweiBNNDgyLDM4NS42MDFIMjA3LjhjLTMuOTc4LDAtNy43OTQsMS41ODEtMTAuNjA2LDQuMzkzbC03MC43OTMsNzAuNzkyVjQwMC42YzAtOC4yODQtNi43MTYtMTUtMTUtMTUgICAgSDMwVjMwaDQ1MlYzODUuNjAxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzYwLjQzNCwxNDQuNjAxaC0zNS45MTVsMi42NjMtMzEuOTU0YzAuNjg4LTguMjU1LTUuNDQ3LTE1LjUwNi0xMy43MDItMTYuMTk0Yy04LjI3MS0wLjY4OS0xNS41MDcsNS40NDgtMTYuMTk0LDEzLjcwMyAgICBsLTIuODcsMzQuNDQ1SDIyOC4xMmwyLjY2My0zMS45NTRjMC42ODgtOC4yNTUtNS40NDctMTUuNTA2LTEzLjcwMy0xNi4xOTRjLTguMjYzLTAuNjg3LTE1LjUwNiw1LjQ0Ny0xNi4xOTQsMTMuNzAzICAgIGwtMi44NzEsMzQuNDQ1aC0zMC4zODFjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVoMjcuODgxbC01LjUzMyw2Ni40aC0zOC40MTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTUgICAgYzAsOC4yODMsNi43MTYsMTQuOTk5LDE1LDE0Ljk5OWgzNS45MTVsLTIuNjYzLDMxLjk1NWMtMC42ODgsOC4yNTUsNS40NDcsMTUuNTA2LDEzLjcwMywxNi4xOTQgICAgYzAuNDI0LDAuMDM1LDAuODQ1LDAuMDUzLDEuMjYyLDAuMDUzYzcuNzIsMCwxNC4yNzktNS45MjMsMTQuOTMyLTEzLjc1NWwyLjg3LTM0LjQ0N2g2Ni4yOTZsLTIuNjYzLDMxLjk1NSAgICBjLTAuNjg4LDguMjU1LDUuNDQ3LDE1LjUwNiwxMy43MDIsMTYuMTk0YzAuNDI0LDAuMDM1LDAuODQ2LDAuMDUzLDEuMjYzLDAuMDUzYzcuNzIxLDAsMTQuMjc5LTUuOTIzLDE0LjkzMi0xMy43NTVsMi44Ny0zNC40NDYgICAgaDMwLjM4MmM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMjcuODgybDUuNTMzLTY2LjRoMzguNDE1YzguMjg0LDAsMTUtNi43MTYsMTUtMTUgICAgUzM2OC43MTgsMTQ0LjYwMSwzNjAuNDM0LDE0NC42MDF6IE0yODYuMzgyLDI0MWgtNjYuMjk2bDUuNTMzLTY2LjRoNjYuMjk2TDI4Ni4zODIsMjQxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                      />
                    </div>
                    <div class="text-block-17">Productos</div>

                  </div>
                  <a href="/producto-nuevo" style="display: inline-block;" class="botonCanalizados " data-v-70e177c0="">Agregar</a>
                     <div class="seeProduct" v-for="(item, index) in arrayDataUser.productos" :key="index">
                            <nuxt-link class="image-17" :to="{name:'producto-slug',
                             params: {slug: item.slug}}" >
                            <img 
                            :src="item.imagen"
                            loading="lazy"
                            sizes="32px"
                            alt=""
                            
                            />
                            </nuxt-link>
                           <nuxt-link  :to="{name:'producto-slug',
                             params: {slug: item.slug}}" >  <span>{{item.nombreProducto}}</span></nuxt-link>
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
  name: "bodyPerfilCanalizados",
  props: ['arrayDataUser',  'labelRecomendados'],
  data() {
    return {
       
    };
  },
  methods: {

   async   followUser(){

        if(this.$store.state.cookieLogin == false){
            this.$router.push("/login")
            return false
        }
      await this.$axios
        .$get(
          "/perfil/followunfollow?username=" +
            this.$route.params.username +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
  //        console.log(response)
          this.$emit("recargarDataUser");
        });
      }, 

  

     
  },
  mounted() {
 
  },
};
</script>
