<template>
  <div  class="featured-posts ember-view"> 
   <div class="featured-posts__instructions">
    <div class="featured-posts__title">Publicaciones Destacadas</div>

    <p>
      Este es el lugar para mostrar tus mejores publicaciones: las historias, los consejos y las
       discusiones de las que estás más orgulloso. Simplemente cree una publicación o visite 
       cualquiera de sus publicaciones existentes, luego haga clic en el menú de opciones para 
       agregarlas en la siguiente lista.
    </p>
  </div>
 <loader v-show="loader"></loader>
<ol class="featured-posts__list" v-show="loader==false">
  <li class="featured-posts__list-item" v-for="(item, index) in arrayDestacados" :key="index">
     <nuxt-link
                  :to="{
                    name: 'c-slug',
                    params: { slug: item.slug },
                  }" class="ember-view featured-posts__post-link">
        <header class="featured-posts__post-header">
          <picture v-if="item.imagenGrupo != 0"
          class="group-icon ember-view featured-posts__group-icon">
          <img :src="item.imagenGrupo">
          </picture>
          <div class="featured-posts__post-date">
            {{item.fecha}}
          </div>
          <div class="featured-posts__post-likes">
            {{item.votos}}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember855" class="ember-view featured-posts__likes-icon"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z">
<!----></path>
</svg>
          </div>
          <div class="featured-posts__post-replies">
            {{item.comentarios}}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember856" class="ember-view featured-posts__replies-icon"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z">
<!----></path>
</svg>
          </div>
<!---->        </header>
        <div class="featured-posts__post-title">{{item.titulo}}</div>
        <div class="featured-posts__post-snippet">
          {{item.contenido}}
        </div>
      </nuxt-link>
    </li>
</ol>

<!----></div>
</template>

<script>
import Loader from '~/components/loader/loader.vue';


export default {
  components: {Loader  },
  layout: "perfil",
  name: "perfilPostsDestacados",
  data() {
    return {
          arrayDestacados: [], 
          loader: true
    };
  },

  watch: {
    
  },
  methods: {

    async getDestacados(){

    
      await this.$axios
        .$get("/perfil/getdestacados?username=" + this.$route.params.username)
        .then((response) => {
            console.log(response)
          this.arrayDestacados = response
          this.loader = false
        });
    }
    
  },
  mounted() {
    this.getDestacados()
  },
};
</script>

