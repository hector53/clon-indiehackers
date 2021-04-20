<template>
  <div class="user__content">
    <header class="user-header">
      <div class="user-header__content">
       <label  for="file"  role="button" > 
        <div
          class="user-header__avatar-wrapper user-header__avatar-wrapper--editable"
        >
        
          <picture 
          
            class="user-avatar user-header__avatar imgPerfilEdit"
          >
         
            <img   :src="imagenPerfil" style="border-radius: 9999px;"  />
          </picture>
        
     
          <!---->
          <span class="user-header__edit-avatar-msg">Imagen Producto</span>

          <!---->
        </div>
        </label>
              
    <input style="display: none" ref="fileInput" accept="image/x-png,image/gif,image/jpeg"
     id="file" type="file" @change="previewFiles" enctype="multipart/form-data">
     

        <div class="user-header__text-content">
          <h1 class="user-header__name">
            <span class="user-header__username"> Editar Producto </span>

            <!---->
            <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: $store.state.username },
              }"
              class="active  user-header__header-button user-header__header-button--stop-editing"
            >
              <div class="header-button__content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember3036"
                  class=" header-button__icon"
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
              Click en la imagen para agregar una nueva
            </span>
          </div>
        </div>
      </div>
    </header>

    <div class="user__body">
      <!---->
      <div class="edit-form">
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Nombre del producto</label>
          <input
            :disabled="disableAll"
            maxlength="120"
            v-model="nombreProducto"
            class="edit-form__field ember-text-field"
            type="text" 
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Descripción corta</label>
          <input
            :disabled="disableAll"
            maxlength="300"
            v-model="descripcionCorta"
            class="edit-form__field ember-text-field"
            type="text" 
          />
        </div>

    <div class="edit-form__fieldset">
          <label class="edit-form__label">Motivación</label>
          <textarea
            :disabled="disableAll"
            maxlength="300"
            v-model="motivacion"
            class="edit-form__field ember-text-field"
            type="text" 
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Links:</label>
          <p>
            <input
            :disabled="disableAll"
            maxlength="300"
            v-model="urlProducto"
            class="edit-form__field ember-text-field"
            type="text" 
            placeholder="Url Producto ejemplo: https://ejemplo.com"
            />
          </p>
          <p>
            <input
            :disabled="disableAll"
            maxlength="300"
            v-model="urlTwitter"
            class="edit-form__field ember-text-field"
            type="text" 
            placeholder="Usuario Twitter ejemplo: @usuario"
            />
          </p>
          <p>
            <input
            :disabled="disableAll"
            maxlength="300"
            v-model="urlTwitter"
            class="edit-form__field ember-text-field"
            type="text" 
            placeholder="Url Facebook ejemplo: https://facebook.com/pagina"
            />
          </p>
           
        </div>

         <div class="edit-form__fieldset">
          <label class="edit-form__label">Fecha Inicial</label>
          <b-form-datepicker id="datepickerFechaInicial" 
          v-model="fechaI" placeholder="Seleccione Fecha Inicial" class="mb-2"></b-form-datepicker>
        </div>
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Fecha Final</label>
          <b-form-datepicker id="datepickerFechaFinal"  placeholder="Seleccione Fecha Final" v-model="fechaF" class="mb-2"></b-form-datepicker>
        </div>
    
      
        

           <div class="edit-form__fieldset">
          <label class="edit-form__label">Localización</label>
          <input
            :disabled="disableAll"
            maxlength="300"
            v-model="localizacion"
            class="edit-form__field ember-text-field"
            type="text" 
          />
        </div>


           <div class="edit-form__fieldset">
          <label class="edit-form__label">Fundadores</label>
         
        </div>


         <div class="edit-form__fieldset">
          <label class="edit-form__label">Habilidad del Fundador</label>
              <b-form-group>
                <b-form-checkbox-group
                v-model="habilidadFundadorSelect"
                :options="habilidadFundador"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Numero de Fundadores</label>
           <b-form-group
              >
              <b-form-checkbox-group
              v-model="numeroFundadoresSelect"
              :options="NumeroFundadores"
              buttons
              button-variant="primary"
              name="buttons-2"
              ></b-form-checkbox-group>
              </b-form-group>
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Numero de Empleados</label>
          <b-form-group>
                <b-form-checkbox-group
                v-model="numeroEmpleadosSelect"
                :options="numeroEmpleados"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Modelo de Negocio</label>
          <b-form-group
          label="¿Como genera dinero tu producto?"
          >
                <b-form-checkbox-group
                v-model="modeloNegocioSelect"
                :options="modeloNegocio"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Fondos</label>
          <b-form-group
          label="¿Como ha financiado su producto?"
          >
                <b-form-checkbox-group
                v-model="fondosSelect"
                :options="fondos"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>
         
        </div>


           <div class="edit-form__fieldset">
          <label class="edit-form__label">Compromiso Inicial</label>
          <b-form-group
          label="¿Cuanto tiempo dedico inicialmente en su producto?"
          >
                <b-form-checkbox-group
                v-model="compromisoInicialSelect"
                :options="compromisoInicial"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-checkbox-group>
              </b-form-group>
         
        </div>
    

        <hr>

        <div class="edit-form__fieldset edit-form__fieldset--buttons">
          <button :disabled="disableAll" class="edit-form__button edit-form__button--save"
           @click.prevent="guardarProducto">
            <div class="edit-form__button-content">
              
              <span class="edit-form__button-label">Guardar Cambios</span>
            </div>
          </button>
         <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: $store.state.username },
              }"   
            class="edit-form__button edit-form__button--cancel active "
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
export default {
  layout: "perfilEditCanalizados",
  name: "producto-slug-editar",
  data() {
    return {
      nombreProducto: '', 
      disableAll: false, 
        imagenPerfil: '/images/spinerImagen.gif', 
       previewImage: null,
      image: null,
      descripcionCorta: '', 
      motivacion: '', 
      fechaI: '',
       fechaF: '', 
       habilidadFundadorSelect: '',
       habilidadFundador: [
          { text: 'Code', value: 1 },
          { text: 'No-Code', value: 2 },
        ], 
        numeroFundadoresSelect: '', 
        NumeroFundadores:[
           { text: 'Multiples Fundadores', value: 1 },
           { text: 'Solo Fundador', value: 2 },
        ], 
        numeroEmpleadosSelect: '',
        numeroEmpleados: [
            { text: '+10 Empleados', value: 10 },
            { text: '+50 Empleados', value: 50 },
            { text: '+200 Empleados', value: 200 },
            { text: '+500 Empleados', value: 500 },
            { text: '+1000 Empleados', value: 1000 },
            { text: '+5000 Empleados', value: 5000},
            { text: '+10000 Empleados', value: 10000 },
            { text: 'Sin Empleados', value: 0 },
            { text: '< 10 Empleados', value: '-10' },
        ], 
        fondosSelect: [],
        fondos: [
           { text: 'Acelerator', value: 1 },
           { text: 'Bootstrapped', value: 2 },
           { text: 'Crowdfunded', value: 3 },
           { text: 'Donation-Supported', value: 4 },
           { text: 'Seed Funded', value: 5 },
           { text: 'Self Funded', value: 6 },
           { text: 'VC Funded', value: 7 },
        ], 
        modeloNegocioSelect: [],
        modeloNegocio: [
          { text: 'Publicidad', value: 1 },
          { text: 'Comisiones', value: 2 },
          { text: 'Consultoría', value: 3 },
          { text: 'Donaciones', value: 4 },
          { text: 'Libre', value: 5 },
          { text: 'Asociación', value: 6 },
          { text: 'Ventas', value: 7 },
          { text: 'Suscripciones', value: 8 },
        ], 
        compromisoInicialSelect: '', 
        compromisoInicial: [
          { text: 'Tiempo Completo', value: 1 },
          { text: 'Proyecto en Paralelo', value: 2 },
        ]
    };
  },
  watch: {},
  methods: {
       async   previewFiles(e) {
        const file = e.target.files[0];
        console.log(file)
          this.imagenPerfil = '/images/spinerImagen.gif'
            let formData = new FormData();
            formData.append('file', file);
            formData.append('token', this.$store.state.tokenUser);
            formData.append('slug', this.$route.params.slug);
  


 const response = await this.$axios.$post('/productos/uploadimage/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

            console.log(response)
            if(response.status == 0){
                alert("error")
            }else{
                   this.imagenPerfil = URL.createObjectURL(file);
            }


   
    },
      guardarProducto(){

      }, 

    async  getdetailsProduct(){
             await this.$axios
        .$get("/productos/getdetailedit/?token="+this.$store.state.tokenUser+"&slug="+this.$route.params.slug)
        .then((response) => {
                console.log(response)
                if(response.status == 1){
                    this.nombreProducto = response.producto[0].nombreProducto
                    this.descripcionCorta = response.producto[0].descripcionCorta
                    this.motivacion = response.producto[0].motivacion
                    if(response.producto[0].imagen == false){
                            this.imagenPerfil = '/images/productDefault.png'
                    }else{
                        this.imagenPerfil = response.producto[0].imagen
                    }
                }
        })
      }
  },
  mounted() {

      this.getdetailsProduct()

  },
};
</script>

