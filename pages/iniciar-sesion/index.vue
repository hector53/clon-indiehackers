<template>
<div>
   <loader v-show="loader"></loader>

   <b-container v-show="loader==false">
  <b-row>
    <b-col sm="6" class="p-0">
  <div class="div-block-464">
          <h1 class="heading-5">Bienvenido a Canalizados</h1>
          <div class="text-block-36">
            Somos una comunidad de +1000 emprendedores y Startups de Latam
          </div>
        </div>
    </b-col>
    <b-col sm="6" class="p-0">

<div class="div-block-465">
          <ul role="list" class="list-14">
            <a class="twitterLogin" @click="twitterLogin">
                <li class="list-item-16">
              <div class="html-embed-14 w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                />
              </div>
              <div>Continuar con Twitter</div>
            </li>
            </a>
          
            
              <GoogleLogin  class="googleBtn" :params="params" :onSuccess="onSuccessGoogle"
               :onFailure="onFailureGoogle">
                <li class="list-item-16 google" @click="abrirGoogle">
              <div class="html-embed-14 w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTEyMCAyNTZjMC0yNS4zNjcgNi45ODktNDkuMTMgMTkuMTMxLTY5LjQ3N3YtODYuMzA4aC04Ni4zMDhjLTM0LjI1NSA0NC40ODgtNTIuODIzIDk4LjcwNy01Mi44MjMgMTU1Ljc4NXMxOC41NjggMTExLjI5NyA1Mi44MjMgMTU1Ljc4NWg4Ni4zMDh2LTg2LjMwOGMtMTIuMTQyLTIwLjM0Ny0xOS4xMzEtNDQuMTEtMTkuMTMxLTY5LjQ3N3oiIGZpbGw9IiNmYmJkMDAiLz48cGF0aCBkPSJtMjU2IDM5Mi02MCA2MCA2MCA2MGM1Ny4wNzkgMCAxMTEuMjk3LTE4LjU2OCAxNTUuNzg1LTUyLjgyM3YtODYuMjE2aC04Ni4yMTZjLTIwLjUyNSAxMi4xODYtNDQuMzg4IDE5LjAzOS02OS41NjkgMTkuMDM5eiIgZmlsbD0iIzBmOWQ1OCIvPjxwYXRoIGQ9Im0xMzkuMTMxIDMyNS40NzctODYuMzA4IDg2LjMwOGM2Ljc4MiA4LjgwOCAxNC4xNjcgMTcuMjQzIDIyLjE1OCAyNS4yMzUgNDguMzUyIDQ4LjM1MSAxMTIuNjM5IDc0Ljk4IDE4MS4wMTkgNzQuOTh2LTEyMGMtNDkuNjI0IDAtOTMuMTE3LTI2LjcyLTExNi44NjktNjYuNTIzeiIgZmlsbD0iIzMxYWE1MiIvPjxwYXRoIGQ9Im01MTIgMjU2YzAtMTUuNTc1LTEuNDEtMzEuMTc5LTQuMTkyLTQ2LjM3N2wtMi4yNTEtMTIuMjk5aC0yNDkuNTU3djEyMGgxMjEuNDUyYy0xMS43OTQgMjMuNDYxLTI5LjkyOCA0Mi42MDItNTEuODg0IDU1LjYzOGw4Ni4yMTYgODYuMjE2YzguODA4LTYuNzgyIDE3LjI0My0xNC4xNjcgMjUuMjM1LTIyLjE1OCA0OC4zNTItNDguMzUzIDc0Ljk4MS0xMTIuNjQgNzQuOTgxLTE4MS4wMnoiIGZpbGw9IiMzYzc5ZTYiLz48cGF0aCBkPSJtMzUyLjE2NyAxNTkuODMzIDEwLjYwNiAxMC42MDYgODQuODUzLTg0Ljg1Mi0xMC42MDYtMTAuNjA2Yy00OC4zNTItNDguMzUyLTExMi42MzktNzQuOTgxLTE4MS4wMi03NC45ODFsLTYwIDYwIDYwIDYwYzM2LjMyNiAwIDcwLjQ3OSAxNC4xNDYgOTYuMTY3IDM5LjgzM3oiIGZpbGw9IiNjZjJkNDgiLz48cGF0aCBkPSJtMjU2IDEyMHYtMTIwYy02OC4zOCAwLTEzMi42NjcgMjYuNjI5LTE4MS4wMiA3NC45OC03Ljk5MSA3Ljk5MS0xNS4zNzYgMTYuNDI2LTIyLjE1OCAyNS4yMzVsODYuMzA4IDg2LjMwOGMyMy43NTMtMzkuODAzIDY3LjI0Ni02Ni41MjMgMTE2Ljg3LTY2LjUyM3oiIGZpbGw9IiNlYjQxMzIiLz48L2c+PC9zdmc+"
                />
              </div>
              <div>Continuar con Google</div>
           
             </li>
              </GoogleLogin>
          
          </ul>
          <div class="w-form" v-if="formPass==false">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              class="subscribe-form-flex"
              style=" display: inline-block; width: 100%;"
            >
              <div class="subscribe-form-input-wrapper">
                <input
                style="    width: 100%;"
                  type="email"
                  maxlength="256"
                  name="Subscriber-Email"
                  data-name="Subscriber Email"
                  placeholder="Ingresa tu Email"
                  id="Subscriber-Email"
                  required="required"
                  class="subscribe-form-input w-input"
                  v-model="email"
                />
              </div>

              <div class="subscribe-form-input-wrapper">
                <input
                style="    width: 100%;"
                  type="password"
                  v-model="pass"
                  maxlength="256"
                  name="pass"
                  placeholder="Introducir contraseña"
                  required="required"
                  class="subscribe-form-input w-input"
                />
              </div>


 
                <input
                style="  margin-top: 10px;"
                type="submit"
                value="Iniciar Sesión"
                data-wait="Por favor esperá..."
                class="submit-button w-button"
                 @click.prevent="Login" :disabled="loginDisable"
              />
            
            </form>
            <h4 style="    margin-top: 30px;">
              <a href="#" @click="formPass = true" v-if="formPass == false">¿Olvido su Contraseña?</a> </h4>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-failMio"  v-show="errorLogin">
              <div>{{errorText}}</div>
            </div>
          </div>



