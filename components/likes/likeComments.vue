<template>
  <div>
    <div 
    @click.prevent="votoLike"
   
     class="comment-voter ember-view"
      :class="{'comment-voter--upvoted' : status == 1}"
     >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        
        class="comment-voter__icon comment-voter__icon--upvote ember-view"
      >
        <path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
          <!---->
        </path>
      </svg>

      <div class="comment-voter__score">{{ voto }}</div>

      <!---->
    </div>

    
  </div>
</template>

<script>
export default {
  loading: false,
  name: "likeComments",
  props: ["p", "votos"],
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
      formData.append("votoc", 1);

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
          this.status = response.status;
        });
    },
  },
  async fetch() {},
  mounted() {
    if(this.$store.state.cookieLogin){
          this.getsiVote();
    }
  
  },
};
</script>

