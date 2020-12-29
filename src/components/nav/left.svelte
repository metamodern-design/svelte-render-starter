<script>
  import Logo from '$/nav/logo.svelte';
  
  export let src;
  export let alt = '';

</script>

<template lang="pug">
  .left-container
    Logo('{src}' '{alt}')
    
    .hide-on-mobile
      .items-wrapper
        slot
        
</template>

<style lang="sugarss">
  .left-container
    @apply flex items-center
    
  .hide-on-mobile
    @apply hidden md:block
  
  .items-wrapper
    @apply flex items-baseline space-x-4
    @apply ml-10

</style>