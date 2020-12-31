<script>
  import Left from '$/nav/left.svelte';
  import Right from '$/nav/right.svelte';
  import Icon from '$/nav/icon.svelte';
  import Bell from '$/nav/icons/bell.svelte';
  import Dropdown from '$/nav/dropdown/index.svelte';
  import DropdownLinks from '$/nav/dropdown/links.svelte';
  import Toggle from '$/nav/mobile/toggle.svelte';
  import Mobile from '$/nav/mobile/index.svelte';
  
  import { routes } from '_/routes.js';
  import { brandLogo, userProfile, userMenu } from '$nav/mock.js';
  
  const mainItems = routes.filter(
    ({ menus }) => menus.includes('main'),
  );
  
</script>

<template lang="pug">
  nav
    .responsive-container
      .flex-wrapper
        Left(
          logo= '{brandLogo}',
          items= '{mainItems}',
        )

        Right

        .show-on-mobile
          Toggle

    // Mobile

</template>

<style lang="sugarss">
  nav
    @apply bg-gray-800
  
  .responsive-container
    @apply max-w-7xl mx-auto
    @apply px-4 sm:px-6 lg:px-8
  
  .flex-wrapper
    @apply flex items-center justify-between
    @apply h-16

  .show-on-mobile
    @apply flex md:hidden
    @apply -mr-2

</style>