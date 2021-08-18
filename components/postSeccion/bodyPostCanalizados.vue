<template>
  <div class="container w-container">
    <div class="div-block-455">
      <div class="div-block-457">
        <sidebar-left :idE="idE" :p="p" :idP="idP" :votos="votos" 
         :favPost="favPost" :cantidadComentarios="cantidadComentarios" ></sidebar-left>
         
      </div>
      <div class="div-block-456">
        <div class="section-4">
          <div class="columns-3 w-row">
            <div class="column-4 w-col w-col-8">
                    <post-slug-canalizados :arrayPost="arrayPost" 
                    :arrayTrend="arrayTrend" @CantidadComentarios="CantidadComentarios"
                    :status='status'></post-slug-canalizados>

            </div>
            <div class="column-5 w-col w-col-4">
              <div class="div-block-448">
                <div class="div-block-444">
                  <div class="div-block-447">
                    <img
                      src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg"
                      loading="lazy"
                      sizes="40px"
                      srcset="
                        https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142-p-500.jpeg 500w,
                        https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg       800w
                      "
                      alt=""
                      class="image-18"
                    />
                    <div class="text-block-37">Nacho Martinez Escoda</div>
                  </div>
                  <div class="div-block-461">
                    <div class="text-block-31">Trabajo</div>
                    <div class="div-block-462">
                      <div class="text-block-32">Bounty Capital</div>
                    </div>
                  </div>
                  <div class="div-block-461">
                    <div class="text-block-31">Producto</div>
                    <div class="div-block-462">
                      <img
                        src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2f290c813289423fcb41_icon-384x384-4.png"
                        loading="lazy"
                        alt=""
                        class="image-17"
                      />
                      <div class="text-block-32">Bounty Capital</div>
                    </div>
                  </div>
                  <div>
                    <ul role="list" class="list-13">
                      <li class="list-item-14">
                        <div class="text-block-33">Seguir a Nacho</div>
                      </li>
                      <li class="list-item-15">
                        <div class="text-block-34">...</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <mas-populares></mas-populares>
                <div class="div-block-444">
                  <div class="div-block-447">
                    <div class="html-embed-7 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ5NywwSDE1QzYuNzE2LDAsMCw2LjcxNiwwLDE1djM4NS42MDFjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg4MS40VjQ5N2MwLDYuMDY3LDMuNjU1LDExLjUzNyw5LjI2LDEzLjg1OCAgICBjMS44NTYsMC43NjksMy44MDUsMS4xNDIsNS43MzcsMS4xNDJjMy45MDQsMCw3Ljc0MS0xLjUyNCwxMC42MS00LjM5NGw5Mi4wMDYtOTIuMDA2SDQ5N2M4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjE1ICAgIEM1MTIsNi43MTYsNTA1LjI4NCwwLDQ5NywweiBNNDgyLDM4NS42MDFIMjA3LjhjLTMuOTc4LDAtNy43OTQsMS41ODEtMTAuNjA2LDQuMzkzbC03MC43OTMsNzAuNzkyVjQwMC42YzAtOC4yODQtNi43MTYtMTUtMTUtMTUgICAgSDMwVjMwaDQ1MlYzODUuNjAxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzYwLjQzNCwxNDQuNjAxaC0zNS45MTVsMi42NjMtMzEuOTU0YzAuNjg4LTguMjU1LTUuNDQ3LTE1LjUwNi0xMy43MDItMTYuMTk0Yy04LjI3MS0wLjY4OS0xNS41MDcsNS40NDgtMTYuMTk0LDEzLjcwMyAgICBsLTIuODcsMzQuNDQ1SDIyOC4xMmwyLjY2My0zMS45NTRjMC42ODgtOC4yNTUtNS40NDctMTUuNTA2LTEzLjcwMy0xNi4xOTRjLTguMjYzLTAuNjg3LTE1LjUwNiw1LjQ0Ny0xNi4xOTQsMTMuNzAzICAgIGwtMi44NzEsMzQuNDQ1aC0zMC4zODFjLTguMjg0LDAtMTUsNi43MTYtMTUsMTVzNi43MTYsMTUsMTUsMTVoMjcuODgxbC01LjUzMyw2Ni40aC0zOC40MTVjLTguMjg0LDAtMTUsNi43MTYtMTUsMTUgICAgYzAsOC4yODMsNi43MTYsMTQuOTk5LDE1LDE0Ljk5OWgzNS45MTVsLTIuNjYzLDMxLjk1NWMtMC42ODgsOC4yNTUsNS40NDcsMTUuNTA2LDEzLjcwMywxNi4xOTQgICAgYzAuNDI0LDAuMDM1LDAuODQ1LDAuMDUzLDEuMjYyLDAuMDUzYzcuNzIsMCwxNC4yNzktNS45MjMsMTQuOTMyLTEzLjc1NWwyLjg3LTM0LjQ0N2g2Ni4yOTZsLTIuNjYzLDMxLjk1NSAgICBjLTAuNjg4LDguMjU1LDUuNDQ3LDE1LjUwNiwxMy43MDIsMTYuMTk0YzAuNDI0LDAuMDM1LDAuODQ2LDAuMDUzLDEuMjYzLDAuMDUzYzcuNzIxLDAsMTQuMjc5LTUuOTIzLDE0LjkzMi0xMy43NTVsMi44Ny0zNC40NDYgICAgaDMwLjM4MmM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMjcuODgybDUuNTMzLTY2LjRoMzguNDE1YzguMjg0LDAsMTUtNi43MTYsMTUtMTUgICAgUzM2OC43MTgsMTQ0LjYwMSwzNjAuNDM0LDE0NC42MDF6IE0yODYuMzgyLDI0MWgtNjYuMjk2bDUuNTMzLTY2LjRoNjYuMjk2TDI4Ni4zODIsMjQxeiIgZmlsbD0iIzNlNjRkYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                      />
                    </div>
                    <div class="text-block-17">Tus temas seguidos</div>
                  </div>
                  <div>
                    <ul role="list" class="list-10">
                      <li class="list-item-11"><div>SEO</div></li>
                      <li class="list-item-11"><div>Marketing</div></li>
                      <li class="list-item-11"><div>No-Code</div></li>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SidebarLeft from '../homeCanalizados/sidebarLeft.vue';
