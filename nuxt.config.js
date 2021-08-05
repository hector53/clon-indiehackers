const axios = require('axios')
import redirectSSL from 'redirect-ssl'
export default {
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    baseUrl: process.env.BASE_URL || 'https://canalizados.com'
   },
 server: {
    port: 8000 // default: 3000
  },
  target: 'server',
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Canalizados - Somos la unica comunidad de startups en latinoamerica',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property:"og:locale" , content:"es_ES"},
      { hid: 'description', name: 'description', content: 'Mantenete informado del ecosistema de startups, tecnologia y VCs latinoamericano. Argentina, Chile, Colombia, Peru, Mexico' },
      
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://canalizados.com/images/logo/isotipo_1.svg' }, 
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'}, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Space+Grotesk:wght@500&display=swap' },
    ], 
    script: [
      {  
        src: 'https://apis.google.com/js/platform.js',
        async: true
      }, 
      {  
        src: 'https://cdn.volument.com/v1/volument.js',
        async: true, 
        onload: "volument('76a861b68e')"
      },
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        async: true
      },
      {
        src: 'https://unpkg.com/@popperjs/core@2',
        async: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js',
        async: true
      },
      {
        src: '//cdn.jsdelivr.net/npm/sweetalert2@11',
        async: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js',
        async: true
      },
      {
        src: 'https://unpkg.com/scrollreveal',
        async: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js',
        async: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js',
        async: true
      },
      {
        src: '//cdn.jsdelivr.net/npm/sweetalert2@11',
        async: true
      },
    
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/canalizados.css',
    '~/static/css/csscana.css',
  ],

  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     }),
     '~/middleware/seo.js'
  ],
 
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{ src: "~/plugins/bootstrap-vue", ssr: true }, 
   { src: "~/plugins/editortiny", ssr: false }, 
   { src: "~/plugins/vuegtag", ssr: false }, 
    
    

  ],

  
  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
 
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    'nuxt-sweetalert2', 
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics', 
    '@nuxtjs/feed'
  ],
  feed: {
    // Your feeds here
    path: "/rss.xml",
    async create(feed) {
        feed.options = {
          title: "Canalizados",
          link: "https://canalizados.com/rss",
          description:
            "Canalizados comunidad de emprendedores",
      };

      const response = await axios.get(`https://acceso.canalizados.com/api/get/feed?post_type=post`)
    //  console.log(response)
      response.data.map(blog => {
      const url = `https://canalizados.com/c/${blog.slug}`;
      feed.addItem({
      title: blog.titulo,
      id: url,
      link: url,
      description: blog.descripcion,
      image: blog.imagen,
      content: blog.content,
      published: new Date(blog.fecha),
      author: [
      {
      name: blog.username, // optional
      },
      ],
      });
      });
   
    }, 
    cacheTime: 1000 * 60 * 15,
  type: "rss2",
  data: [ 'blog', 'xml' ]
    
  },
  googleAnalytics: {
    id: 'G-JG1LZGHKE2'
  },
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin', 'CardPlugin','FormGroupPlugin', 'FormCheckboxPlugin', 'FormRadioPlugin',
      'FormDatepickerPlugin', 'CarouselPlugin'
    ],
    components: ["BButton"],
    directivePlugins: []
  },
 
  robots: {
    UserAgent: '*',
     //Allow: '/'
     Disallow: '/' // activar para test
  },
  axios: {
  //  baseURL: 'https://indiehackersapi.hectoracosta.site/api',
  baseURL: 'https://acceso.canalizados.com/api',
    proxyHeaders: true,
    credentials: true
  },
  sitemap: {
    path: 'sitemap.xml',
    lastmod: new Date(),
    exclude: [
      '/**'
    ],
    sitemaps: [
      {
        
        path: '/sitemap-paginas.xml',
        lastmod: new Date(),
        exclude: ['/producto', '/producto-nuevo', '/g', '/grupo-nuevo']
      }, , 
      {
        lastmod: new Date(),
        path: '/sitemap-posts.xml',
        routes: async () => {
          const { data } = await axios.get('https://acceso.canalizados.com/api/get/seoposts?post_type=post')
          return data.map((post) => `/c/${post.slug}`)
        },
        exclude: ['/**']
      }, 

      {
        lastmod: new Date(),
        path: '/sitemap-grupos.xml',
        routes: async () => {
          const { data } = await axios.get('https://acceso.canalizados.com/api/get/seoposts?post_type=grupos')
          return data.map((post) => `/g/${post.slug}`)
        },
        exclude: ['/**']
      }, 
      {
        lastmod: new Date(),
        path: '/sitemap-productos.xml',
        routes: async () => {
          const { data } = await axios.get('https://acceso.canalizados.com/api/get/seoposts?post_type=producto')
          return data.map((post) => `/p/${post.slug}`)
        },
        exclude: ['/**']
      }, 
    ]
  },

  // omit

   

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   extractCSS: true,
   optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|vue)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

 //analyze: true,
   
  }
}
