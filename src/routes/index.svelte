<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import navaid from 'navaid';

  import Nav from '$/nav/index.svelte';
  import Main from '$/Main.svelte';
  import Footer from '$/Footer.svelte';
  
  import { routes } from '_/routes.js';

  let Content;
  let Props = {};
  let Navaid = navaid('/');
  
  routes.forEach(({ path, redirect, component, ...routeParams }) => {
    Navaid.on(path, (pathParams) => {
      if (redirect) {
        Navaid.route(redirect(pathParams), true);
      } else {
        Content = component;
        Props = { path, ...pathParams, ...routeParams };
      }
    })
  });

  onMount(() => {
    Navaid.listen();
  });
  
  afterUpdate(() => {
    window.scrollTo({ top: 0 });
  });

  onDestroy(() => {
    if (Navaid.unlisten) { Navaid.unlisten(); }
  });

</script>


<template lang="pug">
  #app
    Nav('{...Props}')
    
    Main
      +if('Content')
        svelte:component(this='{Content}' '{...Props}')
    
    Footer

</template>


<style lang="sugarss" global>
  @import '@fontsource/inter/400.css'
  @import '@fontsource/inter/variable.css'

  @import 'tailwindcss/base'
  
  *
    --tw-shadow: 0 0 #0000
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/)
    --tw-ring-offset-width: 0px
    --tw-ring-offset-color: #fff
    --tw-ring-color: rgba(59, 130, 246, 0.5)
    --tw-ring-offset-shadow: 0 0 #0000
    --tw-ring-shadow: 0 0 #0000

  #app
    font-family: Inter
    font-weight: 400

  @supports (font-variation-settings: normal)
    #app
      font-family: InterVariable
      font-variation-settings: "wght" 400

</style>
