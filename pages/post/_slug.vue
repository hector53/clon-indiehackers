<template>
  <div class="post-page__content">
    <like-post :cantidadComentarios="cantidadComentarios"
      :votos="votos"
      :p="idP"
      v-if="p != $store.state.p && tituloPost != ''"
    ></like-post>
    <like-post-edit :cantidadComentarios="cantidadComentarios" :favPost="favPost"
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

    <div id="ember1225" class="post-page__recommendations ember-view">
      <div class="post-page__recommendations-heading">
        Trending on Indie Hackers
      </div>

      <div class="post-page__recommendations-list">
        <a
          href="/post/d057ae3f90"
          id="ember1227"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://stanleycyang.com/how-to-drive-traffic-to-your-website.png"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              How I Went From 0 to 142,263 Users in 12 Months
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1228"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_482wajy4AMU1IlpuapByBn18LJ03.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/482wajy4AMU1IlpuapByBn18LJ03
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/482wajy4AMU1IlpuapByBn18LJ03
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              29 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1229"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
        <a
          href="/post/1d8435da12"
          id="ember1231"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/1d8435da12/DB3sUMTRBHcr8iC3Ob9XjUU3LH62/c88c68cb-6411-05f6-ce5e-051c6ca243df.png"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              From 10-hour Smoke Test to 4,500+ Emails: How I validated a SaaS
              project.
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1232"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_DB3sUMTRBHcr8iC3Ob9XjUU3LH62.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/DB3sUMTRBHcr8iC3Ob9XjUU3LH62
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/DB3sUMTRBHcr8iC3Ob9XjUU3LH62
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              12 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1233"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
        <a
          href="/post/e4db12b966"
          id="ember1235"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--OrE4lP1p--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hkvir806a2jsyqtsqsoh.png"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              The Part Time Creator Manifesto
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1236"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_knB6tgB1DbNrfy58ruuat19mhO93.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/knB6tgB1DbNrfy58ruuat19mhO93
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/knB6tgB1DbNrfy58ruuat19mhO93
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              12 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1237"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
        <a
          href="/post/0685355244"
          id="ember1239"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/0685355244/bVimQk6FKHZdnQc30WtuVaMydpf1/36b68e3f-387c-7e4a-58f6-83a5e9f527ed.png"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              I tried out 6 different email subject lines and collected some
              great data.
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1240"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_bVimQk6FKHZdnQc30WtuVaMydpf1.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/bVimQk6FKHZdnQc30WtuVaMydpf1
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/bVimQk6FKHZdnQc30WtuVaMydpf1
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              9 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1241"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
        <a
          href="/post/5735411869"
          id="ember1243"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://storage.googleapis.com/indie-hackers.appspot.com/post-images/5735411869/CwjWXg3pv8N3WXmjsPZmoOhkA773/06e0b834-f33e-2ceb-8049-0273b3b530b3.jpg"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              How We Got 1,000 Users by Engaging Developers
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1244"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_CwjWXg3pv8N3WXmjsPZmoOhkA773.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/CwjWXg3pv8N3WXmjsPZmoOhkA773
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/CwjWXg3pv8N3WXmjsPZmoOhkA773
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              8 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1245"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
        <a
          href="/post/7126a6ab41"
          id="ember1247"
          class="ember-view post-page__recommendation"
        >
          <img
            class="post-page__recommendation-image"
            src="https://moores.samaltman.com/images/social.png"
          />
          <span class="post-page__recommendation-text">
            <span class="post-page__recommendation-title">
              Moore's Law for Everything
            </span>
            <span class="post-page__recommendation-footer">
              <picture
                id="ember1248"
                class="user-avatar ember-view post-page__recommendation-avatar"
              >
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/52x52_PWairgiOpneHvkGJri7RVbtORKI2.webp
                  "
                  type="image/webp"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/PWairgiOpneHvkGJri7RVbtORKI2
                  "
                  type="image/png"
                />
                <source
                  srcset="
                    https://storage.googleapis.com/indie-hackers.appspot.com/avatars/PWairgiOpneHvkGJri7RVbtORKI2
                  "
                  type="image/jpeg"
                />

                <img src="/nonexistent-image.png" />
              </picture>
              6 comments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember1249"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ComentarioReply from '~/components/comentarios/comentarioReply.vue';
import ComentariosPost from '~/components/comentarios/comentariosPost.vue';
import LikePost from '~/components/likes/likePost.vue';
import likePostEdit from "~/components/likes/likePostEdit.vue";

export default {
  layout: "postSlug",
  name: "postSlug",
  head: {},
  components: { likePostEdit,  ComentarioReply, LikePost, ComentariosPost },
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
      cantidadComentarios: 0
    };
  },
  watch: {},
  async fetch() {
    await this.$axios
      .$get("/getpost/usuario/?slug=" + this.$route.params.slug)
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
  //  console.log(this)
  /*  var queryCommentID = this.$route.query.commentId
    if(queryCommentID){
          VueScrollTo.scrollTo('#'+queryCommentID)
    }*/
  },
};
</script>

