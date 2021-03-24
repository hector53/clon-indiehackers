<template>
  <div>

        <a
            title="Like"
            href="/sign-up"
            id="ember21802348"
            class="ember-view feed-item__likes"
            :class="{'feed-item__likes--active' : status == 1}"
            @click.prevent="votoLike"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802349"
              class="feed-item__likes-icon ember-view"
            >
              <path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
                <!---->
              </path>
            </svg>
            <span class="feed-item__likes-count"> {{voto}} </span>
          </a>


  </div>
  
</template>

<script>
export default {
     loading: false,
  name: 'like', 
  props:['p', 'votos'],
  components: {},
  data() {
    return {
            status: 0, 
            voto: this.votos
    }
  },
  methods: {

     async votoLike(){
          
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
             let formData = new FormData();
        
             formData.append('token', this.$store.state.tokenUser);
            formData.append('p', this.p);

         const response = await this.$axios.$post('/post/getsivote/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
         //   console.log(response)
            this.status = response.status
      }
  
  },
   async fetch() {
      
     },
  mounted() {
      this.getsiVote()
  },
};
</script>

