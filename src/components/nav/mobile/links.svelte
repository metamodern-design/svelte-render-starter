<script>
  import { location } from '_/store.js';
  
  export let items = [];
  export let secondary = false;
  
  let currentPath;
  
  location.subscribe((path) => {
    currentPath = path;
  });

</script>

<template lang="pug">
  div
    +each('items as { title, path }')
      a(
        href= '{path}'
        class:active= '{path === currentPath}'
        class:secondary= '{secondary}'
      )= '{title}'

</template>

<style lang="sugarss">
  div
    @apply space-y-1

  a
    @apply block
    @apply px-3 py-2 rounded-md
    @apply text-base font-medium text-gray-400
    
  a:hover
    @apply bg-gray-700 text-white
  
  a.active
    @apply bg-gray-900 text-white
    
  a.secondary
    @apply text-gray-400

</style>
