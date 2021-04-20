<template>



 <div >
   <div class="div-block-425" >
                <div class="div-block-432">
                  <h3>
                    
                     {{tituloPost}}
                      
                    
                  </h3>
                  <div class="div-block-426">
                    <div class="div-block-431">
                   <nuxt-link
                        v-if="arrayGrupo.length > 0"
                        class="link-17"
                        :to="{
                        name: 'g-slug',
                        params: { slug: arrayGrupo[0].slug },
                        }">{{arrayGrupo[0].titulo}}</nuxt-link>
                    </div>
                    <div class="div-block-427">
                      <div class="text-block-6">•</div>
                          <nuxt-link
                          :to="{
                          name: 'u-username',
                          params: { username: username },
                          }" >
                        <img
                        :src="avatar"
                        loading="lazy"
                        sizes="24px"
                      style="float:left"
                        alt=""
                        class="image-19"
                      />
                     
                          {{username}}
                     
                          </nuxt-link>
                    
                      
                    </div>
                    <div class="div-block-427">
                      <div class="text-block-6">•</div>
                      {{fecha}}
                    </div>
                  </div>
                </div>
                <div>
                          <div
                          style="text-align: center;"
                          v-if="imagenPost != ''"
                          >
                          <img
                          loading="lazy"
                          class="imgPost"
                          :src="imagenPost"
                     
                          />
                          </div>
                    
                   <div class="contenidoFull" v-html="contenido"  v-if="esLink == 0"></div>


                    <div
        v-if="esLink == 1 && previewUrlBo == false"
      
      >
        <a
          :href="contenido"
          target="_blank"
          :title="'Link to ' + contenido"
          rel="nofollow"
        >
          
          <div >
            <!---->
            <!---->
            <p class="link_post_titulo_preview">
              {{ contenido }}
            </p>
          </div>
        </a>
      </div>
        <div
        v-if="previewUrlBo"

      >
        <a
          class="attached-link__link"
          :href="contenido"
          v-for="(item, index) in arrayPreviewUrl"
          :key="index"
          target="_blank"
          :title="'Link to ' + contenido"
          rel="nofollow"
        >
          <img  :src="item.imagen" />
          <div >
            <p class="link_post_titulo_preview">{{ item.titulo }}</p>
            <p style="    text-align: justify;" >{{ item.descripcion }}</p>
            <p >{{ item.dominio }}</p>
          </div>
        </a>
      </div>
                   
        <encuesta-post :arrayEncuesta="arrayEncuesta" :idP="idP" v-if="arrayEncuesta != 0"></encuesta-post>
              
                </div>
                <div class="div-block-428" style="margin-top: 30px;">
                 
                  <div class="div-block-429">
                    <div class="html-embed-8 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiM2ZjZmNmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                      />
                    </div>
                    <div class="html-embed-8 w-embed">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1MiwwSDYwQzI2LjkxNiwwLDAsMjYuOTE2LDAsNjB2MzkyYzAsMzMuMDg0LDI2LjkxNiw2MCw2MCw2MGgzOTJjMzMuMDg0LDAsNjAtMjYuOTE2LDYwLTYwVjYwICAgIEM1MTIsMjYuOTE2LDQ4NS4wODQsMCw0NTIsMHogTTQ3Miw0NTJjMCwxMS4wMjgtOC45NzIsMjAtMjAsMjBIMzM4VjMwOWg2MS43OUw0MTAsMjQ3aC03MnYtNDNjMC0xNi45NzUsMTMuMDI1LTMwLDMwLTMwaDQxdi02MiAgICBoLTQxYy01MC45MjMsMC05MS45NzgsNDEuMjUtOTEuOTc4LDkyLjE3NFYyNDdIMjE2djYyaDYwLjAyMnYxNjNINjBjLTExLjAyOCwwLTIwLTguOTcyLTIwLTIwVjYwYzAtMTEuMDI4LDguOTcyLTIwLDIwLTIwaDM5MiAgICBjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBWNDUyeiIgZmlsbD0iIzZmNmY2ZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                      />
                    </div>
                  </div>
                
                </div>
              </div>
              <div class="div-block-425">
                <div class="div-block-432"><h3>
                  <a href="#" target="_blank" class="link-15">Comentarios ({{cantidadComentarios}})</a></h3></div>
                   <comentarios-post :idP="idP" v-if="idP"
     @CantidadComentarios="CantidadComentarios"
      :p="p"></comentarios-post>

      
              </div>
              <h2>Relacionados</h2>
              <trending-posts></trending-posts>
     
 </div>
</template>


<script>
import ComentariosPost from '../comentarios/comentariosPost.vue';
import encuestaPost from './encuestaPost.vue';
import TrendingPosts from './trendingPosts.vue';

