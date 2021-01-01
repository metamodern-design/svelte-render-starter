<script>
  import Left from '$/nav/left/index.svelte';
  import Right from '$/nav/right/index.svelte';
  import Toggle from '$/nav/mobile/toggle.svelte';
  import Mobile from '$/nav/mobile/index.svelte';

</script>

<template lang="pug">
  nav
    .responsive-container
      .flex-wrapper
        Left

        Right

        .show-on-mobile
          Toggle

    Mobile

</template>

<style lang="sugarss">
  nav
    @apply bg-gray-800
  
  .responsive-container
    @apply max-w-7xl mx-auto
    @apply px-4 sm:px-6 lg:px-8
  
  .flex-wrapper
    @apply flex items-center justify-between
    @apply h-16

  .show-on-mobile
    @apply flex md:hidden
    @apply -mr-2

</style>
