<script>
  import { location } from '_/store.js';
  
  export let items = [];
  
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
      )= '{title}'

</template>

<style lang="sugarss">
  div
    @apply flex items-baseline space-x-4
    @apply ml-10

  a
    @apply text-gray-300
    @apply px-3 py-2 rounded-md 
    @apply text-sm font-medium
    
  a:hover
    @apply bg-gray-700 text-white 
  
  a.active
    @apply bg-gray-900 text-white

</style>
