<template>
  <div class="user__content">
    <header class="user-header">
      <div class="user-header__content">
       <label  for="file"  role="button" > 
        <div
          class="user-header__avatar-wrapper user-header__avatar-wrapper--editable"
        >
        
          <picture 
            style="height: 140px;
    width: 140px;
    display: block;"
            class="user-avatar ember-view user-header__avatar"
          >
         
            <img   :src="imagenPerfil" style="border-radius: 9999px;"  />
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
                name: 'u-username',
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
          <input
          :disabled="disableAll"
            maxlength="20"
           v-model="ciudad"
            class="edit-form__field ember-text-field ember-view"
            type="text"
          />
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
                name: 'u-username',
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
  layout: "perfilEditCanalizados",
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
                    location.href = "/u/"+this.$store.state.username;
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

<style >
.user__content{
  display: grid;
    flex-direction: column;
    margin-bottom: 60px;
    position: relative;
}
.user-header{
  width: 100%;
    display: block;
}
.user-header__content{
  display: flex;
}
.user-header__avatar-wrapper{
        text-align: center;
    display: block;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
    width: 160px;
}
.user-header__text-content{
      width: 100%;
    display: flow-root;
}
.user-header__name{
  display: inline-flex;
}
.edit-form {
    max-width: 750px;
}
 .edit-form__fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
}
.edit-form__label {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
}
 .edit-form input:not(.ap-nostyle-input),  .edit-form textarea {
    background-color: #ffffff;
    color: #1a1b1f;
    border-radius: 3px;
    font-size: 18px;
    padding: 14px;
    text-overflow: ellipsis;
    transition: border-width 120ms;
    width: 100%;
    border: 0;
    box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%);
}
.edit-form__fields-wrapper {
    align-items: flex-start;
    display: flex;
    margin-top: 8px;
}

.edit-form__field:not(:last-child) {
    margin-right: 6px;
}
 .edit-form .ember-select .es-options {
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
    border-radius: 3px;
    cursor: pointer;
    margin-top: 2px;
    max-height: 236px;
    overflow: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
}
.edit-form .ember-select .es-option {
    font-size: 16px;
    padding: 8px 14px;
}
 .edit-form .edit-form__field--birthday-month {
    width: 8em!important;
}
.edit-form .ember-select {
    flex: 0 0 auto;
    padding: 0!important;
    position: relative;
}
.edit-form .edit-form__field-description {
    font-size: 17px;
    margin-top: 8px;
}

 .edit-form .algolia-places-nostyle .ap-nostyle-hint, .edit-form .algolia-places-nostyle .ap-nostyle-input {
    background-color: #ffffff;
    color: #1a1b1f;
    border-radius: 3px;
    font-size: 18px;
    padding: 14px;
    text-overflow: ellipsis;
    transition: border-width 120ms;
    width: 100%;
    border: 0;
    box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%);

    }
 .edit-form .edit-form__fieldset.edit-form__fieldset--buttons {
    flex-direction: row;
    margin-bottom: 0;
}
 .edit-form .edit-form__button {
   background: #3e64db;
    color: #ffffff;
    cursor: pointer;
    border-radius: 2px;
    flex: 0 0 auto;
    font-size: 15px;
    font-weight: 600;
    height: 48px;
    padding: 0 16px;
    text-transform: uppercase;
    margin-right: 10px;
}
.edit-form .edit-form__button-content {
    align-items: center;
    display: flex;
    height: 100%;
}

.edit-form .edit-form__button svg {
    fill: #ffffff;
}

 .edit-form .edit-form__button-icon {
    height: 14px;
    width: 14px;
    margin-right: 10px;
}
 .edit-form .edit-form__button[disabled] {
    cursor: default;
    filter: grayscale(.7);
    opacity: .7;
}
 .user-header .user-header__avatar-wrapper--editable:hover::before {
    border: 5px solid #3e64db;
    transform: rotate(45deg);
}
 .user-header .user-header__avatar-wrapper--editable::before {
   height: 150px;
    width: 150px;
    border: 5px dashed #3e64db;
    border-radius: 9999px;
    content: "";
    left: -1px;
    position: absolute;
    top: -1px;
    transition: border-color 220ms, transform .4s;
    z-index: 1;
}
.user-header__edit-avatar-msg{
  display: none;
}
</style>