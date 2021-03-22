<template>
  <div class="new-group__body">
    <h1 class="new-group__title">Create a New Group</h1>

    <div class="new-group__agreements-wrapper">
      <p class="new-group__agreements-precursor">
        Creating a group means growing and running your own community on Indie
        Hackers! Below are a few things you should know.
      </p>

      <div class="new-group__agreement">
        <label class="new-group__agreement-label">
          Don't create groups that already exist.
        </label>
        <p class="new-group__agreement-text">
          We remove duplicate groups, because they make it harder to find posts.
          Check the <a href="/groups" id="ember45" class="ember-view">groups page</a> to
          see what's already out there.
        </p>
        <button class="new-group__agreement-button" tabindex="1" disabled="">
          <div>
            <span>Okay, got it</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember94" class="ember-view"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z">
<!----></path>
</svg>
          </div>
        </button>
      </div>

        <div class="new-group__agreement">
          <label class="new-group__agreement-label">
              Get to at least 10 members.
          </label>
          <p class="new-group__agreement-text">
              New groups are locked until they start gaining traction.
             It's up to you to invite members and grow your community!
          </p>
          <button class="new-group__agreement-button" tabindex="1" disabled="">
            <div>
              <span>Okay, I'll invite people</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember95" class="ember-view"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z">
<!----></path>
</svg>
            </div>
          </button>
        </div>

        <div class="new-group__agreement">
          <label class="new-group__agreement-label">
            Keep the conversation going.
          </label>
          <p class="new-group__agreement-text">
            We'll also remove groups that become inactive. Running a community
            means doing hands-on work to keep it lively!
          </p>
          <button class="new-group__agreement-button" tabindex="1" disabled="">
            <div>
              <span>Okay, I'll keep things active</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember96" class="ember-view"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z">
<!----></path>
</svg>
            </div>
          </button>
        </div>
    </div>

      <div class="new-group__form-wrapper">
        <form class="new-group__form">
          <fieldset class="new-group__form-fieldset">
            <label class="new-group__form-label">
              What's the name of your group?
            </label>
            <p class="new-group__description">
              Choose carefully, because you can't change this later.
            </p>
            <input tabindex="2" placeholder="e.g. Indie Podcasters" v-model="titulo"
             maxlength="25" id="ember97" class="new-group__form-field ember-text-field ember-view" 
             type="text">
          </fieldset>

          <fieldset class="new-group__form-fieldset">
            <label class="new-group__form-label">
              What's the purpose of the group?
            </label>
            <input tabindex="3"
             placeholder="e.g. Talk shop with others making a living from their podcasts." 
             v-model="excerpt"
             maxlength="75" id="ember98" class="new-group__form-field ember-text-field ember-view"
              type="text">
          </fieldset>
              <p class="new-group__form-error" v-if="errorShow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember3720" class="ember-view"><path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z">
              <!----></path>
              </svg>
                {{errorText}}
              </p>

          <button class="new-group__submit-button" :disabled="disableB" tabindex="4" @click.prevent="createGroup">
            <div class="submit-button__content">
              <span class="submit-button__label">Create Group</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember99" class="ember-view submit-button__icon"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
            </div>
          </button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  layout: "grupo-nuevo",
  name: "grupo-nuevo",
  data() {
    return {
        titulo: '', 
        excerpt: '', 
        errorShow: false, 
        errorText: '', 
        disableB: false

     
    };
  },
  watch: {
    
   
  },
  methods: {
   async   createGroup(){
     if(this.titulo == ''){
       this.errorShow = true
       this.errorText = 'Por favor introduzca el nombre del grupo'
       return false
     }

       if(this.excerpt == ''){
       this.errorShow = true
       this.errorText = 'Por favor introduzca una breve descripcion del grupo'
       return false
     }
    this.disableB = true
         let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('titulo', this.titulo);
            formData.append('excerpt', this.excerpt);
         
 const response = await this.$axios.$post('/grupos/addnuevo/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

if(response.status == 0){
  this.errorShow = true
       this.errorText = 'Error de usuario'
}
if(response.status == 1){
     this.$router.push({ name: 'grupo-slug', params: {slug: response.slug} })
}
  if(response.status == 2){
  this.errorShow = true
       this.errorText = 'Error al publicar'
}
  
            console.log(response)


      }
 },
};
</script>

