<template>
  <div class="user-settings">
    <div class="user-settings__settings-group">
      <h2 class="user-settings__title">Configurar Cuenta</h2>

      <div class="settings-group__content">
        


        <div class="settings-group__setting" v-if="cambiarUsuario == false">
          <label class="settings-group__label">Nombre de Usuario:</label>
          <p class="settings-group__description">@{{$store.state.username}}</p>
          <button class="settings-group__button" @click="cambiarForm(1)">Cambiar</button>
        </div>
        <form class="settings-group__form" v-if="cambiarUsuario">
            <div class="settings-group__fields">
                <fieldset class="settings-group__fieldset">
                  <label>Nombre de Usuario Actual:</label>
                  <input disabled="" v-model="username" type="text">
                </fieldset>
                <fieldset class="settings-group__fieldset">
                  <label>Nombre de usuario nuevo</label>
                  <input placeholder="Nombre de usuario nuevo" maxlength="20" v-model="usernameNuevo"
                    type="text">
                </fieldset>
              
                  <p class="settings-group__notice">
                  Puedes cambiar el nombre de usuario cada 30 días, 
                    se actualizara la página al guardar los cambios
                  </p>
                <div class="settings-group__buttons">
                  <button :disabled="disabledB" class="settings-group__submit-button" 
                  type="button" @click="cambiarNomnbreUsuario">
                    Guardar
                  </button>
                    <button class="settings-group__cancel-button" type="button" @click="cancelarForm">
                      Cancelar
                    </button>
                </div>
            </div>
          </form>







        <div class="settings-group__setting" v-if="cambiarEmail == false">
          <label class="settings-group__label">Email</label>
          <p class="settings-group__description">{{$store.state.emailU}}</p>
          <button class="settings-group__button"  @click="cambiarForm(2)">Cambiar</button>
        </div>


        <form class="settings-group__form" v-if="cambiarEmail">
            <div class="settings-group__fields">
              <fieldset class="settings-group__fieldset">
                <label>Email actual:</label>
                <input disabled=""  type="text" v-model="email">
              </fieldset>
              <fieldset class="settings-group__fieldset">
                <label>Email Nuevo</label>
                <input placeholder="Email nuevo" v-model="emailNuevo" maxlength="256" type="text">
              </fieldset>
              
                <p class="settings-group__notice">
                 se actualizara la página al guardar los cambios
                </p>
              <div class="settings-group__buttons">
                <button :disabled="disabledB"
                 class="settings-group__submit-button" @click.prevent="cambiarEMail" type="submit">
                  Guardar
                </button>
                  <button class="settings-group__cancel-button" type="button" @click="cancelarForm">
                    Cancelar
                  </button>
              </div>
            </div>
          </form>

        <div class="settings-group__setting" v-if="cambiarPass == false && $store.state.social == 0">
          <label class="settings-group__label">Contraseña</label>
          <p class="settings-group__description">••••••••••</p>
          <button class="settings-group__button"  @click="cambiarForm(3)">Cambiar</button>
        </div>

        <form class="settings-group__form" v-if="cambiarPass && $store.state.social == 0">
            <div class="settings-group__fields">
              <fieldset class="settings-group__fieldset">
                <label>Contraseña Actual</label>
                <input placeholder="Inserte Contraseña Actual" maxlength="128" v-model="passOld" type="password">
              </fieldset>
              <fieldset class="settings-group__fieldset">
                <label>Contraseña Nueva</label>
                <input placeholder="Inserte nueva contraseña" maxlength="128" v-model="passNew" type="password">
              </fieldset>
              
<!---->              <div class="settings-group__buttons">
                <button :disabled="disabledB" class="settings-group__submit-button" @click.prevent="cambiarContra" type="submit">
                  Guardar
                </button>
                  <button class="settings-group__cancel-button" type="button" @click="cancelarForm">
                    Cancelar
                  </button>
              </div>
            </div>
          </form>

        
      </div>
    </div>

  

    

  
    
  </div>
</template>

