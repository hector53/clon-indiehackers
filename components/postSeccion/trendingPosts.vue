<template>
  <div class="trendingPosts">
 <div
      class="div-block-425"
      v-for="(item, index) in arrayNoticias"
      :key="index"
    >
      <div class="div-block-432">
        <div class="columns w-row">
          <div class="column w-col w-col-8">
            <h3>
              <nuxt-link
                :to="{ name: 'c-slug', params: { slug: item.slug } }"
                class="link-15"
                >{{ item.titulo }}</nuxt-link
              >
            </h3>

            <div class="div-block-426">
              <div class="div-block-431">
                <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: item.slugGrupo } }"
                  class="link-17"
                  >{{ item.tituloGrupo }}</nuxt-link>
              </div>
              <div class="div-block-427">
                <div class="text-block-6" v-show="item.tituloGrupo != null">•</div>
                    <nuxt-link  class="userStaffpick"
                  :to="{ name: 'u-username', params: { username: item.username } }"
                
                 
                  ><img :src="item.avatar" loading="lazy" sizes="32px" alt="" class="image-12" data-v-70e177c0="">
                  <span>{{ item.username }}</span></nuxt-link>
              </div>
            </div>
            
          </div>
          <div class="column-2 w-col w-col-4">
            <nuxt-link :to="{ name: 'c-slug', params: { slug: item.slug } }" >
             
                <img
                  :src="item.imagen"
                  loading="lazy"
                  alt=""
                  class="image-11"
                />
            </nuxt-link>
          </div>
        </div>
      </div>
    
      <div class="div-block-428">
        <div class="div-block-454">
         <like-canalizados :p="item.id" :votos="item.votos" :estilo="2"></like-canalizados>
        </div>
        <div class="div-block-429">

          
          <a :href="'https://twitter.com/intent/tweet?text='+item.titulo+'&url=https://canalizados.com/c/'+item.slug" target="_blank">
           <div class="html-embed-8 w-embed">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiM2ZjZmNmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
            />
          </div>
          </a>


            <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://canalizados.com/c/'+item.slug" target="_blank">
           <div class="html-embed-8 w-embed">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1MiwwSDYwQzI2LjkxNiwwLDAsMjYuOTE2LDAsNjB2MzkyYzAsMzMuMDg0LDI2LjkxNiw2MCw2MCw2MGgzOTJjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjYwICAgIEM1MTIsMjYuOTE2LDQ4NS4wODQsMCw0NTIsMHogTTQ3Miw0NTJjMCwxMS4wMjgtOC45NzIsMjAtMjAsMjBIMzM4VjMwOWg2MS43OUw0MTAsMjQ3aC03MnYtNDNjMC0xNi45NzUsMTMuMDI1LTMwLDMwLTMwaDQxdi02MiAgICBoLTQxYy01MC45MjMsMC05MS45NzgsNDEuMjUtOTEuOTc4LDkyLjE3NFYyNDdIMjE2djYyaDYwLjAyMnYxNjNINjBjLTExLjAyOCwwLTIwLTguOTcyLTIwLTIwVjYwYzAtMTEuMDI4LDguOTcyLTIwLDIwLTIwaDM5MiAgICBjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBWNDUyeiIgZmlsbD0iIzZmNmY2ZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            />
          </div>
          </a>
         
         
        </div>
        <div class="div-block-430">
          <nuxt-link
            :to="{ name: 'c-slug', params: { slug: item.slug } }"
            class="link-16"
            >{{ item.fecha }}</nuxt-link
          >
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import likeCanalizados from '../likes/likeCanalizados.vue'

export default {
  components: { likeCanalizados },
    name: "trendingPosts", 
    data() {
        return {
arrayNoticias: []
        }
    },

       async fetch() {
  await this.$axios
        .$get("/getpost/getnoticias?fin=6&ini=0&xPag=6")
        .then((response) => {
       //   console.log(response)
          this.arrayNoticias = response.noticias
        })
  },
  mounted() {
   // console.log("get trending")
  },
  
}
</script>
