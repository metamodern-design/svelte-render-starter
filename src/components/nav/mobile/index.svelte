<script>
  import { mobileMenuIsOpen } from '_/store.js';
  import { routes } from '_/routes.js';
  import { userProfile, userDetails, userMenu } from '$/nav/mock.js';
  
  import Links from '$/nav/mobile/links.svelte';
  import Profile from '$/nav/mobile/profile.svelte';
  
  let isOpen;

  mobileMenuIsOpen.subscribe((state) => {
    isOpen = state;
  });
  
  const mainItems = routes.filter(
    ({ menus = [] }) => menus.includes('main'),
  );
  
</script>

<template lang="pug">
  .mobile-menu-container(class:active= '{isOpen}')
    .top-section
      Links(items= '{mainItems}')
      
    .bottom-section
      Profile(user= '{userDetails}')
        img(
          slot="avatar"
          src= '{userProfile.src}'
          alt= '{userProfile.alt}'  
        )
      
      .bottom-links
        Links(
          items= '{userMenu}'
          secondary
        )
      
        
</template>

<style lang="sugarss">
  .mobile-menu-container
    @apply hidden md:hidden
    
  .mobile-menu-container.active
    @apply block
  
  .top-section
    @apply px-2 pt-2 pb-3 sm:px-3
    
  .bottom-section
    @apply pt-4 pb-3
    @apply border-t border-gray-700
    
  .bottom-links
    @apply mt-3 px-2
    
</style>