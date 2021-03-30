<template>
  <div
      class="post-page__actions"
   
    >
      <div class="post-page__actions-content">
        <div class="post-page__upvotes">
          <div
        
            class="post-liker post-liker--disabled post-liker--liked ember-view"
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
          <span> {{cantidadComentarios}} comentarios </span>
        </div>

        <!---->
        <div class="post-page__stat post-page__stat--views">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          
            class="ember-view post-page__stat-icon"
          >
            <path
              d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
            >
              <!---->
            </path>
          </svg>
          <span> 1 View </span>
        </div>

        <div class="post-page__admin-actions">
           <nuxt-link :to="{name:'editar-post-id', params: {id: idE}}"
         class="ember-view post-page__admin-action post-page__admin-action--edit"
        >  
            <div class="admin-action__button-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
               
                class="ember-view admin-action__button-icon"
              >
                <path
                  d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"
                >
                  <!---->
                </path>
              </svg>
              <p class="admin-action__button-label">Edit</p>
            </div>
          </nuxt-link>

          <button
            class="post-page__admin-action post-page__admin-action--delete"
            @click="borrarPost"
          >
            <div class="admin-action__button-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
             
                class="ember-view admin-action__button-icon"
              >
                <path
                  d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z"
                >
                  <!---->
                </path>
              </svg>
              <p class="admin-action__button-label">Delete</p>
            </div>
          </button>

          <button  @click="postFav"
            class="post-page__admin-action post-page__admin-action--feature"
          >
            <div class="admin-action__button-content">
              <svg
              v-if="fav == 0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
               
                class="ember-view admin-action__button-icon"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                >
                  <!---->
                </path>
              </svg>

              <svg 
              v-if="fav == 1"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1751" class="ember-view admin-action__button-icon"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-14v-4h14v4z">
              <!----></path>
              </svg>
              <p class="admin-action__button-label" v-if="fav == 0">Destacado</p>
              <p class="admin-action__button-label" v-if="fav == 1">Quitar Destacado</p>
            </div>
          </button>



         

          <!---->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'likePostEdit', 
  props:['p', 'votos', 'cantidadComentarios', 'favPost', 'idE'],
  components: {},
  data() {
    return {
            status: 0, 
            voto: this.votos, 
            fav: this.favPost
    }
  },
  methods: {

  async  postFav(){
  let formData = new FormData();
        
             formData.append('token', this.$store.state.tokenUser);
            formData.append('p', this.p);

         const response = await this.$axios.$post('/post/addfav/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
           if(response.status == 1){
 this.fav = response.fav
           }
    },

     async votoLike(){
       if(this.$store.state.tokenUser == ''){
          this.$router.push("/login")
          return false
       }
          
           let formData = new FormData();
        
             formData.append('token', this.$store.state.tokenUser);
            formData.append('p', this.p);

         const response = await this.$axios.$post('/post/votolike/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
       //     console.log(response)
          this.status = response.status
          this.voto = response.votos
      }, 
   async   getsiVote(){



 await this.$axios
        .$get("/votos/getsivote/?token="+this.$store.state.tokenUser+"&p="+this.p)
        .then((response) => {
              this.status = response.status
        })




      }, 

        async borrarPost() {
      let formData = new FormData();
      formData.append("id", this.idP);
      formData.append("token", this.$store.state.tokenUser);

      const response = await this.$axios.$post("/post/delete/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status == 1) {
        this.$router.push({ name: "index" });
      }
    },
  
  },
   async fetch() {
      
     },
  mounted() {
      this.getsiVote()
  },
};
</script>