<!-- olvido contraseña Form -->

 <div class="w-form" v-if="formPass">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              class="subscribe-form-flex"
              style=" display: inline-block; width: 100%;"
            >
            <p>Introduzca el email del usuario </p>
              <div class="subscribe-form-input-wrapper">
                <input
                style="    width: 100%;"
                  type="email"
                  maxlength="256"
                  name="Subscriber-Email"
                  data-name="Subscriber Email"
                  placeholder="Ingresa tu Email"
                  id="Subscriber-Email"
                  required="required"
                  class="subscribe-form-input w-input"
                  v-model="email"
                />
              </div>

             
                <input
                style="  margin-top: 10px;"
                type="submit"
                value="Recuperar"
                data-wait="Por favor esperá..."
                class="submit-button w-button"
                 @click.prevent="recuperar" :disabled="loginDisable"
              />

               <input
                style="  margin-top: 10px;"
                type="submit"
                value="Cancelar"
                data-wait="Por favor esperá..."
                class="submit-button w-button"
                 @click.prevent="formPass = false" 
              />
            
            </form>
          
          
            <div class="w-form-failMio"  v-show="errorLogin">
              <div>{{errorText}}</div>
            </div>
          </div>








        </div>



    </b-col>
  </b-row>

   </b-container>
 
  </div>
</template>


<script>
   import GoogleLogin from 'vue-google-login';
import Loader from '~/components/loader/loader.vue';



