<template>
  <div>
<perfil-user v-if="$store.state.username == $route.params.username"
 :arrayDataUser="arrayDataUser" @recargarDataUser="recargarDataUser"></perfil-user>
<perfil-not-user v-else  :arrayDataUser="arrayDataUser"  @recargarDataUser="recargarDataUser" ></perfil-not-user>
  </div>
</template>

<script>
import perfilUser from '~/components/perfil/perfilUser.vue';
import perfilNotUser from '~/components/perfil/perfilNotUser.vue';

export default {
  components: { perfilUser, perfilNotUser },
  layout: "perfil",
  name: "perfil",
  data() {
    return {
      arrayDataUser: {}
    };
  },
  async fetch() {
      await this.$axios
        .$get("/perfil/getdatainicial?username=" + this.$route.params.username+"&token="+this.$store.state.tokenUser)
        .then((response) => {
            console.log(response)
            this.arrayDataUser = response
        });
  },
  watch: {
    
  },
  methods: {

    recargarDataUser(){
      this.$fetch()
    }
    
  },
};
</script>

