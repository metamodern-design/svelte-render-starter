<script>
  export let svg;
  export let alt = '';

</script>

<template lang="pug">
  button 
    span= '{alt}'
    svelte:component(this='{svg}')

</template>

<style lang="sugarss">
  button
    @apply bg-gray-800 text-gray-400 hover:text-white
    @apply p-1 rounded-full 
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
    
  button > span
    @apply sr-only

  button :global(svg)
    @apply h-6 w-6

</style>
