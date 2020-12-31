<script>
  export let src;
  export let alt = '';

</script>

<template lang="pug">
  div
    img('{src} {alt}')

</template>

<style lang="sugarss">
  div
    @apply flex-shrink-0

  img
    @apply h-8 w-8

</style>