export default {
  components: { encuestaPost, ComentariosPost, TrendingPosts },
  name: "postSlugCanalizados",
  props: ['status', 'arrayPost', 'arrayTrend', 'previewUrl'],
  data() {
    return {

        idP: 0,
      tituloPost: "",
      username: "",
      contenido: "",
      fecha: "",
      p: 0,
      imagenPost: "",
      arrayGrupo: [],
      esLink: 0,
      previewUrlBo: false,
      arrayPreviewUrl: [],
      votos: 0,
      comentarios: [],
      favPost: 0,
 
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      commentText: '', 
      cantidadComentarios: 0, 
      idE: '', 
      arrayEncuesta : [], 
      loader: true, 
      avatar: ''
     
    };
  },
  methods: {
     
    async previewUrlPost(url) {
   //   console.log("enviar url: ", url)
      await this.$axios.$get("/link/preview/?url=" + url).then((response) => {
        //  console.log("preview", response)
      });
    },
    CantidadComentarios(val){
     // console.log("cantidad comentarios", val)
        this.cantidadComentarios = val
          this.$emit("CantidadComentarios", val);
    },
      },
  mounted() {
    console.log(this.arrayPost)
    if(this.status == 0){
     this.$router.push('/')
    }else{
       this.tituloPost = this.arrayPost[0].titulo;
          this.username = this.arrayPost[0].username;
          this.avatar = this.arrayPost[0].avatar;
          this.contenido = this.arrayPost[0].contenido;
          this.fecha = this.arrayPost[0].fecha;
          this.p = this.arrayPost[0].p;
          this.idP = this.arrayPost[0].id;
          this.imagenPost = this.arrayPost[0].imagen;
          this.arrayGrupo = this.arrayPost[0].grupo;
          this.esLink = this.arrayPost[0].esLink;
          this.votos = this.arrayPost[0].votos;
          this.favPost = this.arrayPost[0].fav
          this.idE = this.arrayPost[0].idE
          this.arrayEncuesta = this.arrayPost[0].encuesta
          this.cantidadComentarios = this.arrayPost[0].cantCommentarios
         
          if (this.arrayPost[0].esLink == 1) {
            if (this.previewUrl == 0) {
          //    console.log("es cero la pre")
              //enviar a q se busque el preview de la url
              this.previewUrlPost(this.arrayPost[0].contenido);
            } else {
              //mostrar los datos
              this.previewUrlBo = true;
              this.arrayPreviewUrl = this.previewUrl;
            }
          }

          var f = new Date(this.fecha);
          this.fecha =
            f.getDate() +
            " de " +
            this.meses[f.getMonth()] +
            " de " +
            f.getFullYear();

          this.loader = false
    }
  },
};
</script>

<style >

.post-page__poll-viewer {
    margin-top: 31px;
}
.post-page__poll-viewer {
    border: 1px solid #1a1b1f;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
}

.poll-viewer__header {
    border-bottom: 2px dotted rgba(31, 54, 77, .6);
    color: #3e64db;
    font-size: 19px;
    padding: 16px 0;
}
 .poll-viewer__footer, .post-page .poll-viewer__header {
    align-items: center;
    display: flex;
    margin: 0 16px;
}
.poll-viewer__header svg {
    height: 18px;
    width: 18px;
    fill: #1a1b1f;
    margin-right: 13px;
}
.poll-viewer__vote-view {
    padding: 18px 0;
}
.poll-viewer__votes {
    display: flex;
    flex-direction: column;
        margin-top: 10px;
}
ol, ul {
    list-style: none;
    padding-left: 0;
}
 .poll-viewer__vote--selected {
    color: #3e64db;
    fill: #4799eb;
}
 .poll-viewer__vote {
    margin: 0 auto;
    position: relative;
    width: calc(100% - 32px);
        z-index: 1;
    color: #313131;
}
 .poll-viewer__vote  span {
  margin-left: 20px;
}
 .poll-viewer__vote {
    align-items: flex-start;
    display: flex;
    font-size: 19px;
    padding: 10px 12px;
}
.poll-viewer__vote-bg {
    background-color: #1f364d;
    border-radius: 4px;
    height: 100%;
    left: 0;
    min-width: 8px;
    position: absolute;
    top: 0;
    z-index: -1;
}
 .poll-viewer__vote-bg {
    background-color: #4799eb;
}

 .poll-viewer__option:not(:first-child),  .poll-viewer__vote:not(:first-child) {
    margin-top: 6px;
}
.poll-viewer__footer {
    border-top: 2px dotted rgba(31, 54, 77, .6);
    color: #63809c;
    font-size: 17px;
    justify-content: space-between;
    padding: 12px 0;
}
.poll-viewer__footer,  .poll-viewer__header {
    align-items: center;
    display: flex;
    margin: 0 16px;
}
.poll-viewer__option {
    align-self: flex-start;
    color: #1a1b1f;
    cursor: pointer;
    fill: #1a1b1f;
    margin-right: 16px;
    padding-left: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.poll-viewer__option, .poll-viewer__vote {
    align-items: flex-start;
    display: flex;
    font-size: 19px;
    padding: 10px 12px;
}
.poll-viewer__vote-button{
  display: inline-block;
    padding: 9px 15px;
    background-color: #3898ec;
    color: #fff;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 10px
}
 .poll-viewer__vote-button.disabled, .poll-viewer__vote-button[disabled] {
    cursor: default;
    filter: grayscale(.7);
    opacity: .7;
}

.poll-viewer__see-results {
   display: inline-block;
    padding: 9px 15px;
    background-color: #3898ec;
    color: #fff;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-left: 10px
}

</style>