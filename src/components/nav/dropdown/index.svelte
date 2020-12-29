<script>
  export let src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  export let alt = 'Open menu';
  export let items = [{ title: 'No items', url: '#' }];
  
</script>

<template lang="pug">
  .dropdown-item
    .dropdown-trigger
      button(
        id="user-menu"
        aria-haspopup="true"
      )
        span= '{alt}'

        img(
          src='{src}'
          alt=""
        )

    .dropdown-panel(
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    )
      NavDropdownLinks('{items}')

    //
      Profile dropdown panel, show/hide based on dropdown state.
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
  
</template>

<style lang="sugarss">
  .dropdown-item
    @apply relative
    @apply ml-3
    
  button
    @apply flex items-center max-w-xs
    @apply bg-gray-800 rounded-full 
    @apply text-sm 
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
  
  button > span
    @apply sr-only
  
  button > img
    @apply h-8 w-8 rounded-full
    
  .dropdown-panel
    @apply absolute origin-top-right right-0
    @apply w-48 mt-2 py-1 
    @apply bg-white rounded-md shadow-lg 
    @apply ring-1 ring-black ring-opacity-5
  
</style>
