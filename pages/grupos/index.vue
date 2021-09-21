<template>
   <div>
        <header class="mt-1 headerGrupo">
        <h2 style="color: #7986CB; font-weight: 700; margin-top: 0;">Top Grupos</h2 >
        <nuxt-link to="/grupo-nuevo" class="botonCanalizados aliD">Crear Grupo</nuxt-link>
           
        </header>
        <b-row>
          <b-col v-for="(item, index) in arrayGrupos" :key="index" cols="4" class="mt-3" style="position: relative">
           <client-only> 
    <div>
           <div style="padding: 30px; box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%); background: #FFFFFF 0% 0% no-repeat padding-box; border: 1px solid #7986CB; border-radius: 23px; opacity: 1; text-align: center;">
           <div @click="joinGroup(item.id, item.slug)">
             <b-button v-if="rolUser == 0 && item.perteneceAlGrupo == 0" variant="link" v-b-popover.hover.top="'Toca el boton para unirte al grupo!'" style="position: absolute; right: 20px;">
               <i class="fas fa-plus-circle"></i>
             </b-button>
             <b-button v-if="item.perteneceAlGrupo == 1" variant="link" v-b-popover.hover.top="'Toca el boton para unirte al grupo!'" style="position: absolute; right: 20px;">
               <i class="fas fa-grip-lines"></i>
             </b-button>
             <span v-if="item.perteneceAlGrupo == 1">Unido</span>
           </div>
           <img v-if="item.icono" :src="item.icono" style="margin: auto; height: 100px; border-radius: 50px;" />
             <h2>{{item.titulo}}</h2>
             <p v-text="item.excerpt" v-if="item.excerpt"></p>
             <h4 class="cantPubliGrupo" v-if="item.cantPubli">{{item.cantPubli}} publicaciones </h4>
           </div>
         </div>
    </client-only>

          </b-col>
        </b-row>
   
   
   </div>
</template>

<script>
import Grupos from '~/components/gruposlug/grupos.vue';
export default {
  layout: "perfilEditCanalizados",
  name: "grupos",
  components: {Grupos},
 async fetch() {
      
  await this.$axios
        .$get("/grupos/getgrupostop?p="+this.$store.state.p)
        .then((response) => {
            console.log("array grupos", response)
          this.arrayGrupos = response
        })
  },
  data() {
    return {
        miembrosO: '',
        pGroup:'',
        fechaM: '',
        tituloGrupo: '',
        excerptGrupo: '',
        imagenGrupo: '',
        contenido: '',
        miembros: '',
        moderadores:'',
        rolName: '',
        rolUser: '', 
        tab: 0, 
        responseGrupo: '',
        arrayGrupos: []
    };
  },
   head(){
    return {
      title: 'Grupos - Canalizados',
       meta: [
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores - Grupos' }
    ],
             link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/grupos'
        }
      ]
     
    }
  },
  watch: {},
  methods: {
    async getGruposTop(){
       await this.$axios
        .$get("/grupos/getgrupostop?p="+this.$store.state.p)
        .then((response) => {
            console.log("array grupos", response)
          this.arrayGrupos = response
        })
    },
      async  joinGroup(id){
       if(this.rolUser == 2 || this.rolUser == 1){
          this.$router.push({ name: 'g-slug-configuracion-moderadores',  params: { slug: this.$route.params.slug }})
       }else{
      if(this.$store.state.cookieLogin){
        this.rolUser == 1;
   // console.log("hola join o leave")
          let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('pGroup', id);
            const response = await this.$axios.$post(`/grupos/join/`,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
            this.rolUser = response.status;
      
            if(response.status != 0){
                this.getGruposTop()
            }else{
               
              
            }
      }
       }
       
     
    },
    async followUser() {
      if (this.$store.state.cookieLogin == false) {
        this.$router.push("/iniciar-sesion");
        return false;
      }
      await this.$axios
        .$get(
          "/perfil/followunfollow?username=" +
            this.$route.params.username +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
         // console.log(response);
          this.$emit("recargarDataUser");
        });
    },
    postNuevo() {
      if (this.$store.state.tokenUser != "") {
        this.$cookies.set(
          "group_cookie",
          {
            id: this.pGroup,
            imagenGrupo: this.imagenGrupo,
            tituloGrupo: this.tituloGrupo,
            slug: this.$route.params.slug,
            excerptGrupo: this.excerptGrupo,
          },
          {
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
          }
        );
        this.$router.push({ name: "post-nuevo" });
      } else {
        this.$router.push({ name: "iniciar-sesion" });
      }
    },
      
    changeModeradores(moderadores){
        this.moderadores = moderadores
    },
    changeIconHeGroup(icono){
        this.imagenGrupo = icono
    },
      cambiarTab(tab){
          this.tab = tab
      },
      getGrupoNow(){
          this.refreshGroups()
      },
 
   refreshGroups() {
      this.$fetch()
    }
  },
  mounted() {
  },
  created() {
    
  },
};
</script>