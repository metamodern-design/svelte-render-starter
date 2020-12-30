<script>
  import Left from '$/nav/left.svelte';
  import Right from '$/nav/right.svelte';
  import Links from '$/nav/links.svelte';
  import Icon from '$/nav/icon.svelte';
  import Dropdown from '$/nav/dropdown/index.svelte';
  import DropdownLinks from '$/nav/dropdown/links.svelte';
  import Mobile from '$/nav/mobile/index.svelte';
  import Hamburger from '$/nav/mobile/hamburger.svelte';
  import Bell from '$/nav/icons/bell.svelte';
  
  import { routes } from '@/index.js';
  
  const logo = {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
    alt: 'Workflow',
  };
  
  const leftItems = routes.filter(
    ({ menus }) => menus.includes('main'),
  );
  
  const userProfile = {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Open menu',
  };
  
  const userMenu = [
    { title = 'Your Profile', path = '#' },
    { title = 'Settings', path = '#' },
    { title = 'Sign Out', path = '#' },
  ];

</script>

<template lang="pug">
  nav
    .responsive-container
      .flex-wrapper
        Left
          Logo(
            slot="logo"
            src='{logo.src}'
            alt='{logo.alt}'
          )
          
          Links(
            slot="items"
            items='{leftItems}'
          )

        Right
          Icon(alt="View notifications")
            Bell

          Dropdown
            img(
              slot="trigger"
              src='{userProfile.src}'
              alt='{userProfile.alt}'
            )
            
            DropdownLinks(
              slot="items"
              items='{userMenu}'
            )

        .show-on-mobile
          Hamburger

    Mobile

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