<template>

                <div class="div-block-433 homeDiscusion">
                  <div>
                    <div class="div-block-435">
                      <div class="text-block-28">Comunidad</div>
                    </div>
                    <div class="div-block-459 ">
                        <nuxt-link 

                       :to="{name: 'index' }" >

                        <div class="div-block-460" :class="{'activePopular' : $route.name != 'top-nuevos'}">
                        <div class="html-embed-11 w-embed ">
                        <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMTkgNTEyLjAxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ3LjI4LDMwNC44bC0wLjM2NS01LjAxYy01Ljg2NS03Ni4zNTQtNDEuNDE3LTEyNC4yMTktNzIuNzgxLTE2Ni40MzhjLTI5LjA0Mi0zOS4wOTQtNTQuMTI1LTcyLjg1NC01NC4xMjUtMTIyLjY2NyAgICBjMC00LTIuMjQtNy42NTYtNS43OTItOS40OWMtMy41NjMtMS44NDQtNy44NDQtMS41NDItMTEuMDgzLDAuODEzYy00Ny4xMDQsMzMuNzA4LTg2LjQwNiw5MC41MjEtMTAwLjEzNSwxNDQuNzI5ICAgIGMtOS41MzEsMzcuNzQtMTAuNzkyLDgwLjE2Ny0xMC45NjksMTA4LjE4OGMtNDMuNS05LjI5Mi01My4zNTQtNzQuMzY1LTUzLjQ1OC03NS4wNzNjLTAuNDktMy4zNzUtMi41NTItNi4zMTMtNS41NTItNy45MTcgICAgYy0zLjAzMS0xLjU4My02LjU5NC0xLjY5OC05LjY2Ny0wLjE3N2MtMi4yODEsMS4xMDQtNTUuOTksMjguMzk2LTU5LjExNSwxMzcuMzc1Yy0wLjIxOSwzLjYyNS0wLjIyOSw3LjI1LTAuMjI5LDEwLjg4NSAgICBjMCwxMDUuODY1LDg2LjEzNSwxOTIsMTkyLDE5MnMxOTItODYuMTM1LDE5Mi0xOTJDNDQ4LjAwOSwzMTQuNzA2LDQ0Ny42NDUsMzA5Ljc0OCw0NDcuMjgsMzA0Ljh6IE0yNTYuMDA5LDQ5MC42ODUgICAgYy0zNS4yOTIsMC02NC0zMC41ODMtNjQtNjguMTc3YzAtMS4yODEtMC4wMS0yLjU3MywwLjA4My00LjE1NmMwLjQyNy0xNS44NTQsMy40MzgtMjYuNjc3LDYuNzQtMzMuODc1ICAgIGM2LjE4OCwxMy4yOTIsMTcuMjYsMjUuNTEsMzUuMjE5LDI1LjUxYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdjMC0xNS4xODgsMC4zMTMtMzIuNzA4LDQuMDk0LTQ4LjUyMSAgICBjMy4zNjUtMTQuMDMxLDExLjQwNi0yOC45MzgsMjEuNTk0LTQwLjg5NmM0LjUzMSwxNS41MjEsMTMuMzY1LDI4LjA4MywyMS45OSw0MC4zNDRjMTIuMzQ0LDE3LjU0MiwyNS4xMDQsMzUuNjc3LDI3LjM0NCw2Ni42MDQgICAgYzAuMTM1LDEuODMzLDAuMjcxLDMuNjc3LDAuMjcxLDUuNjU2QzMyMC4wMDksNDYwLjEwMiwyOTEuMzAxLDQ5MC42ODUsMjU2LjAwOSw0OTAuNjg1eiBNMzIzLjQyMSw0NzYuNzQ4ICAgIGMxMS4wNzItMTUuMDk5LDE3LjkyMi0zMy43NjMsMTcuOTIyLTU0LjI0YzAtMi41MS0wLjE1Ni00Ljg0NC0wLjQ2OS05LjIwOGMtMi41MzEtMzQuODIzLTE3LjY2Ny01Ni4zNDQtMzEuMDMxLTc1LjMzMyAgICBjLTExLjM4NS0xNi4xNjctMjEuMjA4LTMwLjEzNS0yMS4yMDgtNDkuOTQ4YzAtNC4wNTItMi4yOTItNy43NS01LjkxNy05LjU1MmMtMy42MDQtMS44MTMtNy45NTgtMS40MDYtMTEuMTc3LDEuMDQyICAgIGMtMjAuNDU4LDE1LjQ1OC0zNy41MjEsNDEuNDc5LTQzLjQ3OSw2Ni4zMjNjLTMuMDQyLDEyLjc0LTQuMTA0LDI2LjUyMS00LjQ3OSwzNy44NTRjLTcuMzk2LTcuOTU4LTkuNjg4LTIyLjcwOC05LjcwOC0yMi45MDYgICAgYy0wLjQ3OS0zLjQyNy0yLjU4My02LjQxNy01LjY1Ni04LjAxYy0zLjA1Mi0xLjU4My02LjcwOC0xLjYyNS05Ljc4MS0wLjA0MmMtMi42ODgsMS4zNzUtMjYuMzAyLDE0LjkxNy0yNy42NTYsNjQuNzI5ICAgIGMtMC4wOTQsMS42ODgtMC4xMDQsMy4zNzUtMC4xMDQsNS4wNTJjMCwyMC40NzcsNi44NSwzOS4xNDEsMTcuOTIyLDU0LjI0Yy02MC42NjQtMjYuMTk1LTEwMy4yNTUtODYuNTYzLTEwMy4yNTUtMTU2LjcyOSAgICBjMC0zLjE5OC0wLjAxLTYuMzg1LDAuMjA4LTkuOTM4YzEuODMzLTYzLjkzOCwyMi4yOTItOTUuNjQ2LDM1LjY0Ni0xMDkuNjM1YzkuMzEyLDMzLjMzMywzMy43MDgsNzYuOTA2LDgxLjQ3OSw3Ni45MDYgICAgYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdjMC0zNS42OTgsMC44MDItNzYuOTQ4LDEwLjM0NC0xMTQuNzE5YzEwLjgzMy00Mi43OTIsNDAuNTEtODksNzYuMzMzLTEyMC4yODEgICAgYzUuOTQ4LDQ1LjY4OCwzMC44MzMsNzkuMTg4LDU2Ljk5LDExNC4zODVjMzEuMDk0LDQxLjg1NCw2My4yNCw4NS4xMzUsNjguNjI1LDE1NS4yMTlsMC4zNjUsNS4xMDQgICAgYzAuMzMzLDQuNDM4LDAuNjc3LDguODY1LDAuNjc3LDEzLjYyNUM0MjYuNjc2LDM5MC4xODUsMzg0LjA4NSw0NTAuNTUzLDMyMy40MjEsNDc2Ljc0OHoiIGZpbGw9IiMzZTY0ZGIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        />
                        </div>
                        Popular:
                        </div></nuxt-link>

                      
                      <ul role="list" class="list-4">
                        <li>
                            <nuxt-link class="text-block-8"  :to="{name: 'top-hoy' }" 
                          
                           :class="{'activeTop' : $route.name == 'top-hoy'}">
                           Hoy
                           </nuxt-link>
                          <div class="text-block-6">•</div>
                        </li>
                        <li>
                             <nuxt-link  class="text-block-9"  :to="{name: 'index' }" 
                      
                          :class="{'activeTop' : $route.name == 'index' ||
                           $route.name == 'index'}">Semana </nuxt-link>
                          <div class="text-block-6">•</div>
                        </li>
                        <li>
                           <nuxt-link  class="text-block-9"  :to="{name: 'top-mensual' }" 
                      
                          :class="{'activeTop' : $route.name == 'top-mensual'}">Mes </nuxt-link>
                          <div class="text-block-6">•</div>
                        </li>
                        <li>  <nuxt-link  class="text-block-9"  :to="{name: 'top-historico' }" 
                      
                          :class="{'activeTop' : $route.name == 'top-historico' }">Historico </nuxt-link></li>
                      </ul>
                      <nuxt-link 
                      
                         :to="{name: 'top-nuevos', params: { slug: $route.params.slug },  }">
                        <div class="div-block-460" :class="{'activePopular' : $route.name == 'top-nuevos'}">
                        <div class="html-embed-11 w-embed">
                          <img
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzEzLjkyMiw5OC42NzdjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjI0LTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI1LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjMsMjcuODc3LDIxLjM1MSw0OC4yNzcsMjMuODYzLDUwLjUxMQ0KCQkJYzIuODgxLDIuNTYyLDYuNDc3LDMuODI0LDEwLjA1OCwzLjgyNGM0LjE1NiwwLDguMjkzLTEuNywxMS4yNjctNS4wNDVjNS41MzYtNi4yMjUsNS4wMDgtMTUuNzMyLTEuMjE3LTIxLjI2OA0KCQkJYy0zLjk1OS0zLjYtMTQuMTU3LTE1LjU0My0xMy44MS0yNy40MkMzMDAuOTM2LDExMi43MDcsMzA1LjI1NSwxMDUuNjc3LDMxMy45MjIsOTguNjc3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjE4LjIxNyw5OC42NzdjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjIzLTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI1LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjIsMjcuODc3LDIxLjM1MSw0OC4yNzcsMjMuODYzLDUwLjUxMQ0KCQkJYzIuODgxLDIuNTYyLDYuNDc3LDMuODI0LDEwLjA1OCwzLjgyNGM0LjE1NiwwLDguMjkzLTEuNywxMS4yNjctNS4wNDVjNS41MzYtNi4yMjUsNS4wMDgtMTUuNzMyLTEuMjE3LTIxLjI2OA0KCQkJYy0zLjk1OS0zLjYtMTQuMTU3LTE1LjU0My0xMy44MS0yNy40MkMyMDUuMjMxLDExMi43MDcsMjA5LjU1LDEwNS42NzcsMjE4LjIxNyw5OC42Nzd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzQuMTU3LDI0Ni4xNDhoLTE3Ljg1MnYtMTEuMDYyYzAtOC4zMy02Ljc1My0xNS4wODQtMTUuMDg0LTE1LjA4NEgxNi4yNDdjLTguMzMsMC0xNS4wODQsNi43NTMtMTUuMDg0LDE1LjA4NHY3OS42MDgNCgkJCWMwLDcwLjM0MywzOC45MzUsMTMyLjE5Niw5Ny4zODksMTY3LjEzOEgxNi4yNTZjLTguMzMsMC0xNS4wODQsNi43NTMtMTUuMDg0LDE1LjA4NHM2Ljc1MiwxNS4wODQsMTUuMDg0LDE1LjA4NGgzODQuOTY2DQoJCQljOC4zMywwLDE1LjA4NC02Ljc1MywxNS4wODQtMTUuMDg0cy02Ljc1My0xNS4wODQtMTUuMDg0LTE1LjA4NGgtODIuMzA1YzMzLjI0LTE5Ljg3LDYwLjE2Ny00OC40MzksNzcuMjExLTgyLjMyOWgzOC4wMw0KCQkJYzQyLjI4LDAsNzYuNjc4LTM0LjM5OCw3Ni42NzgtNzYuNjc4QzUxMC44MzYsMjgwLjU0NSw0NzYuNDM3LDI0Ni4xNDgsNDM0LjE1NywyNDYuMTQ4eiBNMzg2LjEzOCwzMTQuNjk0DQoJCQljLTAuMDAxLDkyLjE2LTc5LjU4NCwxNjcuMTM4LTE3Ny40MDQsMTY3LjEzOGMtOTcuODIsMC0xNzcuNDAzLTc0Ljk3OC0xNzcuNDAzLTE2Ny4xMzhWMjUwLjE3aDM1NC44MDZWMzE0LjY5NHogTTQzNC4xNTcsMzY5LjMzNg0KCQkJaC0yNS45NTZjNS4yNzEtMTcuMzU5LDguMTA0LTM1LjY5Miw4LjEwNC01NC42NDJ2LTM4LjM4aDE3Ljg1MmMyNS42NDYsMCw0Ni41MTEsMjAuODY1LDQ2LjUxMSw0Ni41MTENCgkJCVM0NTkuODAzLDM2OS4zMzYsNDM0LjE1NywzNjkuMzM2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTIyLjUxMiw5OC42NzhjMTkuNjgyLTE1Ljg5OSwyNC4xMzgtMzIuODk1LDI0LjQwOS00NC4zNTRjMC42NjItMjcuODc3LTIxLjM1MS00OC4yNzctMjMuODY0LTUwLjUxDQoJCQljLTYuMjI0LTUuNTM2LTE1Ljc1OC00Ljk3OC0yMS4yOTUsMS4yNDdjLTUuNTM2LDYuMjI0LTQuOTc4LDE1Ljc1OCwxLjI0NywyMS4yOTVjMC4xNDEsMC4xMjYsMTQuMDg3LDEzLjE3NCwxMy43NTMsMjcuMjUzDQoJCQljLTAuMTc4LDcuNTAxLTQuNDk4LDE0LjU2Ny0xMy4yMDcsMjEuNjAyYy0xOS42ODIsMTUuODk5LTI0LjEzOCwzMi44OTUtMjQuNDA5LDQ0LjM1NGMtMC42NjEsMjcuODc2LDIxLjM1Miw0OC4yNzYsMjMuODY0LDUwLjUxDQoJCQljMi44NzQsMi41NTYsNi40NTMsMy44MTMsMTAuMDE5LDMuODEzYzQuMTU3LDAsOC4yOTYtMS43MDksMTEuMjc3LTUuMDZjNS41MzYtNi4yMjUsNC45NzgtMTUuNzU4LTEuMjQ3LTIxLjI5NQ0KCQkJYy0wLjE0MS0wLjEyNi0xNC4wODctMTMuMTc0LTEzLjc1My0yNy4yNTNDMTA5LjQ4MiwxMTIuNzc5LDExMy44MDIsMTA1LjcxMiwxMjIuNTEyLDk4LjY3OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                          />
                        </div>
                      Nuevos:
                      </div>
                      </nuxt-link>
                    
                    </div>
                  </div>
                
                   <Nuxt  keep-alive />
                
                </div>
            
</template>


<script>

export default {
    name: "seccionDiscusion", 
    props: ['columnaDiscusionG'],
    data() {
        return {

        }
    },
}
</script>
<style>

.list-4{
    width: 300px;
}

.div-block-460 {
   
    width: 130px;
}
a{
    text-decoration: none;
}
.text-block-13 {
    color: #4c4d53;
}
.activePopular{
    border-color: #3e64db;
    color: #3e64db;
}
.div-block-420{
    width: 33px;
    display: -webkit-inline-box;
}

.text-block-9 {
    display: inline-block;
    color: #1a1b1f;
    font-weight: inherit;
}

.activeTop{
    color: #3e64db!important; 
     font-weight: 700;
}

</style>