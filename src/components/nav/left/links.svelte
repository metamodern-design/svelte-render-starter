<script>
  import { afterUpdate } from 'svelte';
  
  export let items = [];
  
  let currentPath = '/';
  
  afterUpdate(() => {
    currentPath = window.location.pathname;
  });

</script>

<template lang="pug">  
  +each('items as { title, path }')
    a(
      href= '{path}'
      class:active= '{path === currentPath}'
    )= '{title}'

</template>

<style lang="sugarss">
  a
    @apply text-gray-300
    @apply px-3 py-2 rounded-md 
    @apply text-sm font-medium
    
  a:hover
    @apply bg-gray-700 text-white 
  
  a.active
    @apply bg-gray-900 text-white

</style>
