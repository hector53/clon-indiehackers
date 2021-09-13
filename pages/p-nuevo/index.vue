<template>
  <div >
      <h1>Producto Nuevo</h1>
      <hr />
   <div class="edit-form">
      <p v-if="errors.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>
       <form action="" @submit="checkForm">
     <div class="row">
        <div class="edit-form__fieldset col-6">
          <label class="edit-form__label">Nombre del Producto</label>
          <input 
          ref="nombreProducto"
            :disabled="disableAll"
            maxlength="200"
            v-model="nombreProducto"
            class="edit-form__field ember-text-field"
            type="text" 
            required
            focus
          />
        </div>

        <div class="edit-form__fieldset col-6">
          <label class="edit-form__label">Descripción corta</label>
          <input
           ref="descripcionCorta"
            :disabled="disableAll"
            maxlength="300"
            v-model="descripcionCorta"
            class="edit-form__field ember-text-field "
            type="text" 
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="edit-form__fieldset col-12">
          <label class="edit-form__label">Url del producto</label>
          <input
           ref="urlProducto"
            :disabled="disableAll"
            maxlength="300"
            v-model="urlProducto"
            class="edit-form__field ember-text-field "
            type="text" 
            required
          />
        </div>
      </div>
      </form>

        

      
    
 <div class="edit-form__fieldset">
          <label class="edit-form__label">Etiquetas</label>
     <client-only>      <b-form-group
          label="¿Que etiqueta describe mejor tu producto?"
          >
                <b-form-checkbox-group
                v-model="etiquetasSelect"
                :options="etiquetas"
                required
                buttons
                button-variant="primary"
                ></b-form-checkbox-group>
              </b-form-group>  </client-only>
         
        </div>
        
        

        

        <div class="edit-form__fieldset edit-form__fieldset--buttons">
          <button :disabled="disableAll" class="edit-form__button edit-form__button--save"
           @click.prevent="crearProducto">
            <div class="edit-form__button-content">
              <span class="edit-form__button-label">Crear Producto</span>
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
</template>

<script>
export default {
  layout: "perfilEditCanalizados",
  name: "producto-nuevo",
  data() {
    return {
        nombreProducto: '', 
        errors: [],
        descripcionCorta: '', 
        tag: '',
        urlProducto: '', 
        disableAll: false,
        etiquetasSelect: [],
        etiquetas: [
  
        ],
    };
  },
  head(){
    return {
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/p-nuevo'
        }
      ]
     
    }
  },
  watch: {
    etiquetasCheck() {
      console.log(this.etiquetasSelect)
    },
  },
  computed: {
  },
  methods: {
    checkForm: function (e) {
      if (this.nombreProducto && this.descripcionCorta && this.tag) {
        return true;
      }

      this.errors = [];

      if (!this.nombreProducto) {
        this.errors.push('El nombre del producto es obligatorio.');
      }
      if (!this.descripcionCorta) {
        this.errors.push('La descripcion es obligatoria');
      }

      if (!this.urlProducto) {
        this.errors.push('La url del producto es erronea');
      }

      

      e.preventDefault();
    },
    etiquetasCheck() {
      console.log(this.etiquetasSelect)
    },
validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
},
      validate(){
          if(this.nombreProducto == ''){
              this.$refs.nombreProducto.focus()
              return false
          }
           if(this.descripcionCorta == ''){
              this.$refs.descripcionCorta.focus()
              return false
          }
           if(this.urlProducto == ''){
              this.$refs.urlProducto.focus()
              return false
          }else{
           if(this.validURL(this.urlProducto) == false){
              this.$refs.urlProducto.focus()
              return false
           }   
          }
         return true
      },
     async   crearProducto(){
            if(this.validate()==true){
                //hago las cosas
                let formData = new FormData();
                formData.append('token', this.$store.state.tokenUser);
                formData.append('nombreProducto', this.nombreProducto);
                formData.append('descripcionCorta', this.descripcionCorta);
                formData.append('urlProducto', this.urlProducto);
                formData.append('tag', this.etiquetasSelect);
                const response = await this.$axios.$post('/productos/addproducto/',
                formData,
                {
                headers: {
                'Content-Type': 'multipart/form-data',
                }
                }
                )

              //  console.log(response)
                if(response.status == 1){
                    this.$router.push({name: 'p-slug', params: {slug: response.slug}})
                }else{
                    return false
                }
            }
        }, 
        async  getTags(){
             await this.$axios
        .$get("/productos/gettagsonly/")
        .then((response) => {
               console.log(response)
               this.etiquetas = response
        })
      }, 
 },
  mounted() {
    this.$refs.nombreProducto.focus()
    this.getTags();
  }
};
</script>

