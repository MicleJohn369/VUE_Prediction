import esVuetifyLocale from 'vuetify/es5/locale/es';
import esLocale from './locales/es';
import { version } from './package.json';

// Sitemaps
import mainSitemap from './sitemaps/main';

import quinielaSitemap from './sitemaps/quiniela';
import quinielaTicketsSitemap from './sitemaps/quiniela/ticket-details';

import bonolotoSitemap from './sitemaps/bonoloto';
import bonolotoTicketsSitemap from './sitemaps/bonoloto/ticket-details';

import euromillonesSitemap from './sitemaps/euromillones';
import euromillonesTicketsSitemap from './sitemaps/euromillones/ticket-details';

import primitivaSitemap from './sitemaps/primitiva';
import primitivaTicketsSitemap from './sitemaps/primitiva/ticket-details';

import gordoSitemap from './sitemaps/gordo';
import gordoTicketsSitemap from './sitemaps/gordo/ticket-details';

const es = {
  ...esLocale,
  $vuetify: esVuetifyLocale,
};

require('dotenv').config();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | PRONOSTIGOL',
    title: 'pronostigol-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  publicRuntimeConfig: {
    appVersion: version,
    apiUrl: process.env.API_URL,
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: '@/assets/global.scss', lang: 'scss',
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/nuxt-pronostigol-client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: ['es'],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            es,
          },
        },
      },
    ],
    '@nuxt/content',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2309187828170787',
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: './vuetify.options.js',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },
  serverMiddleware: [
    { path: '/api', handler: '@/api/index.js' },
  ],
  sitemap: {
    hostname: 'https://www.pronostigol.es',
    path: '/sitemap.xml',
    gzip: true,
    sitemaps: [
      mainSitemap,
      quinielaSitemap,
      quinielaTicketsSitemap,
      bonolotoSitemap,
      bonolotoTicketsSitemap,
      euromillonesSitemap,
      euromillonesTicketsSitemap,
      primitivaSitemap,
      primitivaTicketsSitemap,
      gordoSitemap,
      gordoTicketsSitemap,
    ],
  },
  content: {
    liveEdit: false,
  },
};
