<script>
  import { routes } from '_/routes.js';
  import { brand } from '$/nav/mock.js';
  
  import Logo from '$/nav/left/logo.svelte';
  import Links from '$/nav/left/links.svelte';
  
  const { src, alt } = brand;
  
  const items = routes.filter(
    ({ menus = [] }) => menus.includes('main'),
  );

</script>

<template lang="pug">
  .left-container
    +if('src')
      Logo('{src} {alt}')

    .hide-on-mobile
      .links-wrapper
        Links('{items}')
        
</template>

<style lang="sugarss">
  .left-container
    @apply flex items-center
    
  .hide-on-mobile
    @apply hidden md:block
  
  .links-wrapper
    @apply flex items-baseline space-x-4
    @apply ml-10

</style>
