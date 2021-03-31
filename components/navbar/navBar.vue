<template>
  <div
    id="ember21802146"
    class="title-bar title-bar--dropdown-closed title-bar--signed-out title-bar--user-menu-closed ember-view community__title-bar"
  >
    <div class="title-bar__content">
      <nav
        id="ember21802147"
        class="nav nav--dropdown-closed nav--desktop ember-view"
      >
        <ul class="nav-menu">
          <li class="nav-menu__item nav-menu__item--hamburger"  >
            <span class="nav-menu__link"  @mouseover="hoverNavDropDown = true"
         
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802148"
                class="nav-menu__icon ember-view"
              >
                <path
                  d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                ></path></svg
            ></span>
          </li>
          <li class="nav-menu__item nav-menu__item--forum">
            <a
              href="/start"
              id="ember21802149"
              class="nav-menu__link ember-view"
              ><span class="nav-menu__label">Start Here</span></a
            >
          </li>
          <li class="nav-menu__item nav-menu__item--interviews">
            <a
              href="/interviews"
              id="ember21802150"
              class="nav-menu__link ember-view"
              ><span class="nav-menu__label">Interviews</span></a
            >
          </li>
          <li class="nav-menu__item nav-menu__item--podcast">
            <a
              href="/podcasts"
              id="ember21802151"
              class="nav-menu__link ember-view"
              ><span class="nav-menu__label">Podcasts</span></a
            >
          </li>
          <li class="nav-menu__item nav-menu__item--search">
            <a
              href="/search"
              id="ember21802152"
              class="ember-view nav-menu__link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802153"
                class="nav-menu__icon ember-view"
              >
                <path
                  d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
                ></path></svg
            ></a>
          </li>
        </ul>
         <transition name="fade">
       <div class="nav-dropdown" :class="{'showDrop' : hoverNavDropDown }"  @mouseover="hoverNavDropDown = true"
           @mouseleave="hoverNavDropDown = false" >
          <header class="nav-dropdown__header">
            <a href="/" id="ember21802154" class="logo active ember-view"
              ><img
                src="https://www.indiehackers.com/images/logos/indie-hackers-logo__glyph--light.svg"
                class="logo__glyph"
                style="height: 24px; width: 24px" />
              <img
                src="https://www.indiehackers.com/images/logos/indie-hackers-logo__type--light.svg"
                class="logo__type"
            /></a>
            <div id="ember21802155" class="modal-closer ember-view">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="modal-closer__close-icon"
              >
                <path
                  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                ></path>
              </svg>
            </div>
          </header>
          <a
            href="/"
            id="ember21802156"
            class="nav-dropdown__link nav-dropdown__link--community active ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802157"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M20 9.999v-2h4v12.001h-3v4l-5.333-4h-7.667v-4h12v-6.001zm-2 4.001h-9.667l-5.333 4v-4h-3v-14.001h18v14.001z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802158"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Talk shop with other indie hackers.</span
              >
            </div></a
          >
          <a
            href="/interviews"
            id="ember21802159"
            class="nav-dropdown__link nav-dropdown__link--interviews nav-dropdown__link--popular ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802160"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Interviews
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802161"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Learn from transparent startup stories.</span
              >
            </div></a
          >
          <a
            href="/podcasts"
            id="ember21802162"
            class="nav-dropdown__link nav-dropdown__link--podcast nav-dropdown__link--popular ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802163"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M15.526 11.409c-1.052.842-7.941 6.358-9.536 7.636l-2.697-2.697 7.668-9.504 4.565 4.565zm5.309-9.867c-2.055-2.055-5.388-2.055-7.443 0-1.355 1.356-1.47 2.842-1.536 3.369l5.61 5.61c.484-.054 2.002-.169 3.369-1.536 2.056-2.055 2.056-5.388 0-7.443zm-9.834 17.94c-2.292 0-3.339 1.427-4.816 2.355-1.046.656-2.036.323-2.512-.266-.173-.211-.667-.971.174-1.842l-.125-.125-1.126-1.091c-1.372 1.416-1.129 3.108-.279 4.157.975 1.204 2.936 1.812 4.795.645 1.585-.995 2.287-2.088 3.889-2.088 1.036 0 1.98.464 3.485 2.773l1.461-.952c-1.393-2.14-2.768-3.566-4.946-3.566z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Podcasts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802164"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Raw conversations with founders.</span
              >
            </div></a
          >
          <a
            href="/meetups"
            id="ember21802165"
            class="nav-dropdown__link nav-dropdown__link--meetups ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802166"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M23.961 8.429c-.831.982-1.614 1.918-1.961 3.775v6.683l-4 2.479v-9.161c-.206-1.104-.566-1.885-1-2.539v11.475l-4-2.885v-13.069l1.577 1.138c-.339-.701-.577-1.518-.577-2.524l.019-.345-2.019-1.456-5.545 4-6.455-4v18l6.455 4 5.545-4 5.545 4 6.455-4v-11.618l-.039.047zm-17.961 12.936l-4-2.479v-13.294l4 2.479v13.294zm5-3.11l-4 2.885v-13.067l4-2.886v13.068zm9-18.255c-2.1 0-4 1.702-4 3.801 0 3.121 3.188 3.451 4 8.199.812-4.748 4-5.078 4-8.199 0-2.099-1.9-3.801-4-3.801zm0 5.5c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Meetups
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802167"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Meet indie hackers across the globe.</span
              >
            </div></a
          >
          <a
            href="/products"
            id="ember21802168"
            class="nav-dropdown__link nav-dropdown__link--products ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802169"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802170"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >See what everyone's working on.</span
              >
            </div></a
          >
          <a
            href="https://cottonbureau.com/people/indie-hackers"
            target="_blank"
            class="nav-dropdown__link nav-dropdown__link--store"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802171"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M11.6 24h-5.619l.019-10-2.983 8.721-3.017-.721 3.981-16 4-1.727c-.888-.944-1.355-2.337 0-3.242 0 0 1.432-1.018 4.019-1.027 2.587-.01 3.981.997 3.981.997 1.326.843.896 2.468 0 3.27l4 1.729 4.019 16-3 .73-3-8.73-.019 10h-5.581v-21.496c1.467-.05 2.6-.366 2.6-.748 0-.417-1.344-.755-3-.755s-3 .338-3 .755c0 .382 1.133.698 2.6.748v21.496zm3.545-7.021l-.645.469 2.355 3.234.645-.469-2.355-3.234zm-6.29 0l.645.469-2.355 3.234-.645-.469 2.355-3.234z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Store
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802172"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Buy an Indie Hackers t-shirt.</span
              >
            </div></a
          >
          <a
            href="/newsletter"
            id="ember21802173"
            class="nav-dropdown__link nav-dropdown__link--newsletter ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802174"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Newsletter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802175"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description">
                Stay up-to-date in 5 minutes or less.
              </span>
            </div></a
          >
          <a
            href="/contribute"
            id="ember21802176"
            class="nav-dropdown__link nav-dropdown__link--contribute ember-view"
            ><div class="nav-dropdown__icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember21802177"
                class="nav-dropdown__icon ember-view"
              >
                <path
                  d="M14.078 7.061l2.861 2.862-10.799 10.798-3.584.723.724-3.585 10.798-10.798zm0-2.829l-12.64 12.64-1.438 7.128 7.127-1.438 12.642-12.64-5.691-5.69zm7.105 4.277l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"
                ></path>
              </svg>
            </div>
            <div class="nav-dropdown__link-text">
              <span class="nav-dropdown__label">
                Contribute
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember21802178"
                  class="ember-view"
                >
                  <path
                    d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                  ></path></svg
              ></span>
              <span class="nav-dropdown__description"
                >Share your knowledge and experiences.</span
              >
            </div></a
          >
        </div>
  </transition>
     
      </nav>
      <nuxt-link :to="{name:'index'}" id="ember21802179" class="active ember-view logo"
        ><img
          src="https://www.indiehackers.com/images/logos/indie-hackers-logo__glyph--light.svg"
          class="logo__glyph"
          style="height: 24px; width: 24px" />
        <img
          src="https://www.indiehackers.com/images/logos/indie-hackers-logo__type--light.svg"
          class="logo__type"
      /></nuxt-link>


      <div class="title-bar__right">
        <a
          href="/search"
          id="ember21802180"
          class="ember-view title-bar__search-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember21802181"
            class="ember-view nav-menu__icon"
          >
            <path
              d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
            ></path></svg
        ></a>







      <div class="title-bar__user-link " v-if="$store.state.cookieLogin" 
       @mouseover="hoverDropAvatar = true"  >
       <div class="title-bar__unread-count" v-show="$store.state.notifyCount != 0">{{$store.state.notifyCount}}</div>
      <!---->        <picture id="ember762" class="user-avatar ember-view"> 
       <source :srcset="$store.state.img_perfil" type="image/webp">
      <!---->
      <img :src="$store.state.img_perfil">
      </picture>
      </div>


      <div  class="user-menu ember-view" :class="{'showDrop' : hoverDropAvatar }"  @mouseover="hoverDropAvatar = true"
           @mouseleave="hoverDropAvatar = false">
         <nuxt-link :to="{name:'perfil-username', params: {username: $store.state.username}}"  class="ember-view user-menu__action">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember765" class="ember-view user-menu__action-icon"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z">
