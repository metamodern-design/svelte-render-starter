<script>
  import { onMount } from 'svelte';

  export let items = [];
  export let secondary = false;
  
  let currentPath = '/';
  
  onMount(() => {
    currentPath = window.location.href;
  });

</script>

<template lang="pug">  
  +each('items as { title, path }')
    a(
      href= '{path}'
      class:active= '{path === currentPath}'
      class:secondary
    )= '{title}'

</template>

<style lang="sugarss">
  a
    @apply block
    @apply px-3 py-2 rounded-md
    @apply text-base font-medium text-gray-400
    @apply hover:bg-gray-700 hover:text-white
  
  a.active
    @apply bg-gray-900 text-white
    
  a.secondary
    @apply text-gray-400

</style>
