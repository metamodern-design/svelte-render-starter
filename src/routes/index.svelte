<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import navaid from 'navaid';
  
  import { routes } from '$routes/index.js';
  import Nav from '$components/Nav.svelte';
  import Main from '$components/Main.svelte';
  import Footer from '$components/Footer.svelte';

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


<style lang="sugarss">
  @import '@fontsource/inter/400.css'
  @import '@fontsource/inter/variable.css'
  @tailwind base

  #app
    font-family: Inter
    font-weight: 400

  @supports (font-variation-settings: normal) 
    #app
      font-family: InterVariable
      font-variation-settings: "wght" 400

</style>
