<script>
  import Icon from '$/nav/icon.svelte';
  import Bell from '$/icons/bell.svelte';
  import Dropdown from '$/nav/dropdown/index.svelte';
  
  import { userProfile, userMenu } from '$nav/mock.js';

</script>

<template lang="pug">
  .hide-on-mobile
    .flex-wrapper
      Icon(
        svg= '{Bell}'
        alt= "View notifications"
      )

      Dropdown(
        trigger= '{userProfile}'
        items= '{userMenu}'
      )

</template>

<style lang="sugarss">
  .hide-on-mobile
    @apply hidden md:block
    
  .flex-wrapper
    @apply flex items-center
    @apply ml-4 md:ml-6
  
</style>
