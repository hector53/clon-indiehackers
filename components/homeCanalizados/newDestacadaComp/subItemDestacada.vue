<template>
    <div>
          <ul v-if="relacionados.length > 0" >
              <div v-for="(itemR, index2) in relacionados" :key="index2">
                    <li v-show="index2 > 0 && showComplete"  >
                    <p class="tituloRelacionado">{{itemR.titulo}}</p>
                    <div class="d-flex">
                    <p class="infoAdicional">{{itemR.username}} ·</p>
                    <p class="infoAdicional">{{itemR.fecha}}</p>
                    </div>
                    </li>
              </div>
          </ul>
          <i class="fas fa-chevron-down" @click="showComplete = !showComplete" :class="{ active: showComplete }" style="position: absolute; right: 40px;"></i>
    </div>   
</template>
<script>
export default {
    props:["relacionados", "slug"],
    data() {
        return {
            showComplete: false
        }
    },
    methods: {
        
    },
}
</script>