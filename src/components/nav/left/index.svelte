<script>
  import Logo from '$/nav/left/logo.svelte';
  import Links from '$/nav/left/links.svelte';
  
  import { logo } from '$/nav/mock.js';
  import { routes } from '_/routes.js';
  
  const items = routes.filter(
    ({ menus = [] }) => menus.includes('main'),
  );
  

</script>

<template lang="pug">
  .outer-flex
    +if('logo.src')
      Logo(
        src= '{logo.src}'
        alt= '{logo.alt}'
      )

    .hide-on-mobile
      .inner-flex
        Links('{items}')
        
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
