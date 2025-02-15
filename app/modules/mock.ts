import { addDevServerHandler, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    addDevServerHandler({
      route: '/v1/hi',
      handler: () => {
        return 'world'
      },
    })
  },
})
