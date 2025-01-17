// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu({
    unocss: false,
    formatters: true,
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
    ignores: ['vender'],
  }),
)
