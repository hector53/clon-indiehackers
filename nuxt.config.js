const axios = require('axios')
import redirectSSL from 'redirect-ssl'
export default {
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    baseUrl: process.env.BASE_URL || 'https://canalizados.com'
   },
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
      { property:"og:locale" , content:"es_ES"},
      { hid: 'description', name: 'description', content: 'Canalizados comunidad de emprendedores' },
      
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://canalizados.com/images/logo/isotipo_1.svg' }, 
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'}, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Space+Grotesk:wght@500&display=swap' },
    ], 
    script: [
      {  
          src: 'https://apis.google.com/js/platform.js',
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
    '@nuxtjs/google-analytics'
   
    
  ],
  googleAnalytics: {
    id: 'G-JG1LZGHKE2'
  },
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin', 'CardPlugin','FormGroupPlugin', 'FormCheckboxPlugin', 'FormRadioPlugin',
      'FormDatepickerPlugin'
    ],
    directivePlugins: []
  },
 
  robots: {
    UserAgent: '*',
    Allow: '/'
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
        exclude: ['/producto', '/producto-nuevo', '/g', '/grupo-nuevo']
      }, , 
      {
        path: '/sitemap-posts.xml',
        routes: async () => {
          const { data } = await axios.get('https://acceso.canalizados.com/api/get/seoposts?post_type=post')
          return data.map((post) => `/c/${post.slug}`)
        },
        exclude: ['/**']
      }, 

      {
        path: '/sitemap-grupos.xml',
        routes: async () => {
          const { data } = await axios.get('https://acceso.canalizados.com/api/get/seoposts?post_type=grupos')
          return data.map((post) => `/g/${post.slug}`)
        },
        exclude: ['/**']
      }, 
      {
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
