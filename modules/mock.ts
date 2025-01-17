import { readFile } from 'node:fs/promises'
import { addDevServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'
import { apipostMarkdownParser } from '~~/vender/parser'

export default defineNuxtModule({
  setup() {
    addDevServerHandler({
      route: '/v1/hi',
      handler: () => 'SPA',
    })

    const { resolve } = createResolver(import.meta.url)
    readFile(resolve('../fixture/mock.md'))
      .then((content) => {
        return apipostMarkdownParser.parse(content.toString())
      })
      .then((ctxs) => {
        ctxs.forEach(({ url, response }) => {
          addDevServerHandler({
            route: url,
            handler: () => response,
          })
        })
      })
  },
})
