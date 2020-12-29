<script>
  export let items = [{ title: 'Home', url: '/' }];
  export let location;

</script>

<template lang="pug">  
  +each('items as { title, url }')
    a(class= active: '{url}' === '{location}' })
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
