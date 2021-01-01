<script>
  export let title;

</script>

<template lang="pug">
  header
    .responsive-container
      h1= '{title}'

</template>

<style lang="sugarss">
  header
    @apply bg-white
    @apply shadow

  .responsive-container
    @apply max-w-7xl mx-auto
    @apply py-6 px-4 sm:px-6 lg:px-8

  h1
    @apply text-3xl font-bold leading-tight
    @apply text-gray-900

</style>
