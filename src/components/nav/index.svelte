<script>
  import Left from '$/nav/left.svelte';
  import Right from '$/nav/right.svelte';
  import Links from '$/nav/links.svelte';
  import Icon from '$/nav/icon.svelte';
  import Dropdown from '$/nav/dropdown/index.svelte';
  import Mobile from '$/nav/mobile/index.svelte';
  import Hamburger from '$/nav/mobile/hamburger.svelte';
  
  import { nav } from '@/nav.js';

</script>

<template lang="pug">
  nav
    div
      .flex-wrapper
        Left(
          src='{nav.left.logo.src}'
          alt='{nav.left.logo.alt}'
        )
          Links(items='{nav.left.links}')

        Right()
          Icon(alt='{nav.right.icon.alt}')
            = '{@html nav.right.icon.svg}'

          Dropdown(
            src='{nav.right.dropdown.trigger.src}'
            alt='{nav.right.dropdown.trigger.alt}'
            links='{nav.right.dropdown.links}'
          )

        .show-on-mobile
          Hamburger()

    Mobile()

</template>

<style lang="sugarss">
  nav
    @apply bg-gray-800
  
  nav > div
    @apply max-w-7xl mx-auto
    @apply px-4 sm:px-6 lg:px-8
  
  .flex-wrapper
    @apply flex items-center justify-between
    @apply h-16

  .show-on-mobile
    @apply flex md:hidden
    @apply -mr-2

</style>