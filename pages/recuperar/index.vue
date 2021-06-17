<template>
  <div class="section-5">
    <div class="columns-7 w-row">
      <div class="column-11 w-col w-col-6">
        <div class="div-block-464">
          <h1 class="heading-5">Bienvenido a Canalizados</h1>
          <div class="text-block-36">
            Aquí puedes recuperar tu contraseña
          </div>
        </div>
      </div>
      <div class="column-12 w-col w-col-6">
        <div class="div-block-465">
                 



<!-- olvido contraseña Form -->

 <div class="w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              class="subscribe-form-flex"
              style=" display: inline-block; width: 100%;"
            >
            <p>Recuperar contraseña </p>
              <div class="subscribe-form-input-wrapper">
                <input
                style="    width: 100%;"
                  type="pass"
                  maxlength="256"
                  placeholder="Nueva contraseña"
                  required="required"
                  class="subscribe-form-input w-input"
                  v-model="pass"
                />
              </div>

             
                <input
                style="  margin-top: 10px;"
                type="submit"
                value="Guardar"
                data-wait="Por favor esperá..."
                class="submit-button w-button"
                 @click.prevent="recuperar" :disabled="loginDisable"
              />

              
            
            </form>
          
          
            <div class="w-form-failMio"  v-show="errorLogin">
              <div>{{errorText}}</div>
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
  name: "recuperar",
  layout: "iniciarSesion",
  head(){
    return {
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/recuperar'
        }
      ]
     
    }
  },
  data() {
    return {
              errorLogin: false,
      errorText: "Error",
      pass: "", 
      loginDisable: false, 
    };
  },
  async fetch() {
         await this.$axios
        .$get("/login/consultadatos/?email="+this.$route.query.email+"&key="+this.$route.query.key)
        .then((response) => {
            if(response.status == 0){
            //        console.log("error")
                    this.$router.push("/")
            }else{
             //   console.log("todo bien")
            }
        })
  },
   watch: {

  }, 
  methods: {
        async recuperar(){
            this.loginDisable = true
        if (this.pass == "") {
           this.errorLogin = true
           this.errorText = "pass vacia"
            this.loginDisable = false
            return false;
      }
                await this.$axios
        .$get("/login/updatepass/?email="+this.$route.query.email+"&key="+this.$route.query.key+
        "&pass="+this.pass)
        .then((response) => {
        //    console.log(response)
            if(response.status == 0){
                    alert("error en sus datos")
                    this.loginDisable = false
            }else{
                 alert("Contraseña actualizada con exito, puede iniciar sesion")
                 this.loginDisable = false
                 this.$router.push("/iniciar-sesion")
            }
        })
        }
  },
  mounted() {
      
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
