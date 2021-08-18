<template>
   <div class="div-block-423" :class="{'likeEstilo2': estilo == 2}">
        <div class="html-embed-4 w-embed" @click.prevent="votoLike">
          <img width="18" height="18" v-if="status == 0 || status == 2 "
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwMDQ1Nzc2MzY3MTU5MDc4MjksNDkyLjAwNDAxMzA2MTUyMzQ0KSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgyLjY3OCwyMjYuODA0TDE2My43Myw3Ljg2QzE1OC42NjYsMi43OTIsMTUxLjkwNiwwLDE0NC42OTgsMHMtMTMuOTY4LDIuNzkyLTE5LjAzMiw3Ljg2bC0xNi4xMjQsMTYuMTIgICAgYy0xMC40OTIsMTAuNTA0LTEwLjQ5MiwyNy41NzYsMCwzOC4wNjRMMjkzLjM5OCwyNDUuOWwtMTg0LjA2LDE4NC4wNmMtNS4wNjQsNS4wNjgtNy44NiwxMS44MjQtNy44NiwxOS4wMjggICAgYzAsNy4yMTIsMi43OTYsMTMuOTY4LDcuODYsMTkuMDRsMTYuMTI0LDE2LjExNmM1LjA2OCw1LjA2OCwxMS44MjQsNy44NiwxOS4wMzIsNy44NnMxMy45NjgtMi43OTIsMTkuMDMyLTcuODZMMzgyLjY3OCwyNjUgICAgYzUuMDc2LTUuMDg0LDcuODY0LTExLjg3Miw3Ljg0OC0xOS4wODhDMzkwLjU0MiwyMzguNjY4LDM4Ny43NTQsMjMxLjg4NCwzODIuNjc4LDIyNi44MDR6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
          />

          <img width="18"  height="18" v-if="status == 1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwMDQ1Nzc2MzY3MTU5MDc4MjksNDkyLjAwNDAxMzA2MTUyMzQ0KSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgyLjY3OCwyMjYuODA0TDE2My43Myw3Ljg2QzE1OC42NjYsMi43OTIsMTUxLjkwNiwwLDE0NC42OTgsMHMtMTMuOTY4LDIuNzkyLTE5LjAzMiw3Ljg2bC0xNi4xMjQsMTYuMTIgICAgYy0xMC40OTIsMTAuNTA0LTEwLjQ5MiwyNy41NzYsMCwzOC4wNjRMMjkzLjM5OCwyNDUuOWwtMTg0LjA2LDE4NC4wNmMtNS4wNjQsNS4wNjgtNy44NiwxMS44MjQtNy44NiwxOS4wMjggICAgYzAsNy4yMTIsMi43OTYsMTMuOTY4LDcuODYsMTkuMDRsMTYuMTI0LDE2LjExNmM1LjA2OCw1LjA2OCwxMS44MjQsNy44NiwxOS4wMzIsNy44NnMxMy45NjgtMi43OTIsMTkuMDMyLTcuODZMMzgyLjY3OCwyNjUgICAgYzUuMDc2LTUuMDg0LDcuODY0LTExLjg3Miw3Ljg0OC0xOS4wODhDMzkwLjU0MiwyMzguNjY4LDM4Ny43NTQsMjMxLjg4NCwzODIuNjc4LDIyNi44MDR6IiBmaWxsPSIjM2U2NGRiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==">
        </div>
        <div class="text-block-12" :class="{'vote-active' : status == 1, 'leftSpace': estilo == 2 }">{{voto}}</div>
      </div>
</template>

<script>
export default {
     loading: false,
  name: 'like', 
  props:['p', 'votos', 'estilo'],
  components: {},
  data() {
    return {
            status: 0, 
            voto: this.votos
    }
  },
  methods: {

     async votoLike(){
       if(this.$store.state.tokenUser == ''){
          this.$router.push("/iniciar-sesion")
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
           //console.log(response)
          this.status = response.status
          this.voto = response.votos
      }, 
   async   getsiVote(){



 await this.$axios
        .$get("/votos/getsivote/?token="+this.$store.state.tokenUser+"&p="+this.p)
        .then((response) => {
              this.status = response.status
        })




      }
  
  },
   async fetch() {
      
     },
  mounted() {
    if(this.$store.state.cookieLogin){
        this.getsiVote()
    }
      
  },
};
</script>

