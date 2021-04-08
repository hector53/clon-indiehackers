<template>
  <div class="auth-wizard auth-wizard--choosing-username">
    <div class="auth-wizard__columns">
      <div class="auth-wizard__left-column">
        <div
          class="auth-wizard__signup-messaging auth-wizard__signup-messaging--signing-up"
        >
          <p class="auth-wizard__value-prop">
            Join a thriving community of entrepreneurs and developers.
          </p>
          <ul class="auth-wizard__benefits">
            <li class="auth-wizard__benefit">
              <div
                class="auth-wizard__benefit-icon auth-wizard__benefit-icon--business"
              ></div>
              <p class="auth-wizard__benefit-text">
                Connect with other indie hackers running online businesses.
              </p>
            </li>
            <li class="auth-wizard__benefit">
              <div
                class="auth-wizard__benefit-icon auth-wizard__benefit-icon--feedback"
              ></div>
              <p class="auth-wizard__benefit-text">
                Get feedback on your business ideas, landing pages, and more.
              </p>
            </li>
            <li class="auth-wizard__benefit">
              <div
                class="auth-wizard__benefit-icon auth-wizard__benefit-icon--email"
              ></div>
              <p class="auth-wizard__benefit-text">
                Get the best new stories from founders in your inbox.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="auth-wizard__right-column">
          <h2>Registrarse</h2>
        <div v-if="showFormFull"
          class="pw-sign-in pw-sign-in--signing-up ember-view auth-wizard__pw-sign-in auth-wizard__pw-sign-in--signing-up"
        >
          <form class="pw-sign-in__form">
            <div class="pw-sign-in__fieldset pw-sign-in__fieldset--username">
              <img class="pw-sign-in__avatar" src="https://www.indiehackers.com/images/avatar.png" />
              <span class="pw-sign-in__username">{{username}}</span>
            </div>

            <div class="pw-sign-in__fieldset pw-sign-in__fieldset--email">
              <label class="pw-sign-in__label pw-sign-in__label--email"
                >Email</label
              >
              <input
              :disabled="disableL"
                placeholder="Enter email address"
                maxlength="256"
                id="ember85"
                class="pw-sign-in__field pw-sign-in__field--email ember-text-field ember-view"
                type="email"
                v-model="email"
              />
            </div>

            <div class="pw-sign-in__fieldset pw-sign-in__fieldset--password">
              <label class="pw-sign-in__label pw-sign-in__label--password"
                >Password</label
              >
              <input
              :disabled="disableL"
                placeholder="Choose password"
                maxlength="128"
                id="ember86"
                class="pw-sign-in__field pw-sign-in__field--password ember-text-field ember-view"
                type="password"
                v-model="pass"
              />

              <p class="username-form__error" v-show="showErrorRegistroEmail">
            El email ya existe intente con otro 
          </p>
            </div>

            <!---->
            <div class="pw-sign-in__actions">
              <button class="pw-sign-in__button"
              :disabled="disableL"
               @click.prevent="SignUp">
                Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember87"
                  class="pw-sign-in__button-icon ember-view"
                >
                  <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z">
                    <!---->
                  </path>
                </svg>
              </button>

            
            </div>
          </form>
        </div>
        <form v-else
          id="ember44"
          class="auth-wizard__username-form username-form ember-view"
        >
          <label class="username-form__label"> Choose a username </label>

          <input
            placeholder="e.g. IndieHacker322"
            maxlength="20"
            class="username-form__field ember-text-field ember-view"
            type="text"
            v-model="username"
            @keydown.space.prevent
          />

          <p class="username-form__error" v-show="showErrorRegistro">
            El Usuario ya existe intente con otro
          </p>
          <!---->
          <button class="username-form__button"
          :disabled="disableB"
           @click.prevent="buscarUsuario">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember46"
              class="username-form__button-icon ember-view"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z">
                <!---->
              </path>
            </svg>
          </button>
        </form>

        

        <p class="auth-wizard__back-to-sign-in">
          Already have an account?
          <nuxt-link
              :to="{ name: 'login'  }" class="ember-view">Sign in.</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: "registroUser",
  name: "registro",
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
          }
        });
    },
  },
};
</script>

