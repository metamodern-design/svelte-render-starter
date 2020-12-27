<script>
  import { routes } from '$routes/index.js';
  
  export let title;

</script>


<template lang="pug">
  nav
    ul
      +each('routes as entry')
        +if('entry.title')
          li
            a.button(
              href='{entry.path}'
              class:active='{entry.title === title}'
            )= '{entry.title}'

</template>


<style lang="sugarss">
  nav
    @apply w-screen
    @apply flex justify-center

  ul
    @apply flex
    @apply bg-gray-600 text-white
    @apply font-bold text-xs leading-10 tracking-wide uppercase text-left
  
  a.button
    @apply px-8 py-2
    
  a.button.active
    @apply underline

</style>
