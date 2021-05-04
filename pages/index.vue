<template>
  <div>
    <b-container>
      <b-row
        v-for="(item, index) in arrayPostHoy"
        class="rowIndex"
        :key="index"
      >
        <b-col cols="1" lg="1" sm="1" xs="1" class="votoIndex">
          <like-canalizados :p="item.id" :votos="item.votos"></like-canalizados>
        </b-col>

        <b-col cols="10" lg="11" sm="11" xs="10" class="colIndex">
          <h4 class="h4Index">
            <nuxt-link
              class="link-14"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"
              >{{ item.titulo }}</nuxt-link
            >
          </h4>

          <div class="div-block-422">
            <div
              class="div-block-420 pic-hover"
            >
            <nuxt-link 
            style="width: 33px;
    height: 33px;"
     class="image-10"
    
                 :class="{'unaSola' : item.votos == 1, 'unaSola': item.users.length == index+1 }"
             v-for="(img, index) in item.users" :key="index"   :to="{
                name: 'u-username',
                params: { username: img.username },
              }">
            <img
               
                loading="lazy"
                sizes="(max-width: 479px) 14vw, 33.0625px"
                 :src="img.avatar"
                class="imageUserIndex"
              />
            </nuxt-link>
              
            </div>
            <nuxt-link
              class="userIndex"
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }"
            >
              <div class="text-block-7">{{ item.username }}</div>
            </nuxt-link>
            <div class="text-block-6 userIndex">•</div>

            <nuxt-link
              class="text-block-7"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"
              >
              <img class="imgComment" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTEwLjE1Niw0MDEuODQzTDQ4MC40MTksMzE1LjNjMTQuMzM0LTI5LjMwMiwyMS45MDktNjEuODksMjEuOTYtOTQuNjc5YzAuMDg4LTU3LjAxMy0yMS45Ny0xMTAuOTItNjIuMTEyLTE1MS43OSAgICBDNDAwLjExNywyNy45NTMsMzQ2LjYxNSw0Ljk0MiwyODkuNjE1LDQuMDM5QzIzMC41MSwzLjEwNSwxNzQuOTU0LDI1LjU4NywxMzMuMTg3LDY3LjM1MyAgICBjLTQwLjI3NCw0MC4yNzMtNjIuNjEyLDkzLjM2Ni02My4zMTksMTUwLjEwMkMzMC4xNzQsMjQ3LjM0MSw2Ljc0NSwyOTMuOTM2LDYuODIyLDM0My43MDUgICAgYzAuMDM3LDIzLjI5LDUuMjc5LDQ2LjQ0MSwxNS4yMTIsNjcuMzc2TDEuNTUxLDQ3MC42ODljLTMuNTIxLDEwLjI0Ny0wLjk0OSwyMS4zNzMsNi43MTMsMjkuMDM1ICAgIGM1LjM5Miw1LjM5MywxMi41MDEsOC4yNjQsMTkuODEyLDguMjY0YzMuMDc2LDAsNi4xODgtMC41MDgsOS4yMjMtMS41NTFsNTkuNjA5LTIwLjQ4M2MyMC45MzUsOS45MzMsNDQuMDg2LDE1LjE3NSw2Ny4zNzYsMTUuMjEyICAgIGMwLjA4NCwwLDAuMTY0LDAsMC4yNDgsMGM1MC41MS0wLjAwMiw5Ny40Ni0yNC4wMzUsMTI3LjIzNy02NC43MDJjMzAuOTg3LTAuODE2LDYxLjY0Ni04LjMxNyw4OS4zNjMtMjEuODc2bDg2LjU0NCwyOS43MzggICAgYzMuNjA2LDEuMjM5LDcuMzA0LDEuODQzLDEwLjk1OSwxLjg0M2M4LjY4OCwwLDE3LjEzNi0zLjQxMiwyMy41NDUtOS44MjJDNTExLjI4NCw0MjcuMjQyLDUxNC4zNCw0MTQuMDIxLDUxMC4xNTYsNDAxLjg0M3ogICAgIE0xNjQuNTMsNDcwLjY5Yy0wLjA2NSwwLTAuMTM0LDAtMC4xOTksMGMtMjAuNjE0LTAuMDMxLTQxLjA4NS01LjExMy01OS4xOTYtMTQuNjk1Yy0zLjcyNC0xLjk2OS04LjA5Ni0yLjMxLTEyLjA3OC0wLjk0MiAgICBsLTYxLjEyMywyMS4wMDNsMjEuMDAzLTYxLjEyMmMxLjM2OC0zLjk4MywxLjAyOC04LjM1NS0wLjk0Mi0xMi4wNzhjLTkuNTgyLTE4LjExMi0xNC42NjQtMzguNTgyLTE0LjY5Ni01OS4xOTcgICAgYy0wLjA1MS0zMy4xNTksMTIuODQ4LTY0LjU4OCwzNS40MDUtODguMTIyYzcuMzY4LDQ0LjkxNiwyOC43NzUsODYuMzA2LDYxLjk1NywxMTguODk4ICAgIGMzMi45MzcsMzIuMzUxLDc0LjMzOSw1Mi45NDksMTE5LjAxMSw1OS42ODNDMjMwLjA4NCw0NTcuMzY3LDE5OC4yODgsNDcwLjY5LDE2NC41Myw0NzAuNjl6IE00ODAuNjI4LDQxNC43OTcgICAgYy0wLjg2NywwLjg2Ny0xLjg5NSwxLjEwMy0zLjA1MSwwLjcwNWwtOTIuNjQ4LTMxLjgzNmMtMS42MDktMC41NTMtMy4yODMtMC44MjctNC45NTEtMC44MjdjLTIuNDU5LDAtNC45MDksMC41OTUtNy4xMjYsMS43NjkgICAgYy0yNi40NTMsMTMuOTk0LTU2LjM0NSwyMS40MTYtODYuNDQ3LDIxLjQ2MmMtMC4wOTksMC0wLjE4OSwwLTAuMjg4LDBjLTEwMC44NjMsMC0xODQuMTc2LTgxLjkzNC0xODUuNzc0LTE4Mi43NzMgICAgYy0wLjgwNS01MC43ODUsMTguNTEzLTk4LjUxNCw1NC4zOTQtMTM0LjM5NWMzNS44ODEtMzUuODgxLDgzLjYxOC01NS4xOTIsMTM0LjM5Ni01NC4zOTIgICAgYzEwMC45MzYsMS42MDEsMTgyLjkyNiw4NS4wNjgsMTgyLjc3LDE4Ni4wNjNjLTAuMDQ3LDMwLjEwMi03LjQ2OCw1OS45OTUtMjEuNDYxLDg2LjQ0NmMtMS45NywzLjcyMy0yLjMxLDguMDk1LTAuOTQyLDEyLjA3OCAgICBsMzEuODM1LDkyLjY0OEM0ODEuNzMyLDQxMi45MDUsNDgxLjQ5NCw0MTMuOTMyLDQ4MC42MjgsNDE0Ljc5N3oiIGZpbGw9IiMxYTFiMWYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3Ni44OTIsMTM5LjUxMmgtMTgxLjU2Yy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTgxLjU2ICAgIGM4LjQxNiwwLDE1LjIzOC02LjgyMywxNS4yMzgtMTUuMjM4QzM5Mi4xMywxNDYuMzM1LDM4NS4zMDgsMTM5LjUxMiwzNzYuODkyLDEzOS41MTJ6IiBmaWxsPSIjMWExYjFmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzYuODkyLDIwMi4xODNoLTE4MS41NmMtOC40MTYsMC0xNS4yMzgsNi44MjMtMTUuMjM4LDE1LjIzOHM2LjgyMywxNS4yMzgsMTUuMjM4LDE1LjIzOGgxODEuNTYgICAgYzguNDE2LDAsMTUuMjM4LTYuODIzLDE1LjIzOC0xNS4yMzhTMzg1LjMwOCwyMDIuMTgzLDM3Ni44OTIsMjAyLjE4M3oiIGZpbGw9IiMxYTFiMWYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwNy4wMDQsMjY0Ljg1MkgxOTUuMzMxYy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTExLjY3MiAgICBjOC40MTYsMCwxNS4yMzgtNi44MjMsMTUuMjM4LTE1LjIzOEMzMjIuMjQxLDI3MS42NzUsMzE1LjQyLDI2NC44NTIsMzA3LjAwNCwyNjQuODUyeiIgZmlsbD0iIzFhMWIxZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=">
              {{ item.comentarios }}
              </nuxt-link>
            <div class="text-block-6">•</div>
            <nuxt-link
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo },
              }"
            >
              <div class="text-block-7">{{ item.tituloGrupo }}</div></nuxt-link
            >

            <div class="text-block-6">•</div>
            <nuxt-link
              class="text-block-7"
              :to="{
                name: 'c-slug',
                params: { slug: item.slug },
              }"
              >{{ item.fecha }}</nuxt-link
            >
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="div-block-434">
      <div>Hay {{ arrayPostHoy.length }} publicaciones esta semana</div>
      <div class="text-block-6">•</div>
      <a href="#" class="link-18">Siguiente pagina</a>
    </div>
  </div>
</template>


<script>
import likeCanalizados from "~/components/likes/likeCanalizados.vue";
export default {
  components: { likeCanalizados },
  name: "index",
  layout: "homeCanalizados",

  data() {
    return {
      arrayPostHoy: [],
      hoverPic: false,
    };
  },
  methods: {
  
  },
  async fetch() {
          await this.$axios.$get("/getpost/hoy/?filtro=hoy").then((response) => {
      console.log(response);
     
  this.arrayPostHoy = response.posts;
      
    
    });
  },
  mounted() {
  },
};
</script>
