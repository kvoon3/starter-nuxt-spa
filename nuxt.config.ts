// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@vueuse/nuxt',
  ],
  ssr: false,

  devtools: { enabled: true },

  router: {
    options: {
      hashMode: true,
    },
  },

  experimental: {
    typedPages: true,
    clientNodeCompat: true,
  },

  compatibilityDate: '2024-11-01',

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

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
