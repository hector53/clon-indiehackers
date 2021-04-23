<template>

  <div class="column-9 w-col w-col-4 w-col-tiny-tiny-stack columnaDerechaIndex"
    >
    <div class="div-block-458" v-if="$store.state.cookieLogin && msjBienvenida">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="cerrarBienvenida"
         class="ember-view options-header__remove-icon svgCloseBienvenida"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
        <h3 class="heading-4">Ya sos parte de canalizados!</h3>
        <div class="text-block-26">Esto es lo que podés hacer</div>
      </div>
      <ul role="list" class="list-9">
        <li class="list-item-10">
            <div class="text-block-27">
               <nuxt-link 
               :to="{name:'u-username', 
               params: {username: $store.state.username}}">👋 &nbsp;&nbsp;Completá tu perfil</nuxt-link>
          </div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
            🎬 &nbsp;&nbsp;Seguí intereses y personas
          </div>
        </li>
        <li class="list-item-10">
          <div class="text-block-27">
             <nuxt-link to="/post-nuevo">✍️ &nbsp;&nbsp;Escribí tu primer publicación</nuxt-link>
          </div>
        </li>
      </ul>
    </div>

    <div class="div-block-438" v-if="msjBienvenida == false"><h3 class="heading-3">Experiencia Endeavor Rosario</h3><div class="text-block-40">13 Octubre 2021</div><div><a href="#" class="button-3 w-button">Ver mas Eventos</a></div></div>
  
  
  <div class="div-block-438"><div class="div-block-439"><h3 class="heading-3">PedidosYa</h3><img width="48" height="48" src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2f290c813289423fcb41_icon-384x384-4.png" loading="lazy" alt="" class="image-13"></div><div class="div-block-440"><div>Delivery App</div><div class="text-block-6"> • </div><div>Uruguay</div></div><div><a href="#" class="button-3 w-button">Startups de Latam</a></div></div>

  <div class="div-block-438"><div class="div-block-439"><h3 class="heading-3">Nacho Martinez Escoda</h3><img width="48" height="48" src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg" loading="lazy" sizes="48px" srcset="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2e893fdf20f06428194a_1604436647142.jpeg 800w" alt="" class="image-13"></div><div class="div-block-440"><div>Bounty Capital</div><div class="text-block-6"> • </div><div>Argentina</div></div><div><a href="#" class="button-3 w-button">Conocé el ecosistema</a></div></div>
  </div>






</template>


<script>
export default {
  name: "columnaDerechaDiscusion",
  props: ['arrayPopulares', 'msjBienvenidaInit'],
  data() {
    return {
      msjBienvenida: this.msjBienvenidaInit, 
    };
  },
  methods: {
    cerrarBienvenida(){
       this.$cookies.remove("registro_nuevo");
        this.msjBienvenida = false
    }
  },
  mounted() {
    
  },
};
</script>
