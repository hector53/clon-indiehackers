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
            <a
              href="#"
              class="active  user-header__header-button user-header__header-button--stop-editing"
              @click.prevent="goBack()"
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
            </a>
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
            v-model="urlFacebook"
            class="edit-form__field ember-text-field"
            type="text" 
            placeholder="Url Facebook ejemplo: https://facebook.com/pagina"
            />
          </p>
           
        </div>

         <div class="edit-form__fieldset">
          <label class="edit-form__label">Fecha Inicial</label>
        <client-only>  <b-form-datepicker id="datepickerFechaInicial" 
          v-model="fechaI" placeholder="Seleccione Fecha Inicial" class="mb-2"></b-form-datepicker>
          </client-only>
        </div>
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Fecha Final</label>
        <client-only>    <b-form-datepicker id="datepickerFechaFinal"  placeholder="Seleccione Fecha Final" v-model="fechaF"
           class="mb-2"></b-form-datepicker></client-only>  
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
           <client-only>      <b-form-group
           v-slot="{ ariaDescribedby }" > 
             
                <b-form-radio-group
                v-model="habilidadFundadorSelect"
                :options="habilidadFundador"
                buttons
                :aria-describedby="ariaDescribedby"
                button-variant="primary"
                ></b-form-radio-group>
              </b-form-group> </client-only>  
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Numero de Fundadores</label>
         <client-only>     <b-form-group
          v-slot="{ ariaDescribedby }" 
              >
              <b-form-radio-group
              v-model="numeroFundadoresSelect"
                :aria-describedby="ariaDescribedby"
              :options="NumeroFundadores"
              buttons
              button-variant="primary"
              ></b-form-radio-group>
              </b-form-group> </client-only>  
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Numero de Empleados</label>
         <client-only>    <b-form-group
          v-slot="{ ariaDescribedby }" >
                <b-form-radio-group
                v-model="numeroEmpleadosSelect"
                 :aria-describedby="ariaDescribedby"
                :options="numeroEmpleados"
                buttons
                button-variant="primary"
                ></b-form-radio-group>
              </b-form-group> </client-only>  
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Modelo de Negocio</label>
          <client-only>   <b-form-group
           v-slot="{ ariaDescribedby }"
          label="¿Como genera dinero tu producto?"
          >
                <b-form-radio-group
                v-model="modeloNegocioSelect"
                  :aria-describedby="ariaDescribedby"
                :options="modeloNegocio"
                buttons
                button-variant="primary"
                ></b-form-radio-group>
              </b-form-group> </client-only>  
         
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Fondos</label>
        <client-only>     <b-form-group
          label="¿Como ha financiado su producto?"
            v-slot="{ ariaDescribedby }"
          >
                <b-form-checkbox-group
                v-model="fondosSelect"
                :options="fondos"
                    :aria-describedby="ariaDescribedby"
                buttons
                button-variant="primary"
                ></b-form-checkbox-group>
              </b-form-group> </client-only>  
         
        </div>


           <div class="edit-form__fieldset">
          <label class="edit-form__label">Compromiso Inicial</label>
         <client-only>    <b-form-group
          v-slot="{ ariaDescribedby }"
          label="¿Cuanto tiempo dedico inicialmente en su producto?"
          >
                <b-form-radio-group
                v-model="compromisoInicialSelect"
                :options="compromisoInicial"
                 :aria-describedby="ariaDescribedby"
                buttons
                button-variant="primary"
                name="buttons-2"
                ></b-form-radio-group>
              </b-form-group> </client-only>  
         
        </div>
    
 <div class="edit-form__fieldset">
          <label class="edit-form__label">Etiquetas</label>
        <client-only>     <b-form-group
          label="¿Que etiqueta describe mejor tu producto?"
            v-slot="{ ariaDescribedby }"
          >
                <b-form-checkbox-group
                v-model="etiquetasSelect"
                :options="etiquetas"
                    :aria-describedby="ariaDescribedby"
                buttons
                button-variant="primary"
                ></b-form-checkbox-group>
              </b-form-group> </client-only>  
         
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
          <button style="    margin-left: auto;" :disabled="disableAll" class="edit-form__button edit-form__button--save"
           @click.prevent="eliminarProducto">
            <div class="edit-form__button-content">
              
              <span class="edit-form__button-label">Eliminar</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: "perfilEditCanalizados",
  name: "producto-slug-editar",
  async asyncData({ params, store, redirect }) {

     const response = await axios.get(
      `https://acceso.canalizados.com/api/productos/confirmuser?slug=${params.slug}&token=${store.state.tokenUser}`
    );

      if(response.data.status == 0){
        return redirect('/')
      }
    
  },
  data() {
    return {
      nombreProducto: '', 
      urlProducto: '',
      urlTwitter: '', 
      urlFacebook: '',
      localizacion: '', 
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
        modeloNegocioSelect: '',
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
        ], 
        etiquetasSelect: [],
        etiquetas: [
  
        ],
        idP: ''
    };
  },
  
  watch: {},

  methods: {
    goBack(){
        this.$router.back();

    },

    eliminarProducto(){
        this.$swal({
        title: '¿Estas seguro?',
        text: "No puedes deshacer esto",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar!'
        }).then((result) => {
      
                  if (result.value) {
                        
                          this.disableAll = true
                          let formData = new FormData();
                          formData.append('idP', this.idP);
                          formData.append('token', this.$store.state.tokenUser);

                          const response = this.$axios.$post('/productos/borrarproducto/',
                          formData,
                          {
                          headers: {
                          'Content-Type': 'multipart/form-data',
                          }
                          }
                          )

                        if(response.status == 0){
                                  this.$swal({
                                  title: 'Error!',
                                  text: "Ocurrio un error",
                                  type: 'error',
                                  confirmButtonText: 'OK'
                                  })
                      }else{
                                  this.$swal({
                                  title: 'Exito!',
                                  text: "Borrado con exito",
                                  type: 'success',
                                  confirmButtonText: 'OK'
                                  }).then((result) => {
                                  if (result.value) {
                                  this.$router.push({name: 'index' })
                                  }
                                  })
                      }
                  }
        })


    },
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
    async  guardarProducto(){
        
        this.disableAll = true
        let formData = new FormData();
                formData.append('token', this.$store.state.tokenUser);
                formData.append('nombreProducto', this.nombreProducto);
                formData.append('descripcionCorta', this.descripcionCorta);
                formData.append('urlProducto', this.urlProducto);
                formData.append('motivacion', this.motivacion);
                formData.append('urlTwitter', this.urlTwitter);
                formData.append('urlFacebook', this.urlFacebook);
                formData.append('fechaI', this.fechaI);
                formData.append('fechaF', this.fechaF);

                formData.append('localizacion', this.localizacion);
                formData.append('habilidadFundador', this.habilidadFundadorSelect);
                formData.append('numeroFundadores', this.numeroFundadoresSelect);
                formData.append('numeroEmpleados', this.numeroEmpleadosSelect);
                formData.append('modeloNegocio', this.modeloNegocioSelect);
                formData.append('fondos', this.fondosSelect);
                formData.append('compromisoInicial', this.compromisoInicialSelect);
                formData.append('etiquetas', this.etiquetasSelect);
                formData.append('idP', this.idP);
                

                const response = await this.$axios.$post('/productos/editproduct/',
                formData,
                {
                headers: {
                'Content-Type': 'multipart/form-data',
                }
                }
                )
                if(response.status==1){
                  this.disableAll = false


this.$swal({
  title: 'Exito!',
  text: "Actualizado con exito",
  type: 'success',
  confirmButtonText: 'OK'
}).then((result) => {
  console.log(result)
  if (result.value) {
      this.$router.push({name: 'p-slug', params: {slug: this.$route.params.slug } })
  }
})




                }else{
                  const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'center',
                        showConfirmButton: true,
                        timer: 2000
                      });
                      Toast.fire({
                        type: 'error',
                        title: 'Error!'
					  }); 
                }

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
                    this.urlProducto = response.producto[0].urlProducto
                    this.idP = response.producto[0].idP
                    this.fondosSelect = response.producto[0].fondos

                    this.urlTwitter = response.producto[0].url_twitter
                    this.urlFacebook = response.producto[0].url_facebook
                    this.fechaI = response.producto[0].fechaI_producto
                    this.fechaF = response.producto[0].fechaF_producto
                    this.localizacion = response.producto[0].localizacion_producto
                    this.habilidadFundadorSelect = response.producto[0].habilidadFundador_producto
                    this.numeroFundadoresSelect = response.producto[0].numeroFundadores_producto
                    this.numeroEmpleadosSelect = response.producto[0].numeroEmpleados_producto
                    this.modeloNegocioSelect = response.producto[0].modeloNegocio_producto
                    this.compromisoInicialSelect = response.producto[0].compromisoInicial_producto
                    this.etiquetas = response.categorias
                    this.etiquetasSelect = response.tags



                    if(response.producto[0].imagen == false){
                            this.imagenPerfil = '/images/productDefault.png'
                    }else{
                        this.imagenPerfil = response.producto[0].imagen
                    }
                }
        })
      }, 
     
  },

  created() {
    console.log("creado")
  },
  mounted() {
    console.log("montado")

      this.getdetailsProduct()

  },
};
</script>

