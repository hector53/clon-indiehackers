<template>
  <div class="section-5">
    <div class="columns-7 w-row">
      <div class="column-11 w-col w-col-6">
        <div class="div-block-464">
          <h1 class="heading-5">Bienvenido a Canalizados</h1>
          <div class="text-block-36">
            Somos una comunidad de +1000 emprendedores y Startups de Latam
          </div>
        </div>
      </div>
      <div class="column-12 w-col w-col-6">
        <div class="div-block-465">
            <h2>Registrarse</h2>
          <ul role="list" class="list-14" v-if="showFormFull">
            <li class="list-item-16">
              <div class="html-embed-14 w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                />
              </div>
              <div>Continuar con Twitter</div>
            </li>
            <li class="list-item-16 linkedin">
              <div class="html-embed-14 w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                />
              </div>
              <div>Continuar con LinkedIn</div>
            </li>
            <li class="list-item-16 google">
              <div class="html-embed-14 w-embed">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTEyMCAyNTZjMC0yNS4zNjcgNi45ODktNDkuMTMgMTkuMTMxLTY5LjQ3N3YtODYuMzA4aC04Ni4zMDhjLTM0LjI1NSA0NC40ODgtNTIuODIzIDk4LjcwNy01Mi44MjMgMTU1Ljc4NXMxOC41NjggMTExLjI5NyA1Mi44MjMgMTU1Ljc4NWg4Ni4zMDh2LTg2LjMwOGMtMTIuMTQyLTIwLjM0Ny0xOS4xMzEtNDQuMTEtMTkuMTMxLTY5LjQ3N3oiIGZpbGw9IiNmYmJkMDAiLz48cGF0aCBkPSJtMjU2IDM5Mi02MCA2MCA2MCA2MGM1Ny4wNzkgMCAxMTEuMjk3LTE4LjU2OCAxNTUuNzg1LTUyLjgyM3YtODYuMjE2aC04Ni4yMTZjLTIwLjUyNSAxMi4xODYtNDQuMzg4IDE5LjAzOS02OS41NjkgMTkuMDM5eiIgZmlsbD0iIzBmOWQ1OCIvPjxwYXRoIGQ9Im0xMzkuMTMxIDMyNS40NzctODYuMzA4IDg2LjMwOGM2Ljc4MiA4LjgwOCAxNC4xNjcgMTcuMjQzIDIyLjE1OCAyNS4yMzUgNDguMzUyIDQ4LjM1MSAxMTIuNjM5IDc0Ljk4IDE4MS4wMTkgNzQuOTh2LTEyMGMtNDkuNjI0IDAtOTMuMTE3LTI2LjcyLTExNi44NjktNjYuNTIzeiIgZmlsbD0iIzMxYWE1MiIvPjxwYXRoIGQ9Im01MTIgMjU2YzAtMTUuNTc1LTEuNDEtMzEuMTc5LTQuMTkyLTQ2LjM3N2wtMi4yNTEtMTIuMjk5aC0yNDkuNTU3djEyMGgxMjEuNDUyYy0xMS43OTQgMjMuNDYxLTI5LjkyOCA0Mi42MDItNTEuODg0IDU1LjYzOGw4Ni4yMTYgODYuMjE2YzguODA4LTYuNzgyIDE3LjI0My0xNC4xNjcgMjUuMjM1LTIyLjE1OCA0OC4zNTItNDguMzUzIDc0Ljk4MS0xMTIuNjQgNzQuOTgxLTE4MS4wMnoiIGZpbGw9IiMzYzc5ZTYiLz48cGF0aCBkPSJtMzUyLjE2NyAxNTkuODMzIDEwLjYwNiAxMC42MDYgODQuODUzLTg0Ljg1Mi0xMC42MDYtMTAuNjA2Yy00OC4zNTItNDguMzUyLTExMi42MzktNzQuOTgxLTE4MS4wMi03NC45ODFsLTYwIDYwIDYwIDYwYzM2LjMyNiAwIDcwLjQ3OSAxNC4xNDYgOTYuMTY3IDM5LjgzM3oiIGZpbGw9IiNjZjJkNDgiLz48cGF0aCBkPSJtMjU2IDEyMHYtMTIwYy02OC4zOCAwLTEzMi42NjcgMjYuNjI5LTE4MS4wMiA3NC45OC03Ljk5MSA3Ljk5MS0xNS4zNzYgMTYuNDI2LTIyLjE1OCAyNS4yMzVsODYuMzA4IDg2LjMwOGMyMy43NTMtMzkuODAzIDY3LjI0Ni02Ni41MjMgMTE2Ljg3LTY2LjUyM3oiIGZpbGw9IiNlYjQxMzIiLz48L2c+PC9zdmc+"
                />
              </div>
              <div>Continuar con Google</div>
            </li>
          </ul>
          
          <div class="w-form"  v-if="showFormFull">
              <span class="pw-sign-in__username">Nombre de Usuario: {{username}}</span>
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
                  :disabled="disableL"
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
                  :disabled="disableL"
                />
              </div>


 
                <input
                style="  margin-top: 10px;"
                type="submit"
                value="Registrarse"
                class="submit-button w-button"
                 :disabled="disableL"
               @click.prevent="SignUp"
              />
            
            </form>
          
            <div class="w-form-failMio"  v-show="showErrorRegistroEmail">
              <div>El email ya existe intente con otro </div>
            </div>
          </div>



