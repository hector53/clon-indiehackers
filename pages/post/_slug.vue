<template>
<div>
 <loader v-show="loader"></loader>
  <div  v-show="loader==false" class="post-page__content">

   
    <like-post :cantidadComentarios="cantidadComentarios"
      :votos="votos"
      :p="idP"
      v-if="p != $store.state.p && tituloPost != ''"
    ></like-post>
    <like-post-edit :cantidadComentarios="cantidadComentarios" :favPost="favPost"
    :idE="idE"
      :votos="votos"
      :p="idP"
      v-if="p == $store.state.p && tituloPost != ''"
    ></like-post-edit>
    <header class="post-page__header">
      <h1 class="post-page__title" balance-text="" style="max-width: 611px">
        {{ tituloPost }}
      </h1>

      <nuxt-link
        :to="{
          name: 'perfil-username',
          params: { username: $store.state.username },
        }"
        class="ember-view post-page__byline"
      >
        by <span>{{ username }}</span>
      </nuxt-link>

      <div
        class="post-page__images post-page__images--1"
        v-if="imagenPost != ''"
      >
        <img
          :src="imagenPost"
          class="img-lazy img-lazy--loaded ember-view post-page__image"
        />
      </div>

      <!---->
    </header>

    <div class="post-page__main">
      <div
        class="post-page__body content ember-view"
        v-html="contenido"
        v-if="esLink == 0"
      ></div>

      



    <encuesta-post :arrayEncuesta="arrayEncuesta" :idP="idP" v-if="arrayEncuesta != 0"></encuesta-post>






      <div
        v-if="esLink == 1 && previewUrl == false"
        class="attached-link attached-link--small-image attached-link--no-image attached-link--no-title attached-link--no-description ember-view post-page__attached-link"
      >
        <a
          class="attached-link__link"
          :href="contenido"
          target="_blank"
          :title="'Link to ' + contenido"
          rel="nofollow"
        >
          <!---->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember1080"
            class="attached-link__icon ember-view"
          >
            <path
              d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
            >
              <!---->
            </path>
          </svg>

          <div class="attached-link__text">
            <!---->
            <!---->
            <p class="attached-link__domain">
              {{ contenido }}
            </p>
          </div>
        </a>
      </div>

      <div
        v-if="previewUrl"
        class="attached-link attached-link--small-image attached-link--has-image attached-link--has-title attached-link--has-description ember-view post-page__attached-link"
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
          <img class="attached-link__image" :src="item.imagen" />
          <div class="attached-link__text">
            <p class="attached-link__title">{{ item.titulo }}</p>
            <p class="attached-link__description">{{ item.descripcion }}</p>
            <p class="attached-link__domain">{{ item.dominio }}</p>
          </div>
        </a>
      </div>

      <div class="post-page__post-footer">
        <div class="post-page__inline-author">
          <div id="ember1037" class="user-link ember-view">
            <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: username },
              }"
              class="user-link__link ember-view"
            >
              <span class="user-link__name"> {{ username }} </span>
            </nuxt-link>
          </div>
        </div>

        <nuxt-link
          v-if="arrayGrupo.length > 0"
          :to="{
            name: 'grupo-slug',
            params: { slug: arrayGrupo[0].slug },
          }"
          class="ember-view post-page__group-link"
        >
          publico en
          <img
            :src="arrayGrupo[0].icono"
            class="img-lazy img-lazy--loaded ember-view post-page__group-icon"
          />
          <div class="post-page__group-name">{{ arrayGrupo[0].titulo }}</div>
        </nuxt-link>

        <!---->
        <nuxt-link
          v-if="arrayGrupo.length > 0"
          :to="{
            name: 'post-slug',
            params: { slug: $route.params.slug },
          }"
          class="loading ember-view post-page__date"
        >
          el <span>{{ fecha }}</span>
        </nuxt-link>
      </div>

     <comentarios-post :idP="idP" v-if="idP"
     @CantidadComentarios="CantidadComentarios"
      :p="p"></comentarios-post>
    </div>

   <trendingPosts :trending="trending" v-if="trending.length > 0"></trendingPosts>
  </div>
</div>
</template>

<script>
import ComentarioReply from '~/components/comentarios/comentarioReply.vue';
import ComentariosPost from '~/components/comentarios/comentariosPost.vue';
import LikePost from '~/components/likes/likePost.vue';
import likePostEdit from "~/components/likes/likePostEdit.vue";
import Loader from '~/components/loader/loader.vue';
import encuestaPost from "~/components/postSeccion/encuestaPost.vue";
import trendingPosts from '~/components/postSeccion/trendingPosts.vue';

export default {
  layout: "postSlug",
  name: "postSlug",
  head: {},
  components: { likePostEdit,  ComentarioReply, LikePost, ComentariosPost, encuestaPost, trendingPosts, Loader },
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
      previewUrl: false,
      arrayPreviewUrl: [],
      votos: 0,
      comentarios: [],
      favPost: 0,
      trending: [],
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
      loader: true
    };
  },
  watch: {},
  async fetch() {
    await this.$axios
      .$get("/getpost/usuario/?slug=" + this.$route.params.slug+"&token="+this.$store.state.tokenUser)
      .then((response) => {
             console.log(response)
        if (response.status == 0) {
          this.$router.push({ name: "index" });
        } else {
          this.tituloPost = response.post[0].titulo;
          this.username = response.post[0].username;
          this.contenido = response.post[0].contenido;
          this.fecha = response.post[0].fecha;
          this.p = response.post[0].p;
          this.idP = response.post[0].id;
          this.imagenPost = response.post[0].imagen;
          this.arrayGrupo = response.post[0].grupo;
          this.esLink = response.post[0].esLink;
          this.votos = response.post[0].votos;
          this.favPost = response.post[0].fav
          this.idE = response.post[0].idE
          this.arrayEncuesta = response.post[0].encuesta
          this.trending = response.trending
          if (response.post[0].esLink == 1) {
            if (response.previewUrl == 0) {
          //    console.log("es cero la pre")
              //enviar a q se busque el preview de la url
              this.previewUrlPost(response.post[0].contenido);
            } else {
              //mostrar los datos
              this.previewUrl = true;
              this.arrayPreviewUrl = response.previewUrl;
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
      });
  },
  methods: {

    CantidadComentarios(val){
        this.cantidadComentarios = val
    },
  
    async previewUrlPost(url) {
   //   console.log("enviar url: ", url)
      await this.$axios.$get("/link/preview/?url=" + url).then((response) => {
        //  console.log("preview", response)
      });
    },

   
    async getPost() {
      await this.$axios
        .$get("/getpost/usuario/?slug=" + this.$route.params.slug)
        .then((response) => {
          //     console.log(response)
          if (response.status == 0) {
            this.$router.push({ name: "index" });
          } else {
            this.tituloPost = response.post[0].titulo;
            this.username = response.post[0].username;
            this.contenido = response.post[0].contenido;
            this.fecha = response.post[0].fecha;
            this.p = response.post[0].p;
            this.idP = response.post[0].id;
            this.imagenPost = response.post[0].imagen;
            this.arrayGrupo = response.post[0].grupo;

            var f = new Date(this.fecha);
            this.fecha =
              f.getDate() +
              " de " +
              this.meses[f.getMonth()] +
              " de " +
              f.getFullYear();
          }
        });
    },
  
  },
  mounted() {
   console.log(this.arrayEncuesta)
  /*  var queryCommentID = this.$route.query.commentId
    if(queryCommentID){
          VueScrollTo.scrollTo('#'+queryCommentID)
    }*/
  },
};
</script>

