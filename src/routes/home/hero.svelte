<script>
  import Buttons from '@/home/buttons.svelte';

</script>

<template lang="pug">
  .hero
    div
      h1
        span= "Data to enrich your"
        span= "online business"
      p
        | Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui 
        | lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
        | fugiat aliqua.
      
      Buttons

</template>

<style lang="sugarss">
  .hero
    @apply mt-10 px-4 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28
  
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