<script>
export default {
  name: "configuracion",
  layout: "perfilCanalizados",
  components: {},
   head(){
    return {
      title: 'Usuario - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - Usuario' }
    ],
       link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/u/'+this.$route.params.username+'/configuracion'
        }
      ]
     
    }
  },
  data() {
    return {
      cambiarUsuario: false, 
      cambiarEmail: false, 
      cambiarPass: false, 
      email: this.$store.state.emailU, 
      username: this.$store.state.username, 
      disabledB: false, 
      usernameNuevo: '', 
      emailNuevo: '', 
      passOld: '', 
      passNew: '', 
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    
    };
  },
  methods: {
    async cambiarContra(){

   
        if(this.passOld == '' || this.passNew == ''){
         alert("hay campos vacios")
          return false
        }

     


      this.disabledB = true
 let formData = new FormData();
      formData.append("token", this.$store.state.tokenUser);
       formData.append("tipo", 3);
        formData.append("passold", this.passOld);
        formData.append("passnew", this.passNew);
      const response = await this.$axios.$post("/perfil/cambiardatosuser/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    //  console.log(response)
      if(response.status > 0){
        this.disabledB = false
        if(response.status == 1 && response.actualizar == null){
              alert("contraseña actualizada con exito")
        }
         if(response.status == 3){
            alert("contraseñas no coinciden")
        }
        if(response.status == 2){
            alert("usuario no existe")
        }
      }
    },
     async cambiarEMail(){

         var validateEmail = this.reg.test(this.emailNuevo)
        if(validateEmail == false){
         alert("error email incorrecto")
          return false
        }

     


      this.disabledB = true
 let formData = new FormData();
      formData.append("token", this.$store.state.tokenUser);
       formData.append("tipo", 2);
        formData.append("email", this.emailNuevo);
      const response = await this.$axios.$post("/perfil/cambiardatosuser/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    //  console.log(response)
      if(response.status > 0){
        this.disabledB = false
        if(response.status == 1 && response.actualizar == 1){
            const cookie = this.$cookies.get('user_data_')
this.$cookies.remove("user_data_");
  this.$cookies.set('user_data_', {img: cookie.img, username: cookie.username,
                    date: cookie.date, edad: cookie.edad, nombres: cookie.nombres, ciudad: cookie.ciudad,
                     twitter: cookie.twitter, 
                    emailU: this.emailNuevo, email: cookie.email, bio: cookie.bio, p: cookie.p, fechaNac: cookie.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    location.href = '/u/'+this.$store.state.username+'/configuracion'
        }
         if(response.status == 2){
            alert("email ya existe")
        }
      }
    },
   async cambiarNomnbreUsuario(){
      this.disabledB = true
 let formData = new FormData();
      formData.append("token", this.$store.state.tokenUser);
       formData.append("tipo", 1);
        formData.append("username", this.usernameNuevo);
      const response = await this.$axios.$post("/perfil/cambiardatosuser/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     // console.log(response)
      if(response.status > 0){
        this.disabledB = false
        if(response.status == 1 && response.actualizar == 1){
            const cookie = this.$cookies.get('user_data_')
this.$cookies.remove("user_data_");
  this.$cookies.set('user_data_', {img: cookie.img, username: this.usernameNuevo,
                    date: cookie.date, edad: cookie.edad, nombres: cookie.nombres, ciudad: cookie.ciudad,
                     twitter: cookie.twitter, 
                    email: cookie.email, bio: cookie.bio, p: cookie.p, fechaNac: cookie.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    location.href = '/u/'+this.usernameNuevo+'/configuracion'
        }
         if(response.status == 2){
            alert("nombre de usuario ya existe")
        }
      }
    },
    cancelarForm(){
       this.cambiarUsuario = false
        this.cambiarEmail = false
        this.cambiarPass = false
    },
    cambiarForm(val){
      if(val == 1){
        this.cambiarUsuario = true
        this.cambiarEmail = false
        this.cambiarPass = false
      }
       if(val == 2){
        this.cambiarUsuario = false
        this.cambiarEmail = true
        this.cambiarPass = false
      }
       if(val == 3){
        this.cambiarUsuario = false
        this.cambiarEmail = false
        this.cambiarPass = true
      }
    }
  },
  async fetch() {},
  mounted() {
    

 
  },
};
</script>

