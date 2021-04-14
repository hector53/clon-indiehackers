<template>
  <div class="poll-viewer ember-view post-page__poll-viewer">
    <header class="poll-viewer__header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="ember-view post-page__action-icon"
      >
        <path
          d="M7 19h-6v-11h6v11zm8-18h-6v18h6v-18zm8 11h-6v7h6v-7zm1 9h-24v2h24v-2z"
        >
          <!---->
        </path>
      </svg>
      <span>{{pregunta}}</span>
    </header>

    <div class="poll-viewer__vote-view" v-if="resultados == false && loadingResultados == false && vote == 0 ">
      <ol class="poll-viewer__options">
        <li
          class="poll-viewer__option"
          v-for="(item, index) in arrayMiEncuesta.opciones"
          :key="index"
        >
          <input
            class="radioOp"
            type="radio"
            :id="'op' + index"
            :value="item.id"
            v-model="opcionEncuesta"
          />
          <label :for="'op' + index">{{ item.opcion }}</label>
        </li>
      </ol>
      <button :disabled="disabled" class="poll-viewer__vote-button" @click="votarEncuesta()">
        <div><span>Vote</span></div>
      </button>
    </div>

    <div class="poll-viewer__results-view" v-if="resultados && vote == 0">
      <ol class="poll-viewer__votes">
        <li class="poll-viewer__vote"   v-for="(item, index) in arrayMiEncuesta.opciones"
          :key="index">
          <strong>{{item.porcentaje}}%</strong>
          <span>{{item.opcion}}</span>
          <div class="poll-viewer__vote-bg" :style="'width:'+item.porcentaje+'%'"></div>
        </li>
     
      </ol>
    </div>

    <div 
    v-if="resultados == false && loadingResultados && vote == 0"
      class="poll-viewer__loading-spinner loading-spinner ember-view"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="ember140"
        class="ember-view loading-spinner__icon"
      >
        <path
          d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"
        >
          <!---->
        </path>
      </svg>
    </div>



    <div class="poll-viewer__results-view" v-if="vote == 1">
    <ol class="poll-viewer__votes">
        <li class="poll-viewer__vote
                   poll-viewer__vote--selected"
                    v-for="(item, index) in arrayMiEncuesta.opciones"
          :key="index"
                   >
          <strong>{{item.porcentaje}}%</strong>
          <span>{{item.opcion}}</span>
          <div class="poll-viewer__vote-bg" :style="'width:'+item.porcentaje+'%'"></div>
        </li>
     
    </ol>
  </div>


    <footer class="poll-viewer__footer">
      <span class="poll-viewer__num-votes">{{ votos }} Votos</span>
      <button class="poll-viewer__see-results" @click="verResultados" v-if="vote == 0">
        <div>
          <span>Ver Resultados</span>
        </div>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "encuestaPost",
  components: {},
  props: ["arrayEncuesta", "idP"],
  watch: {
    opcionEncuesta: function (value) {
      if (value.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  },
  data() {
    return {
      opcionEncuesta: "",
      arrayMiEncuesta: this.arrayEncuesta,
      disabled: true,
      votos: this.arrayEncuesta.VotosTotales,
      resultados: false,
      loadingResultados: false,
      vote: this.arrayEncuesta.siVote, 
      pregunta: this.arrayEncuesta.pregunta
    };
  },
  methods: {
     async votarEncuesta(){
         this.loadingResultados = true
        
          let formData = new FormData();
      formData.append("idP", this.idP);
      formData.append("token", this.$store.state.tokenUser);
       formData.append("op", this.opcionEncuesta);
      const response = await this.$axios.$post("/post/votoencuesta/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    //  console.log(response)
      if(response.status == 1){
          this.getEncuesta(response.p)
      }
        
      
      
           
      },
    verResultados() {
      this.resultados = !this.resultados;
    },
    async getEncuesta(id){
     await this.$axios
      .$get("/get/encuestabyid/?p=" + id + "&token="+this.$store.state.tokenUser)
      .then((response) => {
       //   console.log(response    )
            this.loadingResultados = false
          this.arrayMiEncuesta = response
          this.votos = response.VotosTotales
          this.vote = response.siVote

      })
    }

  },
  async fetch() {},
  mounted() {
 //   console.log(this.arrayEncuesta)
  },
};
</script>

