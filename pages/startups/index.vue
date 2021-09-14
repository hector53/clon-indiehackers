<template>

<div>

    <div class="search-page" >
    
    

      <!-- <div class="search-page__field-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember8"
          class="search-page__field-icon ember-view"
        >
          <path
            d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
          >
          </path>
        </svg>
        <input
          autocomplete="off"
          placeholder="Escribe algo para buscar aquí..."
          class="ember-text-field ember-view search-page__field"
          bubbles=""
          type="text"
          v-model="q"
        />
      </div> -->

      <div
        class="search-page__results"
      
      >
        <div class="search-page__results-header">
          <h2 style="color: #7986CB; font-weight: 700; margin-top: 0;">
            {{ totalStartups }} Startups
          </h2>

          <div class="search-page__results-pagination">
            <span class="results-pagination__numbers">
              {{ ini+1 }} – {{ end }}
            </span>

            <div class="results-pagination__buttons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(1)"
                class="ember-view results-pagination__button results-pagination__button--prev"
                :class="{ 'results-pagination__button--disabled': ini == 0 }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                @click="cambiarPage(2)"
                class="ember-view results-pagination__button results-pagination__button--next"
                :class="{
                  'results-pagination__button--disabled':
                    (ini+1) == end,
                }"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>

          
        </div>
        <loader v-show="loader"></loader>
        <b-container v-show="loader==false"  >
      <div class="row">
        <div class="col-4 mb-4" v-for="(item, index) in arrayStartups" :key="index">
          <nuxt-link
            :to="{
            name: 'p-slug',
            params: { slug: item.slug },
            }"
          >
          <div style="padding: 20px; box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%); background: #FFFFFF 0% 0% no-repeat padding-box; border: 1px solid #7986CB; border-radius: 23px; opacity: 1; text-align: center;">
            <img :src="item.imagen" style="margin: auto; height: 100px; border-radius: 50px;" />
            <h3 class="fontW500" v-html="item.titulo"></h3>
            <div class="result__snippet">
              <p v-html="item.contenido" v-if="item.contenido"></p>
              <p v-if="item.informacion && !item.contenido" v-html="item.informacion"></p>
              <p style="color: #FF8A65; font-weight: bold;">{{item.tags[0]}}</p>
            </div>
          </div>
          </nuxt-link>
        </div>
      </div>
      </b-container>


 <!-- <loader v-show="loader"></loader>
<b-container v-show="loader==false"  >
  <b-row>
    <b-col md="6" class="mb-3" v-for="(item, index) in arrayStartups" :key="index" >
    <div class="card-resultados">
        <b-row style="height: 100%">
                <b-col md="2">
                    <nuxt-link
                    :to="{
                    name: 'p-slug',
                    params: { slug: item.slug },
                    }"
                    class="user-link__link ember-view"
                    >
                 
                    <img :src="item.imagen" class="image-result" />
               
                    </nuxt-link>
                </b-col>
                 <b-col md="10">
                    <nuxt-link
                    :to="{
                    name: 'p-slug',
                    params: { slug: item.slug },
                    }"
                   
                    >
                    <h3 class="fontW500" v-html="item.titulo"></h3>
                    <div class="result__snippet">
                    <p v-html="item.contenido"></p>
                    </div>
                    </nuxt-link>
                </b-col>
        </b-row>
    </div>

    </b-col>

  </b-row>

</b-container> -->
        
        
        
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import loader from '~/components/loader/loader.vue';
export default {
  components: { loader },
  layout: "perfilEditCanalizados",
  name: "buscar",
   directives: {
    ClickOutside
  },
  data() {
    return {
        arrayStartups : [],
        totalStartups: '',
      loader:true,
      q: "",
      pp:6,
      ini: 0, 
      end: 0
    };
  },
  head(){
    return {
      title: 'Startups - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - Startups' }
    ],
       link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/startups'
        }
      ]
     
    }
  },
  watch: {
         q: function (value) {
                this.getStartups()
         }
  },
  methods: {
      cambiarPage(val){
          this.loader = true
            if(val == 1){
                    this.ini--
                     this.getStartups()
            }else{
                this.ini++
                 this.getStartups()
            }
      },
     async getStartups(){
                await this.$axios.$get("/buscar/productos/?q="+this.q+"&ini="+this.ini).then((response) => {
               console.log(response);
                this.arrayStartups = response.productos;
                this.totalStartups =  response.totalPro;
                this.end =  response.totalPaginas;
                this.loader = false
                });
      }
  },
  mounted() {
        this.getStartups()
  },
};
</script>

<style>
.query-match {
  color: #3e64db !important;
}
</style>