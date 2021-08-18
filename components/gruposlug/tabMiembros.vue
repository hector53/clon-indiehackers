<template>
  <!--Content Members-->
  <div class="group-members">
    <section class="group-members__section group-members__section--members">
      <h2 class="group-members__section-header">Members</h2>
      <div  class="user-list ember-view">
         <div class="user-link user-list__user-link ember-view" v-for="(item, index) in arrayMiembros" 
         :key="index">
         <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }"
            class="user-link__link ember-view"
            
          >
            <picture
              id="ember2254"
              class="user-avatar ember-view user-link__avatar"
            >
              <img :src="item.icono" />
            </picture>

            <span class="user-link__name user-link__name--username">
              {{item.username}}
            </span>
                </nuxt-link>
        
        </div>
        

     
      </div>
    </section>

    <section class="group-members__section group-members__section--admins">
      <h2 class="group-members__section-header">Moderators</h2>
      <div class="user-list ember-view">
        <div class="user-link user-list__user-link ember-view" v-for="(item, index) in moderadores" :key="index">
         <nuxt-link
              :to="{
                name: 'u-username',
                params: { username: item.username },
              }"
            class="user-link__link ember-view"
            
          >
            <picture
              id="ember2254"
              class="user-avatar ember-view user-link__avatar"
            >
              <img :src="item.icono" />
            </picture>

            <span class="user-link__name user-link__name--username">
              {{item.username}}
            </span>
                </nuxt-link>
        
        </div>

        <!---->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "tabMiembros",
  props: ["moderadores", 'pGroup'],
  async fetch() {
  await this.$axios
        .$get("/grupos/getmembers?p="+this.pGroup)
        .then((response) => {
          this.arrayMiembros = response.miembros
        })
  },
  data() {
    return {
        arrayMiembros: []
    };
  },
  watch: {},
  methods: {},
  mounted() {
  },
};
</script>

