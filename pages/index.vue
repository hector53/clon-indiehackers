<template>
  <div>
    <!-- ***** Preloader Start ***** -->
    <div id="preloader">
      <div class="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- ***** Preloader End ***** -->

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky" style="height: 20px; widht: 20px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo">
                Canalizados
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
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
                <!-- <li class="submenu">
                  <a href="javascript:;">Participá</a>
                  <ul>
                    <NuxtLink to="/login"><li><a class="menu-item">Iniciá sesión</a></li></NuxtLink>
                    <NuxtLink to="/registro"><li><a class="menu-item">Regístrate</a></li></NuxtLink>
                    <NuxtLink to="/faqs"><li><a class="menu-item">FAQ'S</a></li></NuxtLink>
                    <NuxtLink to="/comunidad"><li><a class="menu-item">Comunidad</a></li></NuxtLink>
                  </ul>
                </li> -->
                <li class="scroll-to-section">
                  <a href="#contact-us" class="menu-item">Contáctanos</a>
                </li>
                <li>
                  <NuxtLink to="/login"><a class="menu-item">Iniciá sesión</a></NuxtLink>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <!-- ***** Welcome Area Start ***** -->
    <div class="welcome-area" id="welcome">
      <!-- ***** Header Text Start ***** -->
      <div class="header-text">
        <div class="container">
          <div class="row">
            <div
              class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <h1 class="main-title">
                El mejor medio digital para tu <br /><em>START UP</em>
              </h1>
              <p>
                <a href="#">Canalizados</a> es un medio digital que puede
                ofrecerle numerosos beneficios a tu Start up. Para conocer
                algunos de esos numerosos beneficios sigue navegando nuestra
                página y te informarás de todos ellos.
              </p>
              <NuxtLink to="/comunidad"><a href="#about" class="main-button-slider">Conócenos mejor</a></NuxtLink>
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
    </section>
    <!-- ***** Features Big Item End ***** -->

    <div class="left-image-decor"></div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="promotion">
      <div class="container">
        <div class="row">
          <div
            class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
          >
            <img
              src="assets/images/left-image.png"
              class="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div
            class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix"
          >
            <ul>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img src="assets/images/about-icon-01.png" alt="" />
                <div class="text">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum distinctio, laboriosam iusto eius.
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
              >
                <img src="assets/images/about-icon-02.png" alt="" />
                <div class="text">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni explicabo saepe illo et, amet harum.
                  </p>
                </div>
              </li>
              <li
                data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
              >
                <img src="assets/images/about-icon-03.png" alt="" />
                <div class="text">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum pariatur, libero odit dolor quae laudantium.
                  </p>
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
    </section>
    <!-- ***** Testimonials Ends ***** -->

    <!-- ***** Footer Start ***** -->
    <footer id="contact-us">
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <!-- ***** Contact Form Start ***** -->
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
                        >
                          Enviar Mensaje
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- ***** Contact Form End ***** -->
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
    </footer>
  </div>
</template>

<script>
export default {
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
      { rel: "stylesheet", href: "assets/css/owl-carousel.css" },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://canalizados.com/images/logo/isotipo_1.svg"
      }
    ],
    script: [
      {
        src: "assets/js/jquery-2.1.0.min.js"
      },
      {
        src: "assets/js/popper.js"
      },
      {
        src: "assets/js/bootstrap.min.js"
      },
      {
        src: "//cdn.jsdelivr.net/npm/sweetalert2@11"
      },
      {
        src: "assets/js/owl-carousel.js"
      },
      {
        src: "assets/js/scrollreveal.min.js"
      },
      {
        src: "assets/js/waypoints.min.js"
      },
      {
        src: "assets/js/jquery.counterup.min.js"
      },
      {
        src: "assets/js/imgfix.min.js"
      },

      {
        src: "assets/js/alerts.js"
      },

      {
        src: "assets/js/custom.js"
      }
    ]
  },

  layout: "landing"
};
</script>
