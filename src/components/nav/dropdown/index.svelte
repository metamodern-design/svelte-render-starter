<script>
  import { scale } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  import Links from '$/nav/dropdown/links.svelte';
  
  export let alt = 'Open menu';
  export let items = [];
  
  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
  };
  
  const transition = {
    in: { duration: 100, start: 0.95, easing: cubicOut },
    out: { duration: 75, start: 0.95, easing: cubicIn },
  };

</script>

<template lang="pug">
  .dropdown-container
    div
      button(
        id="user-menu"
        aria-haspopup="true"
        on:click= '{toggle}'
      )
        span= '{alt}'

        slot(name="trigger")
    
    +if('isOpen')
      .dropdown-panel(
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        in:scale= '{transition.in}'
        out:scale= '{transition.out}'
      )
        Links('{items}')
  
</template>

<style lang="sugarss">
  .dropdown-container
    @apply relative
    @apply ml-3
    
  button
    @apply flex items-center max-w-xs
    @apply bg-gray-800 rounded-full 
    @apply text-sm 
    
  button:focus
    @apply outline-none
    @apply ring-2 ring-white ring-offset-2 ring-offset-gray-800
  
  button > span
    @apply sr-only
  
  button > :global(img)
    @apply h-8 w-8 rounded-full
    
  button > :global(svg)
    @apply h-8 w-8 
    
  .dropdown-panel
    @apply absolute origin-top-right right-0
    @apply w-48 mt-2 py-1 
    @apply bg-white rounded-md shadow-lg
    @apply ring-1 ring-black ring-opacity-5
  
</style>
