<template>
<div :class="{'div-block-425': preview}">
  <div class="post-page__content">
    <!-- Text Editor -->

    <!-- Markdown Viewer -->

    <header class="post-page__header">
      <textarea
        v-show="preview == false"
        :disabled="disableAll"
        rows="1"
        tabindex="1"
        id="tituloPost"
        placeholder="Enter Title"
        maxlength="140"
        v-model="tituloPost"
        class="ember-text-area ember-auto-resize ember-view post-page__title-field"
        style="height: 75px; overflow: hidden"
      ></textarea
      ><!---->

      <div
        class="dragSortList -draggingEnabled ember-view drag-sort-list--1"
        v-show="imagenPost != '' && preview == false && tabSelected == 2"
      >
        <div class="dragSortItem ember-view">
          <div class="drag-sort-list__image-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              @click="eliminarImagen"
              class="ember-view drag-sort-list__image-remover"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              >
                <!---->
              </path>
            </svg>
            <!---->
            <img :src="imagenPost" />
          </div>
        </div>
      </div>

      <h1 class="post-page__title" v-show="preview">{{ tituloPost }}</h1>
      <a
        href="/Nananonaweb"
        v-show="preview"
        id="ember901"
        class="ember-view post-page__byline"
      >
        Escrito por <span>@{{ $store.state.username }}</span>
      </a>

      <div
        class="post-page__images post-page__images--1"
        v-show="imagenPost != '' && preview"
      >
        <img
          :src="imagenPost"
          class="img-lazy img-lazy--loaded ember-view post-page__image"
        />
      </div>
    </header>

    <div
      class="post-page__subheader post-page__subheader--editing"
      v-show="preview == false"
    >
      <input
        style="display: none"
        ref="fileInput"
        id="filePost"
        type="file"
        @change="previewFiles"
          accept="image/x-png,image/gif,image/jpeg"
        enctype="multipart/form-data"
      />

      <button
        class="post-page__action post-page__action--images"
        v-show="tabSelected == 2"
        tabindex="2"
        title="Add Images"
        @click="addImagePost"
      >
        <div class="post-page__action-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember1180"
            class="ember-view post-page__action-icon"
          >
            <path
              d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm5.8-7v-2h-21v15h2v-13h19zm3 2v14h-20v-14h20zm-2 2h-16v10h16v-10z"
            >
              <!---->
            </path>
          </svg>
          <span class="post-page__action-label">Agregar Imagen</span>
        </div>
      </button>

      <button
        class="post-page__action post-page__action--poll"
        tabindex="3"
        title="Add Poll"
        @click="addEncuesta"
        v-scroll-to="'#addEncuesta'"
        :disabled="{true: opcionEncuestaEdit.length >0}"
      >
        <div class="post-page__action-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember1124"
            class="ember-view post-page__action-icon"
          >
            <path
              d="M7 19h-6v-11h6v11zm8-18h-6v18h6v-18zm8 11h-6v7h6v-7zm1 9h-24v2h24v-2z"
            >
              <!---->
            </path>
          </svg>
          <span class="post-page__action-label">Agregar Encuesta</span>
        </div>
      </button>

      <!---->
      <div
        id="ember1125"
        class="group-selector group-selector--collapsed ember-view post-page__group-selector"
        tabindex="4"
      >
        <div class="group-selector__trigger" @click="selectGroup">
          <picture
            id="ember644"
            class="group-icon ember-view group-selector__selected-icon"
            v-show="iconSelectGroup != ''"
          >
            <img :src="iconSelectGroup" />
          </picture>
          <div class="group-selector__label group-selector__label--empty">
            {{ selectGroupLabel }}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember1126"
            class="ember-view group-selector__arrow"
          >
            <path
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            >
              <!---->
            </path>
          </svg>
        </div>
        <div
          v-show="quitarGrupoSeleccionado"
          @click="quitarGrupoSelect"
          class="modal-closer ember-view group-selector__clear-button"
        >
          <svg
            class="modal-closer__close-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            ></path>
          </svg>
        </div>
        <!--bsucador de grupos-->
        <div
          class="group-selector__dropdown"
          style="left: 0px"
          v-show="selectGrupo"
          v-click-outside="selectGroupOut"
        >
          <input
            placeholder="Search groups…"
            v-model="searchInput"
            class="ember-text-field ember-view group-selector__input"
            type="search"
          />

          <div class="group-selector__groups">
            <div
              class="group-selector__results-section group-selector__results-section--memberships"
            >
              <div class="group-selector__results-heading">Mis Grupos</div>
              <ul class="group-selector__group-list">
                <li
                  class="group-selector__group"
                  v-for="(item, index) in misGrupos"
                  :key="index"
                  @click="
                    seleccionarGrupo(
                      item.id,
                      item.titulo,
                      item.icono,
                      item.excerpt,
                      item.slug
                    )
                  "
                  :title="item.titulo"
                >
                  <picture class="group-icon ember-view group-selector__icon">
                    <img :src="item.icono" />
                  </picture>
                  <span class="group-selector__name">{{ item.titulo }}</span>
                  <span class="group-selector__num-members">
                    {{ item.miembros }} Miembros
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="group-selector__groups" v-show="otrosSearch">
            <div
              class="group-selector__results-section group-selector__results-section--memberships"
            >
              <div class="group-selector__results-heading">Otros Grupos</div>
              <ul class="group-selector__group-list">
                <li
                  class="group-selector__group"
                  v-for="(item, index) in arraySearchOtros"
                  :key="index"
                  @click="
                    seleccionarGrupo(
                      item.id,
                      item.titulo,
                      item.icono,
                      item.excerpt,
                      item.slug
                    )
                  "
                  :title="item.titulo"
                >
                  <picture class="group-icon ember-view group-selector__icon">
                    <img :src="item.icono" />
                  </picture>
                  <span class="group-selector__name">{{ item.titulo }}</span>
                  <span class="group-selector__num-members">
                    {{ item.miembros }} Miembros
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!---->
    </div>

    <client-only>
   <b-form-checkbox v-show="rolUser != 'subscriber' && preview == false" class="esStaffpick"
    v-model="staffpick" size="lg" name="check-button" switch>
      Es StaffPick?
    </b-form-checkbox>

