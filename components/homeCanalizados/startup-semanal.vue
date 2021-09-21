<template>
    <div style="margin-bottom: 20px">
        <h1 style="color: #7986CB; font-weight: 700; margin-top: 0;">Startups de la semana</h1>
        <div class="row">
        <div class="col-xl-6 col-md-6 col-sm-12 mb-3" v-for="(item, index) in arrayStartups.slice(0,1)" :key="index">
          <div style="padding: 20px; box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%); background: #FFFFFF 0% 0% no-repeat padding-box; border: 1px solid #7986CB; border-radius: 23px; opacity: 1; text-align: center;">
            <img :src="item.imagen" style="margin: auto;" />
            <h3 class="fontW500" v-html="item.titulo"></h3>
            <div class="result__snippet">
              <p v-html="item.contenido"></p>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12" v-for="(item, index) in arrayStartups.slice(2,3)" :key="index">
          <div style="padding: 20px; box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%); background: #FFFFFF 0% 0% no-repeat padding-box; border: 1px solid #7986CB; border-radius: 23px; opacity: 1; text-align: center;">
            <img :src="item.imagen" style="margin: auto; height: 100px; border-radius: 50px;" />
            <h3 class="fontW500" v-html="item.titulo"></h3>
            <div class="result__snippet">
              <p v-html="item.contenido" v-if="item.contenido"></p>
              <p v-if="item.informacion && !item.contenido" v-html="item.informacion"></p>
              <p style="color: #FF8A65; font-weight: bold;">{{item.tags[0]}}</p>
            </div>
          </div>
        </div>
      </div>
        <!-- <h1 style="color: #7986CB; font-weight: 700; margin-top: 0;">Startups de la semana</h1>
        <main class="d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12 col-lg-8 p-2">
                        <article class="card h-100 text-white fondo-card shadow-sm" style="background-color: #7986CB;">
                            <div class="card-body">
                                <div class="d-flex mb-3">
                                    <img alt="" src="https://acceso.canalizados.com/wp-content/uploads/2021/05/unnamed.jpg" class=" border border-secondary border-3 rounded-circle imagen-startup-semanal">
                                    <div class="ps-3" style="margin-left: 5px;">
                                        <h6 class="m-0 h6 titulo-startup-semanal">Hablalo App</h6>
                                        <p class="m-0 h6 fundador-startup-semanal">Fundado por Pepe Rodriguez</p>
                                    </div>
                                </div>
                                    <p class="fs-6 lh-1">Háblalo es la app que permite comunicarse a más de 100.000 personas con dificultades en su comunicación.</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-lg-4 p-2">
                        <article class="card h-100 text-white shadow-sm" style="background-color: #435282;">
                            <div class="card-body">
                                <div class="d-flex mb-3">
                                    <img src="https://acceso.canalizados.com/wp-content/uploads/2021/04/Captura%20de%20Pantalla%202021-04-28%20a%20la(s)%2010.04.15-e1620253794206.png" alt="" class="border border-secondary border-3 rounded-circle imagen-startup-semanal">
                                    <div class="ps-3" style="margin-left: 5px;">
                                        <h6 class="m-0 h6 titulo-startup-semanal">Bounty Ventures</h6>
                                        <p class="m-0 h6 fundador-startup-semanal">Fundado por Nacho Martinez Escoda</p>
                                    </div>
                                </div>
                                    <p class="fs-6 lh-1">Invertimos en proyectos de innovación que mejoren la vida de las personas</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-lg-4  p-2">
                        <article class="card h-100 text-white shadow-sm" style="background-color: #435282;">
                            <div class="card-body">
                                <div class="d-flex mb-3">
                                    <img alt="" src="https://acceso.canalizados.com/wp-content/uploads/2021/05/1538163325714.jpeg" class="border border-secondary border-3 rounded-circle imagen-startup-semanal">
                                    <div class="ps-3" style="margin-left: 5px;">
                                        <h6 class="m-0 h6 titulo-startup-semanal">Beek</h6>
                                        <p class="m-0 h6 fundador-startup-semanal">Fundado por Emmet Brown</p>
                                    </div>
                                </div>
                                    <p class="fs-6 lh-1">Descubre tu siguiente audiolibro favorito, disfrutá de series en cada momento. Es la alternativa ideal a Audible en español.</p>
                            </div>
                        </article>
                    </div>
                    <div class="col-12 col-lg-8  p-2">
                        <article class="card h-100 text-white shadow-sm" style="background-color: #7986CB;">
                            <div class="card-body">
                                <div class="d-flex mb-3">
                                    <img alt="" src="https://acceso.canalizados.com/wp-content/uploads/2021/05/unnamed.png" class="border border-secondary border-3 rounded-circle imagen-startup-semanal">
                                    <div class="ps-3" style="margin-left: 5px;">
                                        <h6 class="m-0 h6 titulo-startup-semanal">Apprendo App</h6>
                                        <p class="m-0 h6 fundador-startup-semanal">Fundado por Leonel Rodriguez</p>
                                    </div>
                                </div>
                                    <p class="fs-6 lh-1">Enseñá eso que te apasiona y sumate a nuestra comunidad de profesores. Publicar tus clases es gratis y vos ponés el precio. Manejá tus horarios como quieras desde el calendario en tiempo real y conseguí nuevos alumnos.</p>
                            </div>
                        </article>
                    </div>
                </div>                
            </div>
        </div>
    </main>  -->
    </div>
</template>


<script>
import ClickOutside from 'vue-click-outside'
import loader from '~/components/loader/loader.vue';
export default {
  components: { loader },
  layout: "perfilEditCanalizados",
  name: "startup-semanal",
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
              //  console.log(response);
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