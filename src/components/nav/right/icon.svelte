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
    @apply bg-gray-800 text-gray-400
    @apply p-1 rounded-full 
    
  button:hover
    @apply text-white
    
  button:focus
    @apply outline-none
    @apply ring-2 ring-offset-2 ring-offset-gray-800 ring-white
    
  button > span
    @apply sr-only

  button :global(svg)
    @apply h-6 w-6

</style>