</client-only>

    <div class="post-page__main">
      <div
        v-show="preview && tabSelected == 1 && contentLink.length > 0"
        class="attached-link attached-link--small-image attached-link--no-image attached-link--no-title attached-link--no-description ember-view post-page__attached-link"
      >
        <a
          class="attached-link__link"
          :href="contentLink"
          target="_blank"
          :title="'Link to ' + contentLink"
          rel="nofollow"
        >
          <!---->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember1080"
            class="attached-link__icon ember-view"
          >
            <path
              d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
            >
              <!---->
            </path>
          </svg>

          <div class="attached-link__text">
            <!---->
            <!---->
            <p class="attached-link__domain">
              {{ contentLink }}
            </p>
          </div>
        </a>
      </div>
      <div
        class="post-page__body content ember-view"
        v-show="preview && tabSelected == 2"
        v-html="content"
      ></div>

      <!--Preview encuesta-->

      <div class="poll-viewer ember-view post-page__poll-viewer" v-show="encuesta && preview">
        <header class="poll-viewer__header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="ember228"
            class="ember-view post-page__action-icon"
          >
            <path
              d="M7 19h-6v-11h6v11zm8-18h-6v18h6v-18zm8 11h-6v7h6v-7zm1 9h-24v2h24v-2z"
            >
              <!---->
            </path>
          </svg>
          <span>{{preguntaEncuesta}}</span>
        </header>

        <div class="poll-viewer__vote-view">
          


          <ol class="poll-viewer__options">
            <li class="poll-viewer__option" v-for="(item, index) in opcionEncuesta" :key="index">
               <input class="radioOp" type="radio" :id="'op'+index" :value="item" v-model="picked">
              <label :for="'op'+index">{{item}}</label>
            </li>
           
          </ol>

          <button class="poll-viewer__vote-button" disabled="">
            <div>
              <span>Vote</span>
            </div>
          </button>
        </div>

        <footer class="poll-viewer__footer">
          <span class="poll-viewer__num-votes">0 votes</span>
          <!---->
        </footer>
      </div>

      <!--Preview encuesta-->

      <div class="post-page__mode-tabs" v-show="preview == false">
        <button
          class="mode-tabs__tab"
          :class="{ 'mode-tabs__tab--selected': tabSelected == 1 }"
          tabindex="7"
          @click="selectTab(1)"
        >
          <div class="mode-tabs__tab-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="ember1127"
              class="ember-view mode-tabs__tab-icon"
            >
              <path
                d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
              >
                <!---->
              </path>
            </svg>
            <span class="mode-tabs__tab-label">Link</span>
          </div>
        </button>
        <button
          class="mode-tabs__tab"
          :class="{ 'mode-tabs__tab--selected': tabSelected == 2 }"
          tabindex="6"
          @click="selectTab(2)"
          :disabled="disabledTab2"
        >
          <div class="mode-tabs__tab-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ember-view mode-tabs__tab-icon"
            >
              <path
                d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"
              >
                <!---->
              </path>
            </svg>
            <span class="mode-tabs__tab-label">Text</span>
          </div>
        </button>
      </div>

      <client-only>
        <tinymce class="tinyEditor"  :disabled="disableAll"  
        v-show="tabSelected == 2 && preview == false" id="d1" 
        v-model="content" :other_options="options" ></tinymce>
      </client-only>

      <div
        class="post-page__link-nudge"
        v-show="tabSelected == 1 && preview == false"
      >
        <p>Share a link to discuss with other indie hackers.</p>
      </div>
      <textarea
        rows="1"
        tabindex="8"
        placeholder="https://…"
        v-show="tabSelected == 1 && preview == false"
        class="ember-text-area ember-auto-resize ember-view edit-post__link-field"
        style="height: 67.5px; overflow: hidden"
        v-model="contentLink"
        :disabled="disabledTab1"
      >
      </textarea>

      <div
        id="addEncuesta"
        class="post-page__inline-author edit-post__inline-author"
        v-show="preview == false"
      >
        <div class="user-link ember-view">
          <nuxt-link
            :to="{
              name: 'perfil-username',
              params: { username: $store.state.username },
            }"
            class="user-link__link ember-view"
          >
            <span class="user-link__name"> {{ $store.state.username }} </span>

            <!---->

            <!----></nuxt-link
          >
          <!---->
          <!---->
        </div>
      </div>

      <!--Encuestas-->

      <div class="post-page__options-header" v-show="encuesta && preview == false">
        <div class="options-header__title-and-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="ember-view"
          >
            <path
              d="M7 19h-6v-11h6v11zm8-18h-6v18h6v-18zm8 11h-6v7h6v-7zm1 9h-24v2h24v-2z"
            >
              <!---->
            </path>
          </svg>
          <span>Encuesta</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="ember636"
          class="ember-view options-header__remove-icon"
          @click="quitarEncuesta"
           v-show="opcionEncuestaEdit.length == 0"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          >
            <!---->
          </path>
        </svg>
      </div>

      <div
        v-show="encuesta && preview == false"
        class="poll-editor ember-view post-page__poll-editor post-options post-options--poll"
      >
        <div class="post-options__fieldset">
          <label class="post-options__label">Pregunta</label>
          <textarea
            tabindex="11"
            placeholder="¿Sobre que debería votar la gente?"
            maxlength="100"
            v-model="preguntaEncuesta"
            class="ember-text-area ember-auto-resize ember-view post-options__input"
            style="height: 50.4844px; overflow: hidden"
            :disabled="{true: opcionEncuestaEdit.length >0}"
          ></textarea>
        </div>

        <div class="post-options__fieldset">
          <label class="post-options__label">Opciones</label>
 <!--editor encuesta nueva-->
 <div v-show="opcionEncuestaEdit.length == 0">
          <div
            class="poll-editor__choice-wrapper"
            v-for="(item, index) in opcionEncuesta"
            :key="index"
          >
            <textarea
              :placeholder="'opcion ' + index"
              maxlength="100"
              v-model="opcionEncuesta[index]"
              class="ember-text-area ember-auto-resize ember-view post-options__input"
              style="height: 50.4844px; overflow: hidden"
            ></textarea>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              v-show="opcionEncuesta.length > 2"
              @click="reducirOpciones(index)"
              viewBox="0 0 24 24"
              id="ember116"
              class="ember-view poll-editor__choice-remover"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              >
                <!---->
              </path>
            </svg>
          </div>
 </div>
 <!--editor encuesta nueva fin-->

 <!--editor encuesta nueva-->
 <div v-show="opcionEncuestaEdit.length >0">
          <div
            class="poll-editor__choice-wrapper"
            v-for="(item, index) in opcionEncuestaEdit"
            :key="index"
          >
            <textarea disabled
              :placeholder="'opcion ' + index"
              maxlength="100"
              v-model="opcionEncuestaEdit[index].opcion"
              class="ember-text-area ember-auto-resize ember-view post-options__input"
              style="height: 50.4844px; overflow: hidden"
            ></textarea>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              v-show="opcionEncuestaEdit.length > 2"
              @click="reducirOpciones(index)"
              viewBox="0 0 24 24"
              id="ember116"
              class="ember-view poll-editor__choice-remover"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              >
                <!---->
              </path>
            </svg>
          </div>
 </div>
 <!--editor encuesta nueva fin-->

          <button class="post-options__action" tabindex="14" disabled @click="addOpcion">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="ember641"
                class="ember-view"
              >
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z">
                  <!---->
                </path>
              </svg>
              <span>Agregar Opcion</span>
            </div>
          </button>
        </div>
      </div>

      <!--fin Encuestas-->

      <div class="post-page__post-footer" v-show="preview">
        <div class="post-page__inline-author">
          <div id="ember1037" class="user-link ember-view">
            <nuxt-link
              :to="{
                name: 'perfil-username',
                params: { username: $store.state.username },
              }"
              class="user-link__link ember-view"
            >
              <span class="user-link__name"> {{ $store.state.username }} </span>

              <!---->

              <!----></nuxt-link
            >
            <!---->
            <!---->
          </div>
        </div>

        <nuxt-link
          v-show="selectGroupId > 0"
          :to="{
            name: 'grupo-slug',
            params: { slug: groupSlug },
          }"
          class="ember-view post-page__group-link"
        >
          publico en
          <img
            :src="iconSelectGroup"
            class="img-lazy img-lazy--loaded ember-view post-page__group-icon"
          />
          <div class="post-page__group-name">{{ selectGroupLabel }}</div>
        </nuxt-link>
        <a
          title="Monday, March 15th 2021 (3:35 pm)"
          href="#"
          id="ember1040"
          class="loading ember-view post-page__date"
        >
          el <span>{{ fechaActual }}</span>
        </a>
      </div>

      <div class="edit-post__group-guidelines" v-show="selectGroupId > 0">
        <header>
          <picture id="ember725" class="group-icon ember-view">
            <img :src="iconSelectGroup" />
          </picture>
          <p>{{ selectGroupLabel }}</p>
          <p>{{ groupExcerpt }}</p>
        </header>
      </div>

      <div class="post-page__footer-actions">
        <button
          class="post-page__submit-button"
          :disabled="botonDisable"
          @click="enviarPost"
        >
        Guardar Post
        </button>

        <button
          class="post-page__preview-toggle"
          @click="previewPost(true)"
          v-show="preview == false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="ember-view post-page__button-icon"
          >
            <path
              d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
            >
              <!---->
            </path>
          </svg>
          Ver Antes
        </button>

        <button
          class="post-page__preview-toggle"
          v-show="preview"
          @click="previewPost(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="ember-view post-page__button-icon"
          >
            <path
              d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"
            >
              <!---->
            </path>
          </svg>
          Editar
        </button>

        <!---->
      </div>
    </div>

    
  </div>
