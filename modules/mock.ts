import { defineNuxtModule, addDevServerHandler } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    addDevServerHandler({
      handler: () => {
        return 'world'
      },
      route: '/v1/h1'
    })
  }
})