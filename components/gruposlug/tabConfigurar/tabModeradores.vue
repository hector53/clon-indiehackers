<template>
  <div class="group-admin__form">
  <fieldset class="group-admin__fieldset">
    <div class="group-admin__fieldset-header">
      <label class="group-admin__field-label">
        Add New Moderator
      </label>
<!---->    </div>

    <input name="rand-2e370d1f4c" placeholder="Buscar usuario" 
     class="ember-text-field ember-view group-admin__field group-admin__input"
      v-model="searchInput" type="text">
<div class="user-tagger ember-view" v-if="search"> 
        <div class="user-tagger__result"
         v-for="(item, index) in arraySearch" :key="index" @click="addModerador(item.id)">
        <picture  class="user-avatar ember-view user-tagger__avatar">
        <img :src="item.icono">
        </picture>
        <span class="user-tagger__full-name">{{item.nombres}}</span>
        <span class="user-tagger__username">@{{item.username}}</span>
        </div>
  

</div>

  </fieldset>

  <fieldset class="group-admin__fieldset">
    <div class="group-admin__fieldset-header">
      <label class="group-admin__field-label">Current Moderators</label>
    </div>

    <div class="group-admin__field">
        <div class="group-admin__moderator" v-for="(item, index) in moderadores" :key="index">
          <picture id="ember148" class="user-avatar ember-view moderator__avatar">  
             
  <img :src="item.icono">
</picture>
            <span class="moderator__name">{{item.nombres}}</span>
          <span class="moderator__username">@{{item.username}}</span>
            <div id="ember149" class="dropdown-menu 
            dropdown-menu--enabled dropdown-menu--collapsed dropdown-menu--blurred 
            ember-view moderator__dropdown">  
                    <div class="dropdown-menu__toggle" @click="dropMohCange(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember150" class="dropdown-menu__toggle-icon ember-view"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z">
                    </path>
                    </svg>
                    <span class="dropdown-menu__toggle-label">{{item.rol}}</span>
                    </div>

                    <div class="dropdown-menu__items" :id="'dropMo'+index"
                     v-if="dropMo == index"
                      v-click-outside="outDrop"
                      style="inset: 0px auto auto 0px;">
                    <div class="moderator__dropdown-item" @click="selectMiembro(1, item.rol, item.username)">Owner</div>
                    <div class="moderator__dropdown-item" @click="selectMiembro(2, item.rol, item.username)">Moderator</div>
                    <div class="moderator__dropdown-item" @click="selectMiembro(3, item.rol, item.username)">Member</div>
                    </div>

            </div>
        </div>
    </div>
  </fieldset>
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: "tabModeradores",
  props: ["pGroup", "moderadores"],
  async fetch() {},
     directives: {
    ClickOutside
  },
  data() {
    return {
        dropMo: -1, 
        contadorOut: 0, 
        search: false, 
        arraySearch: [], 
        searchInput: ''
    };
  },
  watch: {
        searchInput: function (value) {
      if (value.length > 0) {
        this.search = true 
        this.searchUsers()
      }else{
            this.search = false 
            this.arraySearch = []
      }
    }
  },
  methods: {
      async searchUsers(){
            await this.$axios
        .$get("/grupos/getmembersbyusername?p="+this.searchInput+"&g="+this.pGroup)
        .then((response) => {
          this.arraySearch = response.miembros
        })
      },
    async  changeRolUser(username, rol){

           let formData = new FormData();
            formData.append('username', username);
            formData.append('token', this.$store.state.tokenUser);
            formData.append('rol', rol);
            formData.append('p', this.pGroup);

         const response = await this.$axios.$post('/grupos/changerol/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
            console.log(response)
            if(response.status == 1){
                     this.$emit("changeModeradores", response.moderadores);

            }

      },
      selectMiembro(val, r, u){
         if(val == 1 && r == 'Owner'){
             this.dropMo = -1
         }

         if(val == 2 && r == 'Owner'){
             alert("debe existir un Owner")
         }

         if(val == 3 && r == 'Owner'){
             alert("debe existir un Owner")
         }

          if(val == 2 && r == 'Moderador'){
             this.dropMo = -1
         }

          if(val == 1 && r == 'Moderador'){
              if(confirm("Seguro que quieres promover a este usuario a Owner ?")){
                   this.dropMo = -1
                  this.changeRolUser(u, val)

              }
         }

         if(val == 3 && r == 'Moderador'){
              this.dropMo = -1
              this.changeRolUser(u, val)
         }
          
      },
      outDrop(){
          if(this.contadorOut == 0){
                this.contadorOut++
          }else{

             this.dropMo = -1
             this.contadorOut = 0
          }
           

      },
      dropMohCange(index){
            this.dropMo = index
            this.contadorOut = 0
      }, 

   async   addModerador(val){
         this.search = false 
            this.arraySearch = []
            this.searchInput = ''
          

           let formData = new FormData();
        
            formData.append('c', val);
            formData.append('p', this.pGroup);

         const response = await this.$axios.$post('/grupos/addmoderador/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )
            console.log(response)
            if(response.status == 1){
                     this.$emit("changeModeradores", response.moderadores);

            }

           
      }

      
     },
  mounted() {
      console.log(this.pGroup)
  },
};
</script>

<style>
.dropdown-menu.dropdown-menu--collapsed .dropdown-menu__items {
     display: block; 
}
</style>

