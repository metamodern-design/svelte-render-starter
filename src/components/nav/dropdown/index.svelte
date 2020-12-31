<script>
  import Links from '$/nav/dropdown/links.svelte';
  
  export let trigger;
  export let items = [];

</script>

<template lang="pug">
  .relative-container
    div
      button(
        id="user-menu"
        aria-haspopup="true"
      )
        span= '{trigger.alt}'

        img(src= '{trigger.src}')

    .popup-menu(
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    )
      Links('{items}')

    //
      Profile dropdown panel, show/hide based on dropdown state.
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
  
</template>

<style lang="sugarss">
  .relative-container
    @apply relative
    @apply ml-3
    
  button
    @apply flex items-center max-w-xs
    @apply bg-gray-800 rounded-full 
    @apply text-sm 
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
  
  button > span
    @apply sr-only
  
  button > img,
  button > svg
    @apply h-8 w-8 rounded-full
    
  .popup-menu
    @apply absolute origin-top-right right-0
    @apply w-48 mt-2 py-1 
    @apply bg-white rounded-md shadow-lg 
    @apply ring-1 ring-black ring-opacity-5
  
</style>
