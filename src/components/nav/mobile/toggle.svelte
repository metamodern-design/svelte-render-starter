<script>
  import Hamburger from '$/nav/icons/hamburger.svelte';
  import Close from '$/nav/icons/close.svelte';
  
  import { mobileMenuIsOpen } from '_/store.js';
  
  let isOpen;

  mobileMenuIsOpen.subscribe((state) => {
    isOpen = state;
  });
  
  const toggleState = () => {
    mobileMenuIsOpen.update((s) => !s);
  };

</script>

<template lang="pug">
  button(on:click= '{toggleState}' )
    span= "Open main menu"
    
    +if('isOpen')
      Close

      +else()
        Hamburger

</template>
  
<style lang="sugarss">
  button
    @apply inline-flex items-center justify-center 
    @apply p-2 rounded-md
    @apply bg-gray-800 text-gray-400
    @apply hover:text-white hover:bg-gray-700
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
  
  button > span
    @apply sr-only

  button > svg
    @apply h-6 w-6
    
</style>