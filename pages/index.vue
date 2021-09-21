<template>
  <div>

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div>
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="#" class="logo" style="margin-top: 20px; margin-left: 17%;">
                            <img src="/assets/images/canalizados-logo.png" alt="" width="200" height="30">
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav" v-bind:class="{active: isActive}">
                            <li class="scroll-to-section">
                              <nuxt-link to="/startups" class="menu-item w-dropdown-link" style="box-shadow: 0px 3px 6px #45454524; border: none">
                                <i class="fas fa-rocket"></i> 
                                Startups
                              </nuxt-link>
                            </li>
                            <li class="scroll-to-section">
                              <nuxt-link to="/rondas-inversion" class="menu-item w-dropdown-link" style="box-shadow: 0px 3px 6px #45454524; border: none">
                                <i class="fas fa-money-bill-wave"></i> 
                                Rondas de Inversion
                              </nuxt-link>
                            </li>
                        <form action="/buscar" class="search-2 w-form buscadorHeader form-header" method="GET" style="height: 30px" >
                          <i class="fas fa-search input-search-header" style="position: absolute; top: 7px; left: 417px; width: 20px; height: 20px"></i>
                          <input
                            type="search"
                            class="search-input w-input"
                            maxlength="256"
                            name="q"
                            placeholder="Buscá temas, grupos, usuarios…"
                            style="padding-left: 45px; background: #F3F3F3 0% 0% no-repeat padding-box; border: none; height: 30px;"
                          /><input
                            type="submit"
                            value="Search"
                            class="search-button w-button"
                          />
                        </form>
                          <li class="scroll-to-section" v-if="$store.state.cookieLogin == false">
                            <nuxt-link 
                              :to="{ name: 'iniciar-sesion' }"
                              class="button-init"
                              v-if="$store.state.cookieLogin == false"
                            >
                              Iniciar Sesion
                            </nuxt-link>
                          </li>
                          <li class="scroll-to-section" v-if="$store.state.cookieLogin == false">
                            <nuxt-link 
                              :to="{ name: 'registro' }"
                              class="button-init-register"
                              v-if="$store.state.cookieLogin == false"
                            >
                              Registrarse
                            </nuxt-link>
                          </li>
                          <li class="list-item-3" v-if="$store.state.cookieLogin">
                            <div data-hover="" data-delay="0" class="w-dropdown" style="">
                              <div
                                class="dropdown-toggle-3 w-dropdown-toggle"
                                style="padding: 0px !important; display: flex !important;"
                                id="w-dropdown-toggle-1"
                                aria-controls="w-dropdown-list-1"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                role="button"
                                tabindex="0"
                                @click="dropDownPerfilClic"
                              >
                              <div style="border: none; display: flex; border-radius: 20px;">
                              <nuxt-link
                                :to="{
                                  name: 'u-username',
                                  params: { username: $store.state.username },
                                }"
                                style="height: 37px !important; border: none !important; background-color: #F5F5F5;"
                              >
                                <img
                                  :src="$store.state.img_perfil"
                                  loading="lazy"
                                  sizes="28px"
                                  alt=""
                                  class="image-12"
                                  style="width: 26px !important; height: 26px !important;"
                                />
                              </nuxt-link>
                              <i class="fas fa-chevron-down" style="padding-top: 15%;"></i>
                              </div>
                              </div>
                              <nav
                                v-if="dropDownPerfil"
                                v-click-outside="outDrop"
                                class="dropdown-list-2 w-dropdown-list w--open"
                                id="w-dropdown-list-1"
                                aria-labelledby="w-dropdown-toggle-1"
                              >
                                <nuxt-link
                                  class="w-dropdown-link"
                                  style="font-family: 'Poppins', sans-serif !important;"
                                  :to="{
                                    name: 'u-username',
                                    params: { username: $store.state.username },
                                  }"
                                  ><i class="fas fa-user"></i> Perfil</nuxt-link
                                >
                                <nuxt-link
                                  class="w-dropdown-link"
                                  style="font-family: 'Poppins', sans-serif !important;"
                                  tabindex="0"
                                  :to="{
                                    name: 'u-username-notificaciones',
                                    params: { username: $store.state.username },
                                  }"
                                  ><i class="fas fa-bell"></i> Notificaciones</nuxt-link
                                >
                                <nuxt-link
                                  class="w-dropdown-link"
                                  tabindex="0"
                                  style="font-family: 'Poppins', sans-serif !important;"
                                  :to="{
                                    name: 'u-username-configuracion',
                                    params: { username: $store.state.username },
                                  }"
                                  ><i class="fas fa-cog"></i> Configuracion</nuxt-link
                                ><a
                                  href="#"
                                  class="w-dropdown-link"
                                  style="font-family: 'Poppins', sans-serif !important;"
                                  @click.prevent="cerrarSesion"
                                  tabindex="0"
                                  ><i class="fas fa-sign-out-alt"></i> Salir</a
                                >
                              </nav>
                            </div>
                          </li>
                        </ul>

                        <!-- Use any element to open the sidenav -->
                        <span onclick="openNav()" class="collapsable"><i class="fas fa-bars icono-hamburguesa"></i></span>
                        <!--Content from sidenav here-->
                         <div id="mySidenav" class="sidenav">
                          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                          <div style="display: flex" v-if="!$store.state.img_perfil && !$store.state.username && !$store.state.nombres">
                            <nuxt-link to="/inciar-sesion">Iniciar Sesion</nuxt-link>
                            <nuxt-link to="/registro">Registrarse</nuxt-link>
                          </div>
                          <div style="display: flex;" v-if="$store.state.img_perfil && $store.state.username && $store.state.nombres">
                            <img
                              :src="$store.state.img_perfil"
                              loading="lazy"
                              class="image-12"
                              style="margin-left: 20px; margin-top: 12px; margin-right: 10px;"
                            />
                            <div>
                              <h4 style="color: #fff;">{{$store.state.nombres}}</h4>
                              <p>{{$store.state.username}}</p>
                            </div>
                          </div>
                          <hr style="background-color: #000">
                          <div style="text-align: left;">
                            <nuxt-link to="/comunidad" style="font-size: 20px;"><i class="fas fa-home"></i> Inicio</nuxt-link>
                            <nuxt-link to="/startups" style="font-size: 20px;"><i class="fas fa-rocket"></i> Startups</nuxt-link>
                            <nuxt-link to="/staffpicks" style="font-size: 20px;"><i class="fas fa-star"></i> Staff Picks</nuxt-link>
                            <nuxt-link to="/grupos" style="font-size: 20px;"><i class="fas fa-comments"></i> Grupos</nuxt-link>
                            <nuxt-link to="/ecosistema" style="font-size: 20px;"><i class="fas fa-users"></i> Ecosistema</nuxt-link>
                          </div>
                          <hr style="background-color: #000">
                          <div>
                            <div style="position: absolute; bottom: 0; text-aling: center;">Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
                            </div>
                          </div>

                        <!-- <a 
                          class='menu-trigger' 
                          @click="showMobileMenu = !showMobileMenu" 
                          :class="{ active: showMobileMenu }">
                          <span>Menu</span>
                          <h7>Menu</h7>
                          <ul>
                            <li>Test 1</li>
                            <li>Test 2</li>
                            <li>Test 3</li>
                          </ul>
                        </a> -->
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- <header class="header-area header-sticky" style="height: 20px; widht: 20px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="#" class="logo">
                <img src="assets/images/canalizados-logo.png" alt="" width="200" height="30">
              </a>
              <ul class="nav">
                <li class="scroll-to-section">
                  <a href="#welcome" class="menu-item">Inicio</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#about" class="menu-item">Sobre Nosotros</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#testimonials" class="menu-item">Testimonios</a>
                </li> 
                <li class="submenu">
                  <a href="javascript:;">Participá</a>
                  <ul>
                    <NuxtLink to="/login"><li><a class="menu-item">Iniciá sesión</a></li></NuxtLink>
                    <NuxtLink to="/registro"><li><a class="menu-item">Regístrate</a></li></NuxtLink>
                    <NuxtLink to="/faqs"><li><a class="menu-item">FAQ'S</a></li></NuxtLink>
                    <NuxtLink to="/comunidad"><li><a class="menu-item">Comunidad</a></li></NuxtLink>
                  </ul>
                <li class="scroll-to-section">
                  <a href="#contact-us" class="menu-item">Contáctanos</a>
                </li>
                <li>
                  <NuxtLink to="/iniciar-sesion">Iniciá sesión</NuxtLink>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header> -->

    <!-- ***** Welcome Area Start ***** -->
    <div class="welcome-area" id="welcome">

        <!-- ***** Header Text Start ***** -->
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-8 col-md-8 col-sm-6 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1 class="main-title" style="font-family: 'Space Grotesk' !important;">El mejor medio digital para tu <em>START UP</em></h1>
                        <p><a href="#">Canalizados</a> es un medio digital que puede ofrecerle numerosos beneficios a tu Start up.
                           Para conocer algunos de esos numerosos beneficios sigue navegando nuestra página y te informarás de todos ellos.</p> 
                        <a href="#about" class="main-button-slider">Crear tu Start up</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- ***** Header Text End ***** -->
    </div>
    <!-- ***** Welcome Area End ***** -->

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>01</h2>
                            <img src="/assets/images/Add_apps_perspective_matte_s.png" alt="" style="height: 100px; width: 100px; display: block; margin: auto;">
                            <h4>Crea tu Startup</h4>
                            <p>Piensa una idea revolucionaria y única. Luego de eso súbelo a nuestra página</p>
                            <NuxtLink to="/startups">
                              <a href="#testimonials" class="main-button">
                                Crear Start Up
                              </a>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div class="features-item" style="transform: scale(1.1);">
                        <div class="features-icon">
                            <h2>02</h2>
                            <img src="/assets/images/User_perspective_matte_s.png" alt="" style="height: 100px; width: 100px; display: block; margin: auto;">
                            <h4>Formá un equipo</h4>
                            <p>Crea una sociedad con un grupo de personas que sepas que te desempeñas bien.</p>
                            <NuxtLink to="/grupo-nuevo">
                              <a href="#testimonials" class="main-button" style="background-color: #FB590B !important;">
                                Creá un grupo
                              </a>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>03</h2>
                            <img src="/assets/images/perspaleta2_0043.png" alt="" style="height: 100px; width: 100px; display: block; margin: auto;">
                            <h4>Sube tu Startup</h4>
                            <p>¡Sube tu startup y revoluciona el mercado! Nosotros te apoyaremos en lo que podamos</p>
                            <NuxtLink to="/startups">
                              <a href="#testimonials" class="main-button">
                                Subir Start up
                              </a>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="section" id="about">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>01</h2>
                <img src="assets/images/features-icon-1.png" alt="" />
                <h4>Crea tu Startup</h4>
                <p>
                  Piensa una idea revolucionaria y única. Luego de eso súbelo a
                  nuestra página
                </p>
                <NuxtLink to="/startups">
                  <a href="#testimonials" class="main-button">
                    Crear Start Up
                  </a>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>02</h2>
                <img src="assets/images/features-icon-2.png" alt="" />
                <h4>Formá un equipo</h4>
                <p>
                  Crea una sociedad con un grupo de personas que sepas que te
                  desempeñas bien.
                </p>
                <NuxtLink to="/grupo-nuevo">
                  <a href="#testimonials" class="main-button">
                    Creá un grupo
                  </a>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <div class="features-item">
              <div class="features-icon">
                <h2>03</h2>
                <img src="assets/images/features-icon-3.png" alt="" />
                <h4>Sube tu Startup</h4>
                <p>
                  Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam,
                  nec consectetur diam.
                </p>
                <NuxtLink to="/startups">
                  <a href="#testimonials" class="main-button">
                    Subir Start up
                  </a>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- ***** Features Big Item End ***** -->

    <div class="left-image-decor"></div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="promotion">
        <div class="container">
            <div class="row">
                <div class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="/assets/images/2002.i039.010_chatbot_messenger_ai_isometric_set-09.jpg" class="img-fluid rounded d-block mx-auto" alt="App">
                </div>
                <div class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                    <ul>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s" class="testing">
                            <img src="/assets/images/Chart_perspective_matte_s.png" alt="" style="height: 100px; width: 100px; padding: 5px;">
                            <div class="text testing" style="border: 1px solid;border-radius: 10px;box-shadow: 0 0 10px;">
                                <h4>Espacio</h4>
                                <p>Nosotros te brindamos el espacio y el momento para poder llevar a cabo tu emprendimiento.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s" style="transform: scale(1.1);">
                            <img src="images/Message_perspective_matte_s.png" alt="" height="100px" width="100px" style="padding: 5px;">
                            <div class="text" style="border: 1px solid;border-radius: 10px;box-shadow: 0 0 10px;">
                                <h4>Gente</h4>
                                <p>Te brindamos una comunidad de emprendedores en la cual puedas reclutar gente o hacer amigos.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                            <img src="/assets/images/FAQ_perspective_matte_s.png" alt="" height="100px" width="100px" style="padding: 5px;">
                            <div class="text" style="border: 1px solid;border-radius: 10px;box-shadow: 0 0 10px;">
                                <h4>Informacion</h4>
                                <p>Te brindamos una seccion de informacion sobre los startups que mas destacan en el mundo.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Features Big Item End ***** -->

    <div class="right-image-decor"></div>

    <!-- ***** Testimonials Starts ***** -->
    <section class="section" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="center-heading">
                        <h2>¿Qué Dicen De <em>Nosotros?</em></h2>
                        <p>
                          "La fuente del éxito es escuchar la opinión del resto, siempre
                          siendo cuidadosos". ~ Pepe Suarez
                        </p>
                        <div style="text-align: center;">
                          <a href="#"><i class="fa fa-instagram icono"></i></a>
                          <a href="#"><i class="fa fa-twitter icono" style="margin: 2px 10px;"></i></a>
                          <a href="#"><i class="fa fa-linkedin icono"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="glider-contain">
                        <div class="glider">
                          <div style="margin: 0 10px">
                            <no-ssr>
                              <Tweet
                                id="1417822244303216644"
                                :options="{
                                  cards: 'visible',
                                  conversation: 'all',
                                  lang: 'es',
                                  theme: 'light',
                                  align: 'right',
                                }"
                                :width="500"
                                :dnt="false"
                              >
                              </Tweet>
                            </no-ssr>
                          </div>
                          <div style="margin: 0 10px">
                            <no-ssr>
                              <Tweet
                                id="1423070920676155392"
                                :options="{
                                  cards: 'visible',
                                  conversation: 'all',
                                  lang: 'es',
                                  theme: 'light',
                                  align: 'left',
                                }"
                                :width="500"
                                :dnt="true"
                              >
                              </Tweet>
                            </no-ssr>
                          </div>
                          <div style="margin: 0 10px">
                            <no-ssr>
                              <Tweet
                                id="1422607734579544071"
                                :options="{
                                  cards: 'visible',
                                  conversation: 'all',
                                  lang: 'es',
                                  theme: 'light',
                                  align: 'right',
                                }"
                                :width="500"
                                :dnt="false"
                              >
                              </Tweet>
                            </no-ssr>
                          </div>
                          <div style="margin: 0 10px">
                            <no-ssr>
                              <Tweet
                                id="1412464278523764736"
                                :options="{
                                  cards: 'visible',
                                  conversation: 'all',
                                  lang: 'es',
                                  theme: 'light',
                                  align: 'left',
                                }"
                                :width="500"
                                :dnt="false"
                              >
                              </Tweet>
                            </no-ssr>
                          </div>
                        </div>
                      
                        
                        <button aria-label="Previous" class="glider-prev" style="margin-left: 20px;"><i class="fas fa-chevron-left icono-main"></i></button>
                        <button aria-label="Next" class="glider-next" style="margin-left: 20px;"><i class="fas fa-chevron-right icono-main"></i></button>
                        <div role="tablist" class="dots"></div>
                      </div>                     
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 mobile-bottom-fix-big centrado"
                      data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                    >
                </div>
            </div>
        </div>
    </section>
    <footer id="contact-us" v-if="$store.state.cookieLogin == false">
        <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>        
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <!-- ***** Contact Form Start ***** -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="contact-form">
                        <h2>Registrate e informate de los beneficios de ser parte de <em>Canalizados</em></h2>
                          <div class="row">
                            <div class="col-md-6 col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                              <GoogleLogin  class="googleBtn" :params="params" :onSuccess="onSuccessGoogle"
                               :onFailure="onFailureGoogle">
                                <li class="list-item-16 google" @click="abrirGoogle">
                                    <div class="html-embed-14 w-embed">
                                      <img
                                        src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTEyMCAyNTZjMC0yNS4zNjcgNi45ODktNDkuMTMgMTkuMTMxLTY5LjQ3N3YtODYuMzA4aC04Ni4zMDhjLTM0LjI1NSA0NC40ODgtNTIuODIzIDk4LjcwNy01Mi44MjMgMTU1Ljc4NXMxOC41NjggMTExLjI5NyA1Mi44MjMgMTU1Ljc4NWg4Ni4zMDh2LTg2LjMwOGMtMTIuMTQyLTIwLjM0Ny0xOS4xMzEtNDQuMTEtMTkuMTMxLTY5LjQ3N3oiIGZpbGw9IiNmYmJkMDAiLz48cGF0aCBkPSJtMjU2IDM5Mi02MCA2MCA2MCA2MGM1Ny4wNzkgMCAxMTEuMjk3LTE4LjU2OCAxNTUuNzg1LTUyLjgyM3YtODYuMjE2aC04Ni4yMTZjLTIwLjUyNSAxMi4xODYtNDQuMzg4IDE5LjAzOS02OS41NjkgMTkuMDM5eiIgZmlsbD0iIzBmOWQ1OCIvPjxwYXRoIGQ9Im0xMzkuMTMxIDMyNS40NzctODYuMzA4IDg2LjMwOGM2Ljc4MiA4LjgwOCAxNC4xNjcgMTcuMjQzIDIyLjE1OCAyNS4yMzUgNDguMzUyIDQ4LjM1MSAxMTIuNjM5IDc0Ljk4IDE4MS4wMTkgNzQuOTh2LTEyMGMtNDkuNjI0IDAtOTMuMTE3LTI2LjcyLTExNi44NjktNjYuNTIzeiIgZmlsbD0iIzMxYWE1MiIvPjxwYXRoIGQ9Im01MTIgMjU2YzAtMTUuNTc1LTEuNDEtMzEuMTc5LTQuMTkyLTQ2LjM3N2wtMi4yNTEtMTIuMjk5aC0yNDkuNTU3djEyMGgxMjEuNDUyYy0xMS43OTQgMjMuNDYxLTI5LjkyOCA0Mi42MDItNTEuODg0IDU1LjYzOGw4Ni4yMTYgODYuMjE2YzguODA4LTYuNzgyIDE3LjI0My0xNC4xNjcgMjUuMjM1LTIyLjE1OCA0OC4zNTItNDguMzUzIDc0Ljk4MS0xMTIuNjQgNzQuOTgxLTE4MS4wMnoiIGZpbGw9IiMzYzc5ZTYiLz48cGF0aCBkPSJtMzUyLjE2NyAxNTkuODMzIDEwLjYwNiAxMC42MDYgODQuODUzLTg0Ljg1Mi0xMC42MDYtMTAuNjA2Yy00OC4zNTItNDguMzUyLTExMi42MzktNzQuOTgxLTE4MS4wMi03NC45ODFsLTYwIDYwIDYwIDYwYzM2LjMyNiAwIDcwLjQ3OSAxNC4xNDYgOTYuMTY3IDM5LjgzM3oiIGZpbGw9IiNjZjJkNDgiLz48cGF0aCBkPSJtMjU2IDEyMHYtMTIwYy02OC4zOCAwLTEzMi42NjcgMjYuNjI5LTE4MS4wMiA3NC45OC03Ljk5MSA3Ljk5MS0xNS4zNzYgMTYuNDI2LTIyLjE1OCAyNS4yMzVsODYuMzA4IDg2LjMwOGMyMy43NTMtMzkuODAzIDY3LjI0Ni02Ni41MjMgMTE2Ljg3LTY2LjUyM3oiIGZpbGw9IiNlYjQxMzIiLz48L2c+PC9zdmc+"
                                        style="margin-left: 80%"
                                      />
                                    </div>
                                  <div style="margin-left: 10%">Continuar con Google</div>
                                </li>
                              
                              </GoogleLogin>
                            </div>
                            <div class="col-md-6 col-xxl-6 col-xl-6 col-lg-6 col-sm-12" style="padding-top: 1.2%;">
                              <a class="twitterLogin" @click="twitterLogin">
                                <li class="list-item-16">
                                  <div class="html-embed-14 w-embed">
                                    <img
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                      style="margin-left: 80%"
                                    />
                                  </div>
                                  <div style="margin-left: 10%">Continuar con Twitter</div>
                                </li>
                              </a>
                            </div>
                          </div>
                          <!-- <ul role="list" class="list-14">
                            <a class="twitterLogin" @click="twitterLogin">
                            <li class="list-item-16">
                              <div class="html-embed-14 w-embed">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                />
                              </div>
                              <div>Continuar con Twitter</div>
                            </li>
                            </a>
                            
                          
                              <GoogleLogin  class="googleBtn" :params="params" :onSuccess="onSuccessGoogle"
                               :onFailure="onFailureGoogle">
                                <li class="list-item-16 google" @click="abrirGoogle">
                              <div class="html-embed-14 w-embed">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTEyMCAyNTZjMC0yNS4zNjcgNi45ODktNDkuMTMgMTkuMTMxLTY5LjQ3N3YtODYuMzA4aC04Ni4zMDhjLTM0LjI1NSA0NC40ODgtNTIuODIzIDk4LjcwNy01Mi44MjMgMTU1Ljc4NXMxOC41NjggMTExLjI5NyA1Mi44MjMgMTU1Ljc4NWg4Ni4zMDh2LTg2LjMwOGMtMTIuMTQyLTIwLjM0Ny0xOS4xMzEtNDQuMTEtMTkuMTMxLTY5LjQ3N3oiIGZpbGw9IiNmYmJkMDAiLz48cGF0aCBkPSJtMjU2IDM5Mi02MCA2MCA2MCA2MGM1Ny4wNzkgMCAxMTEuMjk3LTE4LjU2OCAxNTUuNzg1LTUyLjgyM3YtODYuMjE2aC04Ni4yMTZjLTIwLjUyNSAxMi4xODYtNDQuMzg4IDE5LjAzOS02OS41NjkgMTkuMDM5eiIgZmlsbD0iIzBmOWQ1OCIvPjxwYXRoIGQ9Im0xMzkuMTMxIDMyNS40NzctODYuMzA4IDg2LjMwOGM2Ljc4MiA4LjgwOCAxNC4xNjcgMTcuMjQzIDIyLjE1OCAyNS4yMzUgNDguMzUyIDQ4LjM1MSAxMTIuNjM5IDc0Ljk4IDE4MS4wMTkgNzQuOTh2LTEyMGMtNDkuNjI0IDAtOTMuMTE3LTI2LjcyLTExNi44NjktNjYuNTIzeiIgZmlsbD0iIzMxYWE1MiIvPjxwYXRoIGQ9Im01MTIgMjU2YzAtMTUuNTc1LTEuNDEtMzEuMTc5LTQuMTkyLTQ2LjM3N2wtMi4yNTEtMTIuMjk5aC0yNDkuNTU3djEyMGgxMjEuNDUyYy0xMS43OTQgMjMuNDYxLTI5LjkyOCA0Mi42MDItNTEuODg0IDU1LjYzOGw4Ni4yMTYgODYuMjE2YzguODA4LTYuNzgyIDE3LjI0My0xNC4xNjcgMjUuMjM1LTIyLjE1OCA0OC4zNTItNDguMzUzIDc0Ljk4MS0xMTIuNjQgNzQuOTgxLTE4MS4wMnoiIGZpbGw9IiMzYzc5ZTYiLz48cGF0aCBkPSJtMzUyLjE2NyAxNTkuODMzIDEwLjYwNiAxMC42MDYgODQuODUzLTg0Ljg1Mi0xMC42MDYtMTAuNjA2Yy00OC4zNTItNDguMzUyLTExMi42MzktNzQuOTgxLTE4MS4wMi03NC45ODFsLTYwIDYwIDYwIDYwYzM2LjMyNiAwIDcwLjQ3OSAxNC4xNDYgOTYuMTY3IDM5LjgzM3oiIGZpbGw9IiNjZjJkNDgiLz48cGF0aCBkPSJtMjU2IDEyMHYtMTIwYy02OC4zOCAwLTEzMi42NjcgMjYuNjI5LTE4MS4wMiA3NC45OC03Ljk5MSA3Ljk5MS0xNS4zNzYgMTYuNDI2LTIyLjE1OCAyNS4yMzVsODYuMzA4IDg2LjMwOGMyMy43NTMtMzkuODAzIDY3LjI0Ni02Ni41MjMgMTE2Ljg3LTY2LjUyM3oiIGZpbGw9IiNlYjQxMzIiLz48L2c+PC9zdmc+"
                                />
                              </div>
                              <div>Continuar con Google</div>
                          
                             </li>
                              </GoogleLogin>
                          </ul> -->
                            <form id="contact" @submit="checkForm" method="post" novalidate="true" class="form-footer" @click.prevent="checkForm">
                                <p v-if="errors.length > 0">
                                  <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                  <ul>
                                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                                  </ul>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input 
                                              v-model="user"
                                              maxlength="50"
                                              type="text" 
                                              id="user" 
                                              name="Subscriber-Username"
                                              placeholder="Ingresa tu usuario" 
                                              data-name="Subscriber Username"
                                              required="required"
                                              style="background-color: rgba(250,250,250,0.3);"
                                            >
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input 
                                              v-model="email" 
                                              type="email" 
                                              maxlength="256"
                                              name="Subscriber-Email"
                                              data-name="Subscriber Email"
                                              id="email" 
                                              placeholder="Ingresa tu email"
                                              required="required" 
                                              style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <input 
                                            v-model="password" 
                                            maxlength="256"
                                            type="password" 
                                            id="password" 
                                            placeholder="Ingresa tu contraseña" style="background-color: rgba(250,250,250,0.3);"
                                            required="required"
                                            />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-button">Enviar Mensaje</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- ***** Contact Form End ***** -->
                    <div class="right-content col-lg-6 col-md-12 col-sm-12">
                        <h2>Saber mas sobre <em>Canalizados</em></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet cupiditate nisi necessitatibus sequi ullam.
                            <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, in eos similique labore ab voluptatibus.<a
                                rel="nofollow" href="#" target="_parent">contact</a> page
                            for more detail.</p>
                        <ul class="social">
                            <li><a href="https://www.instagram.com/canalizados_/"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/Canalizados_"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/canalizados/"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr>
              <div id="footer" class="footer" style="background-color: transparent !important">
                <div class="w-container">
                  <div style="color: #fff">Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
                   <div class="menuPoliticas">
                                  <nuxt-link to="/quienes-somos" style="color: #fff">Quienes Somos </nuxt-link> <a>·</a>
                                   <nuxt-link to="/politica-de-privacidad" style="color: #fff" >Privacidad </nuxt-link> <a>·</a>
                                   <nuxt-link to="/contacto" style="color: #fff" >Contacto </nuxt-link>
                                </div>
                </div>
              </div>
        </div>
    </footer>
    <footer id="contact-us" v-if="$store.state.cookieLogin == true">
        <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>        
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <!-- ***** Contact Form Start ***** -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="contact-form">
                        <h2>Muchas gracias por ser parte de la comunidad de <em style="font-style: inherit; color: #7986cb;">Canalizados</em></h2>
                          <div class="row">
                            <h4>Actualmente posees de los siguientes beneficios: <br></h4><br>
                            <p><i class="fas fa-check-circle" style="color: #3ACF39"></i> Puedes publicar tu startup y asi darte a conocer</p><br>
                            <p><i class="fas fa-check-circle" style="color: #3ACF39"></i> Puedes comentar y participar de los distintos grupos</p><br>
                            <p><i class="fas fa-check-circle" style="color: #3ACF39"></i> Recibes a menudo libros y reuniones via meet sobre finanzas</p><br>
                          </div>
                        </div>
                    </div>
                    <!-- ***** Contact Form End ***** -->
                    <div class="right-content col-lg-6 col-md-12 col-sm-12">
                        <h2>Oficialmente formas parte de <em>Canalizados</em></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet cupiditate nisi necessitatibus sequi ullam.
                            <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, in eos similique labore ab voluptatibus.<a
                                rel="nofollow" href="#" target="_parent">contact</a> page
                            for more detail.</p>
                        <ul class="social">
                            <li><a href="https://www.instagram.com/canalizados_/"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/Canalizados_"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/canalizados/"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr>
              <div id="footer" class="footer" style="background-color: transparent !important">
                <div class="w-container">
                  <div style="color: #fff">Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
                   <div class="menuPoliticas">
                      <nuxt-link to="/quienes-somos" style="color: #fff">Quienes Somos </nuxt-link> <a>·</a>
                      <nuxt-link to="/politica-de-privacidad" style="color: #fff" >Privacidad </nuxt-link> <a>·</a>
                      <nuxt-link to="/contacto" style="color: #fff" >Contacto </nuxt-link>
                    </div>
                </div>
              </div>
        </div>
    </footer>
    <!-- <section class="section" id="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="center-heading">
              <h2>¿Qué Dicen De <em>Nosotros?</em></h2>
              <p>
                "La fuente del éxito es escuchar la opinión del resto, siempre
                siendo cuidadosos". ~ Pepe Suarez
              </p>
            </div>
          </div>
          <div
            class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big centrado"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <a
              class="twitter-timeline"
              style="height: 200px; width: 200px"
              href="https://twitter.com/Canalizados_?ref_src=twsrc%5Etfw"
              width="800" height="700"
              data-link-color="#000"
              data-chrome="noheader nofooter noborders transparent"  
              data-related="twitterapi,Twitter" data-aria-polite="assertive"
              lang="ES"
              >Tweets de la comunidad</a
            >
            <script
              async
              style="height: 200px; width: 200px"
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>
    </section> -->
    <!-- ***** Testimonials Ends ***** -->

    <!-- ***** Footer Start ***** -->
    <!-- <footer id="contact-us">
        <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>        
          <div class="container">
            <div class="footer-content" v-if="$store.state.cookieLogin == false">
              <div class="row" >
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="contact-form">
                    <h2>Registrate e informate de los beneficios de ser parte de <em>Canalizados</em></h2>
                      <div class="row">
                        <div class="col-6">
                          <GoogleLogin  
                            class="googleBtn" 
                            :params="params" 
                            :onSuccess="onSuccessGoogle"
                            :onFailure="onFailureGoogle">
                              <li class="list-item-16 google" @click="abrirGoogle">
                                  <div class="html-embed-14 w-embed">
                                    <img
                                      src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTEyMCAyNTZjMC0yNS4zNjcgNi45ODktNDkuMTMgMTkuMTMxLTY5LjQ3N3YtODYuMzA4aC04Ni4zMDhjLTM0LjI1NSA0NC40ODgtNTIuODIzIDk4LjcwNy01Mi44MjMgMTU1Ljc4NXMxOC41NjggMTExLjI5NyA1Mi44MjMgMTU1Ljc4NWg4Ni4zMDh2LTg2LjMwOGMtMTIuMTQyLTIwLjM0Ny0xOS4xMzEtNDQuMTEtMTkuMTMxLTY5LjQ3N3oiIGZpbGw9IiNmYmJkMDAiLz48cGF0aCBkPSJtMjU2IDM5Mi02MCA2MCA2MCA2MGM1Ny4wNzkgMCAxMTEuMjk3LTE4LjU2OCAxNTUuNzg1LTUyLjgyM3YtODYuMjE2aC04Ni4yMTZjLTIwLjUyNSAxMi4xODYtNDQuMzg4IDE5LjAzOS02OS41NjkgMTkuMDM5eiIgZmlsbD0iIzBmOWQ1OCIvPjxwYXRoIGQ9Im0xMzkuMTMxIDMyNS40NzctODYuMzA4IDg2LjMwOGM2Ljc4MiA4LjgwOCAxNC4xNjcgMTcuMjQzIDIyLjE1OCAyNS4yMzUgNDguMzUyIDQ4LjM1MSAxMTIuNjM5IDc0Ljk4IDE4MS4wMTkgNzQuOTh2LTEyMGMtNDkuNjI0IDAtOTMuMTE3LTI2LjcyLTExNi44NjktNjYuNTIzeiIgZmlsbD0iIzMxYWE1MiIvPjxwYXRoIGQ9Im01MTIgMjU2YzAtMTUuNTc1LTEuNDEtMzEuMTc5LTQuMTkyLTQ2LjM3N2wtMi4yNTEtMTIuMjk5aC0yNDkuNTU3djEyMGgxMjEuNDUyYy0xMS43OTQgMjMuNDYxLTI5LjkyOCA0Mi42MDItNTEuODg0IDU1LjYzOGw4Ni4yMTYgODYuMjE2YzguODA4LTYuNzgyIDE3LjI0My0xNC4xNjcgMjUuMjM1LTIyLjE1OCA0OC4zNTItNDguMzUzIDc0Ljk4MS0xMTIuNjQgNzQuOTgxLTE4MS4wMnoiIGZpbGw9IiMzYzc5ZTYiLz48cGF0aCBkPSJtMzUyLjE2NyAxNTkuODMzIDEwLjYwNiAxMC42MDYgODQuODUzLTg0Ljg1Mi0xMC42MDYtMTAuNjA2Yy00OC4zNTItNDguMzUyLTExMi42MzktNzQuOTgxLTE4MS4wMi03NC45ODFsLTYwIDYwIDYwIDYwYzM2LjMyNiAwIDcwLjQ3OSAxNC4xNDYgOTYuMTY3IDM5LjgzM3oiIGZpbGw9IiNjZjJkNDgiLz48cGF0aCBkPSJtMjU2IDEyMHYtMTIwYy02OC4zOCAwLTEzMi42NjcgMjYuNjI5LTE4MS4wMiA3NC45OC03Ljk5MSA3Ljk5MS0xNS4zNzYgMTYuNDI2LTIyLjE1OCAyNS4yMzVsODYuMzA4IDg2LjMwOGMyMy43NTMtMzkuODAzIDY3LjI0Ni02Ni41MjMgMTE2Ljg3LTY2LjUyM3oiIGZpbGw9IiNlYjQxMzIiLz48L2c+PC9zdmc+"
                                    />
                                  </div>
                                <div>Continuar con Google</div>
                              </li>
                              
                          </GoogleLogin>
                          </div>
                          <div class="col-6" style="padding-top: 1.2%;">
                            <li class="list-item-16">
                              <div class="html-embed-14 w-embed">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                                />
                              </div>
                              <div>Continuar con Twitter</div>
                            </li>
                          </div>
                          <form id="contact" @submit="checkForm" method="post" novalidate="true" class="form-footer">
                            <p v-if="errors.length > 0">
                              <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                              <ul>
                                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                              </ul>
                            </p>
                            <div class="row">
                              <div class="col-md-6 col-sm-12">
                                <fieldset>
                                    <input 
                                      v-model="user"
                                      maxlength="50"
                                      type="text" 
                                      id="user" 
                                      name="Subscriber-Username"
                                      placeholder="Ingresa tu usuario" 
                                      data-name="Subscriber Username"
                                      required="required"
                                      style="background-color: rgba(250,250,250,0.3);"
                                    >
                                </fieldset>
                              </div>
                              <div class="col-md-6 col-sm-12">
                                <fieldset>
                                    <input 
                                      v-model="email" 
                                      type="email" 
                                      maxlength="256"
                                      name="Subscriber-Email"
                                      data-name="Subscriber Email"
                                      id="email" 
                                      placeholder="Ingresa tu email"
                                      required="required" 
                                      style="background-color: rgba(250,250,250,0.3);">
                                </fieldset>
                              </div>
                              <div class="col-lg-12">
                                <fieldset>
                                    <input 
                                    v-model="password" 
                                    maxlength="256"
                                    type="password" 
                                    id="password" 
                                    placeholder="Ingresa tu contraseña" style="background-color: rgba(250,250,250,0.3);"
                                    required="required"
                                    />
                                </fieldset>
                              </div>
                              <div class="col-lg-12">
                                  <fieldset>
                                      <button type="submit" id="form-submit" class="main-button">Enviar Mensaje</button>
                                  </fieldset>
                              </div>
                            </div>
                          </form>
                    </div>
                    <div class="right-content col-lg-6 col-md-12 col-sm-12">
                        <h2>Saber mas sobre <em>Canalizados</em></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet cupiditate nisi necessitatibus sequi ullam.
                            <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, in eos similique labore ab voluptatibus.<a
                                rel="nofollow" href="#" target="_parent">contact</a> page
                            for more detail.</p>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr>
              </div>
              <div id="footer" class="footer" style="background-color: transparent !important">
                <div class="w-container">
                  <div style="color: #fff">Copyright © 2021 Canalizados. Todos los derechos reservados.</div>
                   <div class="menuPoliticas">
                                  <nuxt-link to="/quienes-somos" style="color: #fff">Quienes Somos </nuxt-link> <a>·</a>
                                   <nuxt-link to="/politica-de-privacidad" style="color: #fff" >Privacidad </nuxt-link> <a>·</a>
                                   <nuxt-link to="/contacto" style="color: #fff" >Contacto </nuxt-link>
                                </div>
                </div>
            </div>
            
      </div>
    </footer> -->
    <!-- <footer id="contact-us">a
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="contact-form">
                <form id="contact" action="" method="post">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Nombre Completo"
                          required=""
                          style="background-color: rgba(250,250,250,0.3);"
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Direccion Email"
                          required=""
                          style="background-color: rgba(250,250,250,0.3);"
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Tu mensaje"
                          required=""
                          style="background-color: rgba(250,250,250,0.3);"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="main-button"
                          @click="handleAlert"
                        >
                          Enviar Mensaje
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="right-content col-lg-6 col-md-12 col-sm-12">
              <h2>Saber mas sobre <em>Canalizados</em></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore eveniet cupiditate nisi necessitatibus sequi ullam.
                <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quis, in eos similique labore ab voluptatibus.<a
                  rel="nofollow"
                  href="https://templatemo.com/contact"
                  target="_parent"
                  >contact</a
                >
                page for more detail.
              </p>
              <ul class="social">
                <li>
                  <a href="https://www.instagram.com/canalizados_/" target="_blank"><i class="fa fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/Canalizados_" target="_blank"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/canalizados" target="_blank"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="sub-footer">
              <p>Copyright &copy; 2021 - Canalizados</p>
            </div>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed';
