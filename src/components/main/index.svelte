<template lang="pug">
  main
    div
      slot

</template>

<style lang="sugarss">
  main > div
    @apply max-w-7xl mx-auto
    @apply py-6 sm:px-6 lg:px-8

</style>
