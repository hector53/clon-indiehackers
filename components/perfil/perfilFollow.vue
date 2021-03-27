<template>
  <div>
    <div class="user-sidebar__follow-wrapper">
      <button
        @click="followUser"
        class="follow-button follow-button--not-following follow-button--loaded ember-view"
        follow-button
        follow-button--following
        follow-button--loaded
        ember-view
        :class="{
          'follow-button follow-button--following follow-button--loaded ember-view':
            arrayDataUser.yalosigo == 1,
          'follow-button follow-button--not-following follow-button--loaded ember-view':
            arrayDataUser.yalosigo == 0,
        }"
      >
        <div class="follow-button__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember2005"
            class="follow-button__icon ember-view"
          >
            <path
              d="M2.091 18.014c.901-4.007 4.936-7.996 9.955-7.996 4.526 0 8.683 3.793 9.845 7.996 0 0-14.825.008-19.8 0m1.253-7c.499-1.244.018-2.555 1.064-2.735.33-.058 1.53.005 2.075-.076.837-.123 1.326-.433 1.835-1.018.753-.91.923-1.56 1.948-.948.981.618 1.76 1.151 2.992.844 1.365-.341 2.027-1.77 2.685-.684.918 1.593 1.029 1.882 3.5 2.17 1.169.161 1.221 1.399 1.37 2.655.128.834.776 1.841 1.249 2.544-2.273-3.355-5.832-5.67-9.935-5.749-4.152-.022-7.828 2.176-10.094 5.399.016-.022.998-1.623 1.311-2.402m19.923 4.912l.004.008c.424-.651.72-1.362.686-2.152-.042-.932-.466-1.484-.929-2.259-.289-.505-.224-.614-.312-1.261-.061-.462-.143-.925-.293-1.368-.756-2.218-2.373-2.266-3.511-2.383-.552-.068-.691-.196-.842-.416-.402-.598-.414-.928-.973-1.438-.476-.432-1.102-.657-1.722-.657-.896 0-1.425.415-2.129.898-.456.303-.709.392-1.337.017-.808-.497-1.311-.915-2.313-.915-1.257 0-1.894.686-2.6 1.632-.374.507-.451.609-1.25.621-1 .002-2.841-.247-3.732 1.582-.305.625-.333 1.191-.423 1.878-.097.734-.153.737-.478 1.213-.609.906-1.125 1.941-1.113 3.037.008.679.22 1.332.676 1.912.311-.787-.658 1.427-.658 2.625 0 .941.502 1.457 1.734 1.512.45.007 18.707.018 20.392 0 1.177-.046 1.842-.77 1.842-1.647 0-.592-.489-1.902-.719-2.439"
            ></path>
          </svg>
          <label
            class="follow-button__label"
            v-if="arrayDataUser.yalosigo == 0"
          >
            Seguir
          </label>
          <label
            class="follow-button__label"
            v-if="arrayDataUser.yalosigo == 1"
          >
            Dejar de Seguir
          </label>
        </div>
      </button>
    </div>

    <section class="user-stats">
      <div
        class="user-stats__stat user-stats__stat--clickable"
        title="0 followers"
      >
        <span class="user-stats__number">
          {{ arrayDataUser.seguidoresCant }}
        </span>
        <span class="user-stats__label"> Followers </span>
      </div>
      <div class="user-stats__stat" :title="arrayDataUser.votos + ' puntos'">
        <span class="user-stats__number"> {{ arrayDataUser.votos }} </span>
        <span class="user-stats__label"> Points </span>
      </div>
    </section>

    <!---->
    <section class="user-sidebar__section user-followers">
      <header class="user-sidebar__section-header">
        <h2 class="user-sidebar__section-title">Seguidores</h2>
        <span class="user-sidebar__section-supplement">
          {{ arrayDataUser.seguidoresCant }}
        </span>
      </header>

      <div  class="users-list ember-view">
        <div class="user-link users-list__user-link ember-view" 
        v-for="(item, index) in arrayDataUser.seguidores" :key="index">
           <nuxt-link :to="{name:'perfil-username', params: {username: item.username}}" 
            class="user-link__link ember-view"
          >
            <picture
              id="ember1426"
              class="user-avatar ember-view user-link__avatar"
            >
              <img :src="item.avatar" />
            </picture>

            <span class="user-link__name user-link__name--username">
              {{item.username}}
            </span>
          </nuxt-link>
        </div>

        
      </div>
    </section>

    <section class="user-sidebar__section user-following">
      <header class="user-sidebar__section-header">
        <h2 class="user-sidebar__section-title">Siguiendo</h2>
        <span class="user-sidebar__section-supplement"> {{ arrayDataUser.seguidosCant }} </span>
      </header>

      <div  class="users-list ember-view">
        <div  class="user-link users-list__user-link ember-view"
         v-for="(item, index) in arrayDataUser.seguidos" :key="index">
           <nuxt-link :to="{name:'perfil-username', params: {username: item.username}}" 
            class="user-link__link ember-view"
          >
            <picture
              id="ember1426"
              class="user-avatar ember-view user-link__avatar"
            >
              <img :src="item.avatar" />
            </picture>

            <span class="user-link__name user-link__name--username">
              {{item.username}}
            </span>
          </nuxt-link>
              </div>
        
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "perfilFollow",
  components: {},
  props: ["arrayDataUser"],
  data() {
    return {};
  },
  methods: {
    async followUser() {
        if(this.$store.state.cookieLogin == false){
            this.$router.push("/login")
            return false
        }
      await this.$axios
        .$get(
          "/perfil/followunfollow?username=" +
            this.$route.params.username +
            "&token=" +
            this.$store.state.tokenUser
        )
        .then((response) => {
          this.$emit("recargarDataUser");
        });
    },
  },
  async fetch() {},
  mounted() {},
};
</script>