</div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  layout: "post-nuevo",
  name: "editar-post",
  directives: {
    ClickOutside,
  },
  data() {
    return {
      picked: '',
      tituloPost: "",
      tabSelected: 2,
      content: "",
      contentLink: "",
      botonDisable: true,
      preview: false,
      fechaActual: "",
      imagenPost: "",
      filePost: "",
      contentSelected: "",
      disableAll: false,
      selectGrupo: false,
      contadorOutsideGrupo: 0,
      misGrupos: [],
      selectGroupLabel: "Seleccionar Grupo",
      groupExcerpt: "",
      groupSlug: "",
      iconSelectGroup: "",
      selectGroupId: 0,
      quitarGrupoSeleccionado: false,
      otrosSearch: false,
      opcionEncuestaEdit: [],
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      arraySearchOtros: [],
      searchInput: "",
      encuesta: false,
      opcionEncuesta: ['', ''],
      cantidadOpciones: 2,
      preguntaEncuesta: "",
     disabledTab2: false,
     disabledTab1: false,
     idP: '', 
     staffpick: false, 
      rolUser: 'subscriber', 
       options: {
                language_url: '/es_MX.js',
                 font_formats: 'Montserrat', 
                  content_style:
    '@import url("https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic");', 
    content_css: "/css/csseditor.css"
    },  
    };
  },
  watch: {
    searchInput: function (value) {
      if (value.length > 0) {
        this.otrosSearch = true;
        this.searchOtrosGrupos();
      } else {
        this.otrosSearch = false;
        this.arraySearch = [];
      }
    },

    content: function (value) {
      if (value.length > 0) {
        this.botonDisable = false;
      } else {
        this.botonDisable = true;
      }
    },
    contentLink: function (value) {
      if (value.length > 0) {
        this.botonDisable = false;
      } else {
        this.botonDisable = true;
      }
    },

    tituloPost: function (value) {
      console.log(value.length);
      if (value.length > 0 && value.length < 43) {
        document.getElementById("tituloPost").style.height = "75px";
      }
      if (value.length > 43 && value.length < 82) {
        document.getElementById("tituloPost").style.height = "130px";
      }

      if (value.length > 118 && value.length < 140) {
        document.getElementById("tituloPost").style.height = "200px";
      }
    },
  },
  methods: {

     async  getRolByUser(){
       console.log("idp", this.idP)
         await this.$axios
      .$get("/perfil/getroluser/?token="+this.$store.state.tokenUser+"&p=" + this.$route.params.id)
      .then((response) => {
        console.log(response)
        if(response.status == 1){
            this.rolUser = response.rol
            if(response.staffpick == 1){
                this.staffpick = true
            }

        }
      })
    },
    reducirOpciones(index) {
   

      this. opcionEncuesta.splice(index, 1)
    },
    addOpcion() {
      this.opcionEncuesta.push('')
  
    },
    addEncuesta() {
      this.encuesta = true;
      this.opcionEncuesta = ['', '']
      this.preguntaEncuesta = ''
    },
    quitarEncuesta() {
      this.encuesta = false;
    },
    async searchOtrosGrupos() {
      await this.$axios
        .$get("/grupos/likegrupos?p=" + this.searchInput)
        .then((response) => {
     //     console.log(response);
          this.arraySearchOtros = response.grupos;
        });
    },
    seleccionarGrupo(id, titulo, icono, excerpt, slug) {
      this.groupExcerpt = excerpt;
      this.groupSlug = slug;
      this.selectGroupId = id;
      this.selectGroupLabel = titulo;
      this.iconSelectGroup = icono;
      this.selectGrupo = false;
      this.contadorOutsideGrupo = 0;
    },
    async getMyGroups() {
    //  console.log("/grupos/byuser/?token=" + this.$store.state.tokenUser);
      await this.$axios
        .$get("/grupos/byuser/?token=" + this.$store.state.tokenUser)
        .then((response) => {
          this.misGrupos = response.grupos;
        });
    },
    addImagePost() {
      document.getElementById("filePost").click();
    },
    async previewFiles(e) {
      const file = e.target.files[0];
      if(e.target.files[0].type==='image/jpeg' 
      || e.target.files[0].type==='image/png' || e.target.files[0].type==='image/gif'
      ){
          this.filePost = file;
    //  console.log(file);
      this.imagenPost = URL.createObjectURL(file);
      }
    
    },
    previewPost(val) {
     // console.log(val);
      this.preview = val;
      
     this.opcionEncuesta = this.opcionEncuesta.filter(n => n)

    },

    eliminarImagen() {
      this.imagenPost = "";
    },

    selectTab(val) {
      if (val == 1) {
        //voy pa la uno
        if (this.contentLink.length == 0) {
          this.botonDisable = true;
        } else {
          this.botonDisable = false;
        }
      }

      if (val == 2) {
        if (this.content.length == 0) {
          this.botonDisable = true;
        } else {
          this.botonDisable = false;
        }
      }

      this.tabSelected = val;
    },

    async enviarPost() {
      this.disableAll = true;
      this.botonDisable = true;
      if (this.tituloPost.length == 0) {
        alert("falta titul");
        return false;
      }

      if (this.tabSelected == 1) {
        this.contentSelected = this.contentLink;
      }
      if (this.tabSelected == 2) {
        this.contentSelected = this.content;
      }

      let formData = new FormData();
      formData.append("file", this.filePost);
      formData.append("token", this.$store.state.tokenUser);
      formData.append("titulo", this.tituloPost);
          formData.append("idP", this.idP);
      formData.append("contenido", this.contentSelected);
      formData.append("tab", this.tabSelected);
      formData.append("idGrupo", this.selectGroupId);
       formData.append("preguntaEncuesta", this.preguntaEncuesta);
        this.opcionEncuesta = this.opcionEncuesta.filter(n => n)
        console.log(this.opcionEncuesta)
        formData.append("opcionesEncuesta", JSON.stringify(this.opcionEncuesta));
 formData.append("staffpick", this.staffpick);
      const response = await this.$axios.$post("/post/editpost/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     console.log(response)
      if (response.status == 1) {
        this.$router.push({
          name: "c-slug",
          params: { slug: response.slug },
        });
      }
    },

    selectGroup() {
      if (this.selectGrupo == true) {
        this.selectGrupo = false;
        this.contadorOutsideGrupo = 0;
        this.quitarGrupoSeleccionado = false;
      } else {
        if (this.iconSelectGroup != "") {
          this.quitarGrupoSeleccionado = true;
        } else {
          this.quitarGrupoSeleccionado = false;
        }
        this.selectGrupo = true;
      }
    },
    selectGroupOut() {
      if (this.contadorOutsideGrupo > 0) {
        this.selectGrupo = false;
        this.contadorOutsideGrupo = 0;
        this.quitarGrupoSeleccionado = false;
      } else {
        this.contadorOutsideGrupo++;
      }
    },
    quitarGrupoSelect() {
      this.selectGrupo = false;
      this.contadorOutsideGrupo = 0;
      this.quitarGrupoSeleccionado = false;

      this.selectGroupId = 0;
      this.selectGroupLabel = "Seleccionar Grupo";
      this.iconSelectGroup = "";
    },

  async  getPostForEdit(){
  await this.$axios
        .$get("/getpost/postid/?p=" + this.$route.params.id)
        .then((response) => {
        //  console.log(response)
         
          if(response.status == 1){

            this.idP =  response.post[0].id
               this.tituloPost = response.post[0].titulo
               this.imagenPost = response.post[0].imagen
                      if(response.post[0].esLink == 0){
                      this.content = response.post[0].contenido
                      this.tabSelected = 2
                       this.esLink = 0
                        this.disabledTab2 = false
                        this.disabledTab1 = true
                      }else{
                        this.esLink = 1
                         this.disabledTab2 = true
                         this.disabledTab1 = true
                      this.contentLink = response.post[0].contenido
                      this.tabSelected = 1
                      }

                          console.log("eslink = ", this.esLink)

          //add encuesta 
            if(response.post[0].encuesta != 0){
                   this.encuesta = true;
                    this.opcionEncuestaEdit = response.post[0].encuesta.opciones
                    this.preguntaEncuesta = response.post[0].encuesta.pregunta
                    this.opcionEncuesta = []
                    var arrayencuesta = []
                                response.post[0].encuesta.opciones.forEach(function(element) {
                                arrayencuesta.push(element.opcion)
                                })
                      this.opcionEncuesta = arrayencuesta
            }
        

                  this.groupExcerpt = response.post[0].grupo[0].titulo
                  this.groupSlug = response.post[0].grupo[0].slug
                  this.selectGroupId = response.post[0].grupo[0].id
                  this.selectGroupLabel = response.post[0].grupo[0].titulo
                  this.iconSelectGroup = response.post[0].grupo[0].icono
                  this.selectGrupo = false;
                  this.contadorOutsideGrupo = 0;
          }
        });

    }
  },

  mounted() {
    var f = new Date();
    this.fechaActual =
      f.getDate() +
      " de " +
      this.meses[f.getMonth()] +
      " de " +
      f.getFullYear();
this.getPostForEdit()
   this.getMyGroups();
   this.getRolByUser()
  
  },
};
</script>


