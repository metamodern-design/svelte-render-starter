<script>
  import Hero from '@/home/hero.svelte';
  
</script>

<template lang="pug">
  div
    svg(
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    )
      polygon(points="50,0 100,0 50,100 0,100")
      
    Hero
      
</template>

<style lang="sugarss">
  div
    @apply relative z-10
    @apply lg:max-w-2xl lg:w-full
    @apply pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32
    @apply bg-white
  
  svg
    @apply hidden lg:block 
    @apply absolute right-0 inset-y-0 
    @apply h-full w-48
    @apply transform translate-x-1/2
    @apply text-white
  
</style>