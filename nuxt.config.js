export default {
 /* server: {
    port: 8000 // default: 3000
  },*/
  target: 'server',
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Canalizados',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconCanalizados.png' }, 
      { rel: 'stylesheet', href: '/css/canalizados.css',  },
      { rel: 'stylesheet', href: '/css/css.css',  },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic',  },
      
    ], 
    script: [
      {  
          src: 'https://apis.google.com/js/platform.js',
          async: true
      }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue2-editor", ssr: false }, 
    { src: "~/plugins/bootstrap-vue", ssr: false }, 
    { src: "~/plugins/editortiny", ssr: false }, 

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    'nuxt-sweetalert2', 
    [
      '@miyaoka/nuxt-twitter-widgets-module',
      {
        directiveName: 'twitter-widgets',
        scriptUrl: '//platform.twitter.com/widgets.js'
      }
    ]
    
  ],

  

  axios: {
  //  baseURL: 'https://indiehackersapi.hectoracosta.site/api',
  baseURL: 'https://acceso.canalizados.com/api',
    proxyHeaders: true,
    credentials: true
  },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  }
}
