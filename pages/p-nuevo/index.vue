<template>
  <div >
      <h1>Producto Nuevo</h1>
      <hr />
   <div class="edit-form">
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Nombre del Producto</label>
          <input 
          ref="nombreProducto"
            :disabled="disableAll"
            maxlength="200"
            v-model="nombreProducto"
            class="edit-form__field ember-text-field"
            type="text" 
          />
        </div>

        <div class="edit-form__fieldset">
          <label class="edit-form__label">Descripción corta</label>
          <input
           ref="descripcionCorta"
            :disabled="disableAll"
            maxlength="300"
            v-model="descripcionCorta"
            class="edit-form__field ember-text-field "
            type="text" 
          />
        </div>
        <div class="edit-form__fieldset">
          <label class="edit-form__label">Url del producto</label>
          <input
           ref="urlProducto"
            :disabled="disableAll"
            maxlength="300"
            v-model="urlProducto"
            class="edit-form__field ember-text-field "
            type="text" 
          />
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
        descripcionCorta: '', 
        urlProducto: '', 
        disableAll: false
    };
  },
  watch: {},
  methods: {
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
              alert("Nombre de producto vacio")
              this.$refs.nombreProducto.focus()
              return false
          }
           if(this.descripcionCorta == ''){
              alert("Descripcion de producto vacia")
              this.$refs.descripcionCorta.focus()
              return false
          }
           if(this.urlProducto == ''){
              alert("Url de producto vacia")
              this.$refs.urlProducto.focus()
              return false
          }else{
           if(this.validURL(this.urlProducto) == false){
               alert("Url incorrecta")
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
                const response = await this.$axios.$post('/productos/addproducto/',
                formData,
                {
                headers: {
                'Content-Type': 'multipart/form-data',
                }
                }
                )

                console.log(response)
                if(response.status == 1){
                    this.$router.push({name: 'producto-slug', params: {slug: response.slug}})
                }else{
                        alert("Error desconocido")
                    return false
                }
            }
        }
 },
  mounted() {
  }
};
</script>

