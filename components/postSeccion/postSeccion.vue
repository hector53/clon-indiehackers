<template>
  <section class="community__posts-section">
      <header class="posts-section__header has-sub">
        <nav id="ember21802235" class="posts-section__nav ember-view">
          <div class="posts-section__nav-content">
            <!---->
            <a
              href="/"
              id="ember21802236"
              class="active ember-view posts-section__nav-link"
            >
              Popular
            </a>

            <a
              href="/newest"
              id="ember21802237"
              class="ember-view posts-section__nav-link"
            >
              Newest
            </a>

            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
        </nav>
        <a
         href=""
         @click.prevent="postNuevo"
          class="ember-view posts-section__create-button"
        >
          Post Nuevo
        </a>
      </header>

      <nav id="ember21802239" class="posts-section__sub-nav ember-view" v-if="subNav == 1">
        <a
          href="/"
          id="ember21802240"
          class="active ember-view sub-nav__link active"
        >
          Today
        </a>

        <a
          href="/top/week-of-2021-03-08"
          id="ember21802241"
          class="ember-view sub-nav__link"
        >
          Weekly
        </a>

        <a
          href="/top/month-of-2021-03"
          id="ember21802242"
          class="ember-view sub-nav__link"
        >
          Monthly
        </a>

        <a
          href="/top/all-time"
          id="ember21802243"
          class="ember-view sub-nav__link"
        >
          All-Time
        </a>
      </nav>

      <div
        id="ember21802244"
        class="soc-fd soc-fd--compact ember-view posts-section__posts"
      >
        <!---->
        <!--repetir aqui van los post-->
        <div v-for="(item, index) in arrayPostHoy" :key="index"
          class="feed-item feed-item--compact feed-item--post feed-item--post-in-group ember-view"
        >
          <!---->
          <div class="user-link feed-item__user-link--for-avatar ember-view">
           <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: item.username },
              }" 
              class="user-link__link ember-view"
            >
              <picture
                id="ember21802347"
                class="user-avatar ember-view user-link__avatar"
              >
                <img :src="item.avatar" />
              </picture>

              <span class="user-link__name user-link__name--username">
                {{item.username}}
              </span>
              <!----></nuxt-link
            >
            <!---->
          </div>
          <!--votos-->
          <a
            title="Like"
            href="/sign-up"
            id="ember21802348"
            class="ember-view feed-item__likes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802349"
              class="feed-item__likes-icon ember-view"
            >
              <path d="M0 15.878 l12-11.878 12 11.878-4 4.122-8-8-8 8-4-4.122z">
                <!---->
              </path>
            </svg>
            <span class="feed-item__likes-count"> 15 </span>
          </a>
          <!--votos-->
          <div class="feed-item__content">
             <nuxt-link
              :to="{
                name: 'post-slug',
                params: { slug: item.slug },
              }" 
              :title="item.titulo"
              class="ember-view feed-item__title-link"
            >
              {{item.titulo}}
            </nuxt-link>

            <div class="feed-item__metadata">
              <div
                id="ember21802351"
                class="user-link feed-item__user-link--for-metadata ember-view"
              >
                <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: item.username },
              }" 
                  class="user-link__link ember-view"
                >
                  

                  <span class="user-link__name user-link__name--username">
                    {{item.username}}
                  </span>
                  <!----></nuxt-link
                >
                <!---->
              </div>
              <div class="feed-item__middot">·</div>

              <a
                href="/group/building-in-public"
                id="ember21802354"
                class="feed-item__group-link ember-view"
              >
                <picture
                  id="ember21802355"
                  class="group-icon ember-view group-link__icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/building-in-public/building-in-public
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <span class="group-link__name">Building in Public</span>
              </a>

              <div class="feed-item__middot">·</div>

              <a
                title="View Comments"
                href="/post/thinking-of-adding-new-features-for-my-tool-need-your-suggestions-15de3cf0f9"
                id="ember21802357"
                class="ember-view feed-item__reply-count"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802358"
                  class="ember-view reply-count__icon"
                >
                  <path
                    d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 14h-6v-1h6v1zm6-3h-12v-1h12v1zm0-3h-12v-1h12v1z"
                  >
                    <!---->
                  </path>
                </svg>
                <span class="reply-count__number-count">3</span>
                <span class="reply-count__full-count">3 comments</span>
              </a>

              <!---->
            </div>
          </div>
        </div>

        <!---->
        <!---->

        <!---->
        <a
          href="/?page=2"
          id="ember21802290"
          class="ember-view soc-fd__pagination-link"
        >
          <label>Next Page</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802291"
            class="ember-view"
          >
            <path
              d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
            >
              <!---->
            </path>
          </svg>
        </a>



      </div>
    </section>
</template>

<script>
export default {
    name: "postSeccion", 
    props:['arrayPostHoy', 'subNav'],
    data() {
        return {
            
        }
    },
    methods: {
         postNuevo(){
        if(this.$store.state.tokenUser != ''){
          this.$router.push({name: 'post-nuevo'})
        }else{
          this.$router.push({name: 'login'})
        }
    },
    },
}
</script>

