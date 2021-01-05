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
  .left
    +if('src')
      Logo('{src} {alt}')

    .hide-on-mobile
      Links('{items}')
        
</template>

<style lang="sugarss">
  .left
    @apply flex items-center
    
  .hide-on-mobile
    @apply hidden md:block

</style>
