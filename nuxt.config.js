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
    '~/static/css/canalizados.css',
    '~/static/css/csscana.css',
  ],

 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  //  { src: "~/plugins/bootstrap-vue", ssr: false }, 
    { src: "~/plugins/editortiny", ssr: false }, 
    
    

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
 
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    'nuxt-sweetalert2', 
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-analytics',
    [
      '@miyaoka/nuxt-twitter-widgets-module',
      {
        directiveName: 'twitter-widgets',
        scriptUrl: '//platform.twitter.com/widgets.js'
      }
    ], 
  
    
  ],

  googleAnalytics: {
    id: 'UA-121959606-1'
  },

  googleFonts: {
    display: 'swap', 
    useStylesheet: true,
    families: {
     'Montserrat': {
      wght: [100, 200, 300, 400 ,500 , 600, 700, 800 , 900],
      ital: [100, 200, 300, 400 ,500 , 600, 700, 800 , 900]
     }, 
    }
  },


 

  axios: {
  //  baseURL: 'https://indiehackersapi.hectoracosta.site/api',
  baseURL: 'https://acceso.canalizados.com/api',
    proxyHeaders: true,
    credentials: true
  },

  
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

 // analyze: true,
   
  }
}
