<script>
  import Buttons from '@/home/buttons.svelte';

</script>

<template lang="pug">
  .hero
    div
      h1
        span= "It's Tuesday night."
        span= "Tacos, anyone?"
      p
        | Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui 
        | lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
        | fugiat aliqua.
      
      Buttons

</template>

<style lang="sugarss">
  .hero
    @apply max-w-7xl mx-auto
    @apply pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28
    @apply px-4 sm:px-6 lg:px-8
  
  .hero > div
    @apply sm:text-center lg:text-left
  
  h1
    @apply text-4xl sm:text-5xl md:text-6xl
    @apply font-extrabold tracking-tight
    @apply text-gray-900
    
  h1 span
    @apply block xl:inline
  
  h1 span:nth-child(2)
    @apply text-indigo-600

  p
    @apply sm:max-w-xl sm:mx-auto
    @apply mt-3 sm:mt-5 md:mt-5 lg:mx-0
    @apply text-base sm:text-lg md:text-xl 
    @apply text-gray-500 
  
</style>