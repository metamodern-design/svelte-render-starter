<template lang="pug">
  .buttons
    .left
      a(href="#")= "Get started"
    .right
      a(href="#")= "Live demo"

</template>

<style lang="sugarss">
  .buttons
    @apply sm:flex sm:justify-center lg:justify-start
    @apply mt-5 sm:mt-8 
  
  .left
    @apply rounded-md shadow
  
  .right
    @apply mt-3 sm:mt-0 sm:ml-3
  
  a
    @apply w-full flex items-center justify-center 
    @apply px-8 md:px-10 py-3 md:py-4 rounded-md
    @apply border border-transparent
    @apply bg-indigo-100 hover:bg-indigo-200
    @apply text-base md:text-lg font-medium text-indigo-700
  
</style>
