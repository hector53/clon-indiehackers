<template>
  <div>
     <div class="text-block-31">Moderadores</div>
                    <div class="div-block-462" v-for="(item, index) in arrayMiembros"
                :key="index">
                        
                      
                            <nuxt-link class="link_miembros" :to="{name:'u-username',
                             params: {username: item.username}}" >
                            <img 
                            :src="item.icono"
                            loading="lazy"
                            sizes="32px"
                            alt=""
                            class="imageMiembros"
                            />
                           <span class="nombresMiembros">@{{item.username}} {{item.nombres}} </span> 
                            </nuxt-link>
                        
                    </div>

                  
  </div>
</template>


<script>
import likeCanalizados from '~/components/likes/likeCanalizados.vue';
export default {
  components: { likeCanalizados },
  name: "grupo-slug-miembros",
  layout: "grupoCanalizados",
  head(){
    return {
                 link: [
        {
          rel: 'canonical',
          href: 'https://canalizados.com/g/' + this.$route.params.slug+'/miembros'
        }
      ]
     
    }
  },
  data() {
    return {
      arrayMiembros: [],
    };
  },
  async fetch() {
      
  await this.$axios
        .$get("/grupos/getmembers?p="+this.$route.params.slug)
        .then((response) => {
            console.log(response)
          this.arrayMiembros = response.miembros
        })
  },
};
</script>
<style >
.miembrosLoop{
    width: 100%;
}
.imageMiembros{
    width: 50px;
}
.link_miembros{
    display: flex;
}
.nombresMiembros{
        margin-top: 10px;
    margin-left: 10px;
    font-size: 18px;
}
.div-block-462{
    margin-top: 15px;
}
</style>