export default {
  components: {GoogleLogin,Loader },
    middleware: 'authenticated',
  name: "iniciar-sesion",
  layout: "iniciarSesion",
  async asyncData({ route, app, redirect }) {
      var token = route.query.t
      var s = route.query.s
      if(token && s){
       // console.log("si existen los dos parametros")
        //consulto si el usuario recien creado existe en la db 
        if(s==2){
          var response = await app.$axios.$get(
            'https://acceso.canalizados.com/api/twitter/login/?token='+token
            );
          //  console.log(response)
             if (response.status == 1) {

               
                    //existe el email 
                    app.$cookies.set('access_token_', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                   app.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio, emailU: response.emailU, p: response.p, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    
             return redirect('/')
          }else{
            return { errorTwitter: true};
          }
        }else{
          //no hago nada
        }
            
      }
     return { contexto: route.query};
   
  },
  data() {
    return {
      loader: false,
       params: {
                    client_id: "294139711639-mq20hcf52r33svsveki2p80a7v6h7hal.apps.googleusercontent.com"
                },
          errorLogin: false,
      errorText: "Error",
      email: "", 
      pass: "", 
      loginDisable: false, 
      formPass: false
    };
  },
  head(){
    return {
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/iniciar-sesion'
        }
      ]
     
    }
  },
  async fetch() {},
   watch: {
    
    email: function (value) {
      if (value.length == 0) {
        this.errorLogin = false;
      }
    }
  }, 
  methods: {
     twitterLogin(){
      location.href = 'http://acceso.canalizados.com/twitter/?l=2'
    },
  async  Login(){
       if (!this.validateUser()) {
        return false;
      }
  this.loginDisable = true
      await this.$axios
        .$get("/login/usuario/?email="+this.email+"&pass="+this.pass)
        .then((response) => {
        //  console.log(response)
            if(response.status == 0){
                    //pass incorrecta
                   this.errorLogin = true
                  this.errorText = "Contraseña incorrecta "
                  this.loginDisable = false
            }

             if(response.status == 1){
                    //existe el email 
                     this.errorLogin = true
                  this.errorText = "El email no se encuentra registrado "
                   this.loginDisable = false
            }

             if(response.status == 2){
                    //existe el email 
                    this.$cookies.set('access_token_', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                   this.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio,  emailU: response.emailU, p: response.p, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    location.href = "/";
            }
        });

    },
    async loginGoogle(email){
   //   console.log("estoy aqui")
        await this.$axios
        .$get("/login/usuariogoogle/?email="+email)
        .then((response) => {
        //  console.log(response)
            if(response.status == 0){
                    //pass incorrecta
                   this.errorLogin = true
                  this.errorText = "Contraseña incorrecta "
                  this.loginDisable = false
            }

             if(response.status == 1){
                    //existe el email 
                     this.errorLogin = true
                  this.errorText = "El email no se encuentra registrado "
                   this.loginDisable = false
                   alert("El email no se encuentra registrado, por favor debes registrarte primero")
                    location.href = "/registro";
            }

             if(response.status == 2){
                    //existe el email 
                    this.$cookies.set('access_token_', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                   this.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio, emailU: response.emailU, p: response.p, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    
                    location.href = "/";
            }

              if(response.status == 3){
                    //existe el email 
                     this.errorLogin = true
                  this.errorText = "El email no tiene una cuenta de Google Login "
                   this.loginDisable = false
                   this.loader  = false
            }
        });
    },
    abrirGoogle(){
        this.loader = true
    },
onSuccessGoogle(data){
  
  //console.log(data.Rs.At)
var perfil = data.getBasicProfile()
this.loginGoogle(perfil.pu)
},

onFailureGoogle(data){
  this.loader = false
//console.log(data)
},
    validateUser() {
      if (this.email == "") {
           this.errorLogin = true
           this.errorText = "email vacio"
            this.loginDisable = false
            return false;
      }

      if (this.pass == "") {
          this.errorLogin = true
           this.errorText = "password vacio"
            this.loginDisable = false
        return false;
      }
      return true;
    },
    async buscarUsuario() {
      if (!this.validateUser()) {
        return false;
      }
      await this.$axios
        .$get("/buscarUser?username=" + this.username)
        .then((response) => {
          if (response.status == 0) {
            this.showFormFull = true
          } else {
            this.showErrorRegistro = true;
          }
        });
    },

    async recuperar(){
this.loginDisable = true
        if (this.email == "") {
           this.errorLogin = true
           this.errorText = "email vacio"
            this.loginDisable = false
            return false;
      }

      
       await this.$axios
        .$get("/login/recuperarpass/?email="+this.email)
        .then((response) => {
            if(response.status == 0){
                alert("algo anda mal con su email")
                this.loginDisable = false
            }else{
                alert("se ha enviado un link para reestablecer su contraseña a su correo")
                this.loginDisable = true
                this.formPass = false

            }
        })
    }
  },
  mounted() {
    if(this.errorTwitter){
      alert("error con usuario de twitter")
    }
    var errorT = this.$route.query.e
    if(errorT && errorT=='t'){
      alert("El email no se encuentra registrado, por favor debes registrarte primero")
                    location.href = "/registro";
    }
  },
};
</script>
<style >
.subscribe-form-input-wrapper {
    text-align: left;
    margin-top: 10px;
}

.w-form-failMio{
    margin-top: 10px;
    padding: 10px;
    background-color: #ffdede;
}

button[disabled], html input[disabled] {
    cursor: default;
    background: #9494b7;
}
</style>