import GoogleLogin from 'vue-google-login';
import Loader from '~/components/loader/loader.vue';
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside,
  },
  name: "landing",
  middleware: 'authenticated',
  components: { 
    Tweet,
    GoogleLogin,
    Loader,
  },
  async asyncData({ route, app, redirect }) {
      var token = route.query.t
      var s = route.query.s
      if(token && s){
       // console.log("si existen los dos parametros")
        //consulto si el usuario recien creado existe en la db 
        if(s==2){
          var response = await app.$axios.$get(
            'https://acceso.canalizados.com/api/twitter/getuser/?token='+token
            );
        //    console.log(response)
             if (response.status == 1) {
                app.$cookies.set('access_token_', response.token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
                })
                  app.$cookies.set('user_data_', {img: response.avatar, username: response.username,
                    date: response.fecha, edad: response.edad, nombres: response.nombres, ciudad: response.ciudad, twitter: response.twitter, 
                    email: response.email, bio: response.bio, emailU: response.emailU, p: response.p, fechaNac: response.fechaNac}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })

                          app.$cookies.set(
                          "registro_nuevo",
                          'si',
                          {
                          path: "/",
                          maxAge: 60 * 60 * 24 * 7,
                          }
                          );
             return redirect('/')
          }else{
            return { errorTwitter: true};
          }
        }else{
          //no hago nada
        }
            
      }
     return { contexto: route.query};
   
  },
  data() {
    return {
      params: {
        client_id: "294139711639-mq20hcf52r33svsveki2p80a7v6h7hal.apps.googleusercontent.com"
      },
      showMobileMenu: false,
      loader: false, 
      errors: [],
      user: "",
      email: "",
      password: "", 
      isActive: true,
      dropDownPerfil: false,
      contadorOut: 0,
      arrayDataUser: {},
      gruposRecomendados: [], 
    };
  },
  async fetch() {},
   watch: {
    username: function (value) {
      if (value.length == 0) {
        this.showErrorRegistro = false;
      }
    },
    email: function (value) {
      if (value.length == 0) {
        this.showErrorRegistroEmail = false;
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        active: !$store.state.cookieLogin
      }
    }
  },
  methods: {
     recargarDataUser(){
       this.getDatosUser()
      }, 

    async  getDatosUser(){
              this.arrayDataUser = {}
           await this.$axios
        .$get("/perfil/getdatainicial?username=" + this.$route.params.username+"&token="+this.$store.state.tokenUser)
        .then((response) => {
            console.log(response)
            this.arrayDataUser = response
        });
      },
    onSuccessGoogle(data){
      var datos = data.getBasicProfile()
      var datosToArray = Object.values(datos)
      this.email = datosToArray[5]
      this.s = 1
      var randomstring = Math.random().toString(36).slice(-8);
      this.pass = randomstring
      this.SignUpGoogle(datosToArray[1], datosToArray[4])
    },

    onFailureGoogle(data){
      //  console.log("fallo")
    //  console.log(data)
      this.loader = false
    //console.log(data)
    },
    async  SignUpGoogle(nombres, imagen){
      await this.$axios
        .$get("/registrar/usuario/?username=" + this.username+"&email="+this.email+"&pass="+this.pass+"&s="+this.s+"&nombres="+nombres+"&imagen="+imagen)
        .then((response) => {
        //  console.log(response)
          if (response.status == 1) {
             this.showErrorRegistroEmail = false
                this.$cookies.set('access_token_', response.token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
                })
                 this.$cookies.set('user_data_', {img: response.avatar,
                  username: response.username, date: response.fecha, nombres: response.nombres, p: response.p, social: response.social}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })
                    this.$cookies.set(
                      "registro_nuevo",
                    'si',
                    {
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                    }
                    );
             location.href = "/";
          }else{
            this.loader = false
              this.showErrorRegistroEmail = true
          }
        });

    },
  async  SignUp(){
    if (!this.validateUser2()) {
        return false;
      }
    this.disableL = true
      await this.$axios
        .$get("/registrar/usuario/?username=" + this.username+"&email="+this.email+"&pass="+this.pass)
        .then((response) => {
          if (response.status == 1) {
             this.showErrorRegistroEmail = false
                this.$cookies.set('access_token_', response.token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
                })
                 this.$cookies.set('user_data_', {img: response.avatar,
                  username: response.username, date: response.fecha, p: response.p}, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                    })

                          this.$cookies.set(
                          "registro_nuevo",
                          'si',
                          {
                          path: "/",
                          maxAge: 60 * 60 * 24 * 7,
                          }
                          );
             location.href = "/";
          }else{
            this.showErrorRegistroEmail = true
          }
        });

    },
    validateUser() {
      if (this.username == "") {
        return false;
      }
      return true;
    },

     validateUser2() {
      if (this.email == "") {
          
            return false;
      }

      if (this.pass == "") {
          
        return false;
      }
      return true;
    },
    async buscarUsuario() {
      this.disableB = true
      if (!this.validateUser()) {
        return false;
      }
      await this.$axios
        .$get("/buscar/usuario/?username=" + this.username)
        .then((response) => {
          if (response.status == 0) {
            this.showFormFull = true
          } else {
            this.showErrorRegistro = true;
             this.disableB = false
          }
        });
    },
    twitterLogin(){
      location.href = 'http://acceso.canalizados.com/twitter/?l=1&username='+this.username
    },
       abrirGoogle(){
        this.loader = true
      //  console.log("abri google")
    },
    async getCountNotify() {
      if(this.$store.state.cookieLogin){
          await this.$axios
        .$get("/perfil/getcountnotify?p=" + this.$store.state.p)
        .then((response) => {
          this.$store.commit("setnotifyCount", response);
        });
      }
    
    },
    cerrarSesion() {
      this.$cookies.remove("access_token_");
      this.$cookies.remove("user_data_");
      
      location.href = "/";
    },
    dropDownPerfilClic() {
      if (this.dropDownPerfil == false) {
        this.dropDownPerfil = true;
      } else {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      }
    },
    outDrop() {
      if (this.contadorOut > 0) {
        this.dropDownPerfil = false;
        this.contadorOut = 0;
      } else {
        this.contadorOut++;
      }
    },
    clicLogoInicio() {
      this.$router.push("/");
    },
    handleAlert() {
      if(!this.$store.state.cookieLogin){
        this.$swal({
          type: 'success',
          title: 'Mensaje enviado',
          text: 'El mensaje ha sido enviado. Estate atento al mail'
        })
      }
    },
    checkForm(e) {
      e.preventDefault();
      this.errors = []
      if (this.name=="") {
        console.log("name esta vacio")
        this.errors.push("El nombre es obligatorio.");
      }
      if (this.email=="") {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (this.message=="") {
        this.errors.push("El mensaje es obligatorio.");
      }
      if(this.message.length > 200) {
        this.errors.push("El mensaje no puede ser superior a 200 caracteres.");
      }
    if(this.errors.length == 0){
      this.handleToastAlert()
    }
      
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    handleToastAlert() {
      this.$swal({
          type: 'success',
          title: 'Mensaje enviado',
          text: `¡Perfecto, ${this.name}! El mensaje fue mandado exitosamente`
        })
    }
  },
  mounted() {
    this.getCountNotify();
    this.getDatosUser();
    if(this.errorTwitter){
      alert("error con usuario de twitter")
    }
    var errorT = this.$route.query.e
    if(errorT && errorT=='t'){
      alert("error usuario ya existe")
    }
  //  console.log(this.contexto)
    var cookieSuscribe = this.$cookies.get("suscribe_newsletter_cookie");
    if (cookieSuscribe) {
      this.email = cookieSuscribe

     this.$cookies.remove("suscribe_newsletter_cookie");

    }
  },
      head: {
        title: "Canalizados",
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          {
            hid: "description",
            name: "description",
            content:
              "Mantenete informado del ecosistema de startups, tecnologia y VCs latinoamericano. Argentina, Chile, Colombia, Peru, Mexico"
          }
        ],
        link: [
          { rel: "stylesheet", href: "assets/css/templatemo-lava.css" },
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/bootstrap.min.css"
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/font-awesome.css"
          },
          { 
            rel: "stylesheet", 
            href: "assets/css/owl-carousel.css" 
          },
          { 
            rel: "stylesheet", 
            href: "https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css" 
          },
          
          {
            rel: "icon",
            type: "image/x-icon",
            href: "https://canalizados.com/images/logo/isotipo_1.svg"
          }
        ],
        script: [
          {
            src: "assets/js/bootstrap.min.js"
          },
          {
            src: "//cdn.jsdelivr.net/npm/sweetalert2@11"
          },
          {
            src: "assets/js/scrollreveal.min.js"
          },
          {
            src: "assets/js/alerts.js"
          },
          {
            src: "https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"
          },
          {
            src: "https://kit.fontawesome.com/123aef3e32.js",
            crossorigin: "anonymous"
          }
        ]
      },
  layout: "landing"
};
</script>
