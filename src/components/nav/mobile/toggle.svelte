<script>
  import { mobileMenuIsOpen } from '_/store.js';
  
  import Hamburger from '$/icons/hamburger.svelte';
  import Close from '$/icons/close.svelte';

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
    
  button:hover
    @apply text-white bg-gray-700
    
  button:focus
    @apply outline-none 
    @apply ring-2 ring-offset-2 ring-offset-gray-800 ring-white
  
  button > span
    @apply sr-only

  button :global(svg)
    @apply h-6 w-6
    
</style>