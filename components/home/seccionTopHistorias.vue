<template>
     <div
    
      class="news-section news-section--mobile news-section--pristine ember-view community__news-section"
    >
      <header>
        <nav>
          <span class="active">Top Historias</span>
          <a href=""  @click.prevent="postNuevo" class="ember-view">
            Post Nuevo
          </a>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember21802188"
          class="ember-view"
        >
          <path
            d="M7 15h13v1h-13v-1zm4-4v3h5v-3h-5zm-1 0h-3v1h3v-1zm-3 3h3v-1h-3v1zm13-1h-3v1h3v-1zm-6.951-6.573v-.396h-1.215v1.941h1.255v-.396h-.78v-.406h.698v-.393h-.698v-.35h.74zm1.396.261l.238 1.284h.5l.501-1.941h-.482l-.249 1.32-.238-1.32h-.492l-.27 1.345-.24-1.345h-.505l.46 1.941h.506l.271-1.284zm1.901.916c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-5.325.368h.485v-1.941h-.438v1.189l-.641-1.189h-.535v1.941h.438v-1.327l.691 1.327zm8.979 1.028h-13v1h13v-1zm0 2h-3v1h3v-1zm-17-9v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 16h-17v-14h17v14z"
          >
            <!---->
          </path>
        </svg>
      </header>

      <div class="news-section__items">
        <a
          target="_blank"
          href="/post/1096ac5400"
          id="ember21802190"
          class="ember-view news-section__item"
        >
          <div class="news-section__item-meta">
            <span>Stories</span>
            <span>·</span>
            <span>6 hours ago</span>
          </div>
          <span class="news-section__item-title"
            >Insights from a digital nomad making $80k/year</span
          >
          <img src="https://i.ibb.co/9nKS2DY/image.png" alt="Image" />
        </a>
      </div>

      <!---->
    </div>
</template>

<script>
export default {
  name: "seccionTopHistorias",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async fetch() {},
  mounted() {},
};
</script>

