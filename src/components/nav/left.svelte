<template lang="pug">
  .outer-flex
    slot(name="logo")
    
    .hide-on-mobile
      .inner-flex
        slot(name="items")
        
</template>

<style lang="sugarss">
  .outer-flex
    @apply flex items-center
    
  .hide-on-mobile
    @apply hidden md:block
  
  .inner-flex
    @apply flex items-baseline space-x-4
    @apply ml-10

</style>
