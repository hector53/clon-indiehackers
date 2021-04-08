<template>
  <div class="column-9 w-col w-col-4 w-col-tiny-tiny-stack">
    <div class="div-block-458" v-if="$store.state.cookieLogin">
      <div>
        <h3 class="heading-4">Ya sos parte de canalizados!</h3>
        <div class="text-block-26">Esto es lo que podés hacer</div>
      </div>
      <ul role="list" class="list-9">
        <li class="list-item-10">
          <div class="text-block-27">👋 &nbsp;&nbsp;Completá tu perfil</div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
            🎬 &nbsp;&nbsp;Seguí intereses y personas
          </div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
            ✍️ &nbsp;&nbsp;Escribí tu primer publicación
          </div>
        </li>
      </ul>
    </div>

    <div class="div-block-444" v-if="$store.state.cookieLogin == false">
      <div class="div-block-447">
        <div class="html-embed-7 w-embed">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45ODY4NSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExNC41OTM3NSA0OTEuMTQwNjI1Yy01LjYwOTM3NSAwLTExLjE3OTY4OC0xLjc1LTE1LjkzMzU5NC01LjE4NzUtOC44NTU0NjgtNi40MTc5NjktMTIuOTkyMTg3LTE3LjQ0OTIxOS0xMC41ODIwMzEtMjguMDkzNzVsMzIuOTM3NS0xNDUuMDg5ODQ0LTExMS43MDMxMjUtOTcuOTYwOTM3Yy04LjIxMDkzOC03LjE2Nzk2OS0xMS4zNDc2NTYtMTguNTE5NTMyLTcuOTc2NTYyLTI4LjkwNjI1IDMuMzcxMDkzLTEwLjM2NzE4OCAxMi41NDI5NjgtMTcuNzA3MDMyIDIzLjQwMjM0My0xOC43MTA5MzhsMTQ3Ljc5Njg3NS0xMy40MTc5NjggNTguNDMzNTk0LTEzNi43NDYwOTRjNC4zMDg1OTQtMTAuMDQ2ODc1IDE0LjEyMTA5NC0xNi41MzUxNTYgMjUuMDIzNDM4LTE2LjUzNTE1NiAxMC45MDIzNDMgMCAyMC43MTQ4NDMgNi40ODgyODEgMjUuMDIzNDM3IDE2LjUxMTcxOGw1OC40MzM1OTQgMTM2Ljc2OTUzMiAxNDcuNzczNDM3IDEzLjQxNzk2OGMxMC44ODI4MTMuOTgwNDY5IDIwLjA1NDY4OCA4LjM0Mzc1IDIzLjQyNTc4MiAxOC43MTA5MzggMy4zNzEwOTMgMTAuMzY3MTg3LjI1MzkwNiAyMS43MzgyODEtNy45NTcwMzIgMjguOTA2MjVsLTExMS43MDMxMjUgOTcuOTQxNDA2IDMyLjkzNzUgMTQ1LjA4NTkzOGMyLjQxNDA2MyAxMC42Njc5NjgtMS43MjY1NjIgMjEuNjk5MjE4LTEwLjU3ODEyNSAyOC4wOTc2NTYtOC44MzIwMzEgNi4zOTg0MzctMjAuNjA5Mzc1IDYuODkwNjI1LTI5LjkxMDE1NiAxLjMwMDc4MWwtMTI3LjQ0NTMxMi03Ni4xNjAxNTYtMTI3LjQ0NTMxMyA3Ni4yMDMxMjVjLTQuMzA4NTk0IDIuNTU4NTk0LTkuMTA5Mzc1IDMuODYzMjgxLTEzLjk1MzEyNSAzLjg2MzI4MXptMTQxLjM5ODQzOC0xMTIuODc1YzQuODQzNzUgMCA5LjY0MDYyNCAxLjMwMDc4MSAxMy45NTMxMjQgMy44NTkzNzVsMTIwLjI3NzM0NCA3MS45Mzc1LTMxLjA4NTkzNy0xMzYuOTQxNDA2Yy0yLjIxODc1LTkuNzQ2MDk0IDEuMDg5ODQzLTE5LjkyMTg3NSA4LjYyMTA5My0yNi41MTU2MjVsMTA1LjQ3MjY1Ny05Mi41LTEzOS41NDI5NjktMTIuNjcxODc1Yy0xMC4wNDY4NzUtLjkxNzk2OS0xOC42ODc1LTcuMjM0Mzc1LTIyLjYxMzI4MS0xNi40OTIxODhsLTU1LjA4MjAzMS0xMjkuMDQ2ODc1LTU1LjE0ODQzOCAxMjkuMDY2NDA3Yy0zLjg4MjgxMiA5LjE5NTMxMi0xMi41MjM0MzggMTUuNTExNzE4LTIyLjU0Njg3NSAxNi40Mjk2ODdsLTEzOS41NjI1IDEyLjY3MTg3NSAxMDUuNDY4NzUgOTIuNWM3LjU1NDY4NyA2LjYxMzI4MSAxMC44NTkzNzUgMTYuNzY5NTMxIDguNjIxMDk0IDI2LjUzOTA2MmwtMzEuMDYyNSAxMzYuOTM3NSAxMjAuMjc3MzQzLTcxLjkxNDA2MmM0LjMwODU5NC0yLjU1ODU5NCA5LjEwOTM3Ni0zLjg1OTM3NSAxMy45NTMxMjYtMy44NTkzNzV6bS04NC41ODU5MzgtMjIxLjg0NzY1NnMwIC4wMjM0MzctLjAyMzQzOC4wNDI5Njl6bTE2OS4xMjg5MDYtLjA2MjUuMDIzNDM4LjA0Mjk2OWMwLS4wMjM0MzggMC0uMDIzNDM4LS4wMjM0MzgtLjA0Mjk2OXptMCAwIiBmaWxsPSIjM2U2NGRiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
          />
        </div>
        <div class="text-block-17">Más populares</div>
      </div>
      <div class="div-block-445">
        <div class="div-block-446">
          <div class="text-block-19">
            Report: The 11 best growth channels among 500 startups
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/5fc7d9f554b4a01cc7bd6c98_5dd1ca04edfe6a591970a2cd_face-chad.jpg"
            loading="lazy"
            width="60"
            height="60"
            alt=""
            class="image-14"
          />
        </div>
        <div><div class="text-block-18">Marketing · Hace 3 horas</div></div>
      </div>
      <div class="div-block-445">
        <div class="div-block-446">
          <div class="text-block-19">
            Which side project should I focus on first?
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/5fc7d9f554b4a0d9b5bd6cd1_photo-1535162777965-1304efc8c6dc.jpeg"
            loading="lazy"
            width="60"
            height="60"
            srcset="
              https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/5fc7d9f554b4a0d9b5bd6cd1_photo-1535162777965-1304efc8c6dc-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/5fc7d9f554b4a0d9b5bd6cd1_photo-1535162777965-1304efc8c6dc.jpeg       800w
            "
            sizes="60px"
            alt=""
            class="image-14"
          />
        </div>
        <div><div class="text-block-18">Mi producto · Hace 6 horas</div></div>
      </div>
      <div class="div-block-445">
        <div class="div-block-446">
          <div class="text-block-19">
            What are your business goals for 2021?
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg"
            loading="lazy"
            width="60"
            height="60"
            srcset="
              https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg       800w
            "
            sizes="60px"
            alt=""
            class="image-14"
          />
        </div>
        <div><div class="text-block-18">Preguntas · Ayer</div></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "columnaDerechaDiscusion",
  data() {
    return {};
  },
};
</script>
