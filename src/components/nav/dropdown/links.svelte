<script>
  export let items = [];

</script>

<template lang="pug">  
  +each('items as { title, path }')
    a(
      role="menuitem"
      href= '{path}'
    )= '{title}'

</template>

<style lang="sugarss">
  a
    @apply block
    @apply px-4 py-2
    @apply text-sm text-gray-700
    
  a:hover
    @apply bg-gray-100

</style>
