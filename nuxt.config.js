require('dotenv').config();

export default {
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_ACCESS_TOKEN: process.env.CF_ACCESS_TOKEN
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'contentful_test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'assets/styles/main.scss', lang: 'scss' },
    '@fortawesome/fontawesome-svg-core/styles.css',
],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/contentful',
    '@/plugins/fontawesome',
    '@/plugins/utils',
    '@/plugins/getContents',
    '@/plugins/limit',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/markdownit',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google:{
      families:['Lato:200,400','Noto+Sans+JP']
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  
  markdownit: {
    injected: true,
    breaks: true, // 改行コードに変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,
    use: [
      'markdown-it-attrs'
    ]
  },
}
