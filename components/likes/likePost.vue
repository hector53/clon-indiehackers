<template>
  <div class="post-page__actions">
    <div class="post-page__actions-content">
      <div class="post-page__upvotes">
        <div
      
          class="post-liker ember-view"
          v-if="status != 1"
          @click="votoLike"
        >
          <div class="post-liker__icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            
              class="ember-view post-liker__icon"
            >
              <path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
                <!---->
              </path>
            </svg>
          </div>

          <div class="post-liker__text">
            <div class="post-liker__count">{{ voto }}</div>

            <div class="post-liker__likes-label">Votos</div>
          </div>
        </div>

        <div
          v-if="status == 1"
         @click="votoLike"
          class="post-liker post-liker--liked ember-view"
        >
          <div class="post-liker__icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              
              class="ember-view post-liker__icon"
            >
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              >
                <!---->
              </path>
            </svg>
          </div>

          <div class="post-liker__text">
            <div class="post-liker__count">{{voto}}</div>

            <div class="post-liker__likes-label">Votos</div>
          </div>
        </div>
      </div>

      <div class="post-page__stat post-page__stat--comments">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          
          class="ember-view post-page__stat-icon"
        >
          <path
            d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z"
          >
            <!---->
          </path>
        </svg>
        <span> {{ cantidadComentarios }} comentarios </span>
      </div>

      <!---->
      <!---->
      <div class="post-page__admin-actions">
        <!---->
        <!---->
        <!---->
        <button class="post-page__admin-action post-page__admin-action--report">
          <div class="admin-action__button-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
             
              class="ember-view admin-action__button-icon"
            >
              <path
                d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
              >
                <!---->
              </path>
            </svg>
            <p class="admin-action__button-label">Reportar</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "likePost",
  props: ["p", "votos", "cantidadComentarios"],
  components: {},
  data() {
    return {
      status: 0,
      voto: this.votos,
    };
  },
  methods: {
    async votoLike() {
      if (this.$store.state.tokenUser == "") {
        this.$router.push("/login");
        return false;
      }

      let formData = new FormData();

      formData.append("token", this.$store.state.tokenUser);
      formData.append("p", this.p);

      const response = await this.$axios.$post("/post/votolike/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //     console.log(response)
      this.status = response.status;
      this.voto = response.votos;
    },
    async getsiVote() {
      await this.$axios
        .$get(
          "/votos/getsivote/?token=" +
            this.$store.state.tokenUser +
            "&p=" +
            this.p
        )
        .then((response) => {
     //     console.log(response)
          this.status = response.status;
        });
    },
  },
  async fetch() {},
  mounted() {
    this.getsiVote();
  },
};
</script>

