<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import navaid from 'navaid';
  import { routes } from '_/routes.js';
  import { location } from '_/store.js';

  import Nav from '$/nav/index.svelte';
  import Header from '$/header/index.svelte';
  import Main from '$/main/index.svelte';
  import Footer from '$/footer/index.svelte';
  
  let Content;
  let Props = {};
  const Navaid = navaid('/');
  
  routes.forEach(({
    path,
    redirect,
    component,
    ...routeParams
  }) => {
    Navaid.on(path, (pathParams) => {
      if (redirect) {
        Navaid.route(redirect(pathParams), true);
      } else {
        location.set(path);
        Content = component;
        Props = { path, ...pathParams, ...routeParams };
      }
    });
  });

  onMount(() => {
    Navaid.listen();
  });
  
  afterUpdate(() => {
    window.scrollTo({ top: 0 });
  });

  onDestroy(() => {
    if (Navaid.unlisten) {
      Navaid.unlisten();
    }
  });

</script>

<div id="app">
  <Nav {...Props}></Nav>
  {#if Props.path !== '/'}
    <Header {...Props}></Header>
  {/if}
  <Main {...Props}>
    {#if Content}
      <svelte:component this={Content} {...Props} />
    {/if}
  </Main>
  <Footer {...Props}></Footer>
</div>

<style lang="sugarss" global>
  @import '@fontsource/inter/latin.css'
  @import '@fontsource/inter/variable.css'
  @import '@fontsource/inter/variable-full.css'

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
