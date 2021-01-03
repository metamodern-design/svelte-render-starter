<script>
  import Bell from '$/icons/bell.svelte';

  export let user;
  
</script>

<template lang="pug">
  .profile
    +if('$$slots.profile')
      .avatar
        slot(name="profile")
      
    .user
      .name= '{user.name}'
      
      .email= '{user.email}'
      
    button
      span="View notifications"
      
      Bell

</template>

<style lang="sugarss">
  .profile
    @apply flex items-center
    @apply px-5
    
  .avatar
    @apply flex-shrink-0
    
  .avatar :global(img)
    @apply h-10 w-10 rounded-full
    
  .user
    @apply ml-3
    @apply font-medium leading-none

  .user .name
    @apply text-base text-white
  
  .user .email
    @apply text-sm text-gray-400
    
  button
    @apply ml-auto flex-shrink-0 
    @apply bg-gray-800 p-1 rounded-full
    @apply text-gray-400 hover:text-white
    
  button:focus
    @apply outline-none
    @apply ring-2 ring-offset-2 ring-offset-gray-800 ring-white
    
  button > span
    @apply sr-only
    
  button :global(svg)
    @apply h-6 w-6
  
</style>