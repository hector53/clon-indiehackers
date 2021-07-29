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
          <textarea
            required
            v-model="message"
            name="message"
            id="message"
            rows="4"
            class="group-admin__input"
            placeholder="Mensaje*"
          ></textarea>
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
    };
  },
  methods: {
  
   async sendMessage() {
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
