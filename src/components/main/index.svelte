<template lang="pug">
  main
    div
      slot
    
    +if('inset')
      .inset
        img(src= '{inset}')

</template>

<style lang="sugarss">
  main
    @apply relative overflow-hidden
    @apply bg-white

  main > div
    @apply max-w-7xl mx-auto
    @apply py-6 sm:px-6 lg:px-8
  
  .inset
    @apply lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
  
  .inset img
    @apply w-full object-cover
    @apply h-56 sm:h-72 md:h-96 lg:h-full

</style>
