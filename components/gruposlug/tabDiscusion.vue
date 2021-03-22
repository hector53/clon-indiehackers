<template>
 <div class="group-index" >
      <section class="group-index__locked" v-if="miembros < 5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember65"
          class="ember-view group-index__locked-icon"
        >
          <path
            d="M12.399 2.276c-.208-.63.264-1.276.919-1.276.405 0 .783.257.918.664l5.691 14.286c.169.509-.106 1.057-.613 1.226-.507.169-1.055-.106-1.224-.614 0 0-3.593-1.203-7.854.211l2.801 4.354c.291.428.088 1.013-.396 1.173l-1.904.634c-.131.044-.267.066-.401.066-.357 0-.705-.152-.951-.429l-3.85-4.247c-2.096.661-4.468-.102-5.26-2.076-.182-.453-.275-.936-.275-1.421 0-1.407.786-2.842 2.492-3.68 8.541-4.194 9.907-8.871 9.907-8.871m6.067.913c1.518.641 2.789 1.865 3.459 3.516.669 1.651.607 3.42-.034 4.94l1.474.626c.415-.985.635-2.053.635-3.141 0-3.167-1.873-6.133-4.911-7.419l-.623 1.478zm-1.064 2.523c.874.368 1.608 1.073 1.992 2.024.386.951.351 1.968-.017 2.843l1.436.61c.524-1.246.576-2.691.028-4.042-.547-1.352-1.588-2.352-2.831-2.877l-.608 1.442z"
          >
            <!---->
          </path>
        </svg>
        <p class="group-index__locked-heading">
          This group hasn't launched yet.
        </p>
        <p class="group-index__locked-paragraph">
          It will go live once
          <span
            id="ember66"
            class="firebase-counter ember-view group-index__locked-counter"
          >
            <span class="firebase-counter__num">{{miembrosO}}</span>
          </span>
          more members join.
        </p>
        <p class="group-index__locked-paragraph">Try inviting some friends!</p>
      </section>

      <postSeccionGrupos :pGroup="pGroup" :excerptGrupo="excerptGrupo" :tituloGrupo="tituloGrupo" :imagenGrupo="imagenGrupo" :subNav="0" :classSec="'group-index__discussions'"  v-if="miembros > 4">

      </postSeccionGrupos>

      <section class="group-index__sidebar">
        <header class="group-index__sidebar-header">About</header>
        <div class="group-index__about-section" v-if="contenido != ''">
          <div class="about-section__text-block">
            {{ contenido }}
          </div>
        </div>
        <div class="group-index__about-section">
          <div class="about-section__icon-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember68"
              class="ember-view about-section__icon"
            >
              <path
                d="M17.95 24h-11.9v-2.416c0-1.478-.22-1.698-.639-2.445-1.447-2.581-3.478-6.221-4.291-7.767-.218-.414-.083-.925.31-1.178h.001c.414-.266.959-.194 1.291.169.909.994 2.806 2.975 4.435 4.665 1.221 1.269 1.383 1.92 4.775 1.961 3.391.041 3.615-.614 4.911-1.961 1.629-1.69 3.526-3.671 4.435-4.665.332-.363.877-.435 1.291-.169h.001c.264.17.412.456.414.752.001.144-.032.291-.104.426-.813 1.546-2.844 5.186-4.291 7.767-.419.747-.639.873-.639 2.445v2.416zm-5.95-18c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-1.351-5.31l-.961-.69-3.657 5.094c-1.18-1.806-3.457-2.283-4.631-.648-.262.366-.385.786-.387 1.207-.004.741.363 1.483.987 1.932 1.164.835 2.968 1.013 4.046-.485l4.603-6.41zm8.671-.69l1.201 2.217 2.479.457-1.737 1.827.331 2.499-2.274-1.088-2.275 1.088.332-2.499-1.737-1.827 2.479-.457 1.201-2.217z"
              >
                <!---->
              </path>
            </svg>
            <div class="about-section__info">{{ miembros }} members</div>
          </div>
          <div class="about-section__icon-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember69"
              class="ember-view about-section__icon"
            >
              <path
                d="M0 22h12v2h-12v-2zm11-1h-10c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2zm6.369-12.839l-2.246 2.197s6.291 5.541 8.172 7.144c.475.405.705.929.705 1.446 0 1.015-.888 1.886-1.95 1.819-.52-.032-.981-.303-1.321-.697-1.619-1.875-7.07-8.249-7.07-8.249l-2.245 2.196-5.857-5.856 5.957-5.857 5.855 5.857zm-12.299.926c-.195-.193-.458-.302-.733-.302-.274 0-.537.109-.732.302-.193.195-.303.458-.303.733 0 .274.11.537.303.732l5.513 5.511c.194.195.457.304.732.304.275 0 .538-.109.732-.304.194-.193.303-.457.303-.732 0-.274-.109-.537-.303-.731l-5.512-5.513zm8.784-8.784c-.195-.194-.458-.303-.732-.303-.576 0-1.035.467-1.035 1.035 0 .275.108.539.303.732l5.513 5.513c.194.193.456.303.731.303.572 0 1.036-.464 1.036-1.035 0-.275-.109-.539-.304-.732l-5.512-5.513z"
              >
                <!---->
              </path>
            </svg>
            <div class="about-section__info">
              moderated by
              <div
                class="user-link ember-view"
                v-for="(item, index) in moderadores"
                :key="index"
              >
                <nuxt-link
                  :to="{
                    name: 'perfil-username',
                    params: { username: item.username },
                  }"
                  class="user-link__link ember-view"
                >
                  <picture
                    id="ember73"
                    class="user-avatar ember-view user-link__avatar"
                  >
                    <img src="/nonexistent-image.png" />
                  </picture>
                  <span class="user-link__name user-link__name--username">
                    {{ item.username }} &nbsp;
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!---->

        <!---->
      </section>
    </div>
  
</template>

<script>
export default {
  name: "tabDiscusion",
  props:['miembros', 'miembrosO', 'contenido', 'excerptGrupo', 'moderadores', 'pGroup', 'tituloGrupo', 'imagenGrupo'],
   async fetch() {

        
},
  data() {
    return {
        
    };
  },
  watch: {
  },
  methods: {
   
  
  },
  mounted() {
  },
};
</script>

