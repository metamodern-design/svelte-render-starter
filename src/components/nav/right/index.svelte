<script>
  import Icon from '$/nav/right/icon.svelte';
  import Bell from '$/icons/bell.svelte';
  import Dropdown from '$/nav/dropdown/index.svelte';
  
  import { userProfile, userMenu } from '$/nav/mock.js';

</script>

<template lang="pug">
  .hide-on-mobile
    .right
      Icon(
        svg= '{Bell}'
        alt= "View notifications"
      )

      Dropdown(
        alt= '{userProfile.alt}'
        items= '{userMenu}'
      )
        img(
          slot="trigger"
          src= '{userProfile.src}'
        )

</template>

<style lang="sugarss">
  .hide-on-mobile
    @apply hidden md:block
    
  .right
    @apply flex items-center
    @apply ml-4 md:ml-6
  
</style>
