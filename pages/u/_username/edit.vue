<template>
  <div class="user__content">
    <header class="user-header">
      <div class="user-header__content">
       <label  for="file"  role="button" > 
        <div
          class="user-header__avatar-wrapper user-header__avatar-wrapper--editable"
        >
        
          <picture 
            
            class="user-avatar ember-view user-header__avatar"
          >
            <source :srcset="imagenPerfil" type="image/png" />
            <!---->  
            <img   :src="imagenPerfil"  />
          </picture>
        
     
          <!---->
          <span class="user-header__edit-avatar-msg">Photo</span>

          <!---->
        </div>
        </label>
              
    <input style="display: none" ref="fileInput" id="file" type="file" @change="previewFiles" enctype="multipart/form-data">
     

        <div class="user-header__text-content">
          <h1 class="user-header__name">
            <span class="user-header__username"> Editar Perfil </span>

            <!---->
            <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: $store.state.username },
              }"
              class="active ember-view user-header__header-button user-header__header-button--stop-editing"
            >
              <div class="header-button__content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember3036"
                  class="ember-view header-button__icon"
                >
                  <path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                  >
                    <!---->
                  </path>
                </svg>
              </div>
            </nuxt-link>
          </h1>

          <div class="user-header__metadata">
            <span class="user-header__metadata-item">
              Click en tu Avatar para agregar una imagen nueva
            </span>
          </div>
        </div>
      </div>
    </header>

    <div class="user__body">
      <!---->
      <div class="edit-form">
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Nombre Completo</label>
          <input
            :disabled="disableAll"
            maxlength="60"
            v-model="nombres"
            class="edit-form__field ember-text-field ember-view"
            type="text" 
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Fecha de Nacimiento</label>

          <div class="edit-form__fields-wrapper">
            <div
              id="ember3038"
              class="edit-form__field edit-form__field--birthday-month ember-select ember-view"
            >
              <div class="es-control" @click="opcionMes = true"
               v-click-outside="opcionMesOut" >
                <div class="es-input">
                  <!---->
                  <input autocomplete="off" placeholder="Month" :disabled="disableAll" type="text" v-model="textMes"  />
                </div>

                <!---->
                <span
                  class="es-arrow-zone"
                  data-ember-action=""
                  data-ember-action-3040="3040"
                >
                  <span class="es-arrow"></span>
                </span>
              </div>

              <div class="es-options" v-show="opcionMes">
                <div  class="ember-view" v-for="(item, index) in $store.state.Meses" :key="index">
                  <div  class="es-option ember-view hoverDate" @click="insertMes(item, index)" >{{item}}</div>
                </div>
                
              </div>

              <!---->
            </div>
            <div
              id="ember3041"
              class="edit-form__field edit-form__field--birthday-day ember-select ember-view"
            >
              <div
                class="es-control"
                 @click="opcionDia = true"
               v-click-outside="opcionDiaOut"
              >
                <div class="es-input">
                  <!---->
                  <input autocomplete="off" :disabled="disableAll" placeholder="Day" type="text" v-model="textDia" />
                </div>

                <!---->
                <span
                  class="es-arrow-zone"
                  data-ember-action=""
                  data-ember-action-3043="3043"
                >
                  <span class="es-arrow"></span>
                </span>
              </div>

              <div class="es-options" v-show="opcionDia">
                <div  class="ember-view" v-for="index in 31" :key="index">
                  <div  class="es-option ember-view hoverDate" @click="insertDia(index)" >{{index}}</div>
                </div>
                
              </div>

              <!---->
            </div>
            <div
              id="ember3044"
              class="edit-form__field edit-form__field--birthday-year ember-select ember-view"
            >
              <div
                class="es-control"
                 @click="opcionAno = true"
               v-click-outside="opcionAnoOut"
              >
                <div class="es-input">
                  <!---->
                  <input autocomplete="off" :disabled="disableAll" placeholder="Year" type="text" v-model="textAno" />
                </div>

                <!---->
                <span
                  class="es-arrow-zone"
                  data-ember-action=""
                  data-ember-action-3046="3046"
                >
                  <span class="es-arrow"></span>
                </span>
              </div>
              <div class="es-options" v-show="opcionAno">
                <div  class="ember-view" v-for="index in 70" :key="index">
                  <div  class="es-option ember-view hoverDate" @click="insertAno(2009-index)" >{{2009-index}}</div>
                </div>
                
              </div>
              <!---->
            </div>
          </div>
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Ciudad</label>
          
          <div id="ember3047" class="places-input-wrapper ember-view">
            <span
              class="algolia-places-nostyle"
              style="position: relative; display: inline-block; direction: ltr"
              ><input
               :disabled="disableAll"
                class="edit-form__field ember-text-field ember-view ap-nostyle-input"
                type="text"
                autocomplete="off"
                v-model="ciudad"
                style="position: relative; vertical-align: top" />
              <pre
                aria-hidden="true"
                style="
                  position: absolute;
                  visibility: hidden;
                  white-space: pre;
                  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica,
                    sans-serif;
                  font-size: 18px;
                  font-style: normal;
                  font-variant: normal;
                  font-weight: 400;
                  word-spacing: 0px;
                  letter-spacing: normal;
                  text-indent: 0px;
                  text-rendering: auto;
                  text-transform: none;
                "
              ></pre>
              <span
                class="ap-nostyle-dropdown-menu"
                role="listbox"
                id="algolia-places-nostyle-listbox-4"
                style="
                  position: absolute;
                  top: 100%;
                  z-index: 100;
                  display: none;
                  left: 0px;
                  right: auto;
                "
                ><div class="ap-nostyle-dataset-places"></div></span
              ><button
                type="button"
                aria-label="clear"
                class="ap-nostyle-input-icon ap-nostyle-icon-clear"
                style="display: none"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.566 1.698L0 1.13 1.132 0l.565.566L6 4.868 10.302.566 10.868 0 12 1.132l-.566.565L7.132 6l4.302 4.3.566.568L10.868 12l-.565-.566L6 7.132l-4.3 4.302L1.13 12 0 10.868l.566-.565L4.868 6 .566 1.698z"
                  ></path>
                </svg></button
              ><button
                type="button"
                aria-label="focus"
                class="ap-nostyle-input-icon ap-nostyle-icon-pin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 14 20"
                >
                  <path
                    d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C5.62 9.5 4.5 8.38 4.5 7S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z"
                  ></path>
                </svg></button
            ></span>
          </div>
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Twitter User</label>
          <input
          :disabled="disableAll"
            maxlength="20"
            v-model="twitterUser"
            class="edit-form__field ember-text-field ember-view"
            type="text"
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Email Publico</label>
          <p class="edit-form__field-description">
            Use una dirección en la que no le importe que otros hackers independientes se comuniquen con usted.
          </p>
          <input
            maxlength="256"
            :disabled="disableAll"
            v-model="emailPublic"
            class="edit-form__field ember-text-field ember-view"
            type="text"
            name="email"
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Bio</label>
          <p class="edit-form__field-description">
           ¡Diga algunas palabras sobre quién es usted, en qué está trabajando o por qué está aquí!
          </p>
          <textarea
          :disabled="disableAll"
            rows="3"
            maxlength="150"
            v-model="bio"
            class="edit-form__field ember-text-area ember-view"
          ></textarea>
          <!---->
        </div>

        <div class="edit-form__fieldset edit-form__fieldset--buttons">
          <button :disabled="disableAll" class="edit-form__button edit-form__button--save" @click.prevent="guardarPerfil">
            <div class="edit-form__button-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember3052"
                class="edit-form__button-icon ember-view"
              >
                <path
                  d="M20 21.193l-.003.807h-19.993l-.004-.833c-.009-2.224.088-3.495 2.647-4.086 2.805-.647 5.573-1.227 4.242-3.682-3.943-7.275-1.123-11.399 3.111-11.399 4.153 0 7.043 3.971 3.11 11.398-1.292 2.44 1.375 3.02 4.242 3.682 2.57.594 2.657 1.873 2.648 4.113zm4-17.193h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2z"
                >
                  <!---->
                </path>
              </svg>
              <span class="edit-form__button-label">Guardar Cambios</span>
            </div>
          </button>
         <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: $store.state.username },
              }"   
            class="edit-form__button edit-form__button--cancel active ember-view"
          >
            <div class="edit-form__button-content">
              <span class="edit-form__button-label">Cancelar</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  layout: "editUser",
  name: "EditPerfil",
  data() {
    return {
      opcionMes: false, 
      opcionDia: false, 
      opcionAno: false, 
      textMes: '',
      textDia: '',
      textAno: '',
      MesNumber: 0,
      nombres: this.$store.state.nombres, 
      ciudad: this.$store.state.ciudad, 
      twitterUser: this.$store.state.twitter, 
      emailPublic: this.$store.state.email, 
      bio: this.$store.state.bio, 
      imagenPerfil: '', 
       previewImage: null,
      image: null,
      disableAll: false
    };
  },
  watch: {},
  methods: {
  async   previewFiles(e) {
        const file = e.target.files[0];
        console.log(file)
      this.imagenPerfil = URL.createObjectURL(file);
            let formData = new FormData();
            formData.append('file', file);
            formData.append('token', this.$store.state.tokenUser);
  


 const response = await this.$axios.$post('/upload/perfil/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
   this.$store.commit("setCookieImgPerfil", response );    
   const cookieRes = this.$cookies.get('user_data_')   
    this.$cookies.set('user_data_', {img: response, username: cookieRes.username,
                    date: cookieRes.fecha, edad: cookieRes.edad, nombres: cookieRes.nombres, ciudad: cookieRes.ciudad, twitter: cookieRes.twitter, 
                    email: cookieRes.email, bio: cookieRes.bio, fechaNac: cookieRes.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
   
    },
  async  guardarPerfil(){
    this.disableAll = true
//console.log("llegue aqui ")
    var tokenUser = this.$store.state.tokenUser
    var fechaNac = this.textAno+"-"+this.MesNumber+"-"+this.textDia
    if(fechaNac == '--'){
        fechaNac = ''
    }
 
      await this.$axios
        .$get("/guardar/perfil/?token="+tokenUser+"&nombres="+this.nombres+
        "&fechaNac="+fechaNac+"&ciudad="+this.ciudad+"&twitterUser="+this.twitterUser+
        "&emailPublic="+this.emailPublic+"&bio="+this.bio)
        .then((response) => {
          console.log(response)

          if(response.status == 1){
            
            this.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio, p: response.p, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    location.href = "/perfil/"+this.$store.state.username;
          }
        });

    }, 
    insertMes(mes, index){
      this.textMes = mes
    this.MesNumber = index+1
    },
    insertDia(val){
      this.textDia = val
    },
    insertAno(val){
      this.textAno = val
    },
    opcionMesOut(){
      this.opcionMes = false
    }, 
    opcionDiaOut(){
      this.opcionDia = false
    },
    opcionAnoOut(){
      this.opcionAno = false
    }
  },
  mounted() {
 //   console.log("mes: ", this.$store.state.fechaNac)
    if(this.$store.state.fechaNac != ''){
      this.textMes = this.$store.state.Meses[parseInt(this.$store.state.fechaNac[1]-1)] 
    this.MesNumber = this.$store.state.fechaNac[1]
     //     console.log("mes: ", this.textMes)

      //    console.log("mes: ", this.MesNumber)


      this.textDia = this.$store.state.fechaNac[2]
      this.textAno = this.$store.state.fechaNac[0]
    }

    this.imagenPerfil = this.$store.state.img_perfil
    

  },
    directives: {
    ClickOutside
  }, 
};
</script>

