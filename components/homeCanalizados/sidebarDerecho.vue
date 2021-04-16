<template>
 <div class="column-5 w-col w-col-4">
                <div class="div-block-448">
                  
    <div class="div-block-444" v-if="$store.state.cookieLogin">
      <div class="div-block-447">
        <div class="html-embed-7 w-embed">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45ODY4NSA1MTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExNC41OTM3NSA0OTEuMTQwNjI1Yy01LjYwOTM3NSAwLTExLjE3OTY4OC0xLjc1LTE1LjkzMzU5NC01LjE4NzUtOC44NTU0NjgtNi40MTc5NjktMTIuOTkyMTg3LTE3LjQ0OTIxOS0xMC41ODIwMzEtMjguMDkzNzVsMzIuOTM3NS0xNDUuMDg5ODQ0LTExMS43MDMxMjUtOTcuOTYwOTM3Yy04LjIxMDkzOC03LjE2Nzk2OS0xMS4zNDc2NTYtMTguNTE5NTMyLTcuOTc2NTYyLTI4LjkwNjI1IDMuMzcxMDkzLTEwLjM2NzE4OCAxMi41NDI5NjgtMTcuNzA3MDMyIDIzLjQwMjM0My0xOC43MTA5MzhsMTQ3Ljc5Njg3NS0xMy40MTc5NjggNTguNDMzNTk0LTEzNi43NDYwOTRjNC4zMDg1OTQtMTAuMDQ2ODc1IDE0LjEyMTA5NC0xNi41MzUxNTYgMjUuMDIzNDM4LTE2LjUzNTE1NiAxMC45MDIzNDMgMCAyMC43MTQ4NDMgNi40ODgyODEgMjUuMDIzNDM3IDE2LjUxMTcxOGw1OC40MzM1OTQgMTM2Ljc2OTUzMiAxNDcuNzczNDM3IDEzLjQxNzk2OGMxMC44ODI4MTMuOTgwNDY5IDIwLjA1NDY4OCA4LjM0Mzc1IDIzLjQyNTc4MiAxOC43MTA5MzggMy4zNzEwOTMgMTAuMzY3MTg3LjI1MzkwNiAyMS43MzgyODEtNy45NTcwMzIgMjguOTA2MjVsLTExMS43MDMxMjUgOTcuOTQxNDA2IDMyLjkzNzUgMTQ1LjA4NTkzOGMyLjQxNDA2MyAxMC42Njc5NjgtMS43MjY1NjIgMjEuNjk5MjE4LTEwLjU3ODEyNSAyOC4wOTc2NTYtOC44MzIwMzEgNi4zOTg0MzctMjAuNjA5Mzc1IDYuODkwNjI1LTI5LjkxMDE1NiAxLjMwMDc4MWwtMTI3LjQ0NTMxMi03Ni4xNjAxNTYtMTI3LjQ0NTMxMyA3Ni4yMDMxMjVjLTQuMzA4NTk0IDIuNTU4NTk0LTkuMTA5Mzc1IDMuODYzMjgxLTEzLjk1MzEyNSAzLjg2MzI4MXptMTQxLjM5ODQzOC0xMTIuODc1YzQuODQzNzUgMCA5LjY0MDYyNCAxLjMwMDc4MSAxMy45NTMxMjQgMy44NTkzNzVsMTIwLjI3NzM0NCA3MS45Mzc1LTMxLjA4NTkzNy0xMzYuOTQxNDA2Yy0yLjIxODc1LTkuNzQ2MDk0IDEuMDg5ODQzLTE5LjkyMTg3NSA4LjYyMTA5My0yNi41MTU2MjVsMTA1LjQ3MjY1Ny05Mi41LTEzOS41NDI5NjktMTIuNjcxODc1Yy0xMC4wNDY4NzUtLjkxNzk2OS0xOC42ODc1LTcuMjM0Mzc1LTIyLjYxMzI4MS0xNi40OTIxODhsLTU1LjA4MjAzMS0xMjkuMDQ2ODc1LTU1LjE0ODQzOCAxMjkuMDY2NDA3Yy0zLjg4MjgxMiA5LjE5NTMxMi0xMi41MjM0MzggMTUuNTExNzE4LTIyLjU0Njg3NSAxNi40Mjk2ODdsLTEzOS41NjI1IDEyLjY3MTg3NSAxMDUuNDY4NzUgOTIuNWM3LjU1NDY4NyA2LjYxMzI4MSAxMC44NTkzNzUgMTYuNzY5NTMxIDguNjIxMDk0IDI2LjUzOTA2MmwtMzEuMDYyNSAxMzYuOTM3NSAxMjAuMjc3MzQzLTcxLjkxNDA2MmM0LjMwODU5NC0yLjU1ODU5NCA5LjEwOTM3Ni0zLjg1OTM3NSAxMy45NTMxMjYtMy44NTkzNzV6bS04NC41ODU5MzgtMjIxLjg0NzY1NnMwIC4wMjM0MzctLjAyMzQzOC4wNDI5Njl6bTE2OS4xMjg5MDYtLjA2MjUuMDIzNDM4LjA0Mjk2OWMwLS4wMjM0MzggMC0uMDIzNDM4LS4wMjM0MzgtLjA0Mjk2OXptMCAwIiBmaWxsPSIjM2U2NGRiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
          />
        </div>
        <div class="text-block-17">Más populares</div>
      </div>
      <div class="div-block-445" v-for="(item, index) in arrayPopulares" :key="index">
        <div class="div-block-446">
         <div class="text-block-19">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }"  class="link-inline-black"> {{item.titulo}} </nuxt-link>
            
          </div>

          <div class="text-block-imagenP">
             <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }" >
              <img
            :src="item.avatar"
            loading="lazy"
            width="60"
            height="60"
            alt=""
            class="image-14"
          />
             </nuxt-link> 
          </div>
        
        </div>
        <div><div class="text-block-18">
           <nuxt-link  
              :to="{
                name: 'g-slug',
                params: { slug: item.slugGrupo }
              }"  class="link-inline">{{item.tituloGrupo}}</nuxt-link>
           ·  <nuxt-link  
              :to="{
                name: 'c-slug',
                params: { slug: item.slug }
              }"  class="link-inline-black"> {{item.fecha}} </nuxt-link></div></div>
      </div>
    
      
    </div>
                   <div class="div-block-444">
                  <div class="div-block-447">
                    <div class="html-embed-7 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywwSDE1QzYuNzE2LDAsMCw2LjcxNiwwLDE1djM4NS42MDFjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg4MS40VjQ5N2MwLDYuMDY3LDMuNjU1LDExLjUzNyw5LjI2LDEzLjg1OCAgICBjMS44NTYsMC43NjksMy44MDUsMS4xNDIsNS43MzcsMS4xNDJjMy45MDQsMCw3Ljc0MS0xLjUyNCwxMC42MS00LjM5NGw5Mi4wMDYtOTIuMDA2SDQ5N2M4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjE1ICAgIEM1MTIsNi43MTYsNTA1LjI4NCwwLDQ5NywweiBNNDgyLDM4NS42MDFIMjA3LjhjLTMuOTc4LDAtNy43OTQsMS41ODEtMTAuNjA2LDQuMzkzbC03MC43OTMsNzAuNzkyVjQwMC42YzAtOC4yODQtNi43MTYtMTUtMTUtMTUgICAgSDMwVjMwaDQ1MlYzODUuNjAxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzYwLjQzNCwxNDQuNjAxaC0zNS45MTVsMi42NjMtMzEuOTU0YzAuNjg4LTguMjU1LTUuNDQ3LTE1LjUwNi0xMy43MDItMTYuMTk0Yy04LjI3MS0wLjY4OS0xNS41MDcsNS40NDgtMTYuMTk0LDEzLjcwMyAgICBsLTIuODcsMzQuNDQ1SDIyOC4xMmwyLjY2My0zMS45NTRjMC42ODgtOC4yNTUtNS40NDctMTUuNTA2LTEzLjcwMy0xNi4xOTRjLTguMjYzLTAuNjg3LTE1LjUwNiw1LjQ0Ny0xNi4xOTQsMTMuNzAzICAgIGwtMi44NzEsMzQuNDQ1aC0zMC4zODFjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVoMjcuODgxbC01LjUzMyw2Ni40aC0zOC40MTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTUgICAgYzAsOC4yODMsNi43MTYsMTQuOTk5LDE1LDE0Ljk5OWgzNS45MTVsLTIuNjYzLDMxLjk1NWMtMC42ODgsOC4yNTUsNS40NDcsMTUuNTA2LDEzLjcwMywxNi4xOTQgICAgYzAuNDI0LDAuMDM1LDAuODQ1LDAuMDUzLDEuMjYyLDAuMDUzYzcuNzIsMCwxNC4yNzktNS45MjMsMTQuOTMyLTEzLjc1NWwyLjg3LTM0LjQ0N2g2Ni4yOTZsLTIuNjYzLDMxLjk1NSAgICBjLTAuNjg4LDguMjU1LDUuNDQ3LDE1LjUwNiwxMy43MDIsMTYuMTk0YzAuNDI0LDAuMDM1LDAuODQ2LDAuMDUzLDEuMjYzLDAuMDUzYzcuNzIxLDAsMTQuMjc5LTUuOTIzLDE0LjkzMi0xMy43NTVsMi44Ny0zNC40NDYgICAgaDMwLjM4MmM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMjcuODgybDUuNTMzLTY2LjRoMzguNDE1YzguMjg0LDAsMTUtNi43MTYsMTUtMTUgICAgUzM2OC43MTgsMTQ0LjYwMSwzNjAuNDM0LDE0NC42MDF6IE0yODYuMzgyLDI0MWgtNjYuMjk2bDUuNTMzLTY2LjRoNjYuMjk2TDI4Ni4zODIsMjQxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                      />
                    </div>
                    <div class="text-block-17">{{labelRecomendados}}</div>
                  </div>
                  <div>
                    <ul role="list" class="list-10">
                      <li class="list-item-11" 
                      v-for="(item, index) in gruposRecomendados" :key="index">
                          <nuxt-link  
                          :to="{
                          name: 'g-slug',
                          params: { slug: item.slug },
                          }">{{item.titulo}}</nuxt-link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                  <div>
                    <div class="text-block-20">
                      @canalizados<br />FAQ · Terminos · Privacidad
                    </div>
                  </div>
                </div>
              </div>
</template>


<script>

export default {
    name: "sidebarDerecho", 
      props: ['arrayPopulares', 'labelRecomendados', 'gruposRecomendados' ],
    data() {
        return {

        }
    },
}
</script>
