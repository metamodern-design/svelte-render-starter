<script>
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({ top: 0 });
    }
  };

</script>


<template lang="pug">        
  main
    .container
      slot
      
      p.nav
        button(on:click='{scrollToTop}')
          span= '▲ Top'
    
</template>


<style lang="sugarss">
  main
    @apply w-screen min-h-screen
    @apply py-8
  
  p.nav
    @apply w-full
    @apply text-center
  
  button
    @apply font-bold text-yellow-600
      
  @media print
    p.nav
      display: none

</style>