<!----></path>
</svg>
  <span class="user-menu__action-label">
    Perfil
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember766" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
  </span>
</nuxt-link>

      <nuxt-link :to="{name:'perfil-username-notificaciones', 
            params: {username: $store.state.username} }" class="ember-view user-menu__action">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember768" class="ember-view user-menu__action-icon"><path d="M15.137 3.945c-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.172-.939-2.122-2.097-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-6.728 12.055h-1.882c1.245-2.741.879-9.012 3.873-10.655-1.761 2.067-.95 7.504-1.991 10.655zm3.591-13c-.552 0-1-.448-1-1 0-.551.448-1 1-1s1 .449 1 1c0 .552-.448 1-1 1zm-3 18h6c0 1.598-1.393 3-2.971 3-1.579 0-3.029-1.402-3.029-3z">
<!----></path>
</svg>
  <span class="user-menu__action-label">
    Notifications
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember769" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
  </span>
</nuxt-link>

<a href="/Nananonaweb/settings" id="ember770" class="ember-view user-menu__action">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember771" class="ember-view user-menu__action-icon"><path d="M12 9c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9 4c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm18 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-9-6c.343 0 .677.035 1 .101v-3.101c0-.552-.447-1-1-1s-1 .448-1 1v3.101c.323-.066.657-.101 1-.101zm9 4c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm0 10c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101zm-18-10c.343 0 .677.035 1 .101v-7.101c0-.552-.447-1-1-1s-1 .448-1 1v7.101c.323-.066.657-.101 1-.101zm9 6c-.343 0-.677-.035-1-.101v7.101c0 .552.447 1 1 1s1-.448 1-1v-7.101c-.323.066-.657.101-1 .101zm-9 4c-.343 0-.677-.035-1-.101v3.101c0 .552.447 1 1 1s1-.448 1-1v-3.101c-.323.066-.657.101-1 .101z">
<!----></path>
</svg>
  <span class="user-menu__action-label">
    Settings
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember772" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
  </span>
