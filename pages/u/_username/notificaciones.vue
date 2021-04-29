<template>
  <div>
   <loader v-show="loader"></loader>
  <div v-show="loader==false"  class="user-notifications ember-view">
    <div class="user-notifications__list">
      <header class="user-notifications-header">
        <h2 class="user-notifications-title">
          {{ arrayNotify.length }} Notificacion sin leer
        </h2>

        <div class="user-notifications-button" @click="marcarTodasLeidas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember118"
            class="user-notifications-icon"
          >
            <path
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            >
              <!---->
            </path>
          </svg>
          <span class="user-notifications__clear-label"
            >Marcar todas como leidas</span
          >
        </div>
      </header>
      <!--tipo = 1 like post -->
      <div v-for="(item, index) in arrayNotify" :key="index">
        <div
          v-if="item.tipo == 1"
          class="user-notification user-notification--aggregate ember-view"
        >
          <header class="user-notification__header">
            <span class="user-notification__date">{{ item.fecha }}</span>
            <span class="user-notification__notification-summary" style="margin-top: 0;">
              <div class="users-list ember-view">
                <div class="user-link users-list__user-link ember-view">
                  <nuxt-link
                    :to="{
                      name: 'u-username',
                      params: { username: item.username },
                    }"
                    class="user-link__link ember-view"
                  >
                    <picture class="user-avatar ember-view user-link__avatar">
                      <img :src="item.avatar" />
                    </picture>
                    <span class="user-link__name user-link__name--username">
                      {{ item.username }}
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </span>
          </header>
          <div class="user-notification__content">
            <div class="user-notification__markdown-content">
              <p>
                <nuxt-link
                  :to="{
                    name: 'u-username',
                    params: { username: item.username },
                  }"
                  class="ember-view"
                  >{{ item.username }} &nbsp;</nuxt-link
                >
                <!---->
                le gusta &nbsp;
                <nuxt-link
                  :to="{
                    name: 'c-slug',
                    params: { slug: item.slug },
                  }"
                  class="ember-view"
                  >tu post</nuxt-link
                >:
              </p>
              <p>"{{ item.tituloPost }}"</p>
            </div>

            <div class="user-notification__clear-button"
            @click="MarcarLeida(item.id_notify, index)"
             title="Marcar Leído">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ember-view"
              >
                <path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>
        </div>

        <!--tipo 2 comentario -->

        <div v-if="item.tipo == 2" class="user-notification ember-view">
          <header class="user-notification__header">
            <span class="user-notification__date ember-view">
              {{ item.fecha }}</span
            >
            <span class="user-notification__notification-summary">
              <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }"
                class="linkHeaderNoty"
                >{{ item.username }}</nuxt-link
              >

              <nuxt-link
                :to="{
                  name: 'c-slug',
                  params: { slug: item.slug },
                  query: { commentId: item.comentarioId },
                }"
                class="user-notification__action-link linkHeaderNoty"
                >comentó</nuxt-link
              >

              tu post
              <nuxt-link
                :to="{
                  name: 'c-slug',
                  params: { slug: item.slug },
                }"
                class="linkHeaderNoty"
              >
                "{{ item.tituloPost }}"
              </nuxt-link>
            </span>
          </header>

          <div class="user-notification__content">
            <div
              id="ember520"
              class="user-notification__markdown-content content ember-view"
            >
              <p>{{ item.comment_content }}</p>
            </div>

            <div class="user-notification__clear-button" 
             @click="MarcarLeida(item.id_notify, index)"
            title="Marcar Leída">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
          
                class="ember-view"
              >
                <path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                >
                  <!---->
                </path>
              </svg>
            </div>
          </div>
        </div>

        <div
          v-if="item.tipo == 3"
          class="user-notification user-notification--aggregate ember-view"
        >
          <header class="user-notification__header">
            <span class="user-notification__date"> {{ item.fecha }}</span>

            <span class="user-notification__notification-summary" style="margin-top: 0;">
              <div id="ember548" class="users-list ember-view">
                <div
                  class="user-link users-list__user-link ember-view"
                >
                  <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }"
                    class="user-link__link ember-view"
                  >
                    <picture
                      id="ember551"
                      class="user-avatar ember-view user-link__avatar"
                    >
                      <img :src="item.avatar" />
                    </picture>
                    <span class="user-link__name user-link__name--username">
                      {{ item.username }}
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </span>
          </header>

          <div class="user-notification__content">
            <div class="user-notification__markdown-content">
              <p>
             <nuxt-link
                :to="{
                  name: 'u-username',
                  params: { username: item.username },
                }" class="active ember-view"
                  >{{item.username}}</nuxt-link
                >
                te ha seguido
              </p>
            </div>

            <div class="user-notification__clear-button"
             @click="MarcarLeida(item.id_notify, index)" 
            title="Marcar Leida">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ember-view"
              >
                <path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                >
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        class="user-notifications__more-button load-more-button ember-view"
      >
        <div class="load-more-button__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember170"
            class="load-more-button__icon ember-view"
          >
            <path
              d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24-4v20h2v-18h18v-2h-20zm18 13h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"
            >
              <!---->
            </path>
          </svg>

          <span class="load-more-button__label"> Load More </span>
        </div>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  layout: "perfilCanalizados",
  name: "historyPerfilCanalizados",
  components: {},
  data() {
    return {
      arrayNotify: [],
      loader: true,
    };
  },
  methods: {
    async marcarTodasLeidas() {
      if (this.arrayNotify.length > 0) {
        this.arrayNotify = [];
        let formData = new FormData();
        formData.append("token", this.$store.state.tokenUser);
        const response = await this.$axios.$post(
          "/perfil/leidastodas/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        if (response.status != 0) {
          this.getnotify();
          this.$store.commit("setnotifyCount", 0);
        }
      }
    },
    async MarcarLeida(id, index) {
      this.arrayNotify.splice(index, 1);
      let formData = new FormData();
      formData.append("p", id);
      formData.append("token", this.$store.state.tokenUser);
      const response = await this.$axios.$post(
        "/perfil/notifyleida/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status != 0) {
        this.getnotify();
        this.$store.commit("setnotifyCount", this.$store.state.notifyCount - 1);
      }
    },
    async getnotify() {
      await this.$axios
        .$get("/perfil/getnotify?username=" + this.$route.params.username)
        .then((response) => {
          console.log(response);
          this.arrayNotify = response.notify;
          this.loader = false;
        });
    },
  },
  async fetch() {},
  mounted() {
    this.getnotify();
  },
};
</script>
<style >
.creastePost {
  font-weight: bold;
}
.user-notifications-header {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.user-notifications-title {
  color: #3e64db;
  font-size: 26px;
  font-weight: 600;
  flex: 0 1 auto;
  margin-right: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-notifications-icon {
  height: 16px;
  width: 16px;
  fill: white;
  flex: 0 0 auto;
  margin-right: 12px;
}
.user-notifications-button {
    background-color: #3e64db;
    box-shadow: 0 0 8px #93989c;
    align-items: center;
    border-radius: 2px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    text-align: right;
    border-radius: 6px;
    cursor: pointer;
}
.user-notifications-button:hover {
      transform: scale(1.05);
}
.user-notification__header{
  display: flex;
    font-size: 15px;
}
.user-notification__date {
    align-items: center;
    align-self: flex-start;
    display: flex;
    height: 36px;
    margin-top: 9px;
}

.user-notification__notification-summary {
        line-height: 1.5em;
    display: inline-flex;
    margin-top: 15px;
    margin-left: 5px;
}

.users-list {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
}
.users-list__user-link {
    height: 36px;
    width: 36px;
    margin: 9px 0 0 9px;
}
.user-link__link{
  height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
}
.user-link__avatar {
    flex: 0 0 auto;
        height: 100%;
    width: 100%;
}
.avatarImg{
  border-radius: 9999px;
    height: 100%;
    object-fit: cover;
    width: 100%;
}
.user-link__name {
    margin-left: 8px;
}
.user-notification__content {
    background-color: #ffffff;
    border-radius: 3px;
    color: #1a1b1f;
    margin-top: 15px;
    padding: 18px;
    position: relative;
    box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%);
}
 .user-notification__markdown-content {
    color: #1a1b1f;
    font-size: 18px;
    line-height: 1.4em;
}
 .user-notification__markdown-content p {
   word-wrap: break-word;
}

 .user-notification__clear-button {
    height: 32px;
    width: 32px;
    align-items: center;
    background-color: #ffffff;
    border-radius: 9999px;
    cursor: pointer;
    display: flex;
    fill: #3e64db;
    justify-content: center;
    position: absolute;
    right: -10px;
    top: -10px;
}
.user-notification__clear-button svg {
    height: 16px;
    width: 16px;
}
.user-notification__clear-button:hover {
     box-shadow: -1px 1px 5px 1px rgb(152 163 179 / 50%);
}
.linkHeaderNoty{
  color: #3e64db;
    margin-left: 5px;
    margin-right: 5px;
}
.user-notifications__more-button {
    font-size: 16px;
    font-weight: 600;
    margin: 16px 0;
    padding: 16px 20px;
    background: #3e64db;
    color: white;
}

.load-more-button__content {
    align-items: center;
    display: flex;
    justify-content: center;
}
.load-more-button__icon {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    fill: white;
}


 .load-more-button:not([disabled]):hover {
    transform: scale(1.05);
}
</style>
