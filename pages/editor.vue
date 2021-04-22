<template>
<div class="col-md-6 col-sm-6 col-xs-12">
      <client-only>
        <tinymce class="tinyEditor"  id="d1" v-model="content"></tinymce>
      </client-only>
  </div>
</template>


<script>

export default {
  name: "editorvue",
    data() {
    return {
        
    };
  },
   async fetch() {
   },
  methods: {
     
     },
  mounted() {
  },
};
</script>
<style >


</style>