</a>

<div class="user-menu__action">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember773" class="ember-view user-menu__action-icon"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z">
<!----></path>
</svg>
  <span class="user-menu__action-label" @click="cerrarSesion">
    Sign Out
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ember774" class="ember-view"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
<!----></path>
</svg>
  </span>
</div>
</div>
     
          <nuxt-link :to="{name:'login'}" v-if="$store.state.cookieLogin==false"
          class="ember-view title-bar__auth-button title-bar__auth-button--log-in"
          ><span class="title-bar__button-label">Log In</span></nuxt-link >
        <nuxt-link :to="{name:'registro'}" v-if="$store.state.cookieLogin==false"
          class="ember-view title-bar__auth-button title-bar__auth-button--sign-up"
          ><span class="title-bar__button-label">Sign Up</span></nuxt-link >
       


         


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      hoverNavDropDown: false, 
      hoverDropAvatar: false,
      countNotify: 0
    };
  },
  methods: {

  async  getCountNotify(){
         await this.$axios
        .$get("/perfil/getcountnotify?p=" + this.$store.state.p)
        .then((response) => {
              this.$store.commit("setnotifyCount", response );
        });
    },
    cerrarSesion(){
      this.$cookies.remove('access_token_')
        location.href = "/";
    }
 
  },
  mounted() {
  //  console.log(this.$store.state.cookieLogin)
  this.getCountNotify()
  },
};
</script>

<style >
.showDrop{
  display: block!important;
}
</style>