<template>
  <div class="community__content community__content--showing-welcome">
    <!-- Seccion de Bienvenida -->
    <section class="community__join-prompt">
      <p>
        Welcome! We're helping each other start profitable online businesses and
        side projects.
      </p>
      <div class="community__join-actions">
        <button class="community__join-button">
          <label>Join Us!</label>
        </button>
        <a
          href="/start"
          id="ember21802184"
          class="ember-view community__join-link"
        >
          <label>or learn more</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802185"
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
    <!-- Fin Seccion de Bienvenida -->

    <!--Seccion Top Stories-->
    <div
      id="ember21802186"
      class="news-section news-section--mobile news-section--pristine ember-view community__news-section"
    >
      <header>
        <nav>
          <span class="active">Top Historias</span>
          <nuxt-link :to="{ name: 'post-nuevo' }" class="ember-view">
            Post Nuevo
          </nuxt-link>
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
    <!--FIn Seccion Top Stories-->

    <!--Seccion Post-->
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
        <nuxt-link
          :to="{ name: 'post-nuevo' }"
          class="ember-view posts-section__create-button"
        >
          Post Nuevo
        </nuxt-link>
      </header>

      <nav id="ember21802239" class="posts-section__sub-nav ember-view">
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
    <!--Fin Seccion Post-->

    <!--Seccion Sidebar-->
    <div
      id="ember21802292"
      class="community-sidebar ember-view community-sidebar"
    >
      <!---->

      <div
        id="ember21802293"
        class="mailing-list-form ember-view community-sidebar__mailing-list-form"
      >
        <form
          action="https://app.convertkit.com/landing_pages/191452/subscribe"
          class="mailing-list-form__form"
        >
          <p class="mailing-list-form__title">
            News for founders, not consumers.
          </p>

          <p class="mailing-list-form__subtitle">
            Market insights to help grow your indie business.
          </p>

          <div class="mailing-list-form__email-wrapper">
            <input
              value=""
              name="email"
              required="true"
              placeholder="Enter email address"
              id="ember21802294"
              class="ember-text-field ember-view mailing-list-form__email-input"
              type="email"
            />
          </div>

          <div
            class="mailing-list-form__captcha-wrapper"
            style="position: absolute !important; left: -999em !important"
          >
            <input
              placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer."
              value=""
              type="text"
            />
          </div>

          <button class="mailing-list-form__submit-button">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802295"
                class="ember-view"
              >
                <path
                  d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                >
                  <!---->
                </path>
              </svg>
              <span>Subscribe</span>
            </div>
          </button>
        </form>
      </div>

      <section class="community-sidebar__section community-sidebar__groups">
        <header>
          <nav>
            <a href="/groups" id="ember21802296" class="ember-view"
              >All Groups</a
            >
            <span class="active">Recommended</span>
          </nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802297"
            class="community-sidebar__title-icon ember-view"
          >
            <path
              d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"
            >
              <!---->
            </path>
          </svg>
        </header>

        <div class="groups__scrollbar-occluder">
          <div class="groups__list">
            <div class="groups__group">
              <a
                href="/group/branding"
                id="ember21802587"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802588"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/branding/72x72_branding.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/branding/branding
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/branding/branding
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Branding</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/building-in-public"
                id="ember21802590"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802591"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/building-in-public/72x72_building-in-public.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/building-in-public/building-in-public
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/building-in-public/building-in-public
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Building in Public</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/income-reports"
                id="ember21802593"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802594"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/income-reports/72x72_income-reports.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/income-reports/income-reports
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/income-reports/income-reports
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Income Reports</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/growth"
                id="ember21802596"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802597"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/growth/72x72_growth.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/growth/growth
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/growth/growth
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Growth</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/lessons-learned"
                id="ember21802599"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802600"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/lessons-learned/72x72_lessons-learned.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/lessons-learned/lessons-learned
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/lessons-learned/lessons-learned
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Lessons learned</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/ideas-and-validation"
                id="ember21802602"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802603"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/ideas-and-validation/72x72_ideas-and-validation.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/ideas-and-validation/ideas-and-validation
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/ideas-and-validation/ideas-and-validation
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Ideas and Validation</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/low-code"
                id="ember21802605"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802606"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/low-code/72x72_low-code.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/low-code/low-code
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/low-code/low-code
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Low Code</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/crypto"
                id="ember21802608"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802609"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/72x72_crypto.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/crypto
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/crypto
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Crypto</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/crypto"
                id="ember21802610"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802611"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/72x72_crypto.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/crypto
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/crypto/crypto
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Crypto</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/amas"
                id="ember21802613"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802614"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/amas/72x72_amas.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/amas/amas
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/amas/amas
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">AMAs</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/data-science"
                id="ember21802616"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802617"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/data-science/72x72_data-science.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/data-science/data-science
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/data-science/data-science
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Data Science</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/newsletter-crew"
                id="ember21802619"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802620"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/newsletter-crew/72x72_newsletter-crew.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/newsletter-crew/newsletter-crew
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/newsletter-crew/newsletter-crew
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Newsletter Crew</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/linux-user-group"
                id="ember21802622"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802623"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/linux-user-group/72x72_linux-user-group.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/linux-user-group/linux-user-group
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/linux-user-group/linux-user-group
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Linux User Group</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/landing-page-feedback"
                id="ember21802625"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802626"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/landing-page-feedback/72x72_landing-page-feedback.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/landing-page-feedback/landing-page-feedback
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/landing-page-feedback/landing-page-feedback
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Landing Page Feedback</p>
              </a>
            </div>
            <div class="groups__group">
              <a
                href="/group/stock-market"
                id="ember21802628"
                class="ember-view groups__group-link"
              >
                <picture
                  id="ember21802629"
                  class="group-icon ember-view groups__group-icon"
                >
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/stock-market/72x72_stock-market.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/stock-market/stock-market
                    "
                    type="image/png"
                  />
                  <source
                    srcset="
                      https://storage.googleapis.com/indie-hackers.appspot.com/group-icons/stock-market/stock-market
                    "
                    type="image/jpeg"
                  />
                  <img src="/nonexistent-image.png" />
                </picture>
                <p class="groups__group-name">Stock Market</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="ember21802304" class="site-info ember-view">
        <div class="site-info__row">
          <a href="https://twitter.com/IndieHackers" class="site-info__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802305"
              class="site-info__icon ember-view"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              >
                <!---->
              </path>
            </svg>
            <span class="site-info__label">@IndieHackers</span>
          </a>
        </div>

        <div class="site-info__row">
          <a
            href="/about"
            id="ember21802306"
            class="site-info__link ember-view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember21802307"
              class="site-info__icon ember-view"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"
              >
                <!---->
              </path>
            </svg>
            <span class="site-info__label">FAQ</span>
          </a>
          <span class="site-info__middot">·</span>
          <a href="/terms" id="ember21802308" class="site-info__link ember-view"
            >Terms</a
          >
          <span class="site-info__middot">·</span>
          <a
            href="/privacy"
            id="ember21802309"
            class="site-info__link ember-view"
            >Privacy</a
          >
        </div>
      </div>
    </div>

    <!--Fin Seccion Sidebar-->
  </div>
</template>

<script>
export default {
  name: 'index', 
  data() {
    return {
      arrayPostHoy: []
    }
  },
  methods: {
 async   getPostHoy(){
        await this.$axios
        .$get("/getpost/hoy/")
        .then((response) => {
          this.arrayPostHoy =  response.postHoy

        });


      }
  },
  mounted() {
    this.getPostHoy()
  },
};
</script>

