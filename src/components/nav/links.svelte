<script>
  export let items = [];
  
  const currentPath = window.location.href;

</script>

<template lang="pug">  
  +each('items as { title, path }')
    a(
      href= '{path}'
      class= active: '{path}' === '{currentPath}' }
    )
      = title

</template>

<style lang="sugarss">
  a
    @apply text-gray-300 hover:bg-gray-700 hover:text-white 
    @apply px-3 py-2
    @apply rounded-md 
    @apply text-sm font-medium
  
  a.active
    @apply bg-gray-900 text-white

</style>
