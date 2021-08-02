<template>
<div>
    <section id="subscribe-form" class="subscribe-form">
      <div class="centered-container w-container">
        <h2>Mantente informado</h2>
        <p>
          Somos la comunidad <strong>hispana de Startups</strong> más grande del
          mundo. Vas a encontrar todas las personas que forman parte de
          Latinoamérica en Canalizados.
        </p>
        <div class="w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            class="subscribe-form-flex"
          >
            <div class="subscribe-form-input-wrapper">
              <input
                type="email"
                v-model="email"
                class="subscribe-form-input w-input"
                maxlength="256"
                placeholder="Ingresa tu Email"
                id="Subscriber-Email"
                required=""
              />
            </div>
            <input
              type="submit"
              value="Registrarme"
              data-wait="Por favor esperá..."
              class="submit-button w-button"
              @click.prevent="suscribeNewsletter"
              :disabled="disabledForm"
            />
          </form>
        
          <div class="w-form-fail" v-if="error">
            <div>{{errorText}}</div>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer" class="footer">
      <div class="w-container">
        <div>Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
         <div class="menuPoliticas">
                        <nuxt-link to="/quienes-somos">Quienes Somos </nuxt-link> <a>·</a>
                         <nuxt-link to="/politica-de-privacidad" >Privacidad </nuxt-link> <a>·</a>
                         <nuxt-link to="/contacto" >Contacto </nuxt-link>
                      </div>
      </div>
    </footer>

    
</div>
</template>


<script>

export default {
    name: "footerCanalizados", 
    data() {
        return {
            email: '', 
            disabledForm: false, 
            error: false, 
            errorText: '',
            done: false,
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        }
    },
    methods: {
     async suscribeNewsletter(){
       this.disabledForm = true
        if(this.email == ''){
          this.error = true
          this.errorText = 'correo vacio'
                this.disabledForm = false
          return 
        }

 var validateEmail = this.reg.test(this.email)
        if(validateEmail == false){
          this.error = true
          this.errorText = "email incorrecto"
            this.disabledForm = false
          return
        }
        let formData = new FormData();
            formData.append('email', this.email);
 const response = await this.$axios.$post('/suscribe/newsletter/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

    //      console.log(response)
          if(response.status == 1){
          this.error = true
          this.errorText = 'email ya existe'
            this.disabledForm = false
          return 
          }else{
  
              this.$cookies.set(
          "suscribe_newsletter_cookie",
          this.email,
          {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
          }
          );
            alert("te has suscrito correctamente en el newsletter, sigue adelante y registrate en Canalizados.com para mas...")
           this.$router.push({name: 'registro'});
        
         
          }

      }
    },
}
</script>
<style >
.w-form-fail{
  display: block;
}
</style>
