// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  ssr: false,

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  router: {
    options: {
      hashMode: true,
    },
  },

  srcDir: 'app',

  experimental: {
    typedPages: true,
    clientNodeCompat: true,
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'static',
  },

  vite: {
    base: './',
  },

  hooks: {
    'prerender:routes': function ({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  unocss: {
    nuxtLayers: true,
  },
})
