<template>
    <div class="canalizados_wrapper wpb_wrapper">
    <div
      class="canalizados_heroblock canalizados_heroblock_5 canalizados_col_3o3 canalizados_hero_style_1 jnews_module_55_7_61e623a6a3e02  "
      data-margin="0"
    >
      <div class="canalizados_hero_wrapper">
        <div
          class="canalizados_heroblock_wrapper"
          style="margin: 0px 0px -0px -0px;"
        >
          <article
            class="canalizados_post canalizados_hero_item_1 format-gallery"
            style="padding: 0 0 0px 0px;"
          >
            <div class="canalizados_block_container">
              <div class="canalizados_thumb">
                <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[0].slug } }">
                    <div
                    class="thumbnail-container thumbnail-background"
                    :data-src="arrayNoticias[0].imagen"
                  >
                    <div
                      class="lazyloaded"
                      :data-src="arrayNoticias[0].imagen"
                      :style="'background-image: url('+arrayNoticias[0].imagen+')'"
                    ></div></div
                ></nuxt-link>
              </div>
              <div class="canalizados_postblock_content">
                <div class="canalizados_post_category">
                  <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: arrayNoticias[0].slugGrupo } }"
                    >{{ arrayNoticias[0].tituloGrupo }}</nuxt-link >
                </div>
                <div class="canalizados_post_info">
                  <h2 class="canalizados_post_title">
                    <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[0].slug } }">{{arrayNoticias[0].titulo}}</nuxt-link>
                  </h2>
                  <div class="canalizados_post_meta">
                    <div class="canalizados_meta_date">
                      <a
                        href="https://revistamyt.com/istore-sigue-creciendo-abren-nueva-sucursal-en-guatemala/"
                        ><i class="fa fa-clock-o"></i>{{arrayNoticias[0].fecha}}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div class="canalizados_heroblock_scroller">
            <article
              class="canalizados_post canalizados_hero_item_2 format-gallery"
              style="padding: 0 0 0px 0px;"
            >
              <div class="canalizados_block_container">
                <div class="canalizados_thumb">
                   <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[1].slug } }">
                    <div
                    class="thumbnail-container thumbnail-background"
                    :data-src="arrayNoticias[1].imagen"
                  >
                    <div
                      class="lazyloaded"
                      :data-src="arrayNoticias[1].imagen"
                      :style="'background-image: url('+arrayNoticias[1].imagen+')'"
                    ></div></div
                ></nuxt-link>
                </div>
                <div class="canalizados_postblock_content">
                  <div class="canalizados_post_category">
                   <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: arrayNoticias[1].slugGrupo } }"
                    >{{ arrayNoticias[1].tituloGrupo }}</nuxt-link >
                  </div>
                  <div class="canalizados_post_info">
                  <h2 class="canalizados_post_title">
                    <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[1].slug } }">{{arrayNoticias[1].titulo}}</nuxt-link>
                  </h2>
                  <div class="canalizados_post_meta">
                    <div class="canalizados_meta_date">
                      <a
                        href="https://revistamyt.com/istore-sigue-creciendo-abren-nueva-sucursal-en-guatemala/"
                        ><i class="fa fa-clock-o"></i>{{arrayNoticias[1].fecha}}</a
                      >
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </article>
            <article
              class="canalizados_post canalizados_hero_item_3 format-gallery"
              style="padding: 0 0 0px 0px;"
            >
              <div class="canalizados_block_container">
                <div class="canalizados_thumb">
                 <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[2].slug } }">
                    <div
                    class="thumbnail-container thumbnail-background"
                    :data-src="arrayNoticias[2].imagen"
                  >
                    <div
                      class="lazyloaded"
                      :data-src="arrayNoticias[2].imagen"
                      :style="'background-image: url('+arrayNoticias[2].imagen+')'"
                    ></div></div
                ></nuxt-link>
                </div>
                 <div class="canalizados_postblock_content">
                  <div class="canalizados_post_category">
                   <nuxt-link
                  :to="{ name: 'g-slug', params: { slug: arrayNoticias[1].slugGrupo } }"
                    >{{ arrayNoticias[1].tituloGrupo }}</nuxt-link >
                  </div>
                  <div class="canalizados_post_info">
                  <h2 class="canalizados_post_title">
                    <nuxt-link :to="{ name: 'c-slug', params: { slug: arrayNoticias[1].slug } }">{{arrayNoticias[1].titulo}}</nuxt-link>
                  </h2>
                  <div class="canalizados_post_meta">
                    <div class="canalizados_meta_date">
                      <a
                        href="https://revistamyt.com/istore-sigue-creciendo-abren-nueva-sucursal-en-guatemala/"
                        ><i class="fa fa-clock-o"></i>{{arrayNoticias[1].fecha}}</a
                      >
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props:["arrayNoticias"]
    }
</script>

