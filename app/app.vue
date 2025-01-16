<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
  queryKey: ['users'],
  queryFn: () => $fetch('/v1/hi'),
})
</script>

<template>
  <div>
    hello, <span font-bold>{{ data }}</span>
  </div>
</template>