import MasPopulares from './masPopulares.vue';
import PostSlugCanalizados from './postSlugCanalizados.vue';


export default {
  components: {
    SidebarLeft,
    PostSlugCanalizados,
    MasPopulares

  },
  name: "bodyPostCanalizados",

   data() {
    return {
        arrayPost: [], 
        arrayTrend: [], 
        idP: 0,
        votos: 0,
        cantidadComentarios: 0, 
        p:0, 
        favPost: 0, 
        status: 2, 
        idE: ''
    };
  },
  watch: {},
  async fetch() {
  },
  methods: {
CantidadComentarios(val){
        this.cantidadComentarios = val
    },
      async getpost(){
          
                
    await this.$axios
      .$get("/getpost/usuario/?slug=" + this.$route.params.slug+"&token="+this.$store.state.tokenUser)
      .then((response) => {
        //    console.log(response)
        if (response.status == 0) {
            this.status = 0
       //     console.log("estoy aqui redireccionar   ")
            
        } else {
            this.status = 1
                this.arrayPost = response.post
                this.arrayTrend = response.trending
                 this.p = response.post[0].p;
          this.idP = response.post[0].id;
           this.votos = response.post[0].votos;
             this.favPost = response.post[0].fav
             this.cantidadComentarios = response.post[0].cantCommentarios
              this.idE = response.post[0].idE
             //console.log("idE", this.idE)
        }
      });

      },

    CantidadComentarios(val){
        this.cantidadComentarios = val
    },
  
    async previewUrlPost(url) {
   //   console.log("enviar url: ", url)
      await this.$axios.$get("/link/preview/?url=" + url).then((response) => {
        //  console.log("preview", response)
      });
    },

   

  
  },
  beforeMount() {
      this.getpost()
  },
  mounted() {
  // console.log(this.status)
  },

};
</script>
