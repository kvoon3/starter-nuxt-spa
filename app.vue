<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import './styles/global.css'

const { data } = useQuery({
  queryKey: ['users'],
  queryFn: () => $fetch('/v1/hi', {
    method: 'POST',
  }),
})
</script>

<template>
  <div class="text-center">
    <span class="text-teal-500">Nuxt</span> <span class="font-bold text-primary-500">{{ data }}</span>
  </div>
</template>
