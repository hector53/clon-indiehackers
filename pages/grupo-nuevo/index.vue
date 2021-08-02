<template>
    <div >
    <h1 >Crear Grupo Nuevo</h1>
      <div >
        <form >
          <fieldset class="fieldsetGrupo" >
            
          
            <input placeholder="Nombre del grupo" v-model="titulo"
            class="group-admin__input" 
             type="text">
          </fieldset>

          <fieldset class="fieldsetGrupo" >
             
            <input 
             placeholder="Descripcion corta del grupo" 
             v-model="excerpt"
             maxlength="75" class="group-admin__input" 
              type="text">
          </fieldset>
              <p class="new-group__form-error" v-if="errorShow">
             
                {{errorText}}
              </p>

          <button class="botonCanalizados fieldsetGrupo" :disabled="disableB" tabindex="4" @click.prevent="createGroup">
            Crear Grupo
          </button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  layout: "perfilEditCanalizados",
  name: "grupo-nuevo",
  components: {},
 async fetch() {
  },
  data() {
    return {
        titulo: '', 
        excerpt: '', 
        errorShow: false, 
        errorText: '', 
        disableB: false

    };
  },
   head(){
    return {
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/grupo-nuevo'
        }
      ]
     
    }
  },
  watch: {},
  methods: {
  
   async   createGroup(){
     if(this.titulo == ''){
       this.errorShow = true
       this.errorText = 'Por favor introduzca el nombre del grupo'
       return false
     }

       if(this.excerpt == ''){
       this.errorShow = true
       this.errorText = 'Por favor introduzca una breve descripcion del grupo'
       return false
     }
    this.disableB = true
         let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('titulo', this.titulo);
            formData.append('excerpt', this.excerpt);
         
 const response = await this.$axios.$post('/grupos/addnuevo/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

if(response.status == 0){
  this.errorShow = true
       this.errorText = 'Error de usuario'
}
if(response.status == 1){
     this.$router.push({ name: 'g-slug', params: {slug: response.slug} })
}
  if(response.status == 2){
  this.errorShow = true
       this.errorText = 'Error al publicar'
}
  
          //  console.log(response)


      }
  },
  mounted() {
  },
};
</script>

