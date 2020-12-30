<template lang="pug">
  .hide-on-mobile
    .flex-wrapper
      slot

</template>

<style lang="sugarss">
  .hide-on-mobile
    @apply hidden md:block
    
  .flex-wrapper
    @apply flex items-center
    @apply ml-4 md:ml-6
  
</style>
