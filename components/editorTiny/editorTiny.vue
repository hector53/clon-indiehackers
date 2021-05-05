<template>
  <div>
  <textarea id="tinyEditorMio"></textarea>
  </div>
</template>


<script>
export default {
  name: "editorTiny",
    data() {
    return {
        
    };
  },
   async fetch() {
   },
  methods: {
     
     },
  mounted() {
 if (process.browser){
    
    }

     if (process.client) {
        tinymce.init({
      selector: "#tinyEditorMio",
     plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      toolbar_mode: 'floating',
    });
   }
      
     
 
  },
};


</script>
