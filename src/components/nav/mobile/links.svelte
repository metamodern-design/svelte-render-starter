<script>
  export let items = [];

</script>

<template lang="pug">  
  +each('items as { title, path }')
    a(href= '{path}')
      = title

</template>

<style lang="sugarss">
  a
    @apply block
    @apply px-3 py-2 rounded-md
    @apply text-base font-medium text-gray-400
    @apply hover:bg-gray-700 hover:text-white

</style>
