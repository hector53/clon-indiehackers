<template>
  <div class="auth-wizard auth-wizard--signing-in-via-password">
    <div class="auth-wizard__columns">
      <div class="auth-wizard__left-column">
        <div id="ember130" class="auth-wizard__pw-sign-in auth-wizard__pw-sign-in--signing-in pw-sign-in pw-sign-in--signing-in ember-view"><form class="pw-sign-in__form">
<!---->
  <div class="pw-sign-in__fieldset pw-sign-in__fieldset--email">
    <label class="pw-sign-in__label pw-sign-in__label--email">Email</label>
    <input placeholder="Enter your email address" v-model="email" maxlength="256" id="ember131" class="pw-sign-in__field pw-sign-in__field--email ember-text-field ember-view" type="email">
  </div>

  <div class="pw-sign-in__fieldset pw-sign-in__fieldset--password">
    <label class="pw-sign-in__label pw-sign-in__label--password">Password</label>
    <input placeholder="Enter your password" v-model="pass" maxlength="128" id="ember132" class="pw-sign-in__field pw-sign-in__field--password ember-text-field ember-view" type="password">
  </div>
<p class="pw-sign-in__error" v-show="errorLogin">{{errorText}}</p>
<!---->
  <div class="pw-sign-in__actions">
    <button class="pw-sign-in__button" @click.prevent="Login" :disabled="loginDisable">
      Login 
      <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24" id="ember133" class="pw-sign-in__button-icon ember-view"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z">
<!----></path>
</svg>
    </button>
  </div>
</form>
</div>

        <p class="auth-wizard__back-to-sign-up">
          Don't have an account yet?
          <a href="/sign-up" id="ember138" class="ember-view">Join the community!</a>
        </p>
      </div>

      <div class="auth-wizard__right-column">
        <div class="auth-wizard__signup-messaging auth-wizard__signup-messaging--signing-in">
          <p class="auth-wizard__value-prop">
              Sign in to Indie Hackers
          </p>
          <div class="auth-wizard__repair">
              <div class="auth-wizard__repair-blurb">
                <span class="auth-wizard__repair-emoji">📨</span>
                <p>
                  Did you join before February 2017? You need to
                  <a class="auth-wizard__repair-link" href="javascript:void(0)">
                    connect
                  </a>
                  an email address to your username.
                </p>
              </div>
              <div class="auth-wizard__repair-blurb">
                <span class="auth-wizard__repair-emoji">⚡️</span>
                <p>
                  Trouble logging in?
                  <a class="auth-wizard__repair-link" href="javascript:void(0)">
                    Reset
                  </a>
                  your password.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: "registroUser",
  name: "login",
  data() {
    return {
      errorLogin: false,
      errorText: "",
      email: "", 
      pass: "", 
      loginDisable: false
    };
  },
  watch: {
    
    email: function (value) {
      if (value.length == 0) {
        this.errorLogin = false;
      }
    }
  },
  methods: {
  async  Login(){
       if (!this.validateUser()) {
        return false;
      }
  this.loginDisable = true
      console.log("/login/usuario/?email="+this.email+"&pass="+this.pass)
      await this.$axios
        .$get("/login/usuario/?email="+this.email+"&pass="+this.pass)
        .then((response) => {
            if(response.status == 0){
                    //pass incorrecta
                   this.errorLogin = true
                  this.errorText = "Contraseña incorrecta "
            }

             if(response.status == 1){
                    //existe el email 
                     this.errorLogin = true
                  this.errorText = "El email no se encuentra registrado "
            }

             if(response.status == 2){
                    //existe el email 
                    this.$cookies.set('access_token_', response.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                   this.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    location.href = "/";
            }
        });

    },
    validateUser() {
      if (this.email == "") {
           this.errorLogin = true
           this.errorText = "email vacio"
            return false;
      }

      if (this.pass == "") {
          this.errorLogin = true
           this.errorText = "password vacio"
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
  },
};
</script>

