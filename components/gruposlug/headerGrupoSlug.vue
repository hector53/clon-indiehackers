<template>
<div>

<header class="group__header">
      <picture id="ember55" class="group-icon ember-view group__icon">
        <img :src="imagenGrupo" />
      </picture>
      <div class="group__header-text">
        <h1 class="group__name">{{ tituloGrupo }}</h1>
        <p class="group__description">{{ excerptGrupo }}</p>
      </div>
    </header>

    <nav class="group__subheader">
      <div class="group__navbar">
        <a
        @click.prevent="changeTab(0)"
              :href="$route.params.slug"
          class="group__nav-button ember-view" :class="{'active': tab == 0}"
        >
          <span class="nav-button__label">Discussions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember57"
            class="ember-view nav-button__icon"
          >
            <path
              d="M20 9.352c0-4.852-4.75-8.352-10-8.352-5.281 0-10 3.527-10 8.352 0 1.71.615 3.39 1.705 4.695.047 1.527-.85 3.719-1.66 5.312 2.168-.391 5.252-1.258 6.648-2.115 7.698 1.877 13.307-2.842 13.307-7.892zm-14.5 1.381c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm7.036 1.441c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348z"
            >
              <!---->
            </path>
          </svg> </a >
        <a
        @click.prevent="changeTab(1)"
              :href="$route.params.slug+'/miembros'"
          class="group__nav-button ember-view" :class="{'active': tab == 1}"
        >
          <span class="nav-button__label">Members</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember59"
            class="ember-view nav-button__icon"
          >
            <path
              d="M17.95 24h-11.9v-2.416c0-1.478-.22-1.698-.639-2.445-1.447-2.581-3.478-6.221-4.291-7.767-.218-.414-.083-.925.31-1.178h.001c.414-.266.959-.194 1.291.169.909.994 2.806 2.975 4.435 4.665 1.221 1.269 1.383 1.92 4.775 1.961 3.391.041 3.615-.614 4.911-1.961 1.629-1.69 3.526-3.671 4.435-4.665.332-.363.877-.435 1.291-.169h.001c.264.17.412.456.414.752.001.144-.032.291-.104.426-.813 1.546-2.844 5.186-4.291 7.767-.419.747-.639.873-.639 2.445v2.416zm-5.95-18c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-1.351-5.31l-.961-.69-3.657 5.094c-1.18-1.806-3.457-2.283-4.631-.648-.262.366-.385.786-.387 1.207-.004.741.363 1.483.987 1.932 1.164.835 2.968 1.013 4.046-.485l4.603-6.41zm8.671-.69l1.201 2.217 2.479.457-1.737 1.827.331 2.499-2.274-1.088-2.275 1.088.332-2.499-1.737-1.827 2.479-.457 1.201-2.217z"
            >
              <!---->
            </path>
          </svg> </a>
          <a v-if="rolUser == 2 || rolUser == 1"
          href="/group/latam-unicorns/admin"
          
          class="group__nav-button ember-view"
          @click.prevent="changeTab(2)"
          :class="{'active': tab == 2}"
        >
          <span class="nav-button__label">Settings</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember61"
            class="ember-view nav-button__icon"
          >
            <path
              d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z"
            >
              <!---->
            </path>
          </svg>
        </a>
      </div>

      <div class="group__actions">
        <div v-if="rolUser == 3"
        @click="joinGroup"
          class="group__action-button group__action-button--join group__action-button--checked"
         
        >
          <div>
            <span class="action-button__label action-button__label--hovered"
              >Leave</span
            >
            <span class="action-button__label"> Member </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember60"
              class="ember-view action-button__icon action-button__icon--hovered"
            >
              <path
                d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"
              >
                <!---->
              </path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember61"
              class="ember-view action-button__icon"
            >
              <path
                d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
              >
                <!---->
              </path>
            </svg>
          </div>
        </div>

        <a v-if="rolUser == 2 || rolUser == 1"
          href="/group/latam-unicorns/admin/moderators"
          id="ember62"
          class="ember-view group__action-button group__action-button--join group__action-button--checked"
        >
          <div>
            <span class="action-button__label action-button__label--hovered">
              Edit Membership
            </span>
            <span class="action-button__label">
              {{ rolName }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember63"
              class="ember-view action-button__icon action-button__icon--hovered"
            >
              <path
                d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"
              >
                <!---->
              </path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember64"
              class="ember-view action-button__icon"
            >
              <path
                d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
              >
                <!---->
              </path>
            </svg>
          </div>
        </a>

        <div class="group__action-button group__action-button--join" 
         @click="joinGroup"
         v-if="rolUser == 0">
          <div>
            <span class="action-button__label">Join Group</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember49"
              class="ember-view action-button__icon"
            >
              <path
                d="M8 9v-4l8 7-8 7v-4h-8v-6h8zm6-7c-1.787 0-3.46.474-4.911 1.295l.228.2 1.395 1.221c1.004-.456 2.115-.716 3.288-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.284-.26-3.288-.715l-1.395 1.221-.228.2c1.451.82 3.124 1.294 4.911 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"
              >
                <!---->
              </path>
            </svg>
          </div>
        </div>

        <!---->
      </div>
    </nav>

</div>
  
</template>



<script>
export default {
  name: "headerGrupoSlug",
  props: ['imagenGrupo', 'tituloGrupo', 'excerptGrupo', 'rolUser',  'rolName', 'pGroup', 'tab' ],
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
    changeTab(tab){
       this.$emit("changeTab", tab);
    },
    async  joinGroup(){
      if(this.$store.state.cookieLogin){
    //console.log("hola join o leave")
          let formData = new FormData();
            
            formData.append('token', this.$store.state.tokenUser);
            formData.append('pGroup', this.pGroup);
            const response = await this.$axios.$post('/grupos/join/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
              }
            )

      
            if(response.status == 0){
                
            }else{
               this.$emit("getGrupoNow");
              
            }
      }else{
        this.$router.push({name: 'login'})
      }
     
    }
  
  },
};
</script>

