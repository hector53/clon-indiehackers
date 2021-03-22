<template>
  <div class="group-admin">
    <nav class="group-admin__nav">
      <a
       @click.prevent="tabChange(0)"
        class="ember-view group-admin__nav-link"
        :class="{'active' : tabConfigurar == 0}"
      >
        <span class="nav-link__label">The Basics</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember207"
          class="ember-view nav-link__icon"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
            <!---->
          </path>
        </svg>
      </a>
      <a
      @click.prevent="tabChange(1)"
      :class="{'active' : tabConfigurar == 1}"
        class="ember-view group-admin__nav-link"
      >
        <span class="nav-link__label">Post Guidelines</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember209"
          class="ember-view nav-link__icon"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
            <!---->
          </path>
        </svg>
      </a>
      <a
         @click.prevent="tabChange(2)"
         :class="{'active' : tabConfigurar == 2}"
        class="ember-view group-admin__nav-link"
      >
        <span class="nav-link__label">Moderators</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember211"
          class="ember-view nav-link__icon"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
            <!---->
          </path>
        </svg>
      </a>
      <a
         @click.prevent="tabChange(3)"
         :class="{'active' : tabConfigurar == 3}"
        class="ember-view group-admin__nav-link"
      >
        <span class="nav-link__label">Resources</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember213"
          class="ember-view nav-link__icon"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z">
            <!---->
          </path>
        </svg>
      </a>
      <!---->
    </nav>

<!--The Basic-->
<tabBasic :pGroup="pGroup" :excerptGrupo="excerptGrupo"
 @changeIconGrupo="changeIconGrupo" :contenido="contenido" v-if="tabConfigurar == 0" ></tabBasic>
<!--The Basic-->

<!--The guidelines-->
<tabGuidelines :pGroup="pGroup"  v-if="tabConfigurar == 1" ></tabGuidelines>
<!--The guidelines-->

<!--The guidelines-->
<tabModeradores :pGroup="pGroup" @changeModeradores="changeModeradores"  v-if="tabConfigurar == 2" :moderadores="moderadores" ></tabModeradores>
<!--The guidelines-->


<!--The Resources-->
<tabResources :pGroup="pGroup"  v-if="tabConfigurar == 3" ></tabResources>
<!--The Resources-->


  </div>
</template>

<script>
import tabBasic from '~/components/gruposlug/tabConfigurar/tabBasic.vue';
import tabGuidelines from '~/components/gruposlug/tabConfigurar/tabGuidelines.vue';
import tabModeradores from '~/components/gruposlug/tabConfigurar/tabModeradores.vue';
import tabResources from '~/components/gruposlug/tabConfigurar/tabResources.vue';

export default {
  name: "tabConfigurar",
  props: ["pGroup", "excerptGrupo", "contenido", "moderadores"],
  components: {tabBasic, tabGuidelines, tabModeradores, tabResources},
  async fetch() {},
  data() {
    return {
      tabConfigurar: 0

    };
  },
  watch: {},
  methods: {
    changeModeradores(moderadores){
        this.$emit("changeModeradores", moderadores);
    },
   
    tabChange(tab){
      this.tabConfigurar = tab
    },
    changeIconGrupo(icono){
 this.$emit("changeIconGrupo", icono);
    },
    
  },
  mounted() {},
};
</script>

