<template>
  <div>
    <!-- ***** Preloader Start ***** -->
    
    <!-- ***** Preloader End ***** -->

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
                        <ul class="nav">
                            <li class="scroll-to-section"><NuxtLink to="/comunidad" class="menu-item">Comunidad</NuxtLink></li>
                            <li class="scroll-to-section"><NuxtLink to="/staffpicks" class="menu-item">Staff Picks</NuxtLink></li>
                            <li class="scroll-to-section"><NuxtLink to="/startups" class="menu-item">Startups</NuxtLink></li>
                            <li class="scroll-to-section"><NuxtLink to="/ecosistema" class="menu-item">Ecosistema</NuxtLink></li>
                            <li class="scroll-to-section"><NuxtLink to="/grupos" class="menu-item">Grupos</NuxtLink></li>
                        <form action="/buscar" class="search-2 w-form buscadorHeader form-header" method="GET" style="height: 30px" >
                          <input
                            type="search"
                            class="probando"
                            maxlength="256"
                            name="q"
                            placeholder="Buscá temas, grupos, usuarios…"
                            style="padding-left: 30px; margin-left: 5px;"
                          /><input
                            type="submit"
                            value="Search"
                            class="search-button w-button"
                          />
                        </form>
                          <li class="scroll-to-section" v-if="$store.state.cookieLogin == false">
                            <nuxt-link 
                              :to="{ name: 'iniciar-sesion' }"
                              class="menu-item"
                              v-if="$store.state.cookieLogin == false"
                            >
                              Iniciar Sesion
                            </nuxt-link>
                          </li>
                          <li class="scroll-to-section" v-if="$store.state.cookieLogin == false">
                            <nuxt-link 
                              :to="{ name: 'registro' }"
                              class="menu-item"
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
                              <div style="border: 0.20000000298023224px solid #95989A; display: flex; padding: 5px; border-radius: 20px;">
                              <nuxt-link
                                :to="{
                                  name: 'u-username',
                                  params: { username: $store.state.username },
                                }"
                                style="height: 37px !important; border: none !important;"
                              >
                                <img
                                  :src="$store.state.img_perfil"
                                  loading="lazy"
                                  sizes="32px"
                                  alt=""
                                  class="image-12"
                                />
                              </nuxt-link>
                              <i class="fas fa-chevron-down" style="padding-top: 18%;"></i>
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
                                  :to="{
                                    name: 'u-username',
                                    params: { username: $store.state.username },
                                  }"
                                  >Perfil</nuxt-link
                                >
                                <nuxt-link
                                  class="w-dropdown-link"
                                  tabindex="0"
                                  :to="{
                                    name: 'u-username-notificaciones',
                                    params: { username: $store.state.username },
                                  }"
                                  >Notificaciones</nuxt-link
                                >
                                <nuxt-link
                                  class="w-dropdown-link"
                                  tabindex="0"
                                  :to="{
                                    name: 'u-username-configuracion',
                                    params: { username: $store.state.username },
                                  }"
                                  >Configuracion</nuxt-link
                                ><a
                                  href="#"
                                  class="w-dropdown-link"
                                  @click.prevent="cerrarSesion"
                                  tabindex="0"
                                  >Salir</a
                                >
                              </nav>
                            </div>
                          </li>
                        </ul>


                        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
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
                    <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1 class="main-title" style="font-family: 'Space Grotesk' !important;">El mejor medio digital para tu <em>START UP</em></h1>
                        <p><a href="#">Canalizados</a> es un medio digital que puede ofrecerle numerosos beneficios a tu Start up.
                           Para conocer algunos de esos numerosos beneficios sigue navegando nuestra página y te informarás de todos ellos.</p> 
                        <a href="#about" class="main-button-slider">Conócenos mejor</a>
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
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>02</h2>
                            <img src="/assets/images/User_perspective_matte_s.png" alt="" style="height: 100px; width: 100px; display: block; margin: auto;">
                            <h4>Formá un equipo</h4>
                            <p>Crea una sociedad con un grupo de personas que sepas que te desempeñas bien.</p>
                            <NuxtLink to="/grupo-nuevo">
                              <a href="#testimonials" class="main-button">
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
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src="/assets/images/Chart_perspective_matte_s.png" alt="" style="height: 100px; width: 100px;">
                            <div class="text">
                                <h4>Espacio</h4>
                                <p>Nosotros te brindamos el espacio y el momento para poder llevar a cabo tu emprendimiento.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                            <img src="/assets/images/Message_perspective_matte_s.png" alt="" height="100px" width="100px">
                            <div class="text">
                                <h4>Gente</h4>
                                <p>Te brindamos una comunidad de emprendedores en la cual puedas reclutar gente o hacer amigos.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                            <img src="/assets/images/FAQ_perspective_matte_s.png" alt="" height="100px" width="100px">
                            <div class="text">
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
                                :width="600"
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
                                :width="600"
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
                                :width="600"
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
                                :width="600"
                                :dnt="true"
                              >
                              </Tweet>
                            </no-ssr>
                          </div>
                            <div>

                              <!-- <template>
                                <blockquote class="twitter-tweet"><p lang="es" dir="ltr">¡Gracias por compartir nuestra historia!
                                Seguiremos trabajando para llevar el talento techde Latam al mundo</p>mdash; Talently (@TalentlyTech) <a href="https://twitter.com/TalentlyTech/status/1423678097451257860">6 de Agosto de 2021</a><blockquote>
                              </template>
                              </div>
                              <div>
                                <blockquote class="twitter-tweet"><p lang="es" dir="ltr">Estos señores de donde sacarán tanta plata?Dinero con alasBolsa de dinero?</p>mdash; COVIDNA ESTHER (@Elsa_Ala58) <a href="https://twitter.com/Elsa_Ala58/status/1417822244303216644">21 de julio de 2021</a><blockquote> <script async src="https://platformtwitter.com/widgets.js" charset="utf-8"></script>
                              </div>
                              <div>
                                <blockquote class="twitter-tweet"><p lang="es" dir="ltr"></p>mdash; AYURE (@AYURE_MX) <a href="https://twitter.com/AYURE_MX/status/1423070920676155392">4 de Agosto de 2021</a><blockquote> <script async src="https://platformtwitter.com/widgets.js" charset="utf-8"></script>
                              </div>
                              <div>
                                <blockquote class="twitter-tweet"><p lang="es" dir="ltr"></p>mdash; notcous (@notcous) <a href="https://twitter.com/notcous/status/1422607734579544071">6 de Agosto de 2021</a><blockquote> <script async src="https://platformtwitter.com/widgets.js" charset="utf-8"></script>
                              </div> -->
                            </div>
                        </div>
                      
                        
                        <button aria-label="Previous" class="glider-prev"><i class="fas fa-chevron-left icono-main"></i></button>
                        <button aria-label="Next" class="glider-next"><i class="fas fa-chevron-right icono-main"></i></button>
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
    <footer id="contact-us">
        <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>        
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <!-- ***** Contact Form Start ***** -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="contact-form">
                            <form id="contact" @submit="checkForm" method="post" novalidate="true">
                                <p v-if="errors.length >0">
                                  <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                                  <ul>
                                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                                  </ul>
                                </p>
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input v-model="name" type="text" id="name" placeholder="Nombre Completo" required
                                                style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input v-model="email" type="text" id="email" placeholder="Direccion Email"
                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <textarea v-model="message" rows="6" id="message" placeholder="Tu mensaje" style="background-color: rgba(250,250,250,0.3);"></textarea>
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
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
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
    </footer>
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
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside,
  },
  components: { Tweet },
    data() {
    return {
      errors: [],
      name: "",
      email: "",
      message: "", 
      dropDownPerfil: false,
      contadorOut: 0,
    };
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
  mounted() {
    this.getCountNotify();
  },
  methods: {
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
      console.log("asasasdads")
      console.log("errores", this.errors)
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
  layout: "landing"
};
</script>
