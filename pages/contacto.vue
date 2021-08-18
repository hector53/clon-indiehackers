<template>
   <article class="paginas">
       <h1>Contacto</h1>

         <loader v-if="loading"></loader>
       <!-- This shows a success message if the form was submitted correctly. -->
    <div v-if="success" >
      Genial, tu mensaje ha sido enviado de forma exitosa, estaremos respondiendo lo mas pronto posible.
    </div>
    <form
      v-if="success==false && loading==false"
      v-on:submit.prevent="sendMessage"

    >
      <!-- Here an error is displayed if something goes wrong -->
      <div v-if="errored" >
        Error, algo salio mal, seguro que enviaste todo correctamente ? 
      </div>
        <div class="cubreInputContacto">
          <input
            v-model="name"
            required
            name="name"
            id="full_name"
            class="group-admin__input"
            placeholder="Nombre Completo*"
          />
        </div>
      <div>
        <label for="email" class="sr-only">Email*</label>
        <div class="cubreInputContacto">
          <input
            required
            v-model="email"
            name="email"
            id="email"
            type="email"
            class="group-admin__input"
            placeholder="Email*"
          />
        </div>
      </div>
      <div>
        <label for="phone" class="sr-only">Phone</label>
        <div class="cubreInputContacto">
          <input
            v-model="phone"
            required
            name="phone"
            id="phone"
            class="group-admin__input"
            placeholder="Telefono"
          />
        </div>
      </div>
      <div>
        <label for="message" class="sr-only">Message</label>
        <div class="cubreInputContacto">
           <client-only>
         <Editor
        v-model="message"
       api-key="idqg8ff4sgvmj2hgpcq8f8j5rp3zf2kt238cppa5qi2glwv3"
       :init="{
         height: 500,
         menubar: false,
          language_url: '/es_MX.js',
                 font_formats: 'Montserrat', 
                  content_style:
    '@import url(https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);', 
    content_css: '/css/csseditor.css',
         plugins: [
           ' link'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor forecolor | \
           alignleft aligncenter alignright alignjustify | link \
           ', 
           
       }"
     />
  </client-only>
 <b-form-invalid-feedback :state="validateMessage">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
        </div>
      </div>
      <div class="">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="botonCanalizados "
          >
            {{ loading ? "Enviando Mensaje..." : "Enviar" }}
          </button>
        </span>
      </div>
    </form>
   </article>
</template>
<script>
import loader from '~/components/loader/loader.vue';
export default {
  components: { loader },
  name: "contacto",
  layout: "perfilEditCanalizados",

    head(){
    return {
       title: 'Contacto - Canalizados',
       
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/contacto'
        }
      ]
    }
  },
  data() {
    return {
          loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      validateMessage: null
    };
  },
  watch: {
     message(valNew, ValOld){
   //    console.log("validatemessage", valNew)
      if(valNew.length > 0){
          this.validateMessage = true
      }
    }
  },
  methods: {
  
   async sendMessage() {
     if(this.message == ""){
       this.validateMessage = false
       return false

     }
      this.loading = true;
       let formData = new FormData();
            
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
             formData.append('message', this.message);
         
    await this.$axios.$post('/send/contact/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            ).then(response => {
            console.log(response)
          this.success = true
          this.errored =false
        })
        .catch(error => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    },
  },

  mounted() {
  },
};
</script>
