<template>
  <div class="container w-container">
    <div class="div-block-455">
      <sidebar-left style="    margin-right: 50px;"></sidebar-left>
      <div class="div-block-456">
        <div class="section-5">
          <div class="div-block-433">
            <div class="columns-6 w-row">
              <div class="column-10 w-col w-col-3">
                <img
                  :src="imagenGrupo"
                  loading="lazy"
                  sizes="(max-width: 479px) 7vw, 120px"
                  alt=""
                  class="image-16"
                />
                <div>
                  <ul role="list" class="list-13">
                    <li class="list-item-14 marginAuto"  @click="joinGroup">
                      <a class="text-block-33" href="#" v-if="rolUser == 0">
                        <span>Unirse</span>
                      </a>
                      <a
                        class="text-block-33"
                        href="#"
                        v-if="rolUser == 2 || rolUser == 1"
                      >
                        <span>Editar Membresia</span>
                      </a>
                      <a class="text-block-33" href="#" v-if="rolUser == 3">
                        <span>Dejar Grupo</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-col w-col-9">
                <h1 class="h1user">
                  <span>{{ tituloGrupo }}</span>
                </h1>
                <div>{{ excerptGrupo }}</div>

                <ul role="list" class="list-11">
                  <li class="list-item-12">
                    <div class="html-embed-13 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMy41OTcgNTEzLjU5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNMjYzLjI3OCwwLjEwN0MxNTguOTc3LTMuNDA4LDczLjMyMyw4MC4wOTUsNzMuMzIzLDE4My42MDJjMCwxMTcuNDY5LDExMi43MywyMDIuNzIsMTc1LjkxNSwzMjUuMzIyICAgYzMuMjA4LDYuMjI1LDEyLjE2OSw2LjIzMywxNS4zODgsMC4wMDljNTcuMTYtMTEwLjMxNywxNTQuODU0LTE4NC4yOTEsMTcyLjk1OS0yOTAuNTY5ICAgQzQ1Ni4zMzEsMTA4LjM4NywzNzQuNzc2LDMuODY2LDI2My4yNzgsMC4xMDd6IE0yNTYuOTIzLDI3OS43NzNjLTUzLjExMywwLTk2LjE3MS00My4wNTktOTYuMTcxLTk2LjE3MSAgIHM0My4wNTktOTYuMTcxLDk2LjE3MS05Ni4xNzFjNTMuMTEzLDAsOTYuMTcyLDQzLjA1OSw5Ni4xNzIsOTYuMTcxUzMxMC4wMzYsMjc5Ljc3MywyNTYuOTIzLDI3OS43NzN6IiBmaWxsPSIjYmJiYmJiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                      />
                    </div>
                    <div>{{ miembros }} miembros</div>
                  </li>
                  <div class="text-block-6">•</div>
                  <li class="list-item-12">
                    <div class="html-embed-13 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi40MTggNTEyLjQxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDM3LjMzNSA3NS4wODJjLTEwMC4xLTEwMC4xMDItMjYyLjEzNi0xMDAuMTE4LTM2Mi4yNTIgMC0xMDAuMTAzIDEwMC4xMDItMTAwLjExOCAyNjIuMTM2IDAgMzYyLjI1MyAxMDAuMSAxMDAuMTAyIDI2Mi4xMzYgMTAwLjExNyAzNjIuMjUyIDAgMTAwLjEwMy0xMDAuMTAyIDEwMC4xMTctMjYyLjEzNiAwLTM2Mi4yNTN6bS0xMC43MDYgMzI1LjczOWMtMTEuOTY4LTEwLjcwMi0yNC43Ny0yMC4xNzMtMzguMjY0LTI4LjMzNSA4LjkxOS0zMC44MDkgMTQuMjAzLTY0LjcxMiAxNS40NTItOTkuOTU0aDc1LjMwOWMtMy40MDUgNDcuNTAzLTIxLjY1NyA5Mi4wNjQtNTIuNDk3IDEyOC4yODl6bS0zOTMuMzM4LTEyOC4yODloNzUuMzA5YzEuMjQ5IDM1LjI0MiA2LjUzMyA2OS4xNDUgMTUuNDUyIDk5Ljk1NC0xMy40OTQgOC4xNjItMjYuMjk2IDE3LjYzMy0zOC4yNjQgMjguMzM1LTMwLjg0LTM2LjIyNS00OS4wOTEtODAuNzg2LTUyLjQ5Ny0xMjguMjg5em01Mi40OTgtMTYwLjkzNmMxMS45NjggMTAuNzAyIDI0Ljc3IDIwLjE3MyAzOC4yNjQgMjguMzM1LTguOTE5IDMwLjgwOS0xNC4yMDMgNjQuNzEyLTE1LjQ1MiA5OS45NTRoLTc1LjMxYzMuNDA2LTQ3LjUwMiAyMS42NTctOTIuMDYzIDUyLjQ5OC0xMjguMjg5em0xNTQuMDk3IDMxLjcwOWMtMjYuNjIyLTEuOTA0LTUyLjI5MS04LjQ2MS03Ni4wODgtMTkuMjc4IDEzLjg0LTM1LjYzOSAzOS4zNTQtNzguMzg0IDc2LjA4OC04OC45Nzd6bTAgMzIuNzA4djYzLjg3M2gtOTguNjI1YzEuMTMtMjkuODEyIDUuMzU0LTU4LjQzOSAxMi4zNzktODQuNjMyIDI3LjA0MyAxMS44MjIgNTYuMTI3IDE4Ljg4MiA4Ni4yNDYgMjAuNzU5em0wIDk2LjUxOXY2My44NzNjLTMwLjExOSAxLjg3Ny01OS4yMDMgOC45MzctODYuMjQ2IDIwLjc1OS03LjAyNS0yNi4xOTMtMTEuMjQ5LTU0LjgyLTEyLjM3OS04NC42MzJ6bTAgOTYuNTgxdjEwOC4yNTRjLTM2LjczMi0xMC41OTMtNjIuMjQ2LTUzLjMzMy03Ni4wODgtODguOTc2IDIzLjc5Ny0xMC44MTcgNDkuNDY2LTE3LjM3NCA3Ni4wODgtMTkuMjc4em0zMi42NDYgMGMyNi42MjIgMS45MDQgNTIuMjkxIDguNDYxIDc2LjA4OCAxOS4yNzgtMTMuODQxIDM1LjY0LTM5LjM1NCA3OC4zODMtNzYuMDg4IDg4Ljk3NnptMC0zMi43MDh2LTYzLjg3M2g5OC42MjVjLTEuMTMgMjkuODEyLTUuMzU0IDU4LjQzOS0xMi4zNzkgODQuNjMyLTI3LjA0My0xMS44MjItNTYuMTI3LTE4Ljg4Mi04Ni4yNDYtMjAuNzU5em0wLTk2LjUxOXYtNjMuODczYzMwLjExOS0xLjg3NyA1OS4yMDMtOC45MzcgODYuMjQ2LTIwLjc1OSA3LjAyNSAyNi4xOTMgMTEuMjQ5IDU0LjgyIDEyLjM3OSA4NC42MzJ6bTAtOTYuNTgxdi0xMDguMjU0YzM2LjczNCAxMC41OTMgNjIuMjQ4IDUzLjMzOCA3Ni4wODggODguOTc3LTIzLjc5NyAxMC44MTYtNDkuNDY2IDE3LjM3My03Ni4wODggMTkuMjc3em03My4zMi05MS45NTdjMjAuODk1IDkuMTUgNDAuMzg5IDIxLjU1NyA1Ny44NjQgMzYuOTUxLTguMzE4IDcuMzM0LTE3LjA5NSAxMy45ODQtMjYuMjYgMTkuOTMxLTguMTM5LTIwLjE1Mi0xOC41MzYtMzkuNzM2LTMxLjYwNC01Ni44ODJ6bS0yMTAuODkxIDU2Ljg4MmMtOS4xNjUtNS45NDctMTcuOTQxLTEyLjU5Ny0yNi4yNi0xOS45MzEgMTcuNDc1LTE1LjM5NCAzNi45NjktMjcuODAxIDU3Ljg2NC0zNi45NTEtMTMuMDY4IDE3LjE0OC0yMy40NjUgMzYuNzMyLTMxLjYwNCA1Ni44ODJ6bS4wMDEgMjk1Ljk1OGM4LjEzOCAyMC4xNTEgMTguNTM3IDM5LjczNiAzMS42MDQgNTYuODgyLTIwLjg5NS05LjE1LTQwLjM4OS0yMS41NTctNTcuODY0LTM2Ljk1MSA4LjMxOC03LjMzNCAxNy4wOTUtMTMuOTg0IDI2LjI2LTE5LjkzMXptMjQyLjQ5NCAwYzkuMTY1IDUuOTQ3IDE3Ljk0MiAxMi41OTcgMjYuMjYgMTkuOTMtMTcuNDc1IDE1LjM5NC0zNi45NjkgMjcuODAxLTU3Ljg2NCAzNi45NTEgMTMuMDY3LTE3LjE0NCAyMy40NjUtMzYuNzI5IDMxLjYwNC01Ni44ODF6bTI2LjM2Mi0xNjQuMzAyYy0xLjI0OS0zNS4yNDItNi41MzMtNjkuMTQ2LTE1LjQ1Mi05OS45NTQgMTMuNDk0LTguMTYyIDI2LjI5NS0xNy42MzMgMzguMjY0LTI4LjMzNSAzMC44NCAzNi4yMjUgNDkuMDkxIDgwLjc4NiA1Mi40OTcgMTI4LjI4OXoiIGZpbGw9IiNiYmJiYmIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                      />
                    </div>
                    <div>Última actualización: {{ fechaM }}</div>
                  </li>
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
                  :class="{
                    activeTabPerfil:
                      $route.name == 'g-slug' || $route.name == 'g-slug-nuevos',
                  }"
                  :to="{
                    name: 'g-slug',
                    params: { slug: $route.params.slug },
                  }"
                >
                  <div>Discusión</div></nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'g-slug-miembros',
                  }"
                  :to="{
                    name: 'g-slug-miembros',
                    params: { slug: $route.params.slug },
                  }"
                  ><div>Miembros</div></nuxt-link
                >
              </li>
              <li v-if="rolUser == 1 || rolUser == 2">
                <nuxt-link
                  class="list-item-13"
                  :class="{
                    activeTabPerfil: $route.name == 'g-slug-configuracion' || $route.name == 'g-slug-configuracion-moderadores',
                  }"
                  :to="{
                    name: 'g-slug-configuracion',
                    params: { slug: $route.params.slug },
                  }"
                  ><div>Configuración</div></nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="section-4">
          <div class="columns-3 w-row">
            <div class="column-4 w-col w-col-8">
              <div class="div-block-433">
                <div>
                  <div
                    class="div-block-459"
                    v-if="
                      $route.name == 'g-slug' || $route.name == 'g-slug-nuevos'
                    "
                  >
                    <nuxt-link
                      :to="{
                        name: 'g-slug',
                        params: { slug: $route.params.slug },
                      }"
                    >
                      <div
                        class="div-block-460"
                        :class="{ activePopular: $route.name == 'g-slug' }"
                      >
                        <div class="html-embed-11 w-embed">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMTkgNTEyLjAxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ3LjI4LDMwNC44bC0wLjM2NS01LjAxYy01Ljg2NS03Ni4zNTQtNDEuNDE3LTEyNC4yMTktNzIuNzgxLTE2Ni40MzhjLTI5LjA0Mi0zOS4wOTQtNTQuMTI1LTcyLjg1NC01NC4xMjUtMTIyLjY2NyAgICBjMC00LTIuMjQtNy42NTYtNS43OTItOS40OWMtMy41NjMtMS44NDQtNy44NDQtMS41NDItMTEuMDgzLDAuODEzYy00Ny4xMDQsMzMuNzA4LTg2LjQwNiw5MC41MjEtMTAwLjEzNSwxNDQuNzI5ICAgIGMtOS41MzEsMzcuNzQtMTAuNzkyLDgwLjE2Ny0xMC45NjksMTA4LjE4OGMtNDMuNS05LjI5Mi01My4zNTQtNzQuMzY1LTUzLjQ1OC03NS4wNzNjLTAuNDktMy4zNzUtMi41NTItNi4zMTMtNS41NTItNy45MTcgICAgYy0zLjAzMS0xLjU4My02LjU5NC0xLjY5OC05LjY2Ny0wLjE3N2MtMi4yODEsMS4xMDQtNTUuOTksMjguMzk2LTU5LjExNSwxMzcuMzc1Yy0wLjIxOSwzLjYyNS0wLjIyOSw3LjI1LTAuMjI5LDEwLjg4NSAgICBjMCwxMDUuODY1LDg2LjEzNSwxOTIsMTkyLDE5MnMxOTItODYuMTM1LDE5Mi0xOTJDNDQ4LjAwOSwzMTQuNzA2LDQ0Ny42NDUsMzA5Ljc0OCw0NDcuMjgsMzA0Ljh6IE0yNTYuMDA5LDQ5MC42ODUgICAgYy0zNS4yOTIsMC02NC0zMC41ODMtNjQtNjguMTc3YzAtMS4yODEtMC4wMS0yLjU3MywwLjA4My00LjE1NmMwLjQyNy0xNS44NTQsMy40MzgtMjYuNjc3LDYuNzQtMzMuODc1ICAgIGM2LjE4OCwxMy4yOTIsMTcuMjYsMjUuNTEsMzUuMjE5LDI1LjUxYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdjMC0xNS4xODgsMC4zMTMtMzIuNzA4LDQuMDk0LTQ4LjUyMSAgICBjMy4zNjUtMTQuMDMxLDExLjQwNi0yOC45MzgsMjEuNTk0LTQwLjg5NmM0LjUzMSwxNS41MjEsMTMuMzY1LDI4LjA4MywyMS45OSw0MC4zNDRjMTIuMzQ0LDE3LjU0MiwyNS4xMDQsMzUuNjc3LDI3LjM0NCw2Ni42MDQgICAgYzAuMTM1LDEuODMzLDAuMjcxLDMuNjc3LDAuMjcxLDUuNjU2QzMyMC4wMDksNDYwLjEwMiwyOTEuMzAxLDQ5MC42ODUsMjU2LjAwOSw0OTAuNjg1eiBNMzIzLjQyMSw0NzYuNzQ4ICAgIGMxMS4wNzItMTUuMDk5LDE3LjkyMi0zMy43NjMsMTcuOTIyLTU0LjI0YzAtMi41MS0wLjE1Ni00Ljg0NC0wLjQ2OS05LjIwOGMtMi41MzEtMzQuODIzLTE3LjY2Ny01Ni4zNDQtMzEuMDMxLTc1LjMzMyAgICBjLTExLjM4NS0xNi4xNjctMjEuMjA4LTMwLjEzNS0yMS4yMDgtNDkuOTQ4YzAtNC4wNTItMi4yOTItNy43NS01LjkxNy05LjU1MmMtMy42MDQtMS44MTMtNy45NTgtMS40MDYtMTEuMTc3LDEuMDQyICAgIGMtMjAuNDU4LDE1LjQ1OC0zNy41MjEsNDEuNDc5LTQzLjQ3OSw2Ni4zMjNjLTMuMDQyLDEyLjc0LTQuMTA0LDI2LjUyMS00LjQ3OSwzNy44NTRjLTcuMzk2LTcuOTU4LTkuNjg4LTIyLjcwOC05LjcwOC0yMi45MDYgICAgYy0wLjQ3OS0zLjQyNy0yLjU4My02LjQxNy01LjY1Ni04LjAxYy0zLjA1Mi0xLjU4My02LjcwOC0xLjYyNS05Ljc4MS0wLjA0MmMtMi42ODgsMS4zNzUtMjYuMzAyLDE0LjkxNy0yNy42NTYsNjQuNzI5ICAgIGMtMC4wOTQsMS42ODgtMC4xMDQsMy4zNzUtMC4xMDQsNS4wNTJjMCwyMC40NzcsNi44NSwzOS4xNDEsMTcuOTIyLDU0LjI0Yy02MC42NjQtMjYuMTk1LTEwMy4yNTUtODYuNTYzLTEwMy4yNTUtMTU2LjcyOSAgICBjMC0zLjE5OC0wLjAxLTYuMzg1LDAuMjA4LTkuOTM4YzEuODMzLTYzLjkzOCwyMi4yOTItOTUuNjQ2LDM1LjY0Ni0xMDkuNjM1YzkuMzEyLDMzLjMzMywzMy43MDgsNzYuOTA2LDgxLjQ3OSw3Ni45MDYgICAgYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdjMC0zNS42OTgsMC44MDItNzYuOTQ4LDEwLjM0NC0xMTQuNzE5YzEwLjgzMy00Mi43OTIsNDAuNTEtODksNzYuMzMzLTEyMC4yODEgICAgYzUuOTQ4LDQ1LjY4OCwzMC44MzMsNzkuMTg4LDU2Ljk5LDExNC4zODVjMzEuMDk0LDQxLjg1NCw2My4yNCw4NS4xMzUsNjguNjI1LDE1NS4yMTlsMC4zNjUsNS4xMDQgICAgYzAuMzMzLDQuNDM4LDAuNjc3LDguODY1LDAuNjc3LDEzLjYyNUM0MjYuNjc2LDM5MC4xODUsMzg0LjA4NSw0NTAuNTUzLDMyMy40MjEsNDc2Ljc0OHoiIGZpbGw9IiMzZTY0ZGIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                          />
                        </div>
                        Popular:
                      </div></nuxt-link
                    >

                    <nuxt-link
                      :to="{
                        name: 'g-slug-nuevos',
                        params: { slug: $route.params.slug },
                      }"
                    >
                      <div
                        class="div-block-460"
                        :class="{ activePopular: $route.name != 'g-slug' }"
                      >
                        <div class="html-embed-11 w-embed">
                          <img
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzEzLjkyMiw5OC42NzdjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjI0LTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI1LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjMsMjcuODc3LDIxLjM1MSw0OC4yNzcsMjMuODYzLDUwLjUxMQ0KCQkJYzIuODgxLDIuNTYyLDYuNDc3LDMuODI0LDEwLjA1OCwzLjgyNGM0LjE1NiwwLDguMjkzLTEuNywxMS4yNjctNS4wNDVjNS41MzYtNi4yMjUsNS4wMDgtMTUuNzMyLTEuMjE3LTIxLjI2OA0KCQkJYy0zLjk1OS0zLjYtMTQuMTU3LTE1LjU0My0xMy44MS0yNy40MkMzMDAuOTM2LDExMi43MDcsMzA1LjI1NSwxMDUuNjc3LDMxMy45MjIsOTguNjc3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjE4LjIxNyw5OC42NzdjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjIzLTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI1LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjIsMjcuODc3LDIxLjM1MSw0OC4yNzcsMjMuODYzLDUwLjUxMQ0KCQkJYzIuODgxLDIuNTYyLDYuNDc3LDMuODI0LDEwLjA1OCwzLjgyNGM0LjE1NiwwLDguMjkzLTEuNywxMS4yNjctNS4wNDVjNS41MzYtNi4yMjUsNS4wMDgtMTUuNzMyLTEuMjE3LTIxLjI2OA0KCQkJYy0zLjk1OS0zLjYtMTQuMTU3LTE1LjU0My0xMy44MS0yNy40MkMyMDUuMjMxLDExMi43MDcsMjA5LjU1LDEwNS42NzcsMjE4LjIxNyw5OC42Nzd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzQuMTU3LDI0Ni4xNDhoLTE3Ljg1MnYtMTEuMDYyYzAtOC4zMy02Ljc1My0xNS4wODQtMTUuMDg0LTE1LjA4NEgxNi4yNDdjLTguMzMsMC0xNS4wODQsNi43NTMtMTUuMDg0LDE1LjA4NHY3OS42MDgNCgkJCWMwLDcwLjM0MywzOC45MzUsMTMyLjE5Niw5Ny4zODksMTY3LjEzOEgxNi4yNTZjLTguMzMsMC0xNS4wODQsNi43NTMtMTUuMDg0LDE1LjA4NHM2Ljc1MiwxNS4wODQsMTUuMDg0LDE1LjA4NGgzODQuOTY2DQoJCQljOC4zMywwLDE1LjA4NC02Ljc1MywxNS4wODQtMTUuMDg0cy02Ljc1My0xNS4wODQtMTUuMDg0LTE1LjA4NGgtODIuMzA1YzMzLjI0LTE5Ljg3LDYwLjE2Ny00OC40MzksNzcuMjExLTgyLjMyOWgzOC4wMw0KCQkJYzQyLjI4LDAsNzYuNjc4LTM0LjM5OCw3Ni42NzgtNzYuNjc4QzUxMC44MzYsMjgwLjU0NSw0NzYuNDM3LDI0Ni4xNDgsNDM0LjE1NywyNDYuMTQ4eiBNMzg2LjEzOCwzMTQuNjk0DQoJCQljLTAuMDAxLDkyLjE2LTc5LjU4NCwxNjcuMTM4LTE3Ny40MDQsMTY3LjEzOGMtOTcuODIsMC0xNzcuNDAzLTc0Ljk3OC0xNzcuNDAzLTE2Ny4xMzhWMjUwLjE3aDM1NC44MDZWMzE0LjY5NHogTTQzNC4xNTcsMzY5LjMzNg0KCQkJaC0yNS45NTZjNS4yNzEtMTcuMzU5LDguMTA0LTM1LjY5Miw4LjEwNC01NC42NDJ2LTM4LjM4aDE3Ljg1MmMyNS42NDYsMCw0Ni41MTEsMjAuODY1LDQ2LjUxMSw0Ni41MTENCgkJCVM0NTkuODAzLDM2OS4zMzYsNDM0LjE1NywzNjkuMzM2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTIyLjUxMiw5OC42NzhjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjI0LTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI0LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjEsMjcuODc2LDIxLjM1Miw0OC4yNzYsMjMuODY0LDUwLjUxDQoJCQljMi44NzQsMi41NTYsNi40NTMsMy44MTMsMTAuMDE5LDMuODEzYzQuMTU3LDAsOC4yOTYtMS43MDksMTEuMjc3LTUuMDZjNS41MzYtNi4yMjUsNC45NzgtMTUuNzU4LTEuMjQ3LTIxLjI5NQ0KCQkJYy0wLjE0MS0wLjEyNi0xNC4wODctMTMuMTc0LTEzLjc1My0yNy4yNTNDMTA5LjQ4MiwxMTIuNzc5LDExMy44MDIsMTA1LjcxMiwxMjIuNTEyLDk4LjY3OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                          />
                        </div>
                        Nuevos:
                      </div>
                    </nuxt-link>
                  <a href="#" @click.prevent="postNuevo"> 

                    <div
                        class="botonCanalizados aliD"
                      >
                        
                        Publicar
                      </div> </a>
                  </div>
                </div>

                <Nuxt keep-alive />
              </div>
            </div>
            <div class="column-5 w-col w-col-4">
              <div class="div-block-448">
                <!---->
                   <div
                  v-if="$route.name == 'g-slug-configuracion' || $route.name == 'g-slug-configuracion-moderadores'"
                >
                        <ul class="listaOrdenadaConfig">

                            <li>
                                <nuxt-link class="text-block-21"  :to="{
                        name: 'g-slug-configuracion',
                        params: { slug: $route.params.slug },
                      }"
                                 :class="{'active' : $route.name == 'g-slug-configuracion'}">Datos Básicos</nuxt-link>
                            </li>
                           
                            <li>
                                <nuxt-link class="text-block-21"  :to="{
                        name: 'g-slug-configuracion-moderadores',
                        params: { slug: $route.params.slug },
                      }"
                                 :class="{'active' : $route.name ==
                                  'g-slug-configuracion-moderadores'}">Moderadores</nuxt-link>
                            </li>
                        </ul>
                   </div>

                <div
                  class="div-block-444"
                  v-if="$route.name != 'g-slug-configuracion' && $route.name != 'g-slug-configuracion-moderadores'"
                >
                  <div class="div-block-447">
                    <div class="html-embed-7 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45ODY4NSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExNC41OTM3NSA0OTEuMTQwNjI1Yy01LjYwOTM3NSAwLTExLjE3OTY4OC0xLjc1LTE1LjkzMzU5NC01LjE4NzUtOC44NTU0NjgtNi40MTc5NjktMTIuOTkyMTg3LTE3LjQ0OTIxOS0xMC41ODIwMzEtMjguMDkzNzVsMzIuOTM3NS0xNDUuMDg5ODQ0LTExMS43MDMxMjUtOTcuOTYwOTM3Yy04LjIxMDkzOC03LjE2Nzk2OS0xMS4zNDc2NTYtMTguNTE5NTMyLTcuOTc2NTYyLTI4LjkwNjI1IDMuMzcxMDkzLTEwLjM2NzE4OCAxMi41NDI5NjgtMTcuNzA3MDMyIDIzLjQwMjM0My0xOC43MTA5MzhsMTQ3Ljc5Njg3NS0xMy40MTc5NjggNTguNDMzNTk0LTEzNi43NDYwOTRjNC4zMDg1OTQtMTAuMDQ2ODc1IDE0LjEyMTA5NC0xNi41MzUxNTYgMjUuMDIzNDM4LTE2LjUzNTE1NiAxMC45MDIzNDMgMCAyMC43MTQ4NDMgNi40ODgyODEgMjUuMDIzNDM3IDE2LjUxMTcxOGw1OC40MzM1OTQgMTM2Ljc2OTUzMiAxNDcuNzczNDM3IDEzLjQxNzk2OGMxMC44ODI4MTMuOTgwNDY5IDIwLjA1NDY4OCA4LjM0Mzc1IDIzLjQyNTc4MiAxOC43MTA5MzggMy4zNzEwOTMgMTAuMzY3MTg3LjI1MzkwNiAyMS43MzgyODEtNy45NTcwMzIgMjguOTA2MjVsLTExMS43MDMxMjUgOTcuOTQxNDA2IDMyLjkzNzUgMTQ1LjA4NTkzOGMyLjQxNDA2MyAxMC42Njc5NjgtMS43MjY1NjIgMjEuNjk5MjE4LTEwLjU3ODEyNSAyOC4wOTc2NTYtOC44MzIwMzEgNi4zOTg0MzctMjAuNjA5Mzc1IDYuODkwNjI1LTI5LjkxMDE1NiAxLjMwMDc4MWwtMTI3LjQ0NTMxMi03Ni4xNjAxNTYtMTI3LjQ0NTMxMyA3Ni4yMDMxMjVjLTQuMzA4NTk0IDIuNTU4NTk0LTkuMTA5Mzc1IDMuODYzMjgxLTEzLjk1MzEyNSAzLjg2MzI4MXptMTQxLjM5ODQzOC0xMTIuODc1YzQuODQzNzUgMCA5LjY0MDYyNCAxLjMwMDc4MSAxMy45NTMxMjQgMy44NTkzNzVsMTIwLjI3NzM0NCA3MS45Mzc1LTMxLjA4NTkzNy0xMzYuOTQxNDA2Yy0yLjIxODc1LTkuNzQ2MDk0IDEuMDg5ODQzLTE5LjkyMTg3NSA4LjYyMTA5My0yNi41MTU2MjVsMTA1LjQ3MjY1Ny05Mi41LTEzOS41NDI5NjktMTIuNjcxODc1Yy0xMC4wNDY4NzUtLjkxNzk2OS0xOC42ODc1LTcuMjM0Mzc1LTIyLjYxMzI4MS0xNi40OTIxODhsLTU1LjA4MjAzMS0xMjkuMDQ2ODc1LTU1LjE0ODQzOCAxMjkuMDY2NDA3Yy0zLjg4MjgxMiA5LjE5NTMxMi0xMi41MjM0MzggMTUuNTExNzE4LTIyLjU0Njg3NSAxNi40Mjk2ODdsLTEzOS41NjI1IDEyLjY3MTg3NSAxMDUuNDY4NzUgOTIuNWM3LjU1NDY4NyA2LjYxMzI4MSAxMC44NTkzNzUgMTYuNzY5NTMxIDguNjIxMDk0IDI2LjUzOTA2MmwtMzEuMDYyNSAxMzYuOTM3NSAxMjAuMjc3MzQzLTcxLjkxNDA2MmM0LjMwODU5NC0yLjU1ODU5NCA5LjEwOTM3Ni0zLjg1OTM3NSAxMy45NTMxMjYtMy44NTkzNzV6bS04NC41ODU5MzgtMjIxLjg0NzY1NnMwIC4wMjM0MzctLjAyMzQzOC4wNDI5Njl6bTE2OS4xMjg5MDYtLjA2MjUuMDIzNDM4LjA0Mjk2OWMwLS4wMjM0MzggMC0uMDIzNDM4LS4wMjM0MzgtLjA0Mjk2OXptMCAwIiBmaWxsPSIjM2U2NGRiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                      />
                    </div>
                    <div class="text-block-17">Guía y Reglas</div>
                  </div>

                  <div class="div-block-461">
                    <div class="text-block-31">Moderadores</div>
                    <div class="div-block-462">
                      <div v-for="(item, index) in moderadores" :key="index">
                        <nuxt-link
                          class="image-17"
                          :to="{
                            name: 'u-username',
                            params: { username: item.username },
                          }"
                        >
                          <img
                            :src="item.icono"
                            loading="lazy"
                            sizes="32px"
                            alt=""
                          />
                        </nuxt-link>
                      </div>
                    </div>
                  </div>

                  <!--about grupo-->
                  <div>
                    <div v-if="contenido != ''">
                      {{ contenido }}
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
  name: "bodyGrupo",
  props: [
    "responseGrupo",
    "pGroup",
    "tituloGrupo",
    "excerptGrupo",
    "imagenGrupo",
    "contenido",
    "miembros",
    "moderadores",
    "rolName",
    "rolUser",
    "miembrosO",
    "fechaM",
  ],
  data() {
    return {};
  },
  methods: {
     async  joinGroup(){
       if(this.rolUser == 2 || this.rolUser == 1){
          this.$router.push({ name: 'g-slug-configuracion-moderadores',  params: { slug: this.$route.params.slug }})
       }else{

      if(this.$store.state.cookieLogin){
   // console.log("hola join o leave")
          let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('pGroup', this.pGroup);
            const response = await this.$axios.$post('/grupos/join/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

      
            if(response.status == 0){
                
            }else{
               this.$emit("getGrupoNow");
              
            }
      }else{
        this.$router.push({name: 'login'})
      }

       }
       
     
    },
    async followUser() {
      if (this.$store.state.cookieLogin == false) {
        this.$router.push("/login");
        return false;
      }
      await this.$axios
        .$get(
          "/perfil/followunfollow?username=" +
            this.$route.params.username +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
         // console.log(response);
          this.$emit("recargarDataUser");
        });
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
        this.$router.push({ name: "iniciar-sesion" });
      }
    }
  },
  mounted() {},
};
</script>