<div class="w-form"  v-if="showFormFull == false">
            <form
             
              class="subscribe-form-flex"
              style=" display: inline-block; width: 100%;"
            >
              <div class="subscribe-form-input-wrapper">
                <input
                style="    width: 100%;"
                  placeholder="Nombre de usuario"
                  id="Subscriber-Email"
                  required="required"
                  class="subscribe-form-input w-input"
                 type="text"
            v-model="username"
            @keydown.space.prevent
                />
              </div>

                <input
                style="  margin-top: 10px;"
                type="submit"
                value="Siguiente"
                class="submit-button w-button"
                :disabled="disableB"
           @click.prevent="buscarUsuario"
              />
            
            </form>
           
            <div class="w-form-failMio"  v-show="showErrorRegistro">
              <div> El Usuario ya existe intente con otro</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
    middleware: 'authenticated',
  name: "iniciar-sesion",
  layout: "iniciarSesion",
  data() {
    return {
          disableL: false,
      disableB: false,
      username: "",
      showErrorRegistro: false,
      showErrorRegistroEmail: false,
      showFormFull: false,
      email: "", 
      pass: ""
    };
  },
  async fetch() {},
   watch: {
    username: function (value) {
      if (value.length == 0) {
        this.showErrorRegistro = false;
      }
    },
    email: function (value) {
      if (value.length == 0) {
        this.showErrorRegistroEmail = false;
      }
    }
  },
  methods: {
  async  SignUp(){
       if (!this.validateUser2()) {
        return false;
      }
    this.disableL = true
      await this.$axios
        .$get("/registrar/usuario/?username=" + this.username+"&email="+this.email+"&pass="+this.pass)
        .then((response) => {
          if (response.status == 1) {
             this.showErrorRegistroEmail = false
                this.$cookies.set('access_token_', response.token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
                })
                 this.$cookies.set('user_data_', {img: response.avatar,
                  username: response.username, date: response.fecha, p: response.p}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
             location.href = "/";
          }else{
              this.showErrorRegistroEmail = true
          }
        });

    },
    validateUser() {
      if (this.username == "") {
        return false;
      }
      return true;
    },

     validateUser2() {
      if (this.email == "") {
          
            return false;
      }

      if (this.pass == "") {
          
        return false;
      }
      return true;
    },
    async buscarUsuario() {
      this.disableB = true
      if (!this.validateUser()) {
        return false;
      }
      await this.$axios
        .$get("/buscar/usuario/?username=" + this.username)
        .then((response) => {
          if (response.status == 0) {
            this.showFormFull = true
          } else {
            this.showErrorRegistro = true;
             this.disableB = false
          }
        });
    },
  },
  mounted() {
    var cookieSuscribe = this.$cookies.get("suscribe_newsletter_cookie");
    if (cookieSuscribe) {
        this.email = cookieSuscribe

   //   this.$cookies.remove("suscribe_newsletter_cookie");

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
