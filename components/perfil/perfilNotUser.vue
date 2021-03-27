<template>
  <div class="user__content">

    <header class="user-header">
      <div class="user-header__content">
        <div class="user-header__avatar-wrapper
                   
                   ">
          <picture id="ember1951" class="user-avatar ember-view user-header__avatar"> 

  <img :src="objUser.avatar">
</picture>
      <div class="user-header__satellites"
       v-if="objUser.email != '' || objUser.twitter != ''">
      <a class="user-header__satellite user-header__satellite--contact"
       :href="'https://twitter.com/'+objUser.twitter" target="_blank" title="Twitter">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
       class="user-header__satellite-icon ember-view">
       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
      </path>
      </svg>
      </a>

      <a class="user-header__satellite user-header__satellite--contact"
       :href="'mailto:'+objUser.email" target="_blank" title="Email">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember283" class="user-header__satellite-icon ember-view"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z">
      <!----></path>
      </svg>
      </a>
      </div>
        </div>

        <div class="user-header__text-content">
          <h1 class="user-header__name">
            <span class="user-header__username">
                @{{objUser.username}} 
            </span>

            <span class="user-header__full-name" v-if="objUser.nombres != ''">{{objUser.nombres}}</span>

<!---->
          

<!---->          </h1>

       <div class="user-header__metadata">
                <span class="user-header__metadata-item" v-if="objUser.edad != ''">
                  {{objUser.edad}}
                  
                </span>
                <span class="user-header__metadata-separator" v-if="objUser.edad != ''">·</span>

                <span class="user-header__metadata-item" 
                v-if="objUser.ciudad != ''">{{objUser.ciudad}}</span>
                <span class="user-header__metadata-separator" v-if="objUser.ciudad != ''">·</span>

              <span class="user-header__metadata-item">
                {{objUser.fecha}}
                  <span class="user-header__metadata-separator"  v-if="objUser.bio != ''">·</span>
              </span>

                <span class="user-header__bio"
                 v-if="objUser.bio != ''" >{{objUser.bio}}</span>
          </div>
        </div>
      </div>
    </header>


    <div class="user__body">
        <div class="user-actions" data-scrollable-outer="">
          <div class="user-actions__wrapper" data-scrollable-middle="">
            <div class="user-actions__content" data-scrollable-inner="">
              <a href="/Nananonaweb" 
               class="ember-view user-actions__action"
              @click.prevent="tab = 0"
               :class="{'active' : tab == 0}"
               >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1955" class="ember-view user-actions__action-icon"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z">
<!----></path>
</svg>
                <span class="user-actions__action-label">Posts</span>
              </a>

              <a href="/Nananonaweb/history" 
               class="ember-view user-actions__action"
               @click.prevent="tab = 1"
               :class="{'active' : tab == 1}"
               >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1957" class="ember-view user-actions__action-icon"><path d="M3.732 13h1.504s2.32-8.403 2.799-10.263c.156-.605.646-.738.965-.737.319.001.826.224.947.74.581 2.466 3.11 13.908 3.11 13.908s1.597-6.441 1.943-7.891c.101-.425.536-.757 1-.757.464 0 .865.343 1 .707.312.841 1.675 4.287 1.677 4.293h1.591c.346-.598.992-1 1.732-1 1.104 0 2 .896 2 2s-.896 2-2 2c-.741 0-1.388-.404-1.734-1.003-.939-.001-1.856 0-2.266.003-.503.004-.774-.289-.928-.629l-.852-2.128s-1.828 7.367-2.25 8.999c-.153.595-.646.762-.97.758-.324-.004-.847-.198-.976-.783-.549-2.487-2.081-9.369-3.123-14.053 0 0-1.555 5.764-1.936 7.099-.13.454-.431.731-.965.737h-2.268c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1z">
<!----></path>
</svg>
                <span class="user-actions__action-label">History</span>
              </a>

           

            </div>
          </div>
        </div>

     <tab-posts v-if="tab == 0"></tab-posts>
     <tab-history v-if="tab == 1"></tab-history>

    </div>


      <div class="user-sidebar">
          <!--Sistema FOllows-->
        <perfil-follow :arrayDataUser="arrayDataUser" @recargarDataUser="recargarDataUser"></perfil-follow>
      
            <!--Sistema FOllows Fin-->

        <section class="user-sidebar__section user-products">
          <header class="user-sidebar__section-header">
            <h2 class="user-sidebar__section-title">Products</h2>
          </header>

<!---->
<a href="/new-product" id="ember1966" class="user-products__new-link ember-view">              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember1967" class="user-products__new-icon ember-view"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z">
<!----></path>
</svg>
              <span class="user-products__new-label">Add Product</span>
</a>        </section>

<!---->      </div>
  </div>
</template>

<script>
import TabHistory from '~/components/perfil/tabHistory.vue';
import tabPosts from '~/components/perfil/tabPosts.vue';
export default {
  components: { tabPosts, TabHistory },
  layout: "perfil",
    props: ['arrayDataUser'],
  name: "perfilNotUser",
  data() {
    return {
      tab: 1, 
      objUser: {}
    };
  },
  watch: {
    
  },
  methods: {
         recargarDataUser(){
           this.$emit("recargarDataUser");
      },
    async  getUserData(){
        await this.$axios
        .$get("/perfil/byslugnotuser?slug=" + this.$route.params.username)
        .then((response) => {
             if(response.status == 0){
         this.$router.push("/")
         return false
       }
     //    console.log(response);
         this.objUser = response
        });
      }
  },
  mounted() {
     this.getUserData()
  },
};
</script>

