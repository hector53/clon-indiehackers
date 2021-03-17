export default {
  target: 'server',
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Indie Hackers - Clon by Héctor Acosta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'stylesheet', href: '/css/css2.css',  },
      { rel: 'stylesheet', href: '/css/cssadmin.css' },
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue2-editor", ssr: false }
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
    
  ],

  axios: {
    baseURL: 'https://indiehackersapi.hectoracosta.site/wp-json',
    proxyHeaders: false,
    credentials: false
  },

 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
