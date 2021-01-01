<script>
  import Bell from '$/icons/bell.svelte';

  export let user;
  
</script>

<template lang="pug">
  .profile-container
    +if('$$slots.profile')
      .wrapper
        slot(name="profile")
      
    .profile-details
      div= '{user.name}'
      
      div= '{user.email}'
      
    button
      span="View notifications"
      
      Bell

</template>

<style lang="sugarss">
  .profile-container
    @apply flex items-center
    @apply px-5
    
  .wrapper
    @apply flex-shrink-0
    
  .wrapper :global(img)
    @apply h-10 w-10 rounded-full
    
  .profile-details
    @apply ml-3

  .profile-details:nth-child(1)
    @apply text-base font-medium leading-none text-white
  
  .profile-details:nth-child(2)
    @apply text-sm font-medium leading-none text-gray-400
    
  button
    @apply ml-auto flex-shrink-0 
    @apply bg-gray-800 p-1 rounded-full
    @apply text-gray-400
    
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