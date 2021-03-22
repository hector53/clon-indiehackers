<template>
   <div class="group-admin__form">
      <fieldset class="group-admin__fieldset">
        <div class="group-admin__fieldset-header">
          <label class="group-admin__field-label">Icon</label>
          <!---->
        </div>
        <div class="group-admin__field group-admin__file-upload" @click="changeIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember214"
            class="ember-view"
          >
            <path
              d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z"
            >
              <!---->
            </path>
          </svg>
          <p>Click to Upload</p>
        </div>
        <!---->
      </fieldset>
        <input style="display: none"
        ref="fileInput" id="filePost"
        type="file" @change="previewFiles"
        enctype="multipart/form-data">
      <fieldset class="group-admin__fieldset">
        <div class="group-admin__fieldset-header">
          <label class="group-admin__field-label">One-Liner</label>
          <!---->
        </div>
        <input
          tabindex="3"
          placeholder="Describe this group in just a few words"
          maxlength="75"
          id="ember215"
          v-model="excerpt"
          class="group-admin__field group-admin__input ember-text-field ember-view"
          type="text"
        />
        <!---->
      </fieldset>

      <fieldset class="group-admin__fieldset">
        <div class="group-admin__fieldset-header">
          <label class="group-admin__field-label">About</label>
          <!---->
        </div>
        <textarea
          rows="3"
          tabindex="4"
          placeholder="Explain who this group is for and why it exists in a few sentences"
          maxlength="250"
          id="ember216"
          v-model="content"
          class="group-admin__field group-admin__input ember-text-area ember-auto-resize ember-view"
          style="height: 95.4688px; overflow: hidden"
        ></textarea>
        <!---->
      </fieldset>

      <fieldset class="group-admin__fieldset">
        <div class="group-admin__fieldset-header">
          <label class="group-admin__field-label">Topics</label>
          <!---->
        </div>

        <div
          id="ember217"
          class="tag-selector ember-view group-admin__tag-selector"
        >
          <div class="tag-selector__search-bar">
            <!---->
            <input
              placeholder="Search topics"
              id="ember221"
              class="ember-text-field ember-auto-resize ember-view tag-selector__input"
              type="text"
              style="width: 117.035px; overflow: hidden"
            />

            <!---->
          </div>
              
          <div class="group__actions">
            
            <button class="group__action-button group__action-button--join" :disabled="basicDisable" @click="guardarBasic">
              <div>
                <span class="action-button__label">Guardar</span>
              </div>
            </button>
          </div>
        </div>
      </fieldset>
    </div>
</template>

<script>
export default {
  name: "tabBasic",
  props: ["pGroup", "excerptGrupo", "contenido"],
  async fetch() {},
  data() {
    return {
    
   excerpt: this.excerptGrupo,
      content: this.contenido,
      basicDisable: false,
       filePost: '',
       iconoGrupo: ''
    };
  },
  watch: {},
  methods: {

      
    
async   previewFiles(e) {
        const file = e.target.files[0];
        this.filePost = file
        console.log(file)
      this.iconoGrupo = URL.createObjectURL(file);
           let formData = new FormData();
            formData.append('file', file);
            formData.append('token', this.$store.state.tokenUser);
            formData.append('pGroup', this.pGroup);

         const response = await this.$axios.$post('/grupos/changeIcon/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

            console.log(response)
            if(response.status == 0){
                alert("Error en la imagen")
            }
            if(response.status == 1){
                 this.$emit("changeIconGrupo", this.iconoGrupo);
            }

     

      },
    async  guardarBasic(){
        
          this.basicDisable = true
  let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('pGroup', this.pGroup);
            formData.append('excerpt', this.excerpt);
            formData.append('content', this.content);
         
 const response = await this.$axios.$post('/grupos/savebasic/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

            if(response.status == 1){
                this.basicDisable = false
            }else{
              alert("error")
            }

      },
      changeIcon(){
       document.getElementById("filePost").click()
      }
    
    },
  mounted() {},
};
</script>

