<template>
  <div class="div-block-444"> 
                  <div class="div-block-447">
                    <img
                      :src="avatar"
                      loading="lazy"
                      sizes="40px"
                     
                      alt=""
                      class="image-18"
                    />
                    <div class="text-block-37">{{username}}</div>
                  </div>
                 
                 
                  <div class="div-block-461" v-if="producto">
                    <div class="text-block-31">Trabajo</div>
                    <div class="div-block-462">
                      <div class="text-block-32">Bounty Capital</div>
                    </div>
                  </div>
                  <div class="div-block-461" v-if="producto">
                    <div class="text-block-31">Producto</div>
                    <div class="div-block-462">
                      <img
                        src="https://uploads-ssl.webflow.com/5fc7827fd57bce892e4c852f/604e2f290c813289423fcb41_icon-384x384-4.png"
                        loading="lazy"
                        alt=""
                        class="image-17"
                      />
                      <div class="text-block-32">Bounty Capital</div>
                    </div>
                  </div>


                  <div>
                    <ul role="list" class="list-13">
                      <li class="list-item-14">
                        <a class="text-block-33" href="#"  @click.prevent="followUser">
                                <span v-if="yalosigo == 0">Seguir</span>
                                 <span v-else>Dejar de Seguir</span>
                            </a>
                      </li>
                      <li class="list-item-15">
                        <div class="text-block-34">...</div>
                      </li>
                    </ul>
                  </div>
                </div>
</template>


<script>

export default {
    name: "followSeccion", 
    props:['p', 'avatar', 'username'], 
    data() {
        return {
            producto: false, 
            yalosigo: 0
        }
    },
    methods: {
        async   followUser(){

        if(this.$store.state.cookieLogin == false){
            this.$router.push("/login")
            return false
        }
      await this.$axios
        .$get(
          "/perfil/followunfollow?username=" +
            this.username +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
         this.getDatauser()
        });
      }, 
          async  getDatauser(){

       await this.$axios
        .$get(
          "/perfil/getyalosigo?p=" +
            this.p +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
            this.yalosigo = response.yalosigo
          console.log(response)
        
        });

      }
    },
    mounted() {
        this.getDatauser()
    },
  
}
</script>
